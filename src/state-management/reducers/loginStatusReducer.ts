import { AuthAction } from "../contexts/AuthContext";

const authReducer = (user: string, authAction: AuthAction): string => {
  if (authAction.type === "LOGOUT") return "";
  if (authAction.type === "LOGIN") return (user = authAction.username);
  return user;
};

export default authReducer;
