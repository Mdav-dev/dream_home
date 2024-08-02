import React from 'react'

function Nav_link(props: any) {
  return (    
	 <a href={props.link}><span className='p-5 text-custom1 font-bold bg-white transition duration-500 hover:bg-slate-200'>{props.name}</span></a>
  )
}

export default Nav_link
