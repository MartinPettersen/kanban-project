import React from 'react'
import type { RootState } from "../../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { changeBoard } from '@/app/Redux/Features/board/boardSlice';

type props = {
    name: string,
    index: number
}

const BoardButton = ({name, index}: props) => {
  const selected = useSelector((state: RootState) => state.board.selectedBoard);
  
  const dispatch = useDispatch();
  
  const handleSwitchBoard = () => {
    dispatch(changeBoard({newBoard: index}))
  }

  return (
    <div onClick={() => handleSwitchBoard()} className={`${index === selected ? `text-[#aacefb] bg-slate-700 hover:bg-slate-500` : `text-[#aacefb] bg-slate-800  hover:bg-slate-600`} border border-slate-900 h-[100%] pl-2 pr-2 hover:cursor-pointer flex font-bold justify-center items-center text-1xl`}>{name}</div>
  )
}

export default BoardButton