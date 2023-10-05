import { ReactNode, useReducer } from "react";
import AuthContext from "./AuthContext";

import { AuthAction } from "./AuthContext";

const authReducer = (user: string, authAction: AuthAction): string => {
  if (authAction.type === "LOGOUT") return "";
  if (authAction.type === "LOGIN") return (user = authAction.username);
  return user;
};

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [username, dispatch] = useReducer(authReducer, "");

  return (
    <AuthContext.Provider value={{ username, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
