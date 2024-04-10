import React from "react";
import "./css/Skill.css"
import proFileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github.png";
import nextjsLogo from "../assets/next.png";
import cssLogo from "../assets/css.png";
import htmlLogo from "../assets/html-5.png";

import mongodbLogo from "../assets/mongodb.svg";
import jsLogo from "../assets/js.png";
import nodejsLogo from "../assets/node-js.png";

import reactLogo from "../assets/react.svg";

import CLogo from "../assets/c-sharp.png";
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'; 

const Skill = () => {
  useEffect(()=>
  {
    Aos.init({duration:1200})

  })
  return (
    <div className=" h-auto xl:w-[1280px] w-full m-auto mb-[200px]">
      <div className="mt-5  ">
        <h2 className="md:text-left text-white sm:text-8xl text-4xl  underline underline-offset-8 decoration-yellow-400"  data-aos="fade-up">
          MY SKILL
        </h2>
        <div className="flex mt-10">
            <div className="grid grid-cols-3 gap-y-5 sm:grid-cols-4 mt-10 justify-center ">
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-right">
                <img className="pt-1 overflow-visible rounded-full w-9/12 " src={reactLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">React</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-up">
                <img className="pt-1 overflow-visible rounded-full w-9/12 " src={nextjsLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">Next js</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-down">
                <img className="pt-1 overflow-visible  w-9/12 " src={cssLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">CSS</p>
              </div>

              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-down">
                <img className="pt-1 overflow-visible  w-9/12 " src={htmlLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">HTML</p>
              </div>

              <div className="flex flex-col ml-10 w-8/12 bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-up">
                <img className="pt-1 overflow-visible rounded-full w-9/12 " src={jsLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">JavaScript</p>
              </div>
              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-up">
                <img className="pt-1 rounded-full w-9/12 " src={mongodbLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">MongoDB</p>
              </div>

              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-down">
                <img className="pt-1 overflow-visible  w-9/12" src={nodejsLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">Nodejs</p>
              </div>


              <div className="flex flex-col ml-10 w-8/12  bg-slate-700 justify-center items-center rounded-lg  hover:bg-yellow-400" data-aos="fade-down">
                <img className="pt-1 overflow-visible  w-9/12" src={CLogo} alt="" />
                <p className="mt-5 my-1 text-white font-bold textBackground">C# (.NET)</p>
              </div>
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Skill;
