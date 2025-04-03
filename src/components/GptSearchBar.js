import React from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/constants";

const GptSearchBar = () => {
  const languageMode = useSelector((store) => store.language?.language);
  console.log(languageMode);
  return (
    <div className='w-6/12 absolute top-[35%] left-[50%] middle-form'>
      <form className='bg-black p-6 grid grid-cols-12'>
        <input
          type='text'
          placeholder={language[languageMode].placeholder}
          className='p-3 col-span-9'
        ></input>
        <button className='col-span-3 text-white font-bold text-2xl bg-[red]'>
          {language[languageMode].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
