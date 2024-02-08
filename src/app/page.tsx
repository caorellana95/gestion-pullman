import Image from "next/image";
import Footer from "../../components/footer";
import Card from "../../components/card";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-800 flex-col justify-between ">
    <Card/>
      <div className="">
      <Footer/>
      </div>
      
    </main>
  );
}
