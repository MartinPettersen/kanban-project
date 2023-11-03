"use client";

import { Board } from '@/types/Board';
import { Task } from '@/types/Task';
import { createSlice } from '@reduxjs/toolkit';
/*
export type Task = {
    id: string,
    name: string,
    description: string,
    subtask: Task[]
}
*/


export interface TaskState {
    tasks: { [key: string]: {
        id: string,
        name: string,
        description: string,
        subtask: Task[]
      } }
}

const initialState: TaskState = {
    tasks: {
        'task-1': {
                id: "task-1",
                name: "first step",
                description: "create first board",
                subtask: []
              },
        'task-2': {
                id: "task-2",
                name: "Awsome Idea Brainstorming",
                description: "find an awsome idea for your first board",
                subtask: []
              },
        'task-3': { id: "task-3",
                name: "Awsome name",
                description: "All awsome ideas need cool names",
                subtask: []
              },
        'task-4': {
                id: "task-4",
                name: "delete board",
                description: "delete the default board",
                subtask: []
              }
            
            ,
        'task-5': {     id: "task-5",
                  name: "be awsome",
                  description: "be born awsome",
                  subtask: []
                }
           
            }
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        // increment: (state) => { state.value += 1},
        /*
        changeTaskName: (state, action) => {
            state.tasks[0].name = action.payload;
        },
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        removeTask: (state, action) => {
            if (action.payload.taskState > -1){
                state.tasks.splice(action.payload.task, 1)
            }
        }
        */
    }
});

export const { /*increment, changeTaskName, addTask, removeTask */} = taskSlice.actions;

export default taskSlice.reducer;