import { useReducer } from "react";
import tasksReducer from "./state-management/reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import TasksContext from "./state-management/contexts/TasksContext";
import LoginStatus from "./state-management/LoginStatus";
import AuthContext from "./state-management/contexts/AuthContext";
import loginStateReducer from "./state-management/reducers/loginStatusReducer";
import TaskList from "./state-management/TaskList";
import AuthProvider from "./state-management/AuthProvider";

function App() {
  const [tasks, taskDispatch] = useReducer(tasksReducer, []);
  const [username, authDispatch] = useReducer(loginStateReducer, "");

  return (
    <>
      <AuthProvider>
        <TasksContext.Provider value={{ tasks, taskDispatch }}>
          <LoginStatus />
          <TaskList />
        </TasksContext.Provider>
      </AuthProvider>
    </>
  );
}

export default App;
