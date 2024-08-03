import React from 'react'

function Home_stat(props: any) {
  return (
    <div className='h-21 w-39 flex flex-col p-0 justify-normal items-start'>
	 <h1 className='text-stat p-0 font-bold'>{props.number}</h1>
	 <p className='font-para p-0'>{props.text}</p>
    </div>
  )
}

export default Home_stat
