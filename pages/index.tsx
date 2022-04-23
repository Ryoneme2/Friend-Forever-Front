import type { NextPage } from 'next'
import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import MainBackground from '../layouts/MainBackground'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <MainBackground moreClass="flex justify-center items-center w-[100vw] h-[100vh]">
        <div className='shadow-xl main-bg rounded-xl xs:w-[85vw] sm:w-[85vw] w-[75vw] h-[80vh]'>
          <Navbar/>
        </div>
      </MainBackground>
    </>
  )
}

export default Home
