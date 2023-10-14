import UserListPage from "./UserListPage"
import { Outlet } from 'react-router-dom';

const Users = () => {
    
  return (
    <div className="col">
        <div className="row"> <UserListPage/> </div>
        <div className="row"> <Outlet/> </div>
    </div>
  )
}

export default Users;