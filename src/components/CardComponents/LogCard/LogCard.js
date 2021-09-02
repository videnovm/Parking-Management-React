import React from 'react'
import { Card, Divider } from 'semantic-ui-react'
import DateFormatter from '../../../utils/DateFormatter';
import { WordBreaker } from '../ProfileCard/ProfileCard.styles'
import { Log } from './LogCard.styles';

const LogCard = ({ content, vehicles, parkings }) => {
    return (
        <Card>
            <div style={{ border: "5px solid", borderColor: !content.exitTime ? "greenyellow" : "red" }} >
                <Card.Content >
                    <Card.Header textAlign="center"><strong>
                        {vehicles.find((vehicle) => Number(vehicle.id) === Number(content.vehicleId)).licensePlate}
                    </strong>
                    </Card.Header>
                    <Divider />
                    <Card.Description>
                        <WordBreaker>Vehicle type <Log><strong>
                        {vehicles.find((vehicle) => Number(vehicle.id) === Number(content.vehicleId)).vehicleType}
                    </strong></Log></WordBreaker>
                        <WordBreaker>Parking name  <Log>{parkings.find((parking) => Number(parking.id) === Number(content.parkingId)).name.toUpperCase()}</Log></WordBreaker>
                        <WordBreaker>Entrance Time
                            <Log>
                                <DateFormatter date={new Date(content.entranceTime)}></DateFormatter>
                            </Log>
                        </WordBreaker>
                        <WordBreaker>Exit time
                            <Log>
                                {content.exitTime ?
                                    <>
                                        <DateFormatter date={new Date(content.exitTime)} />
                                    </>
                                    : "Still inside"
                                }
                            </Log>
                        </WordBreaker>
                        <WordBreaker>Parking Spot Number  <Log>{content.parkAreaNumber}</Log></WordBreaker>
                    </Card.Description>
                </Card.Content>
            </div>
        </Card>
    )
}

export default LogCard