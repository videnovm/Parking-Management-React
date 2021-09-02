import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Form,
  Icon,
  TextArea,
  Message,
  Modal,
} from "semantic-ui-react";
import SessionContext from "../../../utils/SessionContext";
import { createFeedback } from "../../../backend_service/RestApiHandler";
//import { getCurrentDate } from '../../DateFormatter/CurrentDate';

const FeedbackCard = ({ content, updateFeedbacks }) => {
  const { user } = useContext(SessionContext);
  const [reason, setReason] = useState("");
  const [success, setSuccess] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleReasonChange = (event, { value }) => {
    if (
      (/^[a-zA-Z0-9., ]+$/.test(value) || value === "") &&
      value.length < 50
    ) {
      setReason(value);
    }
  };

  const reportCarOnClickHandle = async () => {
    if (
      !/^[.,0123456789 ]+$/.test(reason) &&
      !(reason.trim().replace(/\s\s+/g, " ").length < 5)
    ) {
      setSuccess(true);
      setModalOpen(true);
      setTimeout(() => {
        setModalOpen(false);
        setSuccess(false);
      }, 1000);
      try {
        await createFeedback({
          feedback: reason.trim().replace(/\s\s+/g, " "),
          userId: user.id,
          parkingId: user.parkingId,
        });
        setReason("");
        updateFeedbacks();
      } catch (error) {
        console.log(error.toString());
      }
    }
  };
  return (
    <>
      <Card centered style={{ width: "50rem", marginTop: "2%"}}>
        <Card.Content>
          <Card.Header textAlign="center">Leave feedback</Card.Header>
          <Divider />
          <Form size="big">
            <Form.Field
              control={TextArea}
              value={reason}
              icon="times"
              iconPosition="left"
              label="Comment"
              placeholder="Enter your comment here(min. 5)"
              onChange={handleReasonChange}
            />
          </Form>
        </Card.Content>
        <Card.Content extra textAlign="center">
          <Button
            animated="fade"
            basic
            color="red"
            onClick={reportCarOnClickHandle}
          >
            <Button.Content visible>Leave comment</Button.Content>
            <Button.Content hidden>
              <Icon name="clipboard outline" />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
      <Modal
        dimmer="blurring"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Modal.Header>
          {success ? (
            <Message
              positive
              header="Your comment was submitted successfully."
            />
          ) : null}
        </Modal.Header>
      </Modal>
    </>
  );
};

export default FeedbackCard;
