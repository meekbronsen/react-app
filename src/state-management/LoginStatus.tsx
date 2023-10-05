import { useContext } from "react";
import loginStatusContext from "./contexts/authContext";

const LoginStatus = () => {
  const { username, authDispatch } = useContext(loginStatusContext);

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a
            onClick={() => authDispatch({ type: "LOGOUT", username: "" })}
            href="#"
          >
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => authDispatch({ type: "LOGIN", username: "meekbronsen" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
