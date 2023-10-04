
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

// action can now exist as either AddTask or DeleteTask we defined up Here
export type TaskAction = AddTask | DeleteTask;

const tasksReducer = (tasks: Task[], action: TaskAction): Task[] => {
    if (action.type === "ADD") return [action.task, ...tasks]
    if (action.type === "DELETE") return tasks.filter((t) => t.id !== action.taskId)
    return tasks;
}

export default tasksReducer