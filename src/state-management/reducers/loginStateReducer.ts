
interface Action{
    type: "LOGIN" | "LOGOUT"
    username: string;
}

const loginStateReducer = (user: string, action: Action): string => {
    if (action.type === "LOGOUT") return '';
    if (action.type === "LOGIN") return user = action.username ;
    return user;
}

export default loginStateReducer;