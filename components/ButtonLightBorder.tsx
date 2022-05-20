import React from 'react'

type Props = {
  context : string
  borderRadius : string
}

const ButtonLightBorder = ({ context, borderRadius }: Props) => {
  const allContext = `rounded-${borderRadius}`
  return (
    <div className={`border-solid w-[10rem] h-[3rem] flex justify-center items-center elem-shadow-light border-white border-[4px] ${allContext}`}>
      <span className='text-white font-bold text-xl text-shadow-light'>{context}</span>
    </div>
  )
}

export default ButtonLightBorder