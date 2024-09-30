import { createContext, useState } from "react";
import { StoriesInfo } from "../SuccessStories/StoriesData";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <AppContext.Provider
      value={{ StoriesInfo, selectedStory, setSelectedStory }}
    >
      {children}
    </AppContext.Provider>
  );
};
