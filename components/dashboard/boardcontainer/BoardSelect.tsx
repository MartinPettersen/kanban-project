"use client";

import type { RootState } from "../../../app/Redux/store";
import { useSelector, useDispatch } from "react-redux";
import BoardButton from "./BoardButton";

const BoardSelect = () => {
  const boards = useSelector((state: RootState) => state.board.boards);

  return (
    <div className="w-screen h-[2em] bg-[#222831]  flex  items-center justify-center ">
      <div className="w-[80%] h-[100%] flex items-center justify-center flex-row   gap-2">
        {boards.map((board, i) => (
          <BoardButton key={i} index={i} name={board.name} />
        ))}
      </div>
    </div>
  );
};

export default BoardSelect;
