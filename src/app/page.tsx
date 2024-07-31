import Comment_cards from "@/components/Comment_card";
import Experience_cards from "@/components/Experience_cards";
import Residence_card from "@/components/Residence_card";
import Custom from "./Custom";

export default function Home() {
  return (
      <main className="bg-white w-screen h-96">
        <Experience_cards
        icon = "<FaLocationDot />"
         title = "Card title"
         description = "This is the description of the card"
        />
        <div className="p-10">  Hello there</div>
        <Comment_cards 
          icon = "<FaLocationDot />"
          title = "Card title"
          description = "This is the description of the card"/>

        <div className="p-10">  Hello there</div>


        <Residence_card 
          img_url = "https://unsplash.com/photos/a-tall-building-with-a-skylight-above-it-6ar_FBdp45I"
          alt = "Real estate image"
          location = "Nairobi, Kenya"
          rooms = "5 rooms"
          sq_ft = "1000sqft"
          price = "$20000"
        />
        <Custom />
      </main>
  );
}
