import React from 'react'
import { useSelector } from 'react-redux';
import CreateTask from '@/components/create/CreateTask';
import CreateColumn from '@/components/create/CreateColumn';
import CreateBoard from '@/components/create/CreateBoard';
import DeletePopup from '@/components/delete/DeletePopup';
import { RootState } from '@/app/Redux/store';

const PopupContainer = () => {

    
  const createTask = useSelector((state: RootState) => state.create.createTask);
  const createColumn = useSelector((state: RootState) => state.create.createColumn);
  const createBoard = useSelector((state: RootState) => state.create.createBoard);
  const deletePopup = useSelector((state: RootState) => state.remove.deletePopup);
  return (
    <div>
        
      {createTask? <div className="w-full h-full fixed inset-0 z-50 "><CreateTask /></div> :<></>}
      {createColumn? <div className="w-full h-full fixed inset-0 z-50 "><CreateColumn /></div> :<></>}
      {createBoard? <div className="w-full h-full fixed inset-0 z-50 "><CreateBoard /></div> :<></>}
      {deletePopup? <div className="w-full h-full fixed inset-0 z-50 "><DeletePopup /></div> :<></>}

    </div>
  )
}

export default PopupContainer