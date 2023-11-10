"use client";
import { createSlice } from '@reduxjs/toolkit';

export interface TaskState {
    removeInformation: { objectType: string, name: string, index: number, column?: number},
    deletePopup: boolean,

}

const initialState: TaskState = {
    removeInformation: { objectType: "", name: "", index: -1},
    deletePopup: false

}

export const taskSlice = createSlice({
    name: 'remove',
    initialState,
    reducers: {
        removeInformation: (state, action) => { state.removeInformation = action.payload},
        deletePopup: (state) => { state.deletePopup = !state.deletePopup},
    }
});

export const { removeInformation, deletePopup } = taskSlice.actions;

export default taskSlice.reducer;