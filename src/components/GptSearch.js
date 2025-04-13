import { useSelector } from "react-redux";
import GptSearchBar from "./GptSearchBar";
import TmdbSuggestions from "./TmdbSuggestions";

const GptSearch = () => {
  const gptNames = useSelector(store=> store?.gptSearch?.gptNames);
  return (
    <div className='relative pt-40 mb-10 z-10 justify-items-center'>
      <div className='w-8/12 mb-6 p-8 bg-black'>
        <GptSearchBar />
      </div>
      {gptNames && <div className='w-8/12 pb-6 bg-black bg-opacity-80'>
        <TmdbSuggestions />
      </div>}
    </div>
  );
};
export default GptSearch;
