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
import TaskProvider from "./state-management/TasksProvider";

function App() {

  return (
    <>
      <AuthProvider>
        <TaskProvider>
          <LoginStatus />
          <TaskList/>
        </TaskProvider>
      </AuthProvider>
    </>
  );
}

export default App;
