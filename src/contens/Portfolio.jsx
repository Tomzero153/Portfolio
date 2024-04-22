import React from "react";
import proFileImg from "../assets/profile.jpg";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/Linkedin.png";
import Slider from "../components/Slider";
import silde1 from "../assets/home.png";
import silde2 from "../assets/item.png";
import silde3 from "../assets/cart.png";
import silde4 from "../assets/admin.png";
import silde5 from "../assets/account.png";
import pos1 from "../assets/P1.png";
import pos2 from "../assets/P2.png";
import pos3 from "../assets/P3.png";

const Portfolio = () => {
  let slides2 = [pos1, pos2, pos3];
  let slides = [silde1, silde2, silde3, silde4,silde5];
  return (
    <>
      {/*<!-- Component: Slider with indicators & controls inside --> */}

      <div className="h-auto xl:w-[1280px] w-full m-auto mb-[200px]">
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
                <a href="https://nextgenmarketplace-32c72ba3f33b.herokuapp.com/">
                  <button className="md:p-3 p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400">
                    {" "}
                    LIVE DEMO{" "}
                  </button>
                  </a>
                  <a href="https://github.com/Tomzero153/ecom_nextgen">
                  <button className="md:p-3 p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400">
                    {" "}
                    SOURCE CODE
                  </button>
                  </a>
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

          <div className="flex  md:flex-nowrap flex-wrap mt-20 justify-center ">
            <div className=" ml-10 md:w-3/6 w-5/6">
              <div className="w-[90%] m-auto">
                <Slider slides={slides2} />
              </div>
            </div>
            <div className="md:w-3/6 w-4/6 md:ml-20  md:mt-0  mt-5 ">
              <p className="text-left  text-yellow-400 sm:text-3xl  underline underline-offset-8 decoration-yellow-400 font-bold">
              Portfolio
              </p>
              <p className="sm:text-xl text-base text-left mt-5 text-white font-bold">
                Portfolio Website
              </p>
              <p className="sm:text-xl text-base text-left mt-5 text-white">
                This portfolio website is built using
                <span className="text-yellow-400 font-bold"> React </span>
                and styled with{" "}
                <span className="text-yellow-400 font-bold">
                  Tailwind CSS
                </span>{" "}
                for design consistency. It showcases my works and personal
                information.
              
              </p>
              <div className="sm:text-xl text-base flex mt-10  justify-center ">
                <div className=" flex gap-5 md:text-2xl text-base justify-between">
                  {/* <button className="md:p-3 p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400">
                    {" "}
                    LIVE DEMO{" "}
                  </button> */}
                  <a href="https://github.com/Tomzero153/Portfolio">
                  <button className="md:p-3 p-2 bg-slate-700 text-white rounded-md hover:bg-yellow-400">
                    {" "}
                    SOURCE CODE
                  </button>
                  </a>
                </div>
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
