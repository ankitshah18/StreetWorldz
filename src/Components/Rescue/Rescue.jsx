import { useState } from "react";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
import Footer from "../Footer/Footer";
import "./Rescue.css";
import axios from "axios";

const Rescue = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    state: "",
    rescueLocation: "",
    email: "",
    pinCode: "",
    city: "",
    details: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      phoneNumber,
      address,
      state,
      rescueLocation,
      email,
      pinCode,
      city,
      details,
    } = formData;

    // Checking all required fields
    if (
      !firstName ||
      !lastName ||
      !phoneNumber ||
      !address ||
      !state ||
      !rescueLocation ||
      !email ||
      !pinCode ||
      !city ||
      !details
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    console.log("sending data", formData);

    try {
      const response = await axios.post(
        "https://sw-backend-iao6.onrender.com/api/v1/auth/rescuesubmition",
        formData, // Sending the plain JSON object
        {
          headers: {
            "Content-Type": "application/json", // Content-Type for JSON
          },
        }
      );
      console.log("Form submission response:", response.data);
      alert("Rescue request submitted successfully!");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <div className="rescue-main-container">
        <PhotoContainer image={cat} text="Gallery" minHeight="30vh" />
        <div className="rescue container">
          <div className="form">
            <h4>Request Rescue Form</h4>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-left">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Your First Name"
                    onChange={handleChange}
                  />
                  {/* <input
                  type="file"
                  name="rescueImage"
                  placeholder="Upload Rescue Image"
                /> */}
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      Your State
                    </option>
                    <option value="state1">State 1</option>
                    <option value="state2">State 2</option>
                    <option value="state3">State 3</option>
                  </select>
                </div>
                <div className="form-right">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Your Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="rescueLocation"
                    placeholder="Rescue Location"
                    value={formData.rescueLocation}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="pinCode"
                    placeholder="Pin Code"
                    value={formData.pinCode}
                    onChange={handleChange}
                  />
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  >
                    <option value="" disabled selected>
                      City
                    </option>
                    <option value="city1">City 1</option>
                    <option value="city2">City 2</option>
                    <option value="city3">City 3</option>
                  </select>
                </div>
              </div>
              <textarea
                name="details"
                placeholder="Enter Details"
                value={formData.details}
                onChange={handleChange}
              />
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rescue;
