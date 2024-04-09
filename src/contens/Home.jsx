import React from 'react'
import { useEffect, useState } from 'react';
import "./css/Home.css"

const Home = () => {

  const [text, setText] = useState(""); // สร้าง state เพื่อเก็บข้อความ
  const message = "I  am looking for an opportunity to be a Software Developer"; // ข้อความที่ต้องการแสดง

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText((prevText) => prevText + message[index ]); // เพิ่มอักษรตามลำดับ
      index++;
      if (index === message.length -1) clearInterval(interval); // เมื่อเสร็จสิ้นข้อความให้หยุด interval
    }, 100); // ระยะเวลาที่จะแสดงอักษรทีละตัว (เช่น 100 milliseconds)
    return () => clearInterval(interval); // ล้าง interval เมื่อ component unmount
  }, []);
  return (
    
    
    <div className=' h-svh w-full'>
     
     <div className='h-svh flex items-center justify-center'>
     <div className="flex flex-col gap-y-3 sm:mb-0 sm:gap-y-8 items-start sm:items-center">
            <span className="text-5xl font-bold tracking-tight text-white sm:text-9xl ">
            HI,THERE I AM 
            </span>

            <span className="text-5xl font-bold tracking-tight text-yellow-400 sm:text-9xl ">THATTAPONG
              </span>
    
            <p className=" mt-4 sm:text-2xl text-xl leading-8 text-white">
            {text}|
            </p>
            
          </div>
     </div>
    </div>
  )
}

export default Home