import React from 'react'
import proFileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/Linkedin.png";
import Slider from "../components/Slider";



const Portfolio = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}
      
        <div className=" h-svh w-full">
      <div className="mt-5 ">
        <h2 className="text-left text-white sm:text-8xl  underline underline-offset-8 decoration-yellow-400">ABOUT ME</h2>
        
        <div className="flex mt-20">
            <div className=" ml-10 w-3/6">
            <div className="w-[80%] m-auto">
       <Slider  slides= {slides}/>
       </div>
            </div>
            <div className="w-3/6 ml-20">
            <p className="text-left  text-yellow-400 sm:text-2xl  underline underline-offset-8 decoration-yellow-400">THATTAPONG ROMJAROEN</p>
           <p className="text-left mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo corporis commodi reiciendis molestias magnam veritatis sit velit corrupti iure harum, dolores accusamus recusandae laborum, vel vero totam consequuntur quasi odit.</p>
           <p className="text-left mt-2 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo corporis commodi reiciendis molestias magnam veritatis sit velit corrupti iure harum, dolores accusamus recusandae laborum, vel vero totam consequuntur quasi odit.</p>
         <div className="flex mt-10  justify-center ">
         <div className="flex ml-10  h-10 ">
            <button className=' bg-slate-700 text-white rounded-md hover:bg-yellow-400'> LIVE DEMO </button>
            </div>

            <div className="flex ml-10  h-10 ">
            <button className=' bg-slate-700 text-white rounded-md hover:bg-yellow-400'> LIVE DEMO </button>
            </div>
          
            

         </div>
          
           </div>
        </div>

        
        
      </div>
    </div>
    
      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  )
}

export default Portfolio