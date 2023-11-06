import React from 'react'

type props = {
    name: string,
    selected: boolean
}

const BoardButton = ({name, selected}: props) => {
  return (
    <div className={`${selected ? `text-[#aacefb] bg-[#12161a]` : `text-[#aacefb] bg-[#12161a]`} mx-auto h-[100%] pl-2 pr-2 hover:cursor-pointer flex font-bold justify-center items-center text-1xl`}>{name}</div>
  )
}

export default BoardButton