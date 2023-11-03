import { TaskState } from "./TaskState";

export type Board = {
    name: string,
    id: string,
    taskStates: TaskState[],
}