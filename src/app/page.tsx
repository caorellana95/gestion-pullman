import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-800 flex min-h-screen flex-col items-center justify-between p-12">
      <div className="pb-24 flex ">
      <Image
          src={"/images/menu.png"}
          alt="Logo"
          width={120}
          height={19}
          className="p-12 "
        />
        <Image
          src={"/images/pullman-logo.png"}
          alt="Logo"
          width={200}
          height={99}
          className="w-[500px]"
        />
      </div>
    </main>
  );
}
