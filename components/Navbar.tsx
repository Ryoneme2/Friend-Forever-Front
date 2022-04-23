import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='w-[100%] flex justify-between items-center p-2'>
      <div>
        <h1>logo</h1>
      </div>
      <div className='flex justify-end items-center'>
        <div>
          <h1>sign in</h1>
        </div>
        <div>
        <h1>sign up</h1>
        </div>
      </div>
    </nav>
  )
}

export default Navbar