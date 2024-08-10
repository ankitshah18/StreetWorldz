import React, { useState } from "react";
import "./Inspiration.css";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
// import dog from "../../assets/dogOne.jpg";

const Inspiration = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  const hinglishText = `Zaalim mera ek rescue tha Jise mein ne 2021 mein rescue kiya tha due to hit and run bacha paralysed ho gaya tha Tb mera shelter ban rha tha or ghar mein space nhi tha jis vaja se dusre shelter mein rkhya or thik hoke mere pass aya after 2 months Thik to wo ho gaya par ek leg aus ki damage ho gye accident ki vaja se Ause ksi bhi humans par trust nhi tha bahut koshish kre par wo thora frndly huya Fir ause mein ne apne ghar ke pass rk liya apne area mein Mere saath rhna har time Jaha jau waha saath jana chaye rescue kyu na ho Chye raat ke 3 bj rhe ho ya subha 10 wo ek bar bulna ne par dhora aatha tha - ‘zaalim’ kaha hai’ Gali mein sab ko peeche se ja ke kat letha tha ause lag tha tha li ause marne wala wahi hai Bahut log ause apni shop mein bula ke mar te the Sab thik chal rha tha Par ek din sab badal gaya 12 july wo ek dum se chla gaya sab chor ke 10 july ko mera ek accident huya jis mein meri jaan jane wali thi Par mein bach gye mano jse kisi ne aake bacha liya Jab ghar aaye to pata chla zaalim ki tbyt ek dum se kharab ho gye Raat ke 2 bj hospital le kr gye Or dr ne batya ause jaundice huya hai Zaalim thik tha par mere accident ke bd sab badal gaya bahut koshish kre par wo nhi bach paya 12 july 7:45 par wo mujhe chor ke chala gya Aus ke jane ke bd socha tha sab chor duge ab mere se nhi hoga Par death ke 1 week bd wo mere sapne mein aya or bola tu ye sab mere liye kar mere naam se kar Mujhe apni yado mein rk`;

  const englishText = `Zaalim was one of my rescues whom I rescued in 2021 due to a hit and run incident. The poor thing was paralyzed. At that time, my shelter was being built and I had no space at home, so I kept him in another shelter. He recovered and came to me after 2 months. He was fine, but one of his legs was damaged due to the accident. He didn't trust any humans. We tried hard, but he became a little friendly. Then I kept him near my house in my area. He always wanted to stay with me. Wherever I went, he wanted to go along, even if it was a rescue. Whether it was 3 AM or 10 AM, he would rush to me when called—'Where is Zaalim?' In the alley, he would sneak up on people and bite them, thinking someone was going to hurt him. Many people would call him to their shop and beat him. Everything was fine until one day, everything changed. On July 12th, he suddenly left everything. On July 10th, I had an accident where I almost lost my life, but somehow, it felt like someone saved me. When I got home, I found out that Zaalim’s health suddenly worsened. We took him to the hospital at 2 AM, and the doctor said he had jaundice. Zaalim was fine, but after my accident, everything changed. We tried hard, but he couldn’t survive. He left me on July 12th at 7:45. After his passing, I thought I would leave everything behind; I couldn’t do it anymore. But one week after his death, he came into my dream and said, 'Do all this for me, in my name. Keep me in your memories.'`;

  return (
    <>
      <PhotoContainer image={cat} text="Inspiration" minHeight="17vh" />
      <div className="inspiration-container">
        <h2 className="inspiration-heading">Zaalim</h2>
        <p className="inspiration-content">
          {isEnglish ? englishText : hinglishText}
        </p>
        <button onClick={() => setIsEnglish(!isEnglish)}>
          {isEnglish ? "Read in Hinglish" : "Read in English"}
        </button>
      </div>
    </>
  );
};

export default Inspiration;
