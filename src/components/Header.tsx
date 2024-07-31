'use client'
import Button1 from "./Button1"


function Header() {
  return (
    <div className="flex justify-evenly items-center py-9 px-4">
	 <div className="flex justify-center items-center p-3"></div>
	 <div className="flex justify-between items-center">
		<Button1 />
	 </div>
	 <div className="flex justify-between items-center p-3"></div>
    </div>
  )
}

export default Header
