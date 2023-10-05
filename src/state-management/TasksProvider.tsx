import { ReactNode, useReducer } from "react"
import TasksContext from "./contexts/TasksContext"
import tasksReducer from "./reducers/taskReducer";

interface Props{
    children: ReactNode
}

const TaskProvider = ({children}: Props) => {
    const [tasks, dispatch] = useReducer(tasksReducer, []);

    return (
        <TasksContext.Provider value={{tasks, dispatch}}>
            {children}
        </TasksContext.Provider>
    )
}

export default TaskProvider;