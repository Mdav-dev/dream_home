import React from 'react'

function button1(props) {
  return (
    <div className='flex justify-center items-center p-3 bg-white border-2 border-black h-2 '>
	<p className='text-custom1 font-semibold'>{props.title}</p> 
    </div>
  )
}

export default button1
