import React from 'react'

function Services() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen p-0 m-0'>
	  <h1 className='text-black'>Hello there</h1>
	  <form className='flex flex-col bg-orange-600 w-8/12 max-h-full rounded-md p-2'  method="post" action="">
		<label htmlFor="name">Hymn Number</label>
		<input className='rounded-sm' type="Number" placeholder='Number' name="number" id="number" required/>
		<label htmlFor="name">Hymn Title</label>
		<input className='rounded-sm' type="text" placeholder='Title' name="title" id="title" required/>
		<label htmlFor="name">The first line of the first stanza/verse</label>
		<input className='rounded-sm' type="text" placeholder='First Line' name="first_line" id="first_line" required/>
		<label htmlFor="name">The first line of the refrain/chorus</label>
		<input className='rounded-sm' type="text" placeholder='Chorus line' name="chorus_line" id="chorus_line"/>
		<label htmlFor="name">Song Key</label>
		<input className='rounded-sm' type="text" placeholder='Key' name="song_key" id="song_key"/>
		<label htmlFor="name">Code</label>
		<input className='rounded-sm' type="text" placeholder='Code' name="code" id="code"/>
		<label htmlFor="name">Links</label>
		<input className='rounded-sm' type="text" placeholder='Links' name="link" id="link"/>
		<label htmlFor="name">Author</label>
		<input className='rounded-sm' type="text" placeholder='Author' name="author" id="author"/>
		<label htmlFor="name">Date</label>
		<input className='rounded-sm' type="text" placeholder='date' name="date" id="date"/>
		<label htmlFor="name">Full Song</label>		
		<textarea className='rounded-sm'   rows="20"/>
		<button className='bg-slate-500 rounded-sm' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Services
{/* <form className='flex flex-col bg-orange-200'  method="post" action="">
		<input className='' style="width: 100%;" type="text" name="title" value=""/>
		<textarea className=''  rows="20"></textarea>
		<input className='' type="text" name="author" value=""/>
		<button className='' type="submit"></button>
      </form> */}