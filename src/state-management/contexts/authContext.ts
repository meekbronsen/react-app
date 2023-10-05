import React, { Dispatch } from "react";

export interface AuthAction{
    type: "LOGIN" | "LOGOUT"
    username: string;
}

interface authContextType{
    username: string;
    dispatch: Dispatch<AuthAction>;
}

const AuthContext = React.createContext<authContextType>({} as authContextType );

export default AuthContext;