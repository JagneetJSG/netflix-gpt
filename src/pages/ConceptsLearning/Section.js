import React, { useContext } from "react";
import { LevelContext } from "./LevelContext";

const Section = ({ children, isFancy }) => {
  const level = useContext(LevelContext);
  return (
    <section className={'section ' + (isFancy? 'fancy': '') }>
      <LevelContext value={level+1}>{children}</LevelContext>
    </section>
  );
};

export default Section;
