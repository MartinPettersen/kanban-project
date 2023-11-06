import React from "react";
import { useDispatch } from "react-redux";
import type { RootState } from "../../app/Redux/store";
import { createTask } from "@/app/Redux/Features/create/createSlice";

type props = {
  display: string;
};

const CreateButton = ({ display }: props) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(createTask());
  };
  return (
    <div
      className="bg-orange-400 flex items-center justify-center text-white font-bold rounded-xl pr-2 pl-2 hover:cursor-pointer hover:bg-orange-300"
      onClick={() => toggle()}
    >
      {display}
    </div>
  );
};

export default CreateButton;
