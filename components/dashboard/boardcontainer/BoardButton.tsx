import React, { useEffect } from 'react'
import type { RootState } from "../../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { changeBoard, removeBoard } from '@/app/Redux/Features/board/boardSlice';
import { TrashIcon } from '@heroicons/react/24/solid'
import { deletePopup, removeInformation } from '@/app/Redux/Features/remove/removeSlice';
import DeleteButton from '@/components/delete/DeleteButton';
type props = {
    name: string,
    index: number
}

const BoardButton = ({name, index}: props) => {
  const selected = useSelector((state: RootState) => state.board.selectedBoard);
  // const removeConfirmationSelector = useSelector((state: RootState) => state.remove.removeConfirmation);
  
  const dispatch = useDispatch();
  
  const handleSwitchBoard = () => {
    dispatch(changeBoard({newBoard: index}))
  }

  const toggle = () => {
    dispatch(removeInformation({objectType: "Board", name, index}))
    dispatch(deletePopup())
    
  };

  return (
    <div onClick={() => handleSwitchBoard()} className={`${index === selected ? `text-[#aacefb] bg-slate-700 hover:bg-slate-500` : `text-[#aacefb] bg-slate-800  hover:bg-slate-600`} border border-slate-900 h-[100%] pl-2 pr-2 hover:cursor-pointer flex gap-2 font-bold justify-center items-center text-1xl`}>
      {name}
      {index === selected ?
      <DeleteButton objectType='Board' name={name} index={index}/>
      : <></>}
      </div>
  )
}

export default BoardButton