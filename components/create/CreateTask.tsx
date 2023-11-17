import { createTask } from "@/app/Redux/Features/create/createSlice";
import { addTask } from "@/app/Redux/Features/task/taskSlice";
import { addTaskToBoard } from "@/app/Redux/Features/board/boardSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/Redux/store";

const CreateTask = () => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(createTask());
  };
  const [taskName, setTaskName] = useState("Default");
  const [taskDescription, setTaskDescription] = useState("No Description");
  const [taskNameClicked, setTaskNameClicked] = useState(false);
  const [descriptionClicked, setDesciptionClicked] = useState(false);
  const [columnTracker, setColumnTracker] = useState(0);
  const [dropDown, setDropDown] = useState(false);
  const taskTracker = useSelector((state: RootState) => state.task.taskTracker);
  const taskStateList = useSelector(
    (state: RootState) =>
      state.board.boards[state.board.selectedBoard].taskStates
  );
  const selectedBoard = useSelector(
    (state: RootState) => state.board.selectedBoard
  );
  const addTaskHandle = () => {
    dispatch(
      addTask({
        name: taskName,
        description: taskDescription,
      })
    );
    dispatch(
      addTaskToBoard({
        selectedBoard,
        taskId: `task-${taskTracker + 1}`,
        column: columnTracker,
      })
    );
    toggle();
  };

  const editDescription = (event: any) => {
    setTaskDescription(event.target.value);
  };

  const onClickDescription = () => {
    if (!descriptionClicked) {
      setDesciptionClicked(!descriptionClicked);
      setTaskDescription("");
    }
  };

  const editTaskName = (event: any) => {
    setTaskName(event.target.value);
  };

  const onClickTaskName = () => {
    if (!taskNameClicked) {
      setTaskNameClicked(!taskNameClicked);
      setTaskName("");
    }
  };

  return (
    <div className="w-full h-full z-10  flex items-center justify-center backdrop-filter backdrop-brightness-50  items">
      <div className="w-full fixed h-full z-100" onClick={() => toggle()}></div>
      <div className="sm:w-[40%]  fixed h-[60%] z-101 bg-gradient-radial from-[#55657b] to-[#222831] rounded-xl ">
        <div className="flex  flex-col gap-4 w-[100%] h-[100%] items-center justify-center">
          <div>
            <p className="text-slate-100">Add a description for your task:</p>

            <input
              className="border w-[15em] border-[#828FA3] border-opacity-25 text-slate-100 p-2 bg-slate-600 "
              value={taskName}
              type="text"
              name="name"
              onChange={(event) => editTaskName(event)}
              onClick={() => onClickTaskName()}
            />
          </div>
          <div>
            <p className="text-slate-100">Add a description for your task:</p>
            <textarea
              className="border w-[15em] border-[#828FA3] border-opacity-25 text-slate-100 p-2 bg-slate-600"
              value={taskDescription}
              name="name"
              onChange={(event) => editDescription(event)}
              onClick={() => onClickDescription()}
            />
          </div>

          <div className="text-slate-100 w-[15em]">
            <p>Select start Column</p>
            <div className="bg-slate-800">
              {dropDown ? (
                <div>
                  {taskStateList.map((column, index) => (
                    <div
                      key={index}
                      className="hover:bg-slate-700"
                      onClick={() => {
                        setColumnTracker(index);
                        setDropDown(!dropDown);
                      }}
                    >
                      {column.name}
                    </div>
                  ))}
                </div>
              ) : (
                <div onClick={() => setDropDown(!dropDown)}>
                  {taskStateList[columnTracker].name}
                </div>
              )}
            </div>
          </div>

          <div
            className="bg-emerald-400 w-[8em] h-[3em] mt-4 font-extrabold rounded-xl flex justify-center items-center text-white hover:cursor-pointer hover:bg-emerald-300"
            onClick={() => addTaskHandle()}
          >
            ADD TASK
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
