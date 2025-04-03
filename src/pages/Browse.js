import { useState } from "react";
import GptSearch from "../components/GptSearch";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useGetMoviesData from "../hooks/useGetMoviesData";

const Browse = () => {
  const [shouldGptOpen, setShouldGptOpen] = useState(false);
  useGetMoviesData();
  return (
    <div className='relative'>
      <div className='absolute z-10 w-screen bg-gradient-to-b from-gray-950 from-30%'>
        <Header stateVariable={shouldGptOpen} setShouldGptOpen={() => setShouldGptOpen(!shouldGptOpen)} />
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
        <GptSearch />
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
