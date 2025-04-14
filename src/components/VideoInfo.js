import React from "react";

const VideoInfo = ({ title, description }) => {
  return (
    <div className='md:absolute p-10 md:p-0 w-screen aspect-video text-white bg-gradient-to-r from-black to-black md:bg-gradient-to-r md:from-black md:to-transparent'>
      <div className='w-full md:w-4/6 lg:w-2/6 md:absolute md:top-[40%] md:left-[40%] lg:left-[22%] middle-form-sm pt-20 pt-md-0'>
        <h1 className='font-bold text-4xl md:text-5xl'>{title}</h1>
        <p className='text-lg md:text-xl py-4'>{description}</p>
        <div className='flex'>
          <button className='rounded-lg w-2/6 md:w-1/2 text-xl md:text-2xl font-bold py-2 md:py-4 mr-1 md:mr-2 bg-white text-black'>
            ▶ Play
          </button>
          <button className='rounded-lg w-2/6 md:w-1/2 text-xl md:text-2xl font-bold py-2 md:py-4 ml-1 md:ml-2 bg-slate-700 hover:bg-slate-800'>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
