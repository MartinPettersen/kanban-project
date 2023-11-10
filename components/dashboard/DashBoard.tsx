import React from 'react'
import CreateButton from './CreateButton'
import { createTask } from "@/app/Redux/Features/create/createSlice";
import { createBoard } from "@/app/Redux/Features/create/createSlice";
import { createColumn } from "@/app/Redux/Features/create/createSlice";

const DashBoard = () => {
  return (
    <div className=' flex justify-end gap-4 pr-8'>
      <CreateButton dispatchFunction={createBoard} display={'+Board'}/>
      <CreateButton dispatchFunction={createColumn} display={'+Column'}/>
      <CreateButton dispatchFunction={createTask} display={'+Task'}  />
    </div>
  )
}

export default DashBoard