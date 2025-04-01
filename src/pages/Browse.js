import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import SecondaryContainer from "../components/SecondaryContainer";
import useGetMoviesData from "../hooks/useGetMoviesData";

const Browse = () => {
  useGetMoviesData();
  return (
    <div className='relative'>
      <div className='absolute z-10 w-screen bg-gradient-to-b from-gray-950 from-40%'>
        <Header />
      </div>
      {/* 
      Main Container
       - Video container
        - Video Title
      Secondary container
       - Movies List rows * n
       - movie cards * n

      */}

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
