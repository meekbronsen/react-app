import { ReactNode, useReducer } from "react";
import AuthContext from "./contexts/AuthContext";
import loginStateReducer from "./reducers/loginStatusReducer";

interface Props{
    children: ReactNode;
}

const AuthProvider = ({children}: Props) => {
    const [username, dispatch] = useReducer(loginStateReducer,'')

    return (
        <AuthContext.Provider value={{username, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider