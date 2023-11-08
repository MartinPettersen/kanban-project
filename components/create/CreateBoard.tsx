'use client'
import { createBoard } from "@/app/Redux/Features/create/createSlice";
import { addTask } from "@/app/Redux/Features/task/taskSlice";
import { addBoard, addColumn, addTaskToBoard } from "@/app/Redux/Features/board/boardSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Redux/store";
import ColorIndicator from "./ColorIndicator";
 
const CreateBoard = () => {

    const dispatch = useDispatch();
    const toggle = () => {
      console.log("closing...");
      dispatch(createBoard());
    };

    const [boardName, setBoardName] = useState("Default");
    const [boardNameClicked, setBoardNameClicked] = useState(false);



    const addBoardHandle = () => {
        
        dispatch(
          addBoard(
            {boardName}
          )
        );
        toggle();
      };


      const editBoardName = (event: any) => {
        setBoardName(event.target.value);
      };
    
      const onClickBoardName = () => {
        if (!boardNameClicked) {
          setBoardNameClicked(!boardNameClicked);
          setBoardName("");
        }
      };

  return (
    <div className="w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50  items">
      <div className="w-full fixed h-full z-100" onClick={() => toggle()}></div>
      <div className="w-[40%] fixed h-[60%] z-101 bg-gradient-radial from-[#55657b] to-[#222831] rounded-xl ">
        <div className="flex flex-col gap-4 w-[100%] h-[100%] items-center justify-center">
          <div>
            <p className="text-slate-100">Add a name for your Board:</p>

            <input
              className="border w-[15em] border-[#828FA3] border-opacity-25 text-slate-100 p-2 bg-slate-600 "
              value={boardName}
              type="text"
              name="name"
              onChange={(event) => editBoardName(event)}
              onClick={() => onClickBoardName()}
            />
          </div>

          

          <div
            className="bg-emerald-400 w-[8em] h-[3em] mt-4 font-extrabold rounded-xl flex justify-center items-center text-white hover:cursor-pointer hover:bg-emerald-300"
            onClick={() => addBoardHandle()}
          >
            ADD Board
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBoard