import Image from "next/image";
import Footer from "../../components/footer";
import Card from "../../components/card";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-gradient-to-b from-blue-500 flex-col items-center justify-between">
      <div className=" w-full items-center justify-between text-sm lg:flex">
    <Card/>
      <div className="flex">
      <Footer/>
      </div>
      </div>
    </main>
  );
}
