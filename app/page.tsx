'use client'

import Container from '@/components/container/Container'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';
import CreateTask from '@/components/create/CreateTask';
import CreateColumn from '@/components/create/CreateColumn';
import CreateBoard from '@/components/create/CreateBoard';
import DeletePopup from '@/components/delete/DeletePopup';




export default function Home() {

  const createTask = useSelector((state: RootState) => state.create.createTask);
  const createColumn = useSelector((state: RootState) => state.create.createColumn);
  const createBoard = useSelector((state: RootState) => state.create.createBoard);
  const deletePopup = useSelector((state: RootState) => state.remove.deletePopup);



  return (
    <main className='h-screen z-0'>

      <Header />
      
      {createTask? <div className="w-full h-full fixed inset-0 z-50 "><CreateTask /></div> :<></>}
      {createColumn? <div className="w-full h-full fixed inset-0 z-50 "><CreateColumn /></div> :<></>}
      {createBoard? <div className="w-full h-full fixed inset-0 z-50 "><CreateBoard /></div> :<></>}
      {deletePopup? <div className="w-full h-full fixed inset-0 z-50 "><DeletePopup /></div> :<></>}

      <div className='flex justify-center items-center h-[80%] z-0'>

        <div className=" w-[80%] h-[100%]">

        <Container />
        </div>
      </div>
    </main>
  )
}
