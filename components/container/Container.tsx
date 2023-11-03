"use client";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import type { RootState } from "../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeTaskOrder } from "@/app/Redux/Features/board/boardSlice";
import { Board } from "@/types/Board";
import Column from "./Column";
import { useEffect, useState } from "react";

type Result = {
  draggableId: string,
  type: string,
  reason: string,
  source: {
    droppableId: string,
    index: number,
  },
  destination: {
    droppableId: string,
    index: number,
  }
}

const Container = () => {
  //const [boards, setBoards] = useState<Board[]>([])
  const boards = useSelector((state: RootState) => state.board.boards);

  const selectedBoard = useSelector(
    (state: RootState) => state.board.selectedBoard
  );

  const dispatch = useDispatch();

  const taskStates = boards[selectedBoard].taskStates;
  const tasks = useSelector((state: RootState) => state.task.tasks);
  

  const onDragEnd = (result: Result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

      const startTaskStateColumn = source.droppableId;
      const finishTaskStateColumn = destination.droppableId;
      //console.log(taskStateColumn)
      //console.log(taskStates)

      const currentColumn = taskStates.find((element) => element.id === startTaskStateColumn)

      console.log('start ' + startTaskStateColumn)
      console.log('finish ' + finishTaskStateColumn)

      //console.log(currentColumn.tasks)
      dispatch(changeTaskOrder({ selectedBoard, sourceIndex: source.index, startTaskStateColumn, finishTaskStateColumn, destinationIndex: destination.index, draggableId}))
      // console.log(boards[taskStateColumn].tasks)
    //console.log(destination)

  };

  const [winReady, setwinReady] = useState(false);
  useEffect(() => {
    setwinReady(true);
  }, []);

  return (
    <DragDropContext 
    onDragEnd={onDragEnd}>
      <div className="  border border-blue-300  w-[100%] h-[100%]">
        <div className="flex gap-2 flex-row">
          {taskStates.map((taskState, i) =>
            winReady ? (
              <Column
                key={taskState.name}
                id={taskState.name}
                taskState={taskState}
                index={i}
              />
            ) : null
          )}
        </div>
      </div>
    </DragDropContext>
  );
};

export default Container;
