import { AuthAction } from "../contexts/authContext";

const loginStateReducer = (user: string, authAction: AuthAction): string => {
  if (authAction.type === "LOGOUT") return "";
  if (authAction.type === "LOGIN") return (user = authAction.username);
  return user;
};

export default loginStateReducer;
