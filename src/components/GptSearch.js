import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import TmdbSuggestions from "./TmdbSuggestions";

const GptSearch = () => {
  const gptNames = useSelector(store=> store?.gptSearch?.gptNames);
  return (
    <div className='relative pt-40 mb-10 z-10'>
      <div className='w-11/12 md:w-8/12 mb-6 p-4 md:p-8 bg-black ml-auto mr-auto'>
        <GptSearchBar />
      </div>
      {gptNames && <div className='w-11/12 md:w-8/12 pb-6 bg-black bg-opacity-80 ml-auto mr-auto'>
        <TmdbSuggestions />
      </div>}
    </div>
  );
};
export default GptSearch;
