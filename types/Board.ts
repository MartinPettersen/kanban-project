import { TaskState } from "./TaskState";

export type Board = {
    name: string,
    id: string,
    colorPalette: string[],
    taskStates: TaskState[],
}