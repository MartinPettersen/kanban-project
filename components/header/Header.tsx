import React from 'react'
import BoardSelect from '../dashboard/boardcontainer/BoardSelect'
import DashBoard from '../dashboard/DashBoard'

const Header = () => {
  return (
    <header className='bg-[#222831]'>
        <div className='p-8 flex sm:flex-row flex-col sm:space-y-0 space-y-2 sm:justify-between'>
            <h1 className="font-extrabold text-3xl text-red-400">Kanban task manager</h1>
            {<DashBoard />}
        </div>
        <BoardSelect />
    </header>
  )
}

export default Header