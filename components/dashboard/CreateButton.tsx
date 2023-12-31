import React from "react";
import { useDispatch } from "react-redux";

type props = {
  display: string;
  dispatchFunction: Function; 
};

const CreateButton = ({ display, dispatchFunction }: props) => {
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(dispatchFunction());
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
