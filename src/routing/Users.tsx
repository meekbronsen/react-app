import UserListPage from "./UserListPage"
import { Navigate, Outlet } from 'react-router-dom';
import useAuth from "./hooks/useAuth";

const Users = () => {
    const {user} = useAuth();

    if (!user)  return <Navigate to="/login" />
    
  return (
    <div className="col">
        <div className="row"> <UserListPage/> </div>
        <div className="row"> <Outlet/> </div>
    </div>
  )
}

export default Users;