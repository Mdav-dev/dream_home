import Comment_cards from "@/components/Majors/Comment_card";
import Experience_cards from "@/components/Majors/Experience_cards";
import Filter_card from "@/components/Filter_card";
import Residence_card from "@/components/Majors/Residence_card";
import Custom from "./Custom";
import Header from "@/components/Header";
import Sign_button from "@/components/Minors/Sign_button";

export default function Home() {
  return (
      <main className="bg-white w-screeen flex flex-col justify-start items-center">
        <Header />
        <div className={`flex justify-between items-start h-lvh w-screen px-4 `}>
          <div className={`flex flex-col justify-start items-start gap-10 px-4 pl-10`}>
            <h1 className="font-primary">Find Your Dream Home</h1>
            <h4>Explore our curated selection of exquisite<br/>properties mericulously tailored to your<br/>unique dream home vision</h4>
            <Sign_button name = "Sign Up" size = "large"/>
          </div>
          <img 
          className="p-0 w-3/5 h-full image-style" 
          src="https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3" 
          alt="" />
        </div>
        <Filter_card />
        <p>Make space for the KIng</p>
        <Experience_cards
        icon = "<FaLocationDot />"
         title = "Expert Guidance"
         description = "Benefit from our team's seasoned expertise for a smooth buying experience"
        />
        <div className="p-10">  Hello there</div>
        <Comment_cards 
          src = "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
          alt = "This is a comment image"
          pic =  "https://images.unsplash.com/photo-1719317579340-9df7e3dfb441?ixid=M3w2Mzg3NTd8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI0Njk5Njh8&ixlib=rb-4.0.3"
          pic_alt = "This is a comment image"
          name = "Sofia Lakes"
          location = "Michigan USA"
          rate = "4"
          description = "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched."/>

        <div className="p-10">  Hello there</div>


        <Residence_card 
          img_url = "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?ixid=M3w2Mzg3NTd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcyMjQ2ODkyNHw&ixlib=rb-4.0.3"
          alt = "Real estate image"
          location = "Nairobi, Kenya"
          rooms = "5 rooms"
          sq_ft = "1000 sq ft"
          price = "$20,000"
        />
        <Custom />
      </main>
  );
}
