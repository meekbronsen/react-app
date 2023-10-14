// Making the 'find if user exists' logic scalable

import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  return(
      // At runtime child components will be rendered inside this component PrivateRoutes.tsx
    <Outlet/>
  )
};

export default PrivateRoutes;
