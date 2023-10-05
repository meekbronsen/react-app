// React context is like a truck transffering boxes. Inside the boxes is state being transferred.

import { Task, TaskAction } from "./TasksProvider";
import { Dispatch } from "react";
import React from "react";

// Defining the shape of the box
interface TaskContextType {
  // Inside the the box
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TasksContext = React.createContext<TaskContextType>(
  {} as TaskContextType
); // the argument given narrates to an empty object that acts as an instance of TaskContextType

export default TasksContext;
