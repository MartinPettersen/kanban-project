export type Task = {
    id: string,
    name: string,
    description: string,
    subtask: Task[]
}