"use client";

function Experience_cards(props: any) {
  return (
    <div className='flex flex-col items-start justify-center h-40 w-44 p-4 rounded-md bg-custom2'>
	 <div className='flex items-center justify-center h-5 w-5 bg-blue p-2 rounded-sm'>{props.icon}</div>
	 <h3 className='text-black font-bold'>{props.title}</h3>
	 <p className='text-black font-mono text-sm'>{props.description}</p>
    </div>
  )
}

export default Experience_cards
