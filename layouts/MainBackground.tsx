import React from 'react'

type Props = {
  children: React.ReactElement
  moreClass? : string
}

const MainBackground = ({ children, moreClass}: Props) => {
  return (
    <div className={`w-[100vw] h-[100vh] main-bg ${moreClass}`} >
      {children}
    </div>
  )
}

export default MainBackground