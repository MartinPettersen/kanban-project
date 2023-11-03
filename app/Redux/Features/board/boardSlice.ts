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
        // increment: (state) => { state.value += 1},
        changeBoard: (state, action) => {
            state.selectedBoard = action.payload;
        },
        changeName: (state, action) => {
            state.boards[0].name = action.payload;
        },
        
        changeColumnOrder: (state, action) => {
          state.boards[0].name = action.payload;
        },
        changeTaskOrder: (state, action) => {
          // state.boards[action.payload.selectedBoard].taskStates = action.payload;
          //const tasks = state.boards[action.payload.selectedBoard].taskStates.find((element) => element.id === action.payload.taskStateColumn);
          // tasks?.tasks.splice(action.payload.sourceIndex, 1);
          // tasks?.tasks.splice(action.payload.destinationIndex, 0, action.payload.draggableId)
          //console.log(state);
          
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
          //state.boards[action.payload.selectedBoard].taskStates.find((element) => element.id === action.payload.taskStateColumn)?.tasks.splice(action.payload.sourceIndex, 1);
          //state.boards[action.payload.selectedBoard].taskStates.find((element) => element.id === action.payload.taskStateColumn)?.tasks.splice(action.payload.destinationIndex, 0, action.payload.draggableId);
          //console.log("hi")
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

export const { /*increment,*/ changeName, addTaskState, removeTaskState, changeBoard, changeTaskOrder} = boardSlice.actions;

export default boardSlice.reducer;

/* 
"use client";

import { Board } from '@/types/Board';
import { createSlice } from '@reduxjs/toolkit';



export interface BoardState {
  selectedBoard: number,
  boards: Board[]
}

const initialState: BoardState = {
  selectedBoard: 0,
  boards: [
      {
          name: "default",
          taskStates: [{
            name: "todo",
            tasks: [{
              name: "first step",
              description: "create first board",
              subtask: [{
                name: "Awsome Idea Brainstorming",
                description: "find an awsome idea for your first board",
                subtask: [{
                  name: "Awsome name",
                  description: "All awsome ideas need cool names",
                  subtask: []
                }]
              }]
            },
            {
              name: "delete board",
              description: "delete the default board",
              subtask: []
            }
          ]
          },
          {
            name: "done",
            tasks: [
              {
                name: "be awsome",
                description: "be born awsome",
                subtask: []
              }
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
      // increment: (state) => { state.value += 1},
      changeBoard: (state, action) => {
          state.selectedBoard = action.payload;
      },
      changeName: (state, action) => {
          state.boards[0].name = action.payload;
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

export const {  changeName, addTaskState, removeTaskState, changeBoard} = boardSlice.actions;

export default boardSlice.reducer;


*/