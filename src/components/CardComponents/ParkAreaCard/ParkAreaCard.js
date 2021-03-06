import React, { useContext, useState } from "react";
import { Button, Card, Divider, Icon, Modal } from "semantic-ui-react";
import SessionContext from "../../../utils/SessionContext";
import {
  createEntranceExitLog,
  updateEntranceExitLog,
  updateParkArea,
} from "../../../backend_service/RestApiHandler";
import { WordBreaker } from "../ProfileCard/ProfileCard.styles";

const ParkAreaCard = ({
  content,
  vehicles,
  index,
  updateVehicles,
  setCarError,
  selectedCar,
  allLogs,
}) => {
  const { user, authenticated } = useContext(SessionContext);
  const [entranceExitLoading, setEntranceExit] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const onClickHandler = () => {
    setModalOpen(true);
  };
  const handleParkHereOnClick = async () => {
    if (selectedCar !== "") {
      const id = vehicles.find(
        (vehicle) => selectedCar === vehicle.licensePlate
      ).id;
      try {
        setEntranceExit(true);
        await updateParkArea(content.id, { vehicleId: id, full: true });
        await createEntranceExitLog({
          vehicleId: id,
          parkingId: content.parkingId,
          parkAreaNumber: Number(index) + 1,
        });
      } catch (error) {}
      updateVehicles();
      setEntranceExit(true);
    } else {
      setCarError(true);
    }
  };

  const handleExitOnClick = async () => {
    try {
      setEntranceExit(true);
      const logId = allLogs.find(
        (log) =>
          Number(log.vehicleId) === Number(content.vehicleId) && !log.exitTime
      ).id;
      await updateParkArea(content.id, { vehicleId: 0, full: false });
      await updateEntranceExitLog(logId, { exitTime: new Date() });
    } catch (error) {
      console.log(error);
    }
    updateVehicles();
    setEntranceExit(false);
  };

  return (
    <>
      <Card>
        <div
          style={{
            border: "5px solid",
            borderColor: !content.full ? "green" : "red",
          }}
        >
          <Card.Content>
            <Card.Header textAlign="center">
              Parking Spot <strong>{index + 1}</strong>
            </Card.Header>
            <Divider />
            <Card.Description textAlign="center">
              <WordBreaker>
                License Plate <br />
                <h2>
                  {content.full &&
                  vehicles.some(
                    (vehicle) =>
                      Number(vehicle.id) === Number(content.vehicleId)
                  ) ? (
                    <>
                      <div style={{ border: "1px solid red" }}>
                        {
                          vehicles.find(
                            (vehicle) =>
                              Number(vehicle.id) === Number(content.vehicleId)
                          ).licensePlate
                        }
                        {(() => {
                          if (
                            vehicles.find(
                              (vehicle) =>
                                Number(vehicle.id) === Number(content.vehicleId)
                            ).vehicleType === "MOTORCYCLE"
                          ) {
                            return <Icon name="motorcycle" />;
                          } else if (
                            vehicles.find(
                              (vehicle) =>
                                Number(vehicle.id) === Number(content.vehicleId)
                            ).vehicleType === "PICKUPTRUCK"
                          ) {
                            return <Icon name="truck" />;
                          } else {
                            return <Icon name="car" />;
                          }
                        })()}
                      </div>
                      <Divider />
                      <div>
                        {" "}
                        <h4>
                          Vehicle Type:{" "}
                          {
                            vehicles.find(
                              (vehicle) =>
                                Number(vehicle.id) === Number(content.vehicleId)
                            ).vehicleType
                          }
                        </h4>
                      </div>
                    </>
                  ) : (
                    "None"
                  )}
                </h2>
              </WordBreaker>
            </Card.Description>
            {authenticated === "User" ? (
              <Card.Content extra textAlign="center">
                {!content.full ? (
                  <Button
                    fluid
                    animated="fade"
                    positive
                    onClick={onClickHandler}
                    loading={entranceExitLoading}
                  >
                    <Button.Content visible>Park here</Button.Content>
                    <Button.Content hidden>
                      <Icon name="add" />
                    </Button.Content>
                  </Button>
                ) : vehicles.some(
                    (vehicle) =>
                      Number(vehicle.id) === Number(content.vehicleId) &&
                      Number(vehicle.userId) === Number(user.id)
                  ) ? (
                  <Button
                    fluid
                    animated="fade"
                    primary
                    onClick={handleExitOnClick}
                    loading={entranceExitLoading}
                  >
                    <Button.Content visible>Exit</Button.Content>
                    <Button.Content hidden>
                      <Icon name="sign-out" />
                    </Button.Content>
                  </Button>
                ) : (
                  <Button fluid disabled negative>
                    Full
                  </Button>
                )}
              </Card.Content>
            ) : null}
          </Card.Content>
        </div>
      </Card>
      <Modal
        dimmer="blurring"
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <Modal.Header>{"Are you sure?"}</Modal.Header>
        <Modal.Content>
          {<h3>Do you want to book this parking spot?</h3>}
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setModalOpen(false)}>
            {"No, take me back"}
          </Button>

          {
            <Button
              positive
              onClick={handleParkHereOnClick}
            >
              Park here
            </Button>
          }
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ParkAreaCard;
