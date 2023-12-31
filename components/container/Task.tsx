"use client";
import React, { useState } from "react";
import type { RootState } from "../../app/Redux/store";
import { useSelector } from "react-redux";
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

  const [hovering, setHovering] = useState(false);



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
          data-isdragging={snapshot.isDragging}
          className={`${
            snapshot.isDragging ? "bg-green-300" : columnColor
          } rounded-xl p-2 flex flex-col  ml-4 mr-4 mb-2 mt-2`}
          onMouseOver={() => setHovering(true)}
          onMouseOut={() => setHovering(false)}

        >
          <div className="relative">
            <h1 className="flex justify-center items-center text-white font-bold uppercase">
              {tasks[task].name}
            </h1>
            <div className="absolute top-0 right-0 ">
            {hovering ? 
              <>
              <DeleteButton
                name={tasks[task].name}
                index={index}
                objectType={"Task"}
                column={column}
                taskId={tasks[task].id}
              />
              </>:
              <></>
              }
              
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
