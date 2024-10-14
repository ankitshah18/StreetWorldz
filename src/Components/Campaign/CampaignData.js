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
    foodItems: [
      {
        itemTitle: "Chicken Rice",
        itemCost: "150",
        foodDescription:
          "A balanced meal rich in protein and carbohydrates, essential for maintaining energy levels in dogs.",
      },
      {
        itemTitle: "Dry Dog Food (Large Pack)",
        itemCost: "90",
        foodDescription:
          "Provides essential nutrients for a dog's daily health, with a focus on maintaining strong teeth and digestion.",
      },
      {
        itemTitle: "Canned Wet Dog Food",
        itemCost: "220",
        foodDescription:
          "Great for hydration and providing easy-to-eat nutrition, especially for older dogs or those with dental issues.",
      },
      {
        itemTitle: "Dog Biscuits",
        itemCost: "60",
        foodDescription:
          "A convenient snack that helps clean teeth while providing a quick energy boost.",
      },
    ],
    description:
      "Our 1 Day Meal campaign focuses on providing nutritious meals for one full day, ensuring that the dogs have the energy and nutrients they need to stay healthy and active.",
  },
  {
    id: "2",
    number: "two",
    title: "1 Time Meal",
    image: gallery_2,
    foodItems: [
      {
        itemTitle: "Boiled Chicken",
        itemCost: "130",
        foodDescription:
          "A lean source of protein that's gentle on the stomach and ideal for dogs with sensitivities.",
      },
      {
        itemTitle: "Pedigree Adult Dog Food",
        itemCost: "100",
        foodDescription:
          "Formulated to meet the daily nutritional needs of adult dogs, supporting overall health and well-being.",
      },
      {
        itemTitle: "Chicken Jerky Treats",
        itemCost: "85",
        foodDescription:
          "High-protein treats that promote healthy muscles while being a tasty reward for training or good behavior.",
      },
      {
        itemTitle: "Pumpkin Puree",
        itemCost: "70",
        foodDescription:
          "A natural source of fiber that aids in digestion, helping to regulate the digestive system of dogs.",
      },
    ],
    description:
      "The 1 Time Meal initiative ensures that each dog gets at least one nutritious and filling meal every day, providing them with the basic sustenance they need to thrive.",
  },
  {
    id: "3",
    number: "three",
    title: "For Street",
    image: gallery_3,
    foodItems: [
      {
        itemTitle: "Grain-Free Kibble",
        itemCost: "200",
        foodDescription:
          "Ideal for dogs with grain allergies or sensitivities, providing nutrition without common allergens.",
      },
      {
        itemTitle: "Cottage Cheese",
        itemCost: "50",
        foodDescription:
          "A good source of calcium and protein, supporting bone health and muscle development.",
      },
      {
        itemTitle: "Salmon Dog Food",
        itemCost: "180",
        foodDescription:
          "Rich in omega-3 fatty acids, which help promote a healthy coat and skin, and support cognitive function.",
      },
      {
        itemTitle: "Dog Dental Chews",
        itemCost: "90",
        foodDescription:
          "Designed to help clean teeth and reduce plaque and tartar buildup, improving oral health.",
      },
    ],
    description:
      "The For Street campaign is dedicated to feeding stray dogs, ensuring they receive the necessary nutrition and care while living on the streets. This effort helps maintain their health and happiness.",
  },
  {
    id: "4",
    number: "four",
    title: "For Shelter",
    image: gallery_4,
    foodItems: [
      {
        itemTitle: "Milk",
        itemCost: "60",
        itemId: 1,
        foodDescription:
          "A vital source of calcium and protein for puppies and adult dogs, helping with bone strength and growth.",
      },
      {
        itemTitle: "Pedigree Chicken",
        itemCost: "110",
        itemId: 2,
        foodDescription:
          "A complete and balanced meal with chicken protein, essential for muscle development and overall health.",
      },
      {
        itemTitle: "Chappi Adult Dry Dog Food",
        itemCost: "140",
        itemId: 3,
        foodDescription:
          "A budget-friendly option that still provides the necessary nutrients for adult dogs to stay active and healthy.",
      },
      {
        itemTitle: "Himalaya Meat Rice Healthy Pet Adult Dog Dry Food",
        itemCost: "200",
        itemId: 4,
        foodDescription:
          "Supports joint health and digestion, with a blend of rice and meat for optimal nutrition and taste.",
      },
    ],
    description:
      "Our For Shelter campaign is focused on providing food for dogs in our care, ensuring they are well-fed and taken care of while they await adoption or recovery in our shelter.",
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
