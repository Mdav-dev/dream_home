import React from 'react'
import F_link from './Minors/F_link'

function Footer() {
  return (
    <div className='h-[500px] w-screen bg-custom2 flex justify-evenly p-12 mt-20'>
	    <div>
        <h1 className='font-primary text-[18px]'>Jonyam</h1>
        <p className='font-sans text-[18px]'>Bringing you closer <br />to your dream home, one <br />click at a time.</p>
      </div>
      <div className='flex flex-col'>
        <h1 className='font-primary text-[22px]'>About</h1>
        <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-primary text-[22px]'>About</h1>
        <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-primary text-[22px]'>About</h1>
        <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
      </div>
      <div className='flex flex-col'>
        <h1 className='font-primary text-[22px]'>About</h1>
        <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
          <F_link 
          link= "/"
          name= "Our Story"
          />
      </div>
    </div>
  )
}

export default Footer
