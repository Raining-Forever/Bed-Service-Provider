import { createContext, useContext, useState } from "react";

const ScoreContext = createContext(-1);

export const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(-1);
  return (
    <ScoreContext.Provider value={[score, setScore]}>
      {children}
    </ScoreContext.Provider>
  );
};

export const useScoreContext = () => {
  return useContext(ScoreContext);
};
