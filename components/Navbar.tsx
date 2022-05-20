import React from 'react'
import ImageWithLazy from '../components/ImageWithLazy'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='w-[100%] flex justify-between items-center py-4 px-10'>
      <div>
      <ImageWithLazy w={75} h={75} source={`/images/FriendLightSvg.svg`}/>
      </div>
      <div className='flex justify-end items-center'>
        <div>
          <h1 className='text-white font-semibold underline cursor-pointer'>Sign in</h1>
        </div>
        <div>
        <h1 className='text-[#00575B] font-semibold cursor-pointer bg-white py-2 px-6 rounded-full ml-8'>Sign up</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar