import React from 'react'

type Props = {
  children: React.ReactElement
  moreClass? : string
}

const CenterLayout = ({ children, moreClass}: Props) => {
  return (
    <div className={`flex justify-center items-center ${moreClass}`} >
      {children}
    </div>
  )
}

export default CenterLayout