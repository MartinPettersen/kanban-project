"use client";

import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";
import type { RootState } from "../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  changeColumnOrder,
  changeName,
  changeTaskOrder,
} from "@/app/Redux/Features/board/boardSlice";
import { Board } from "@/types/Board";
import Column from "./Column";
import { useEffect, useState } from "react";



const Container = () => {
  const boards = useSelector((state: RootState) => state.board.boards);

  const selectedBoard = useSelector(
    (state: RootState) => state.board.selectedBoard
  );

  const dispatch = useDispatch();

  
  const taskStates = boards[selectedBoard].taskStates;
  useEffect(() => {
    
  },[])

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


    if(type === 'column'){
      console.log(source.index)
      console.log(destination.index)
      console.log(destination.droppableId)
      console.log(draggableId)


      
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


    const currentColumn = taskStates.find(
      (element) => element.id === startTaskStateColumn
    );

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
      {winReady ? (
      <Droppable droppableId="columns-container" direction="horizontal" type="column">
        {provided => (


        <div 
        {...provided.droppableProps}
        ref={provided.innerRef}

        
        className="   w-[100%] h-[100%]">
          <div className="flex gap-2 flex-row">
            {taskStates.map((taskState, i) =>
              
                <Column
                  key={taskState.name}
                  id={taskState.name}
                  taskState={taskState}
                  index={i}
                />

            )}
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
