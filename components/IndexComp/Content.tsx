import React from 'react'
import { ButtonLightBorder } from '../index';

type Props = {}

const Content = (props: Props) => {
  return (
    <div className='mx-auto'>
      <div>
        <h1 className='text-[5rem] text-center text-white text-shadow-light font-semibold'>
          Will you keep the good memory with us FOREVER
        </h1>
      </div>
      <div className='flex justify-center items-center mt-6'>
        <ButtonLightBorder borderRadius='full' context='Start'/>
      </div>
    </div>
  )
}

export default Content