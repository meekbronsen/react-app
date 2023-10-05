import { ReactNode, useReducer } from "react";
import TasksContext from "./TasksContext";

// We Imported the  taskReducer logic into provider since that is where it is needed and 
// lessen the number of files in the task package

export interface Task {
  id: number;
  title: string;
}

interface AddTask{
  type: "ADD";
  task: Task;
}

interface DeleteTask{
  type: "DELETE";
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type === "ADD") return [action.task, ...tasks]
  if (action.type === "DELETE") return tasks.filter((t) => t.id !== action.taskId)
  return tasks;
}

// TasksProvider logic below
interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
