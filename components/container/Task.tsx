"use client";
import React from "react";
import type { RootState } from "../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { Draggable } from "react-beautiful-dnd";
import DeleteButton from "../delete/DeleteButton";

type Props = {
  task: string;
  index: number;
  columnColor: string;
  column: number;
};

const Task = ({ task, index, columnColor, column }: Props) => {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  return (
    <Draggable
      key={tasks[task].name}
      draggableId={tasks[task].id}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          data-isDragging={snapshot.isDragging}
          className={`${
            snapshot.isDragging ? "bg-green-300" : columnColor
          } rounded-xl p-2 flex flex-col justify-center items-center ml-4 mr-4 mb-2 mt-2`}
        >
          <div className="relative">
            <div className="flex justify-center items-center text-white font-bold uppercase">
              {tasks[task].name}
            </div>
            <div className="absolute top-0 right-0 p-2">
              <DeleteButton
                name={tasks[task].name}
                index={index}
                objectType={"Task"}
                column={column}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            {tasks[task].description}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Task;
