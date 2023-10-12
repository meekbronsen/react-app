import LoginStatus from "./state-management/auth/LoginStatus";
import { TaskList } from "./state-management/tasks";
import {TasksProvider} from "./state-management/tasks";
import Counter from "./state-management/counter/Counter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
        <TasksProvider>
          <Counter/>
          <LoginStatus/>
          <NavBar/>
          <TaskList/>
        </TasksProvider>
    </>
  );
}

export default App;
