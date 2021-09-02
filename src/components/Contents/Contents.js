import React from 'react'
import { Grid } from 'semantic-ui-react'
import AddingVehicleCard from '../CardComponents/AddingVehicleCard/AddingVehicleCard'
import BlacklistCard from '../CardComponents/BlacklistCard/BlacklistCard'
import EmployeeReportCard from '../CardComponents/EmployeeReportCard/EmployeeReportCard'
import EmployeeRequestCard from '../CardComponents/EmployeeRequestCard/EmployeeRequestCard'
import LogCard from '../CardComponents/LogCard/LogCard'
import ParkAreaCard from '../CardComponents/ParkAreaCard/ParkAreaCard'
import ParkingOwnerReportCard from '../CardComponents/ParkingOwnerReportCard/ParkingOwnerReportCard'
import ParkingOwnerFeedbackCard from '../CardComponents/FeedbackCard/ParkingOwnerFeedbackCard'
import ParkingOwnerVehicleCard from '../CardComponents/ParkingOwnerVehicleCard/ParkingOwnerVehicleCard'
import UserVehicleCard from '../CardComponents/UserVehicleCard/UserVehicleCard'
import UserVehicleReportCard from '../CardComponents/UserVehicleReportCard/UserVehicleReportCard.js'

const Contents = ({
    vehicles,
    contents,
    getContent,
    parkings,
    parkAreas,
    updateVehicles,
    setListedVehicleId,
    setListLogs,
    setListReports,
    employees,
    setCarError,
    selectedCar,
    allLogs,
    reports,
    updateReports,
    deleteFeedback,
    blacklist,
    updateEmployees,
    users,
    updateBlacklist
}) => {
    contents.sort((content1, content2) => { return Number(content1.id) - Number(content2.id) })
    return (
        <Grid stackable>
            {
                getContent === 'UserVehicleCard' ?
                    <Grid.Column width="4">
                        <AddingVehicleCard
                            vehicles={contents}
                            parkings={parkings}
                            updateVehicles={updateVehicles}
                            blacklist={blacklist}
                        />
                    </Grid.Column> : null
            }
            {
                contents.map((content, index) =>
                    <Grid.Column width="4" key={index}>
                        {getContent === 'BlacklistCard' ?
                            <BlacklistCard
                                content={content}
                                vehicles={vehicles}
                                updateBlacklist={updateBlacklist}
                            />
                            : getContent === 'EmployeeReportCard' ?
                                <EmployeeReportCard
                                    content={content}
                                    vehicles={vehicles}
                                    parkings={parkings}
                                    reports={reports}
                                    updateReports={updateReports}
                                />
                                : getContent === 'EmployeeRequestCard' ?
                                    <EmployeeRequestCard
                                        content={content}
                                        updateEmployees={updateEmployees}
                                    />
                                    : getContent === 'LogCard' ?
                                        <LogCard
                                            content={content}
                                            vehicles={vehicles}
                                            parkings={parkings}
                                        />
                                        : getContent === 'ParkAreaCard' ?
                                            <ParkAreaCard
                                                content={content}
                                                allLogs={allLogs}
                                                selectedCar={selectedCar}
                                                vehicles={vehicles}
                                                updateVehicles={updateVehicles}
                                                index={index}
                                                setCarError={setCarError}
                                            />
                                            : getContent === 'ParkingOwnerReportCard' ?
                                                <ParkingOwnerReportCard
                                                    content={content}
                                                    vehicles={vehicles}
                                                    parkings={parkings}
                                                    employees={employees}
                                                    updateReports={updateReports}
                                                    parkAreas={parkAreas}
                                                />
                                                : getContent === 'ParkingOwnerFeedbackCard' ?
                                                <ParkingOwnerFeedbackCard
                                                    content={content}
                                                    users={users}
                                                    deleteFeedback={deleteFeedback}
                                                />
                                                : getContent === 'ParkingOwnerVehicleCard' ?
                                                    <ParkingOwnerVehicleCard
                                                        content={content}
                                                        parkings={parkings}
                                                        users={users}
                                                    />
                                                    : getContent === 'UserVehicleCard' ?
                                                        <UserVehicleCard
                                                            content={content}
                                                            parkAreas={parkAreas}
                                                            parkings={parkings}
                                                            updateVehicles={updateVehicles}
                                                            setListedVehicleId={setListedVehicleId}
                                                            setListLogs={setListLogs}
                                                            setListReports={setListReports}
                                                        />
                                                        : getContent === 'UserVehicleReportCard' ?
                                                            <UserVehicleReportCard
                                                                content={content}
                                                                vehicles={vehicles}
                                                                parkings={parkings}
                                                                employees={employees}
                                                            />
                                                            : null
                        }
                    </Grid.Column>
                )
            }
        </Grid >
    )
}

export default Contents
