import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";

const FoodCampaign = [
  {
    id: "1",
    number: "one",
    title: "1 Day Meal",
    image: gallery_1,
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
  {
    id: "2",
    number: "two",
    title: "1 Time Meal",
    image: gallery_2,
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
  {
    id: "3",
    number: "three",
    title: "For Street",
    image: gallery_3,
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
  {
    id: "4",
    number: "four",
    title: "For Shelter",
    image: gallery_4,
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
];

const getCardColor = (id) => {
  switch (id) {
    case "1":
      return { backgroundColor: "#f8b400", borderRadius: "1rem" }; // Yellow for '1 Day Meal'
    case "2":
      return { backgroundColor: "#e74c3c", borderRadius: "1rem" }; // Red for '1 Time Meal'
    case "3":
      return { backgroundColor: "#2ecc71", borderRadius: "1rem" }; // Green for 'For Street'
    case "4":
      return { backgroundColor: "#3498db", borderRadius: "1rem" }; // Blue for 'For Shelter'
    default:
      return { backgroundColor: "#ccc" }; // Default color
  }
};

export { FoodCampaign, getCardColor };
