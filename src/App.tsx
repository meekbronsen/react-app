import { useReducer } from "react";
import tasksReducer from "./state-management/reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import LoginStatus from "./state-management/LoginStatus";
import authContext from "./state-management/contexts/authContext";
import loginStateReducer from "./state-management/reducers/loginStatusReducer";
import TaskList from "./state-management/TaskList";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);
  const [username, authDispatch] = useReducer(loginStateReducer, "");

  return (
    <>
      <authContext.Provider value={{ username, authDispatch }}>
        <TasksContext.Provider value={{ tasks, taskDispatch }}>
          <LoginStatus />
          <TaskList/>
        </TasksContext.Provider>
      </authContext.Provider>
    </>
  );
}

export default App;
