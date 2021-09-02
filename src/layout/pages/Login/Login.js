import React, { useContext, useEffect, useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './Login.css'
import { Button, Form, Grid, Icon, Message, Modal, Placeholder } from 'semantic-ui-react'
import Logo from '../../../components/CardComponents/Sections/Logo/Logo'
import { getEmployees, getParkingOwners, getUsers } from '../../../backend_service/RestApiHandler'
import { WelcomeContainer, ProfileCard, Title } from './Login.styles'
import SessionContext from '../../../utils/SessionContext'
import { Link, useHistory } from 'react-router-dom'
import { Wrapper } from '../../../components/Container/LoginContainer'

const Login = () => {
    const { setAuthenticated, setUser } = useContext(SessionContext);
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [loginError, setLoginError] = useState(false);
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const [users, setUsers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [parkingOwners, setParkingOwners] = useState([]);
    const [requestWaiting, setRequestWaiting] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const init = async () => {
            setLoading(true);

            try {
                const { data } = await getUsers();
                setUsers(data);
            } catch (err) {
                setServerError(err);
            }

            try {
                const { data } = await getEmployees();
                setEmployees(data);
            } catch (err) {
                setServerError(err);
            }

            try {
                const { data } = await getParkingOwners();
                setParkingOwners(data);
            } catch (err) {
                setServerError(err);
            }
            setLoading(false);
        }
        init();

    }, [])

    const handleUsernameChange = (event, { value }) => {
        if ((/^[a-zA-Z0-9]+$/.test(value) || value === '') && value.length < 25) {
            setUsername(value);
            if (requestWaiting)
                setRequestWaiting(false);
            if (loginError)
                setLoginError(false);
        }
    }

    const handlePasswordChange = (event, { value }) => {
        if ((/^[a-zA-Z0-9]+$/.test(value) || value === '') && value.length < 25) {
            setPassword(value);
            if (loginError)
                setLoginError(false);
            if (requestWaiting)
                setRequestWaiting(false);
        }
    }

    const handleSigninOnClick = (event) => {
        event.preventDefault();
        if (users.some((user) => user.userName === username && user.password === window.btoa(password))) {
            setUser(users.find((user) => user.userName === username && user.password === window.btoa(password)))
            setAuthenticated('User');
            history.push("/user");
        } else if (employees.some((employee) => employee.userName === username && employee.password === window.btoa(password) && employee.accepted)) {
            setUser(employees.find((employee) => employee.userName === username && employee.password === window.btoa(password) && employee.accepted))
            setAuthenticated('Employee');
            history.push("/employee");
        } else if (parkingOwners.some((parkingOwner) => parkingOwner.userName === username && parkingOwner.password === window.btoa(password))) {
            setUser(parkingOwners.find((parkingOwner) => parkingOwner.userName === username && parkingOwner.password === window.btoa(password)))
            setAuthenticated('ParkingOwner');
            history.push("/parkingowner");
        } else if (employees.some((employee) => employee.userName === username && employee.password === window.btoa(password) && !employee.accepted)) {
            setRequestWaiting(true);
            setModalOpen(true);
        } else {
            setLoginError(true);
            setModalOpen(true);
        }
    }

    return (
        <>
        <Wrapper>
            <Logo />
            <Grid stackable>
                <Grid.Column width="16">
                    <Title>Паркинг система</Title>
                </Grid.Column>
            </Grid>
            <WelcomeContainer>
                <div class="box-1">
                    <div class="content-holder">
                        <h2>Добре дошли на нашия уеб сайт!</h2>
                        <img src="https://www.pngarts.com/files/6/Parking-Logo-PNG-Image.png" alt="Girl in a jacket" width="150" height="150"></img>
                    </div>
                </div>
                <div class="box-2">
                    <div class="login-form-container">
                        <ProfileCard
                            img src="https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png"
                            alt="profile-img"
                        />
                        {!loading && !serverError ?
                            <Form size="big" >
                                <Form.Input className="input-field"
                                    value={username}
                                    icon='user'
                                    iconPosition='left'
                                    label='Username'
                                    placeholder="Username (max 24)"
                                    onChange={handleUsernameChange}
                                /> 
                                <Form.Input className="input-field"
                                    value={password}
                                    icon='lock'
                                    iconPosition='left'
                                    label='Password'
                                    type='password'
                                    placeholder="Password (max 24)"
                                    onChange={handlePasswordChange}
                                />
                                <Button
                                    primary
                                    animated
                                    size='big'
                                    onClick={handleSigninOnClick}
                                >
                                    <Button.Content visible>Вход</Button.Content>
                                    <Button.Content hidden><Icon name="sign-in" /></Button.Content>
                                </Button>
                            </Form>
                            : !serverError ?
                                <Placeholder>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder>
                                :
                                <Message negative>{serverError.toString()}</Message>
                        }
                    <Grid.Column verticalAlign='middle'>
                        <br />
                    <h3>Несте регистриран потребител?</h3>
                    <Button content='Регистрация' icon='signup' size='big' as={Link} to="/register" />
                    </Grid.Column>
                </div>
            </div>

            <Modal
                dimmer="blurring"
                open={modalOpen}
                onClose={() => setModalOpen(false)}
            >
                <Modal.Header>
                    {loginError ?
                        <Message
                            negative
                            header='Wrong username or password'
                        />
                        : requestWaiting ?
                            <Message
                                negative
                                header='Your job request is waiting to accept by parking owner. '
                            />
                            : null
                    }</Modal.Header>
                <Modal.Actions>
                    <Button negative onClick={() => setModalOpen(false)}>
                        OK!
                    </Button>
                </Modal.Actions>
            </Modal>
            </WelcomeContainer>
            </Wrapper>
        </>
        
    )
}

export default Login