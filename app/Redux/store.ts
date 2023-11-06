"use client";

import { configureStore } from '@reduxjs/toolkit';
import boardReducer from './Features/board/boardSlice';
import taskReducer from './Features/task/taskSlice';
import createReducer from './Features/create/createSlice'; 

export const store = configureStore({
    reducer: {
        board: boardReducer,
        task: taskReducer,
        create: createReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;