import { useContext, useEffect } from "react";
import "./SingleMeal.css";
import dog from "../../assets/meal-dog.jpg";
import Footer from "../../Components/Footer/Footer";
import injureddog from "../../assets/injured-dog.jpg";
import { LuDog } from "react-icons/lu";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import googlepay from "../../assets/googlepay.png";
import phonepay from "../../assets/phonepay.png";
import bhimupi from "../../assets/bhimupi.png";
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import cat from "../../assets/Cat.jpg";

import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
/* import toast from "react-hot-toast"; */

const SingleMeal = () => {
  const {
    selectedMeal,
    setSelectedMeal,
    setFoodItemCounters,
    foodItemCounters,
    /* itemCosts, */
    setItemCosts,
    totalCost,
    setTotalCost,
    donorName,
    setDonorName,
    donationDetails,
    setDonationDetails,
  } = useContext(AppContext);
  // console.log("Selected Meal : ", selectedMeal);

  useEffect(() => {
    if (!selectedMeal) {
      const storedMeal = localStorage.getItem("selectedMeal");
      if (storedMeal) {
        setSelectedMeal(JSON.parse(storedMeal));
      }
    }
    setTotalCost(0);
    setFoodItemCounters(0);
  }, [selectedMeal, setSelectedMeal]);

  if (!selectedMeal) {
    return <p>Loading...</p>;
  }

  // const handleIncrement = (itemTitle, itemCost) => {
  //   // console.log("itemTitle", itemTitle);
  //   setFoodItemCounters((prevCounters) => ({
  //     ...prevCounters,
  //     [itemTitle]: (prevCounters[itemTitle] || 0) + 1,
  //   }));
  // };

  // const handleDecrement = (itemTitle) => {
  //   console.log("itemTitle", itemTitle);
  //   setFoodItemCounters((prevCounters) => ({
  //     ...prevCounters,
  //     [itemTitle]: Math.max((prevCounters[itemTitle] || 0) - 1, 0),
  //   }));
  // };

  const handleIncrement = (itemTitle, itemCost) => {
    setFoodItemCounters((prevCounters) => {
      const newCount = (prevCounters[itemTitle] || 0) + 1;
      const cost = parseInt(itemCost);
      const newTotalCost = totalCost + cost;

      setItemCosts((prevItemCosts) => ({
        ...prevItemCosts,
        [itemTitle]: (prevItemCosts[itemTitle] || 0) + cost,
      }));

      setTotalCost(newTotalCost);

      return {
        ...prevCounters,
        [itemTitle]: newCount,
      };
    });
  };
  const handleDecrement = (itemTitle, itemCost) => {
    setFoodItemCounters((prevCounters) => {
      const currentCount = prevCounters[itemTitle] || 0;
      const newCount = Math.max(currentCount - 1, 0);

      const cost = parseInt(itemCost);
      let newTotalCost = totalCost;

      if (newCount < currentCount) {
        newTotalCost = totalCost - cost;
      }

      setItemCosts((prevItemCosts) => {
        const currentItemCost = prevItemCosts[itemTitle] || 0;
        const updatedItemCost = newCount > 0 ? currentItemCost - cost : 0;

        return {
          ...prevItemCosts,
          [itemTitle]: updatedItemCost >= 0 ? updatedItemCost : 0,
        };
      });

      setTotalCost(newTotalCost);

      return {
        ...prevCounters,
        [itemTitle]: newCount,
      };
    });
  };

  const handleInputChange = (event) => {
    setDonorName(event.target.value);
  };

  const handleDonation = () => {
    if (donorName && totalCost > 0) {
      setDonationDetails({ name: donorName, totalCost });
      console.log("Donation Details:", donationDetails);
      toast.success("Thank you for your donation!");
    } else if (!donorName) {
      toast.error("Please enter your name.");
    } else if (totalCost <= 0) {
      toast.error("Please select items to donate.");
    } else {
      toast.error("Please select items and enter your name.");
    }
  };

  // console.log("count", foodItemCounters);
  // console.log("cost", itemCosts);
  console.log("totalCost", totalCost);
  console.log("Donation Details", donationDetails);
  // selectedMeal.foodItems?.forEach((foodItem) => {
  //   console.log("Food Description:", foodItem.foodDescription);
  // });

  // handlePayment Function
  const handlePayment = async () => {
    console.log("Payment initiated");
    const amount = totalCost; // Use the updated total cost
    console.log("Amount:", amount);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ amount }), // Pass the correct amount
        }
      );

      if (!res.ok) {
        console.error("HTTP error:", res.status, await res.text());
        return; // Exit if there's an error
      }

      const data = await res.json();
      console.log("Payment order data:", data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  // handlePayment Function
  /* const handlePayment = async () => {
    console.log("Payment initiated");
    console.log("Amount:", amount); // Ensure 'amount' is defined
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            amount,
          }),
        }
      );

      const data = await res.json();
      console.log("Payment order data:", data);
      handlePaymentVerify(data.data);
    } catch (error) {
      console.error("Payment error:", error);
    }
  }; */

  // handlePaymentVerify Function
  const handlePaymentVerify = async (data) => {
    const options = {
      key: import.meta.env.RAZORPAY_KEY_ID,
      amount: data.amount,
      currency: data.currency,
      name: "StreetWorldz",
      description: "Test Mode",
      order_id: data.id,
      handler: async (response) => {
        console.log("response", response);
        try {
          const res = await fetch(
            `${import.meta.env.VITE_BACKEND_HOST_URL}/api/payment/verify`,
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
              }),
            }
          );

          if (!res.ok) {
            console.error("HTTP error:", res.status, await res.text()); // Log server error
            return;
          }

          const verifyData = await res.json();

          if (verifyData.message) {
            toast.success(verifyData.message);
          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#5f63b8",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <PhotoContainer image={cat} text={selectedMeal.title} minHeight="20vh" />
      <div className="container">
        <div className="title-food">
          {" "}
          <h1>{selectedMeal.title}</h1>
          <p>28-Sep-2024</p>
          <img src={dog} alt="" className="meal-img" />
          <div className="food-description">
            <p>
              Your donation will help us move our dogs to a permanent shelter so
              they can receive the love and medical attention they require.
            </p>

            <strong>(This donation is under 80G exempted)</strong>
            <br />
            <span>Donate via Card, UPI &amp; (INR Only)</span>
          </div>
          <div className="donation-alert">
            <h6>
              <strong>Important Donation Notice:</strong> <br />
            </h6>
            <p>
              This donation page allows contributions only towards the
              predefined items or packages listed below. Each item has a fixed
              cost to ensure transparency and consistent care. Kindly select
              from the available options to support the cause. Your generous
              donations will directly contribute to the meals and resources
              required for the well-being of animals in need. Thank you for your
              understanding and support!
            </p>
          </div>
          <div className="description-and-payment">
            <div className="payment-div">
              <div className="food-cards">
                {" "}
                {selectedMeal.foodItems?.map((foodItem, index) => (
                  <div className="food-items-container" key={index}>
                    <div className="food-items">
                      <div className="title-and-price">
                        <h4>
                          {foodItem.itemTitle} (
                          {foodItemCounters[foodItem.itemTitle] || 0}){" "}
                          {/* Display specific counter */}
                        </h4>
                        <p>
                          {foodItem.foodDescription ||
                            "No description available"}
                        </p>

                        <span>₹ {foodItem.itemCost}</span>
                      </div>

                      <div className="plus-minus-button">
                        <FiPlusCircle
                          className="plus-icon"
                          onClick={() =>
                            handleIncrement(
                              foodItem.itemTitle,
                              foodItem.itemCost
                            )
                          }
                        />
                        <FiMinusCircle
                          className="minus-icon"
                          onClick={() =>
                            handleDecrement(
                              foodItem.itemTitle,
                              foodItem.itemCost
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <hr />

              <div className="payement-cards">
                <div className="payment-card-one">
                  <div className="header-one">
                    {" "}
                    <LuDog size={20} /> <h4> Share Via</h4>
                  </div>
                  <div className="card-one-logos">
                    <img src={facebook} alt="facebook" />
                    <img src={youtube} alt="" />
                  </div>
                </div>
                <div className="payement-card-two">
                  <div className="header-one">
                    {" "}
                    <LuDog size={20} /> <h4> Donate Via</h4>
                  </div>
                  <div className="money-section">
                    <h5>QR Code </h5>

                    {/* <h5 style={{ color: "#1bb7bc", fontSize: "16px" }}>
                    ₹9,114,394 raised out of ₹10,000,000
                  </h5>
                  <div className="progress-bar">
                    <div
                      className="bar"
                      style={{ color: "white", fontSize: "16px" }}
                    >
                      81%
                    </div>
                  </div> */}
                    <hr />
                    <div className="money-tabs">
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={donorName}
                        onChange={handleInputChange}
                      />
                      <div className="cost">Total Cost : ₹{totalCost}</div>
                      {/* <div
                      className="money-tab"
                      style={{
                        backgroundColor: "#6c757d",
                        borderColor: "#6c757d",
                        color: "white",
                      }}
                    ></div>
                    <div className="money-tab">₹2,000</div>
                    <div className="money-tab">₹3,000</div> */}
                    </div>
                    {/* <div className="selected-amount">₹4,000</div> */}
                    <hr />
                    <h5 style={{ marginBottom: "15px" }}>UPI</h5>
                    <div className="payment-option-icons">
                      <div className="payment-icon">
                        <img src={googlepay} alt="" />
                        <p>Google Pay</p>
                      </div>
                      <div className="payment-icon">
                        <img src={phonepay} alt="" />
                        <p>Phone Pay</p>
                      </div>
                      <div className="payment-icon">
                        <img src={bhimupi} alt="" />
                        <p>Bhim Upi</p>
                      </div>
                    </div>
                    <div className="final-payment-button">
                      <button
                        className="payment-donate-button"
                        onClick={() => {
                          handleDonation();
                          handlePayment();
                        }}
                      >
                        {" "}
                        <LuDog />
                        Donate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description-cards">
              <div className="description-card-one">
                <img src={injureddog} alt="" />
                <p>Current Situation:</p>
                <p>
                  Dog Home Foundation’s mission is to provide refuge and medical
                  care to dogs facing adversity, including those who are
                  accidental, paralyzed, abused, and suffering from diseases
                  such as cancer, distemper, parvo, and TVT (Transmissible
                  Venereal Tumor). Their commitment to rescuing and
                  rehabilitating animals is commendable, but the organization is
                  currently operating over its capacity, leading to a backlog of
                  dogs waiting for admission.
                </p>
                <p>
                  With more than 300 dogs under their care, the existing
                  facilities are strained, making it difficult to accommodate
                  the increasing number of rescues and medical cases. Despite
                  these challenges, Dog Home Foundation continues to rescue over
                  20 dogs daily, addressing emergencies and providing critical
                  care to those in dire need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleMeal;
