"use client";
import { createColumn } from "@/app/Redux/Features/create/createSlice";
import { addColumn } from "@/app/Redux/Features/board/boardSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Redux/store";

const CreateColumn = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(createColumn());
  };

  const [columnName, setColumnName] = useState("Default");
  const [columnNameClicked, setColumnNameClicked] = useState(false);
  const [color, setColor] = useState(0);

  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {}, [color]);

  const addColumnHandle = () => {
    dispatch(addColumn({ selectedBoard, columnName, color, colorPalette }));
    toggle();
  };

  const selectedBoard = useSelector(
    (state: RootState) => state.board.selectedBoard
  );

  const editColumnName = (event: any) => {
    setColumnName(event.target.value);
  };

  const onClickColumnName = () => {
    if (!columnNameClicked) {
      setColumnNameClicked(!columnNameClicked);
      setColumnName("");
    }
  };

  const colorPalette = useSelector(
    (state: RootState) => state.board.boards[selectedBoard].colorPalette
  );

  return (
    <div className="w-full h-full z-10 flex items-center justify-center backdrop-filter backdrop-brightness-50  items">
      <div className="w-full fixed h-full z-100" onClick={() => toggle()}></div>
      <div className="sm:w-[40%] fixed h-[60%] z-101 bg-gradient-radial from-[#55657b] to-[#222831] rounded-xl ">
        <div className="flex flex-col gap-4 w-[100%] h-[100%] items-center justify-center">
          <div>
            <p className="text-slate-100">Add a name for your Column:</p>

            <input
              className="border w-[15em] border-[#828FA3] border-opacity-25 text-slate-100 p-2 bg-slate-600 "
              value={columnName}
              type="text"
              name="name"
              onChange={(event) => editColumnName(event)}
              onClick={() => onClickColumnName()}
            />
          </div>

          <div className="text-slate-100 w-[15em]">
            <p>Select Task Color for Column</p>
            <div className={`bg-${colorPalette[color]}-400`}>
              {dropDown ? (
                <div>
                  {colorPalette.map((key, index) => (
                    <div
                      key={index}
                      className={`bg-${key}-400 hover:bg-${key}-700`}
                      onClick={() => {
                        setColor(index);
                        setDropDown(!dropDown);
                      }}
                    >
                      {key}
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={`bg-${colorPalette[color]}-400`}
                  onClick={() => setDropDown(!dropDown)}
                >
                  {colorPalette[color]}
                </div>
              )}
            </div>
          </div>

          <div
            className="bg-emerald-400 w-[8em] h-[3em] mt-4 font-extrabold rounded-xl flex justify-center items-center text-white hover:cursor-pointer hover:bg-emerald-300"
            onClick={() => addColumnHandle()}
          >
            ADD Column
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateColumn;
