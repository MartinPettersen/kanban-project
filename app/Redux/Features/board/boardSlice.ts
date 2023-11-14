"use client";

import { Board } from '@/types/Board';
import { createSlice } from '@reduxjs/toolkit';

export interface BoardState {
    selectedBoard: number,
    boards: Board[]
}

const defaultColumns =[{
  name: "todo",
  id: "taskState-1",
  color: 'bg-red-400',
  tasks: [ 
]
},
{
  name: "in progress",
  id: "taskState-2",
  color: 'bg-teal-400',
  tasks: [
  ]
},

{
  name: "test",
  id: "taskState-3",
  color: 'bg-sky-400',
  tasks: [
  ]
},
{
  name: "done",
  id: "taskState-4",
  color: 'bg-slate-600',
  tasks: [
  ]
}];

const initialState: BoardState = {
    selectedBoard: 0,
    boards: [
      {
        name: "default",
        id: "board-1",
        colorPalette: ['red', 'teal','sky'],
            taskStates: [{
              name: "todo",
              id: "taskState-1",
              color: 'bg-red-400',
              tasks: [ "task-1", "task-2", "task-3", "task-4"
            ]
            },
            {
              name: "in progress",
              id: "taskState-2",
              color: 'bg-teal-400',
              tasks: [
              ]
            },
            
            {
              name: "test",
              id: "taskState-3",
              color: 'bg-sky-400',
              tasks: [
              ]
            },
            {
              name: "done",
              id: "taskState-4",
              color: 'bg-slate-600',
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
            state.selectedBoard = action.payload.newBoard;
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

            state.boards[selectedBoard].taskStates.find((element) => element.id === startTaskStateColumn)!.tasks.splice(sourceIndex, 1);
            state.boards[selectedBoard].taskStates.find((element) => element.id === finishTaskStateColumn)!.tasks.splice(destinationIndex, 0, draggableId);
          }
        },
        addTaskToBoard: (state, action) => {
            const {selectedBoard, taskId, column} = action.payload;
            state.boards[selectedBoard].taskStates[column].tasks.push(taskId);
        },
        removeTaskState: (state, action) => {
            if (action.payload.taskState > -1){
                state.boards[0].taskStates.splice(action.payload.taskState, 1)
            }
        },
        addColumn: (state, action) => {

          const {selectedBoard, columnName, color, colorPalette } = action.payload;
          const taskStateId = 'taskState-' + (state.boards[selectedBoard].taskStates.length + 1);
          state.boards[selectedBoard].taskStates.push({ id: taskStateId, name: columnName, color: `bg-${colorPalette[color]}-400`, tasks: []});
          
      },
      addBoard: (state, action) => {

        const {boardName,  } = action.payload;
        const boardId = 'board-' + (state.boards.length + 1);
        state.boards.push({ id: boardId, name: boardName, colorPalette: ['red', 'sky','teal', ], taskStates: defaultColumns});
        
    },
    removeBoard: (state, action) => {
      const {boardIndex,  } = action.payload;
      state.boards.splice(boardIndex, 1);
      
  },
  removeColumn: (state, action) => {
    const {columnIndex, selectedBoard } = action.payload;
    state.boards[selectedBoard].taskStates.splice(columnIndex, 1);
    
  },
  removeTaskFromBoard: (state, action) => {
    const {selectedBoard, taskIndex, column} = action.payload;
    state.boards[selectedBoard].taskStates[column].tasks.splice(taskIndex, 1);
  }
    }
});

export const { changeName, addTaskToBoard, removeTaskState, changeBoard, changeTaskOrder, changeColumnOrder, addColumn, addBoard, removeBoard, removeColumn, removeTaskFromBoard} = boardSlice.actions;

export default boardSlice.reducer;
