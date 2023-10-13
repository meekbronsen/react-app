import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import ContactPage from "./ContactPage";

// create a router using router function
const router = createBrowserRouter([

    //Each route object should have two properties
    {path: '/', element: <HomePage/>},
    {path: '/users', element: <UserListPage/>},
    {path: '/contact', element: <ContactPage/>},
])

export default router;