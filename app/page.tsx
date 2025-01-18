import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-[12vh] grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full h-[50vh] pl-[6vw] pt-[24vh] flex">
        <Image src='/ivytext.PNG' alt='ivyprojects' width={300} height={100} className="z-1"/>
        <Image src='/ivyflower.PNG' alt="" width={100} height={100} className="absolute top-[12vh] right-[3vw]  z-10" />
        <Image src='/ivytape.PNG' alt="" width={100} height={100} className="absolute top-[20vh] left-[4vw] z-10"/>
      </div>
      <div className="">

      </div>
    </div>
  );
}
