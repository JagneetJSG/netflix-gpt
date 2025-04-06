import { useState } from "react";
import GptSearch from "../components/GptSearch";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useGetMoviesData from "../hooks/useGetMoviesData";
import { NETFLIX_BG } from "../utils/constants";

const Browse = () => {
  const [shouldGptOpen, setShouldGptOpen] = useState(false);
  useGetMoviesData();
  return (
    <div className='relative overflow-x-hidden'>
      <div className='absolute z-20 w-screen bg-gradient-to-b from-gray-950 from-30%'>
        <Header
          stateVariable={shouldGptOpen}
          setShouldGptOpen={() => setShouldGptOpen(!shouldGptOpen)}
        />
      </div>
      {/* 
      Main Container
       - Video container
        - Video Title
      Secondary container
       - Movies List rows * n
       - movie cards * n
      */}
      {shouldGptOpen ? (
        <>
          <div className='fixed h-screen w-screen'>
            <img className="w-[100%] h-[100%] object-cover" alt='app-bg' src={NETFLIX_BG} />
          </div>
          <GptSearch />
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
