import Experience_cards from "@/components/Experience_cards";
import Custom from "./Custom";

export default function Home() {
  return (
      <main className="bg-white w-screen h-96">
        <Experience_cards
        icon = "Icon"
         title = "Card title"
         description = "This is the description of the card"
        />
        <Custom />
      </main>
  );
}
