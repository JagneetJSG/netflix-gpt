import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export default function Heading({ children }) {
const level = useContext(LevelContext);

  switch (level) {
    case 1:
      return <h1 className='text-3xl'>{children}</h1>;
    case 2:
      return <h2 className='text-2xl'>{children}</h2>;
    case 3:
      return <h3 className='text-xl'>{children}</h3>;
    case 4:
      return <h4 className='text-lg'>{children}</h4>;
    default:
      throw Error("Unknown Level:" + level);
  }
}
