import { useDispatch } from "react-redux";
import { API_FETCH_DATA } from "../utils/constants";
import openai from "../utils/openai";
import { addGPTSuggestedMovies } from "../utils/gptFunctionalityData";

const useGptFetchFromTMDB = (inputRef) => {
  const dispatch = useDispatch();
  const FetchMoviesFromDatabase = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_FETCH_DATA
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const userInput = inputRef.current.value;
    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      userInput +
      ". Give me just five names comma separated as for example Power Rangers, Transformers, Fast and Furious Five";

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      store: true,
      messages: [{ "role": "user", "content": gptQuery }],
    });
    const AiApiResult = completion.choices?.[0].message.content;
    //Indiana Jones and the Last Crusade, Mad Max: Fury Road, Jumanji: Welcome to the Jungle, Pirates of the Caribbean: The Curse of the Black Pearl, Guardians of the Galaxy
    const GptRecommendedMovies = AiApiResult.split(",");
    //['Jungle Cruise', ' Uncharted', ' Free Guy', ' The Lost City', ' Jungle Book']

    const PromisesArray = GptRecommendedMovies.map((movie) =>
      FetchMoviesFromDatabase(movie)
    );
    const moviesData = await Promise.all(PromisesArray);
    console.log(moviesData);
    dispatch(addGPTSuggestedMovies({ GptRecommendedMovies, moviesData }));
  };
  return handleGPTSearchClick;
};

export default useGptFetchFromTMDB;
