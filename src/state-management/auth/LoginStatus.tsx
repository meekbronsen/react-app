import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuth = () => useContext(AuthContext);

const LoginStatus = () => {
  const { username, dispatch } = useAuth();

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
