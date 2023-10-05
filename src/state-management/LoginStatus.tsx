import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";

const LoginStatus = () => {
  const { username, dispatch } = useContext(AuthContext);

  if (username)
    return (
      <>
        <div>
          <span className="mx-2">{username}</span>
          <a
            onClick={() => dispatch({ type: "LOGOUT", username: "" })}
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
        onClick={() => dispatch({ type: "LOGIN", username: "meekbronsen" })}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
