"use client";
import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
    createTask: boolean,
    createColumn: boolean,
    createBoard: boolean,

}

const initialState: TaskState = {
    createBoard: false,
    createColumn: false,
    createTask: false,

}

export const taskSlice = createSlice({
    name: 'create',
    initialState,
    reducers: {
        createTask: (state) => { state.createTask = !state.createTask},
        createBoard: (state) => { state.createBoard = !state.createBoard},
        createColumn: (state) => { state.createColumn = !state.createColumn},
    }
});

export const { createTask, createBoard, createColumn } = taskSlice.actions;

export default taskSlice.reducer;