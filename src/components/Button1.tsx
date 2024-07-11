import React from 'react'

const Button1 =(props: any) => {
  return (
    <div className='flex justify-center items-center p-3 bg-white border-2 border-black h-2 '>
	<p className='text-custom1 font-semibold'>{props.name}</p> 
    </div>
  )
}

export default Button1
