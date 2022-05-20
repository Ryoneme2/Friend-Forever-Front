import type { NextPage } from 'next'
// import { Button, ButtonGroup, Box } from '@chakra-ui/react'
import { MainBackground, CenterLayout } from '../layouts/index'
import Navbar from '../components/Navbar'
import { Content } from '../components/IndexComp/index'

const Home: NextPage = () => {
  return (
    <>
      <MainBackground moreClass="flex justify-center items-center w-[100vw] h-[100vh]">
        <main>
          <div className='shadow-xl main-bg rounded-xl xs:w-[85vw] sm:w-[85vw] w-[75vw] h-[80vh]'>
            <Navbar />
            <CenterLayout>
              <Content />
            </CenterLayout>
          </div>
        </main>
      </MainBackground>
    </>
  )
}

export default Home
