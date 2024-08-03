import Comment_cards from "@/components/Majors/Comment_card";
import Experience_cards from "@/components/Majors/Experience_cards";
import Filter_card from "@/components/Filter_card";
import Residence_card from "@/components/Majors/Residence_card";
import Custom from "./Custom";
import Header from "@/components/Header";
import Sign_button from "@/components/Minors/Sign_button";
import Home_stat from "@/components/Minors/Home_stat";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineVerified } from "react-icons/md";
import Footer from "@/components/Footer";


export default function Home() {
  return (
      <main className="bg-white w-screeen flex flex-col justify-start items-center">
        <Header />
        <div className={`flex justify-between items-start h-home w-screen px-4 `}>
          <div className={`flex flex-col justify-start items-start gap-14 px-4 pl-10`}>
            <h1 className="font-primary text-6xl">Find Your Dream Home</h1>
            <h4 className="font-para">Explore our curated selection of exquisite<br/>properties mericulously tailored to your<br/>unique dream home vision</h4>
            <Sign_button name = "Sign Up" size = "large"/>
          </div>
          <img 
          className="p-0 w-3/5 h-full image-style" 
          src="https://images.unsplash.com/photo-1722248240756-aedaebd02b37?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMzMzIyNTR8&ixlib=rb-4.0.3" 
          alt="" />
        </div>
        <Filter_card />
        <div className="h-[500px] flex w-full gap-14 py-32 px-20">
          <img src="https://images.unsplash.com/photo-1722248240756-aedaebd02b37?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjMzMzIyNTR8&ixlib=rb-4.0.3"
            alt=""
            className="h-[416px] w-[595px] rounded-lg" />
          <div className="w-[516px] h-[416px] flex flex-col justify-between items-start gap-6 py-20">
            <h1 className="font-extrabold text-[40px] font-montserrat text-custom1">We Help You to Find Your Dream Home</h1>
            <h5 className="font-para">
              From cozy cottages to luxurious estates, our dedicated
              team guides you through every step of the journey, ensuring
              your dream home becomes a reality
            </h5>
            <div className="flex justify-between w-[516px] p-0">
              <Home_stat 
                number = "8K+"
                text = "Houses Available"
              />
              <Home_stat 
                number = "6K+"
                text = "Houses Sold"
              />
              <Home_stat 
                number = "2K+"
                text = "Trusted Agents"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center p-16">
          <h1 className="font-primary text-[40px]">Why Choose Us</h1>
          <p className="font-para text-center">Elevating Your Home Buying Experience with Expertise, Intergrity,<br/>
            and Unmatched Personalized Service
          </p>
          <div className="flex justify-center gap-4">
            <Experience_cards
              icon = "<FaLocationDot />"
              title = "Expert Guidance"
              description = "Benefit from our team's seasoned expertise for a smooth buying experience"
            />
            <Experience_cards
              icon = "<FaLocationDot />"
              title = "Expert Guidance"
              description = "Benefit from our team's seasoned expertise for a smooth buying experience"
            />
            <Experience_cards
              icon = "<FaLocationDot />"
              title = "Expert Guidance"
              description = "Benefit from our team's seasoned expertise for a smooth buying experience"
            />
            <Experience_cards
              icon = "<FaLocationDot />"
              title = "Expert Guidance"
              description = "Benefit from our team's seasoned expertise for a smooth buying experience"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7">
          <h1 className="font-primary text-[40px]">Our Popular Residents</h1>
          <div className="flex justify-center gap-4">
            <Comment_cards 
            src = "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
            alt = "This is a comment image"
            pic =  "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
            pic_alt = "This is a comment image"
            name = "Sofia Lakes"
            location = "Michigan USA"
            rate = "4"
            description = "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
            />
            <Comment_cards 
            src = "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
            alt = "This is a comment image"
            pic =  "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
            pic_alt = "This is a comment image"
            name = "Sofia Lakes"
            location = "Michigan USA"
            rate = "4"
            description = "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
            />
            <Comment_cards 
            src = "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
            alt = "This is a comment image"
            pic =  "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
            pic_alt = "This is a comment image"
            name = "Sofia Lakes"
            location = "Michigan USA"
            rate = "4"
            description = "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-7">
          <h1 className="font-primary text-[40px]">What People Say <br/>About Jonyam</h1>
          <div  className="flex justify-center gap-4">
            <Residence_card 
            img_url = "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?ixid=M3w2Mzg3NTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcyMjQ2ODkyNHw&ixlib=rb-4.0.3"
            alt = "Real estate image"
            location = "Nairobi, Kenya"
            rooms = "5 rooms"
            sq_ft = "1000 sq ft"
            price = "$20,000"
          />
          <Residence_card 
            img_url = "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?ixid=M3w2Mzg3NTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcyMjQ2ODkyNHw&ixlib=rb-4.0.3"
            alt = "Real estate image"
            location = "Nairobi, Kenya"
            rooms = "5 rooms"
            sq_ft = "1000 sq ft"
            price = "$20,000"
          />
          <Residence_card 
            img_url = "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?ixid=M3w2Mzg3NTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcyMjQ2ODkyNHw&ixlib=rb-4.0.3"
            alt = "Real estate image"
            location = "Nairobi, Kenya"
            rooms = "5 rooms"
            sq_ft = "1000 sq ft"
            price = "$20,000"
          />          
          </div>
          <div className="flex gap-16">
          <IoIosArrowBack className="w-16 h-16 text-white bg-custom1 rounded-full p-3"/>
          <IoIosArrowForward className="w-16 h-16 text-white bg-custom1 rounded-full p-3"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="font-primary text-[40px] text-center">Do You have Any Questions? <br /> Get Help From Us</h1>
          <div className="flex justify-center items-center gap-16">
            <span className="flex">
              <MdOutlineVerified className="w-[18px] h-[18px] p-0 m-0"/>
              <p className="font-para">Chat live with our support Team</p>
            </span>
            <span className="flex">
              <MdOutlineVerified className="w-[18px] h-[18px] p-0 m-0"/>
              <p className="font-para">Chat live with our support Team</p>
            </span>
          </div>
          <div className="flex justify-center items-center gap-5">
            <input 
              type="text"
              placeholder="Enter your email address"
              className="bg-custom2 rounded h-10 px-4"
              />
            <Sign_button 
              size = 'small'
              name = 'Submit'
              />
          </div>
        </div>
        <Footer />
      </main>
  );
}
