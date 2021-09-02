import React from 'react'
import { Card, Divider } from 'semantic-ui-react'
import { WordBreaker } from '../ProfileCard/ProfileCard.styles'
import DateFormatter from '../../../utils/DateFormatter';

const ParkingOwnerFeedbackCard = ({ content, users, parkings, feedbacks }) => {
    return (
        <Card>
            <Card.Content >
                <Card.Header textAlign="center">Feedback from user with ID : <strong>{content.userId}</strong></Card.Header>
                <Divider />
                <Card.Description textAlign="center">
                    
                    <WordBreaker>Feedback ID : <strong>{content.id}</strong></WordBreaker>
                    <WordBreaker>Feedback Date: <>
                    <DateFormatter date={new Date(content.feedbackLeft)}></DateFormatter>
                                    </></WordBreaker>
                    <WordBreaker>Feedback: <strong>{content.feedback}</strong></WordBreaker>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}

export default ParkingOwnerFeedbackCard
