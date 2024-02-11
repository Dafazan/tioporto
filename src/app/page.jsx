'use client'
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const audio = new Audio('./bg.mp3');
    audio.loop = true;
    audio.play();
    const interval = setInterval(() => {
      // Increment count and loop back to 1 after reaching 3
      setCount((prevCount) => (prevCount % 3) + 1);
    }, 600);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect runs only once on mount


  let content;

  switch (count) {
    case 1:
      content = <img src="./grt.png" alt="" />;
      break;
    case 2:
      content = <img src="./grt2.png" alt="" />;
      break;
    case 3:
      content = <img src="./grt3.png" alt="" />;
      break;
    default:
      content = null;
  }


  return (
    <div className='w-screen min-h-screen relative overflow-x-hidden'>
      <div className='absolute w-full'>
        <img className='hover:scale-105 duration-150 w-full ' src="./bg.jpg" alt="" />
        <img className='hover:scale-105 duration-150 md:w-0 md:h-0 ' src="./bg.jpg" alt="" />
      </div>
      <div className='absolute flex flex-col w-full items-center justify-center py-40'>
        <div className='flex flex-col justify-start'>
          {content}

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
      <div className="absolute w-full">
        <div className="flex w-full p-10 justify-between">

          <img className='w-40 rotating-element hover:scale-125 duration-150' src="./flw.png" alt="" />
          <div>
            <img className='w-20 rotating-element hover:scale-125 duration-150' src="./flw.png" alt="" />
            <img className='w-10 me-9 rotating-element hover:scale-125 duration-150' src="./flw.png" alt="" />

          </div>
        </div>
      </div>
    </div>
  );
}
