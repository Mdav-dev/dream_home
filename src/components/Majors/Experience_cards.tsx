import { FaLocationDot } from "react-icons/fa6";


function Experience_cards(props: any) {
  return (
    <div className='flex flex-col items-start justify-center h-[268px] w-[275px] p-4 rounded-2xl gap-3 bg-custom2'>
      <div className='flex items-start justify-start h-[83px] w-[83px] p-[15px] rounded-lg bg-white'><FaLocationDot className="h-[52px] w-[52px] p-2 text-custom1 bg-white"/></div>
      <h1 className="text-custom1 font-montserrat font-bold text-[19px]">{props.title}</h1>
      <p className="text-custom1 font-montserrat font-semibold text-[17px]">{props.description}</p>
    </div>
  )
}

export default Experience_cards
