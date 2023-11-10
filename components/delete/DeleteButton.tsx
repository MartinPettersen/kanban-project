'use client'
import { TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { deletePopup, removeInformation } from '@/app/Redux/Features/remove/removeSlice';
import type { RootState } from "../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";

type props = {
    name: string,
    index: number,
    objectType: string,
    column?: number,
}

const DeleteButton = ({name, index, objectType, column}: props) => {
  
    const dispatch = useDispatch();


    const toggle = () => {
        console.log('col at button ' + column)
        dispatch(removeInformation({objectType, name, index, column}))
        dispatch(deletePopup())
        
      };
    
    return (
    <div className='bg-slate-900 rounded-full  p-[0.15rem] opacity-50 hover:opacity-100 flex items-center justify-center'>

    <TrashIcon onClick={() => toggle()} className={` h-4 w-4 text-red-400  `}/> 
    
    </div>
  )
}

export default DeleteButton