import React from "react";

const VideoInfo = ({ title, description }) => {
  return (
    <div className='absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <div className="w-2/6 absolute top-[40%] left-[22%] middle-form">
        <h1 className='font-bold text-5xl'>{title}</h1>
        <p className='text-xl py-4'>{description}</p>
        <div className='flex'>
          <button className='rounded-lg w-1/2 text-2xl font-bold py-4 mr-2 bg-white text-black'>
            ▶ Play
          </button>
          <button className='rounded-lg w-1/2 text-2xl font-bold py-4 ml-2 bg-slate-700 hover:bg-slate-800'>
           More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
