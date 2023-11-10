"use client";
import { TaskState } from "@/types/TaskState";
import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import Task from "./Task";
import type { RootState } from "../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";

import styled from "styled-components";
import DeleteButton from "../delete/DeleteButton";

type Props = {
  taskState: TaskState;
  index: number;
  id: string;
};

const Column = ({ taskState, index, id }: Props) => {
  const tasks = useSelector((state: RootState) => state.task.tasks);

  const [background, setBackground] = useState("bg-gray-800");

  useEffect(() => {});

  return (
    <Draggable key={taskState.name} draggableId={taskState.id} index={index}>
      {(provided) => (
        
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}

        ref={provided.innerRef}
        className={`bg-gray-800 rounded-xl text-gray-200 flex gap-2 flex-col w-[20%] m-4 p-0`}
      >
        <Droppable key={taskState.id} droppableId={taskState.id} type="task">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              data-isDraggingOver={snapshot.isDraggingOver}
              className={`transition ${
                snapshot.isDraggingOver ? "bg-slate-900" : "bg-gray-800"
              } flex gap-2 flex-col rounded-xl w-[100%] h-[100%]`}
            >
              <div className="relative">
              <h1 className="font-bold flex items-center justify-center text-2xl uppercase">
                {taskState.name}
              </h1>

              <div className="absolute top-0 right-0 p-2">

                <DeleteButton name={taskState.name} index={index} objectType={'Column'}/>
              </div>
              </div>
              {taskState.tasks.map((task, i) => (
                <Task key={tasks[task].name} task={task} index={i} columnColor={taskState.color} column={index}/>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
      
      )}
    </Draggable>
  );
};

export default Column;
