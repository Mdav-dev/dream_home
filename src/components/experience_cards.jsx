import React from 'react'

function experience_cards(props) {
  return (
    <div className='flex flex-col items-start justify-center h-20 w-16 p-4 rounded-md'>
	 <div className='flex items-center justify-center h-5 w-5 bg-white p-2 rounded-sm'>{props.icon}</div>
	 <h3 className='text-black'>{props.title}</h3>
	 <p className='text-black'>{props.description}</p>
    </div>
  )
}

export default experience_cards
