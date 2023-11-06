"use client";

import { Board } from '@/types/Board';
import { createSlice } from '@reduxjs/toolkit';
/*
opprette board:
        board name:
          velg hva slags states man vil ha for tasks
            ha et checkbox system for hvilke states man velger
              todo
              URGENT
              plan
              in progress
              peer review
              test
              deploy 
              done
            alle skal ha egen farge
            ha et felt som lar deg lage en egen state
              "did we miss something then create your own"
                navne felt
                velge av et par forutbestemte farger
            valgte states blir lagt i en array av states
            skal kunne flytte states rundt i riktig rekkefølge

            skal hver state ha en liste med tasks eller skal hver task ha en state?

*/


export interface BoardState {
    selectedBoard: number,
    boards: Board[]
}

const initialState: BoardState = {
    selectedBoard: 0,
    boards: [
        {
            name: "default",
            id: "board-1",
            taskStates: [{
              name: "todo",
              id: "taskState-1",
              tasks: [ "task-1", "task-2", "task-3", "task-4"
            ]
            },
            {
              name: "in progress",
              id: "taskState-2",
              tasks: [
              ]
            },
            
            {
              name: "test",
              id: "taskState-3",
              tasks: [
              ]
            },
            {
              name: "done",
              id: "taskState-4",
              tasks: [
                "task-5"
              ]
            }
          ] 
          }
    ]
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        changeBoard: (state, action) => {
            state.selectedBoard = action.payload;
        },
        changeName: (state, action) => {
            state.boards[0].name = action.payload;
        },
        
        changeColumnOrder: (state, action) => {
          const {sourceIndex, draggableId, selectedBoard, destinationIndex} = action.payload;
          const tempState = state.boards[selectedBoard].taskStates[sourceIndex];
          state.boards[selectedBoard].taskStates.splice(sourceIndex, 1);
          state.boards[selectedBoard].taskStates.splice(destinationIndex, 0, tempState);

        },
        changeTaskOrder: (state, action) => {
          
          const {selectedBoard, sourceIndex, startTaskStateColumn, finishTaskStateColumn, destinationIndex, draggableId} = action.payload;

          if (typeof state.boards[selectedBoard].taskStates.find((element) => element.id === startTaskStateColumn) != "undefined"){

            if (startTaskStateColumn === finishTaskStateColumn){

              state.boards[selectedBoard].taskStates.find((element) => element.id === startTaskStateColumn)!.tasks.splice(sourceIndex, 1);
              state.boards[selectedBoard].taskStates.find((element) => element.id === startTaskStateColumn)!.tasks.splice(destinationIndex, 0, draggableId);
            } else {
              state.boards[selectedBoard].taskStates.find((element) => element.id === startTaskStateColumn)!.tasks.splice(sourceIndex, 1);
              state.boards[selectedBoard].taskStates.find((element) => element.id === finishTaskStateColumn)!.tasks.splice(destinationIndex, 0, draggableId);
              // sjekke om denna kan klare begge
            }
          }
          console.log(draggableId)
        },
        addTaskState: (state, action) => {
            state.boards[0].taskStates.push(action.payload);
        },
        removeTaskState: (state, action) => {
            if (action.payload.taskState > -1){
                state.boards[0].taskStates.splice(action.payload.taskState, 1)
            }
        }
    }
});

export const { changeName, addTaskState, removeTaskState, changeBoard, changeTaskOrder, changeColumnOrder} = boardSlice.actions;

export default boardSlice.reducer;
