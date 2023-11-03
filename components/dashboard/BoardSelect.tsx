'use client';

import type { RootState } from '../../app/Redux/store';
import { useSelector, useDispatch } from 'react-redux';
import BoardButton from './BoardButton';

const BoardSelect = () => {

  const boards = useSelector((state: RootState) => state.board.boards);
  const selected = useSelector((state: RootState) => state.board.selectedBoard);

  const dispatch = useDispatch();

  return (
    <div className='w-screen h-[2em] bg-[#222831]  flex  items-center justify-center border-b-2 border-b-[#273e62]'>
      <div className='w-[80%] h-[100%] flex items-center justify-center flex-col  space-x-1'>

    {boards.map((board, i) =>(
      
      <BoardButton key={i} selected={i === selected} name={board.name}/>
      )
      )}
      </div>
    
    </div>
    
  )
}

export default BoardSelect