"use client";

import { Task } from '@/types/Task';
import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
    taskTracker: number,
    tasks: { [key: string]: {
        id: string,
        name: string,
        description: string,
        subtask: Task[]
      } }
}

const initialState: TaskState = {
    taskTracker: 5,
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
        'task-5': {
                  id: "task-5",
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
        incrementTaskTracker: (state) => { state.taskTracker += 1},
        addTask: (state, action) => {
            state.taskTracker += 1;
            const taskId = 'task-' + state.taskTracker;
            state.tasks = Object.assign({ [`${taskId}`]: { id: `task-${state.taskTracker}`, name: (action.payload.name), description: (action.payload.description), subtask: []}}, state.tasks);
        },
        removeTask: (state, action) => {
            delete state.tasks[action.payload.task]
        }
    }
});

export const { removeTask, addTask, incrementTaskTracker} = taskSlice.actions;

export default taskSlice.reducer;