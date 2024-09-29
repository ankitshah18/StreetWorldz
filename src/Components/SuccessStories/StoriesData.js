const StoriesInfo = [
  {
    id: "1",
    number: "one",
    title: "Donate Us To Buy Medicines For Injured Dogs",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
  {
    id: "2",
    number: "two",
    title: "Donate Us To Buy Medicines For Injured Dogs",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
  {
    id: "3",
    number: "three",
    title: "Donate Us To Buy Medicines For Injured Dogs",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
  {
    id: "4",
    number: "four",
    title: "Donate Us To Buy Medicines For Injured Dogs",
    description:
      "StreetWorldz is a beacon of hope for stray and injured dogs, providing a safe haven for over 500 dogs at our shelter.",
  },
];

const getCardColor = (id) => {
  switch (id) {
    case "1":
      return { backgroundColor: "#ffffff", borderRadius: "1rem" }; // Yellow for '1 Day Meal'
    case "2":
      return { backgroundColor: "#ffffff", borderRadius: "1rem" }; // Red for '1 Time Meal'
    case "3":
      return { backgroundColor: "#ffffff", borderRadius: "1rem" }; // Green for 'For Street'
    case "4":
      return { backgroundColor: "#ffffff", borderRadius: "1rem" }; // Blue for 'For Shelter'
    default:
      return { backgroundColor: "#ffffff" }; // Default color
  }
};

export { StoriesInfo, getCardColor };
