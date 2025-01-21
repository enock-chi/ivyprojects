import Image from "next/image";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from "next/link";
import Price from "@/section/Price";

export default function Home() {
  return (
    <div className="pt-[12vh] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-[50vh] pl-[14vw] pt-[24vh] flex">
        <Image src='/ivytext.PNG' alt='ivyprojects' width={300} height={100} className="z-1"/>
        <Image src='/ivyflower.PNG' alt="" width={100} height={100} className="absolute top-[12vh] right-[4vw]  z-10" />
        <Image src='/ivytape.PNG' alt="" width={100} height={100} className="absolute top-[20vh] left-[4vw] z-10"/>
      </div>
      <div className="flex flex-col space-y-[5vh] text-[#c6a48e] w-full mt-[18vh] h-auto">
          <p className="font-extrabold w-[75vw] text-[1.7rem] relative left-0 pl-[5vw]">Whispers of petals, echoes of love</p>
          <p 
            className="text-[1.7rem] w-[80vw] font-extrabold text-right ml-auto pr-[5vw]" 
            style={{
              WebkitTextStroke: "1px #c6a48e",
              color: "transparent"
            }}
          >
            Each bloom tells a story, handwoven into bouquets that speak the language of the heart.
          </p>
      </div>
      <div className="relative top-[-5vh] bg-[#c6a48e] w-full h-[8vh] space-x-[10vw] flex justify-center items-center">
          <Link href={'https://www.instagram.com/ivyprojects_/?hl=en'}><i className="bi bi-instagram text-white text-[2rem]"></i></Link>
          <Link href={'tel:'}><i className="bi bi-telephone text-white text-[2rem]"></i></Link>
      </div>
      <Price />
    </div>
  );
}
