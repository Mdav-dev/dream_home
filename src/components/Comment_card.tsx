import { FaLocationDot } from "react-icons/fa6";


function Comment_cards(props: any) {
  return (
    <div className='flex flex-col items-start justify-center h-96 w-80 p-4 rounded-md gap-5 bg-custom2'>
	 <div className='flex items-center justify-center h-24 w-full p-5 rounded-sm'><FaLocationDot className="h-14 w-14 p-2 bg-white"/></div>
	 <h3 className='text-black font-bold font-montserrat'>{props.title}</h3>
	 <p className='text-black font-montserrat text-sm'>{props.description}</p>
    </div>
  )
}

export default Comment_cards
