import React from "react";
import "./css/Skill.css"
import proFileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github.png";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'; 

const Skill = () => {
  useEffect(()=>
  {
    Aos.init({duration:1200})

  })
  return (
    <div className=" h-svh w-full">
      <div className="mt-5 ">
        <h2 className="text-left text-white sm:text-8xl  underline underline-offset-8 decoration-yellow-400"  data-aos="fade-up">
          MY SKILL
        </h2>
        <div className="flex mt-10">
            <div className="grid grid-cols-3 gap-y-5 sm:grid-cols-4 mt-10 justify-center ">
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-right">
                <img className="rounded-full w-9/12 " src={githubLogo} alt="" />
                <p className="mt-5 text-white font-bold textBackground">C# .NET</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-up">
                <img className="rounded-full w-9/12 " src={proFileImg} alt="" />
                <p className="mt-5 text-white font-bold textBackground">C#</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-down">
                <img className="rounded-full w-9/12 " src={githubLogo} alt="" />
                <p className="mt-5 text-white font-bold textBackground">C#</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-up">
                <img className="rounded-full w-9/12 " src={githubLogo} alt="" />
                <p className="mt-5 text-white font-bold textBackground">C#</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12 bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-up">
                <img className="rounded-full w-9/12 " src={githubLogo} alt="" />
                <p className="mt-5 text-white font-bold textBackground">C#</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-down">
                <img className="rounded-full w-9/12 " src={githubLogo} alt="" />
                <p className="mt-5 text-white font-bold textBackground">C#</p>
              </div>
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Skill;
