import Register from '../layout/pages/Signup/Register';
import Login from '../layout/pages/Login/Login';
import UserPage from '../layout/pages/User/UserPage';
import EmployeePage from '../layout/pages/Employee/EmployeePage';
import ParkingOwnerPage from '../layout/pages/ParkingOwner/ParkingOwnerPage';



export const routes = [
    {
        path: "/login",
        exact: true,
        component: () => <Login />,
        isPrivate: false,
        authenticated: ''
    },
    {
        path: '/register',
        exact: true,
        component: () => <Register />,
        isPrivate: false,
        authenticated: ''
    },
    {
        path: '/user',
        exact: true,
        component: () => <UserPage />,
        isPrivate: true,
        authenticated: 'User',
    },
    {
        path: '/employee',
        exact: true,
        component: () => <EmployeePage />,
        isPrivate: true,
        authenticated: 'Employee',
    },
    {
        path: '/parkingowner',
        exact: true,
        component: () => <ParkingOwnerPage />,
        isPrivate: true,
        authenticated: 'ParkingOwner',
    },
]