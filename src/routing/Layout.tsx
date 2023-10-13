import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div id="main">
        {/* An outlet is like a placeholder of child Components */}
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;
