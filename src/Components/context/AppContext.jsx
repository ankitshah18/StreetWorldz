import { createContext, useState } from "react";
import { StoriesInfo } from "../SuccessStories/StoriesData";
import { FoodCampaign } from "../Campaign/CampaignData";
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // console.log(FoodCampaign);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [foodItemCounters, setFoodItemCounters] = useState({});
  const [itemCosts, setItemCosts] = useState({});
  const [totalCost, setTotalCost] = useState(0);
  const [donorName, setDonorName] = useState("");
  const [donationDetails, setDonationDetails] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <AppContext.Provider
      value={{
        StoriesInfo,
        selectedStory,
        setSelectedStory,
        FoodCampaign,
        selectedMeal,
        setSelectedMeal,
        foodItemCounters,
        setFoodItemCounters,
        itemCosts,
        setItemCosts,
        totalCost,
        setTotalCost,
        donorName,
        setDonorName,
        donationDetails,
        setDonationDetails,
        isAuthorized,
        setIsAuthorized,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
