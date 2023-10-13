import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
    // We move all the dynamic routes inside children array
    {
        path: '/',
        element: <Layout/>,
        errorElement: <ErrorPage/>, // the error element will be displayed in Layout element
        children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UserListPage/>},
            {path: 'users/:id', element: <UserDetailPage/>},
        ]
    }

])

export default router;