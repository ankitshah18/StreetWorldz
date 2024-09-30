import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import story1 from "../../assets/story-1.png";
import story2 from "../../assets/story-2.png";
import story3 from "../../assets/story-3.png";

const StoriesInfo = [
  {
    id: "1",
    number: "one",
    title: "Baby Camel And His Mother",
    description:
      "This is a good animal moral story to read with your children. Once upon a time, a baby camel lived with her mother. The baby camel was deep in thought one wonderful day as they lay on the ground. When the mother camel asked what was wrong with her, the baby camel remained silent. When the baby camel couldn't take it any longer, she inquired, 'Why do camels have humps?' the next day. 'Well, because we are desert animals, the humps let us store water for several days, so we can survive without water,' the mother explained with a smile. 'Why do camels have long legs and rounder feet?' the newborn camel inquired. 'These are made for walking in the hot desert,' the mother responded. The camels' long legs and rounded feet make it easier for them to walk in the desert than anyone else! 'Mother, why do we have long eyelashes?' the inquisitive baby camel asked once more. 'It hurts my vision at times.' 'My dear kid, these long, thick eyelashes are your protective shield,' Mother camel said proudly. 'They assist us in protecting our eyes from the sand and wind of the desert.' 'Oh, I see,' Baby Camel remarked after some thought. 'What in God's name are we doing here in the Zoo if the hump helps us store water while we're in the desert, the legs are for going through the desert, and these eyelashes protect our eyes from the desert?' Mother camel was speechless this time.",
    image: story1,
  },

  {
    id: "2",
    number: "two",
    title: "The Owl and The Lion",
    image: story2,
    description:
      "This is one of the best children's jungle animal stories. Once upon a time, the jungle was home to a large, ferocious lion. He bullied every other animal because he was strong. Because of the lion, the animals could no longer dwell in harmony. As a result, they convened a conference to discuss how to stop the lion from disturbing them. We have to get rid of this lion! exclaimed a hare. I believe we need to select a champion among us to go teach him a lesson, says the group. The animals shouted and cheered, but the tiger refused entry, the elephant whistled, and the rhino read his book. No animal would voluntarily attack a lion. This is one of the best children's jungle animal stories. Once upon a time, the jungle was home to a large, ferocious lion. He bullied every other animal because he was strong. Because of the lion, the animals could no longer dwell in harmony. As a result, they convened a conference to discuss how to stop the lion from disturbing them. We have to get rid of this lion! exclaimed a hare. I believe we need to select a champion among us to go teach him a lesson, says the group. The animals shouted and cheered, but the tiger refused entry, the elephant whistled, and the rhino read his book. No animal would voluntarily attack a lion. This is one of the best children's jungle animal stories. Once upon a time, the jungle was home to a large, ferocious lion. He bullied every other animal because he was strong. Because of the lion, the animals could no longer dwell in harmony. As a result, they convened a conference to discuss how to stop the lion from disturbing them. We have to get rid of this lion! exclaimed a hare. I believe we need to select a champion among us to go teach him a lesson, says the group. The animals shouted and cheered, but the tiger refused entry, the elephant whistled, and the rhino read his book. No animal would voluntarily attack a lion. This is one of the best children's jungle animal stories. Once upon a time, the jungle was home to a large, ferocious lion. He bullied every other animal because he was strong. Because of the lion, the animals could no longer dwell in harmony. As a result, they convened a conference to discuss how to stop the lion from disturbing them. We have to get rid of this lion! exclaimed a hare. I believe we need to select a champion among us to go teach him a lesson, says the group. The animals shouted and cheered, but the tiger refused entry, the elephant whistled, and the rhino read his book. No animal would voluntarily attack a lion.",
  },
  {
    id: "3",
    number: "three",
    title: "The Crows and The Oyster",
    image: story3,
    description:
      "This is one of the better animal stories for kids. Two crows lived near a woodland a long, long time ago. One of them was simple, while the other was cunning. The crafty crow has a habit of tricking the trusting crow. The honest crow, on the other hand, was always willing to assist the cunning crow. This is one of the better animal stories for kids. Two crows lived near a woodland a long, long time ago. One of them was simple, while the other was cunning. The crafty crow has a habit of tricking the trusting crow. The honest crow, on the other hand, was always willing to assist the cunning crow. This is one of the better animal stories for kids. Two crows lived near a woodland a long, long time ago. One of them was simple, while the other was cunning. The crafty crow has a habit of tricking the trusting crow. The honest crow, on the other hand, was always willing to assist the cunning crow. This is one of the better animal stories for kids. Two crows lived near a woodland a long, long time ago. One of them was simple, while the other was cunning. The crafty crow has a habit of tricking the trusting crow. The honest crow, on the other hand, was always willing to assist the cunning crow. ",
  },
  {
    id: "4",
    number: "four",
    title: "The Crows and The Oyster",
    image: story2,
    description:
      "He then tried to extract the flesh with his large beak, but he was unable to open the shell. He then slammed a stone against the oyster, but it stayed completely shut. The oyster refused to open no matter how hard he tried. The hungry crow was impressed by the concept and decided to follow the advice. The oyster broke open as soon as the crow dropped it from above, as the bird flew up with it. The other smart crow, on the other hand, lifted it up and ate the meat within. He then tried to extract the flesh with his large beak, but he was unable to open the shell. He then slammed a stone against the oyster, but it stayed completely shut. The oyster refused to open no matter how hard he tried. The hungry crow was impressed by the concept and decided to follow the advice. The oyster broke open as soon as the crow dropped it from above, as the bird flew up with it. The other smart crow, on the other hand, lifted it up and ate the meat within. He then tried to extract the flesh with his large beak, but he was unable to open the shell. He then slammed a stone against the oyster, but it stayed completely shut. The oyster refused to open no matter how hard he tried. The hungry crow was impressed by the concept and decided to follow the advice. The oyster broke open as soon as the crow dropped it from above, as the bird flew up with it. The other smart crow, on the other hand, lifted it up and ate the meat within. He then tried to extract the flesh with his large beak, but he was unable to open the shell. He then slammed a stone against the oyster, but it stayed completely shut. The oyster refused to open no matter how hard he tried. The hungry crow was impressed by the concept and decided to follow the advice. The oyster broke open as soon as the crow dropped it from above, as the bird flew up with it. The other smart crow, on the other hand, lifted it up and ate the meat within.",
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
