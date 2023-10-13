import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";

const router = createBrowserRouter([
    // We move all the dynamic routes inside children array
    {
        path: '/',
        element: <Layout/>,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'users', element: <UserListPage/>},
            {path: 'users/:id', element: <UserDetailPage/>},
        ]
    }

])

export default router;