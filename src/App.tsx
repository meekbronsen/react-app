import LoginStatus from "./state-management/auth/LoginStatus";
import { TaskList } from "./state-management/tasks";
import AuthProvider from "./state-management/auth/AuthProvider";
import {TasksProvider} from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <Counter/>
          <LoginStatus/>
          <TaskList/>
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
