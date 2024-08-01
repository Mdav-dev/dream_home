import Comment_cards from "@/components/Majors/Comment_card";
import Experience_cards from "@/components/Majors/Experience_cards";
import Filter_card from "@/components/Filter_card";
import Residence_card from "@/components/Majors/Residence_card";
import Custom from "./Custom";
import Header from "@/components/Header";

export default function Home() {
  return (
      <main className="bg-white w-screen h-96">
        <Header />
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
          pic_alt = ""
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
