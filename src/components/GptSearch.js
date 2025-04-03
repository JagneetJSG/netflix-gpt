import { NETFLIX_BG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <img alt="app-bg" src={NETFLIX_BG} />
      <GptSearchBar />
    </div>
  );
};
export default GptSearch;
