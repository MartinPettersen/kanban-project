import React from 'react'
import CreateButton from './CreateButton'

const DashBoard = () => {
  return (
    <div className=' flex justify-end gap-4 pr-8'>
      <CreateButton display={'+Board'}/>
      <CreateButton display={'+Column'}/>

      <CreateButton display={'+Task'}  />

    </div>
  )
}

export default DashBoard