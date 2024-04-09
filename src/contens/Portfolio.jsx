import React from "react";
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

      <div className="h-auto w-full mb-[200px]">
        <div className="mt-5 ">
          <h2 className="md:text-left  text-white sm:text-8xl text-4xl  underline underline-offset-8 decoration-yellow-400">
          Portfolio
          </h2>

          <div className="flex  md:flex-nowrap flex-wrap mt-20 justify-center ">
            <div className=" ml-10 md:w-3/6 w-5/6">
              <div className="w-[90%] m-auto">
                <Slider slides={slides} />
              </div>
            </div>
            <div className="md:w-3/6 w-4/6 md:ml-20  md:mt-0  mt-5 ">
              <p className="text-left  text-yellow-400 sm:text-3xl  underline underline-offset-8 decoration-yellow-400 font-bold">
                NextGen Marketplace
              </p>
              <p className="sm:text-xl text-base text-left mt-5 text-white font-bold">
                Futhere E-Commerce Store
              </p>
              <p className="sm:text-xl text-base text-left mt-5 text-white">
                NextGenMarketplace is an e-commerce platform developed using
                <span className="text-yellow-400 font-bold"> Next.js </span>for
                both server-side and client-side rendering.
              </p>
              <p className="sm:text-xl text-base text-left mt-2 text-white">
                {" "}
                <span className="text-yellow-400 font-bold">
                  {" "}
                  Tailwind CSS{" "}
                </span>{" "}
                is utilized for styling to enhance the website's aesthetics.{" "}
                <span className="text-yellow-400 font-bold"> MongoDB </span>
                is utilized for efficient data storage and retrieval.
              </p>
              <div className="sm:text-xl text-base flex mt-10  justify-center ">
                <div className=" flex gap-5 md:text-2xl text-base justify-between">
                  <button className="md:p-3 p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400">
                    {" "}
                    LIVE DEMO{" "}
                  </button>
                  <button className="md:p-3 p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400">
                    {" "}
                    SOURCE CODE
                  </button>
                </div>
                {/* <div className="sm:text-xl   text-base flex ml-10  h-10 ">
            <button className='p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400'> LIVE DEMO </button>
            </div>

            <div className="sm:text-xl  text-base  flex ml-10  h-10 ">
            <button className=' bg-slate-700 text-white rounded-md hover:bg-yellow-400'> LIVE DEMO </button>
            </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<!-- End Slider with indicators & controls inside --> */}
    </>
  );
};

export default Portfolio;
