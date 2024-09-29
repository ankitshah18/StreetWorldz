const FoodCampaign = [
  {
    id: "1",
    number: "one",
    title: "1 Day Meal",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
    routName: "1-day-meal",
  },
  {
    id: "2",
    number: "two",
    title: "1 Time Meal",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
    routName: "1-time-meal",
  },
  {
    id: "3",
    number: "three",
    title: "For Street",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
    routName: "for-street",
  },
  {
    id: "4",
    number: "four",
    title: "For Shelter",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
    routName: "for-shelter",
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
