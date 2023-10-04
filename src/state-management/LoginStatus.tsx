import { useReducer } from "react";
import loginStateReducer from "./reducers/loginStateReducer";

const LoginStatus = () => {
  const [user, dispatch] = useReducer(loginStateReducer,'');

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={ () => dispatch({type: "LOGOUT", username:''})} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={() => dispatch({type:"LOGIN", username: "meekbronsen"})} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
