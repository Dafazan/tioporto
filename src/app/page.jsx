import Image from "next/image";

export default function Home() {
  return (
    <div className='w-screen min-h-screen relative overflow-x-hidden'>
      <div className='absolute w-full'>
        <img className='hover:scale-105 duration-150 w-full ' src="./bg.jpg" alt="" />
      </div>
      <div className='absolute flex flex-col w-full items-center justify-center py-40'>
        <div className='flex flex-col justify-start'>
          <img src="./grt.png" alt="" />
          <img className='hover:scale-105 duration-150 w-44' src="./myf.png" alt="" />

        </div>
        <div className="flex w-full py-20 px-10">
          <img className='hover:scale-105 duration-150 w-9/12' src="./ads.png" alt="" />
          <img className='hover:scale-105 duration-150 w-3/12' src="./prf.png" alt="" />
        </div>
        <div className="flex w-full justify-center  px-10">
          <img className='hover:scale-105 duration-150 ' src="./cnt.png" alt="" />

        </div>
        <div className="flex w-full justify-center  px-10">
          <a href="https://www.instagram.com/thenoviar">

            <img className='w-20 hover:scale-105 duration-150' src="./ig.png" alt="" />
          </a>

        </div>
      </div>
    </div>
  );
}
