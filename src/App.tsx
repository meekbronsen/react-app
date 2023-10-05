import LoginStatus from "./state-management/auth/LoginStatus";
import { TaskList } from "./state-management/tasks";
import AuthProvider from "./state-management/auth/AuthProvider";
import {TasksProvider} from "./state-management/tasks";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <LoginStatus />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
