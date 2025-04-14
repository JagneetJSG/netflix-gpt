import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { language } from "../utils/constants";
import useGptFetchFromTMDB from "../hooks/useGptFetchFromTMDB";

const GptSearchBar = () => {
  const languageMode = useSelector((store) => store.language?.language);
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleGPTSearchClick = useGptFetchFromTMDB(inputRef);
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className='grid grid-cols-12'>
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          type='text'
          placeholder={
            !inputValue && language[languageMode].placeholder
          }
          className='p-3 col-span-10'
        ></input>
        <button
          onClick={handleGPTSearchClick}
          className='col-span-2 text-white font-bold text-2xl bg-[red]'
          disabled={!inputValue}
        >
          {language[languageMode].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
