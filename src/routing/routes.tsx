import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserDetailPage from "./UserDetailPage";
import Users from "./Users"
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";
import LoginPage from "./LoginPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>, // the error element will be displayed in Layout element
        children: [
            // Note that login has a forward slash while users doesn't, because login is an absolute path while users is relative path
            {path: '', element: <HomePage/>},
            {path: '/login', element: <LoginPage/>},
            {path: 'users', element: <Users/> , children: [ {path: ':id', element: <UserDetailPage/>} ] },
        ]
    }

])

export default router;