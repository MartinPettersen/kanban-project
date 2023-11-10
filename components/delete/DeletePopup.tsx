"use client";
import { createBoard } from "@/app/Redux/Features/create/createSlice";
import { addTask } from "@/app/Redux/Features/task/taskSlice";
import {
  addBoard,
  addColumn,
  addTaskToBoard,
  removeBoard,
  removeColumn,
  removeTaskFromBoard,
} from "@/app/Redux/Features/board/boardSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Redux/store";
import {
  deletePopup,
  removeInformation,
} from "@/app/Redux/Features/remove/removeSlice";

const DeletePopup = () => {
  const selectedBoard = useSelector((state: RootState) => state.board.selectedBoard);

  const removeInformation = useSelector(
    (state: RootState) => state.remove.removeInformation
  );

  const dispatch = useDispatch();
  const toggle = () => {
    if (removeInformation.objectType === 'Board'){

      dispatch(removeBoard({ boardIndex: removeInformation.index }));
    }
    if (removeInformation.objectType === 'Column'){

      dispatch(removeColumn({ columnIndex: removeInformation.index, selectedBoard }));
    }
    if (removeInformation.objectType === 'Task'){
      console.log('col at 1 ' + removeInformation.column)
      dispatch(removeTaskFromBoard({ taskIndex: removeInformation.index, selectedBoard, column: removeInformation.column}));
    }
    dispatch(deletePopup());
  };

  return (
    <div className="w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50  items">
      <div
        className="w-full fixed h-full z-100"
        onClick={() => dispatch(deletePopup())}
      ></div>
      <div className="w-[40%] fixed h-[60%] z-101 bg-gradient-radial from-[#55657b] to-[#222831] rounded-xl p-4 flex items-center justify-center">
        <div className="flex flex-col gap-4 w-[100%] h-[100%] items-center justify-center">
          <h1 className="text-red-500 font-extrabold text-3xl flex justify-center items-center">
            {" "}
            Are you sure that you want to delete the{" "}
            {removeInformation.objectType} called {removeInformation.name} ?{" "}
          </h1>
          <div className="flex flex-row gap-10">
            <div
              className="p-4 bg-red-500 border-2 border-slate-600 hover:scale-105 text-red-50 hover:cursor-pointer hover:bg-red-400 rounded-xl font-extrabold"
              onClick={() => toggle()}
            >
              YES
            </div>
            <div
              className="p-4 bg-emerald-500 border-2 border-slate-600 hover:scale-105 text-emerald-50 hover:cursor-pointer hover:bg-emerald-400 rounded-xl font-extrabold"
              onClick={() => dispatch(deletePopup())}
            >
              NO
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;
