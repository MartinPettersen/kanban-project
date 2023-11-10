'use client'

import Container from '@/components/container/Container'
import PopupContainer from '@/components/container/PopupContainer'
import Header from '@/components/header/Header'

export default function Home() {

  return (
    <main className='h-screen z-0'>

      <Header />
      
      <PopupContainer />

      <div className='flex justify-center items-center h-[80%] z-0'>

        <div className=" w-[80%] h-[100%]">

        <Container />
        </div>
      </div>
    </main>
  )
}
