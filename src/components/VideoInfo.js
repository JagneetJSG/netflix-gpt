import React from "react";

const VideoInfo = ({ title, description }) => {
  return (
    <div className='md:absolute p-10 md:p-0 w-screen aspect-video text-white bg-gradient-to-r from-black to-black md:bg-gradient-to-r md:from-black md:to-transparent'>
      <div className='w-full md:w-4/6 lg:w-3/6 xl:w-2/6 md:absolute md:top-[40%] md:left-[38%] lg:left-[34%] xl:left-[22%] middle-form-sm pt-20 pt-md-0'>
        <h1 className='font-bold text-4xl lg:text-5xl'>{title}</h1>
        <p className='text-lg lg:text-xl py-4'>{description}</p>
        <div className='flex'>
          <button className='rounded-lg w-2/6 lg:w-1/2 text-xl lg:text-2xl font-bold py-2 lg:py-4 mr-1 lg:mr-2 bg-white text-black'>
            ▶ Play
          </button>
          <button className='rounded-lg w-2/6 lg:w-1/2 text-xl lg:text-2xl font-bold py-2 lg:py-4 ml-1 lg:ml-2 bg-slate-700 hover:bg-slate-800'>
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
