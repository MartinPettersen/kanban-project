import React from 'react'
import BoardSelect from '../dashboard/boardcontainer/BoardSelect'
import DashBoard from '../dashboard/DashBoard'

const Header = () => {
  return (
    <header className='bg-[#222831]'>
        <div className='p-8 flex flex-row justify-between'>
            <h1 className="font-extrabold text-3xl text-red-400">Kanban task manager</h1>
            {<DashBoard />}
        </div>
        <BoardSelect />
    </header>
  )
}

export default Header