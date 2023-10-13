import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";

// create a router using function router
const router = createBrowserRouter([

    //Each route object should have two properties
    {path: '/', element: <HomePage/>},
    {path: '/users', element: <UserListPage/>},
])

export default router;