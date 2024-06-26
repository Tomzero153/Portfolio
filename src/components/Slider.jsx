import React from "react";
import { useState } from "react";
import {
    BsFillArrowRightCircleFill,
    BsFillArrowLeftCircleFill,
  } from "react-icons/bs";


const Slider = ({ slides }) => {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
    };
  
    let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    };
    
  return (
    <div className="overflow-hidden relative">
    <div
      className={`flex transition ease-out duration-40`}
      style={{
        transform: `translateX(-${current * 100}%)`,
      }}
    >
      {slides.map((s) => {
        return <img className=" rounded border-2  border-gray-300" src={s} />;
      })}
    </div>

    <div className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 text-white px-10 text-3xl">
      <button onClick={previousSlide}>
        <BsFillArrowLeftCircleFill />
      </button>
      <button onClick={nextSlide}>
        <BsFillArrowRightCircleFill />
      </button>
    </div>

    <div className="absolute  bottom-0 py-4 flex justify-center gap-3 w-full">
      {slides.map((s, i) => {
        return (
          <div
            onClick={() => {
              setCurrent(i);
            }}
            key={"circle" + i}
            className={`rounded-full w-5 h-5 cursor-pointer  ${
              i == current ? "bg-white" : "bg-gray-500"
            }`}
          ></div>
        );
      })}
    </div>
  </div>
  );
};

export default Slider;
