"use client";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import type { RootState } from "../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  changeColumnOrder,
  changeTaskOrder,
} from "@/app/Redux/Features/board/boardSlice";
import Column from "./Column";
import { useEffect, useState } from "react";
import { TaskState } from "@/types/TaskState";

const Container = () => {
  const boards = useSelector((state: RootState) => state.board.boards);


  const selectedBoard = useSelector(
    (state: RootState) => state.board.selectedBoard
  );

  const dispatch = useDispatch();

  const [taskStates, setTaskStates] = useState<TaskState[]>();

  useEffect(() => {
    if (typeof boards[selectedBoard] !== "undefined") {
      const temp = boards[selectedBoard].taskStates;
      setTaskStates(temp);
    }
  }, [boards]);

  useEffect(() => {
    if (typeof boards[selectedBoard] !== "undefined") {
      const temp = boards[selectedBoard].taskStates;
      setTaskStates(temp);
    }
  }, [selectedBoard]);

  useEffect(() => {}, []);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "column") {
      dispatch(
        changeColumnOrder({
          selectedBoard,
          sourceIndex: source.index,
          destinationIndex: destination.index,
          draggableId,
        })
      );
    }

    const startTaskStateColumn = source.droppableId;
    const finishTaskStateColumn = destination.droppableId;

    dispatch(
      changeTaskOrder({
        selectedBoard,
        sourceIndex: source.index,
        startTaskStateColumn,
        finishTaskStateColumn,
        destinationIndex: destination.index,
        draggableId,
      })
    );
  };

  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {winReady && typeof boards[selectedBoard] !== "undefined" ? (
        <Droppable
          droppableId="columns-container"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="   w-[100%] h-[100%]"
            >
              <div className="flex justify-center gap-2 sm:flex-row flex-col ">
                {taskStates!.map((taskState, i) => (
                  <Column
                    key={taskState.id}
                    id={taskState.name}
                    taskState={taskState}
                    index={i}
                  />
                ))}
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ) : null}
    </DragDropContext>
  );
};

export default Container;
