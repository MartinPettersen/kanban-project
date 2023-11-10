"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import {
  deletePopup,
  removeInformation,
} from "@/app/Redux/Features/remove/removeSlice";
import { useDispatch } from "react-redux";

type props = {
  name: string;
  index: number;
  objectType: string;
  column?: number;
  taskId?: string;

};

const DeleteButton = ({ name, index, objectType, column, taskId }: props) => {
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(removeInformation({ objectType, name, index, column, taskId }));
    dispatch(deletePopup());
  };

  return (
    <div className="bg-slate-900 rounded-full hover:cursor-pointer  p-[0.15rem] opacity-50 hover:opacity-100 flex items-center justify-center">
      <TrashIcon
        onClick={() => toggle()}
        className={` h-4 w-4 text-red-400  `}
      />
    </div>
  );
};

export default DeleteButton;
