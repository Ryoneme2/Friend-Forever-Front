import React from 'react'

type Props = {
  children: React.ReactElement
  w? : string
  h? : string
  moreClass? : string
}

const MainBackground = ({ children, w, h, moreClass}: Props) => {
  return (
    <div className={`w-[100vw] h-[100vh] main-bg ${moreClass}`} >
      {children}
    </div>
  )
}

export default MainBackground