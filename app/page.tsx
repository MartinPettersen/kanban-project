'use client'

import Container from '@/components/container/Container'
import Header from '@/components/header/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { RootState } from './Redux/store';
import CreateTask from '@/components/create/CreateTask';



export default function Home() {

  const createTask = useSelector((state: RootState) => state.create.createTask);
  const createColumn = useSelector((state: RootState) => state.create.createColumn);
  const createBoard = useSelector((state: RootState) => state.create.createBoard);


  return (
    <main className='h-screen z-0'>

      <Header />
      {/* banner: create board */}
      {/* subbanner: board select*/}

      {/*
      
      opprette board:
        board name:
          velg hva slags states man vil ha for tasks
            ha et checkbox system for hvilke states man velger
              todo
              URGENT
              plan
              in progress
              peer review
              test
              deploy 
              done
            alle skal ha egen farge
            ha et felt som lar deg lage en egen state
              "did we miss something then create your own"
                navne felt
                velge av et par forutbestemte farger
            valgte states blir lagt i en array av states
            skal kunne flytte states rundt i riktig rekkefølge
      
            https://palettes.shecodes.io/palettes/631#palette
      https://palettes.shecodes.io/palettes/grey/color
      */}

      
      {/* task container: contains all the states task can be in. done todo in progress*/}
      
      {createTask? <div className="w-full h-full fixed inset-0 z-50 "><CreateTask /></div> :<></>}

      <div className='flex justify-center items-center h-[80%] z-0'>


        <div className=" w-[80%] h-[100%]">

        <Container />
        </div>
      </div>
    </main>
  )
}
