import React, { Dispatch } from "react";

export interface AuthAction{
    type: "LOGIN" | "LOGOUT"
    username: string;
}

interface authContextType{
    username: string;
    authDispatch: Dispatch<AuthAction>;
}

const authContext = React.createContext<authContextType>({} as authContextType );

export default authContext;