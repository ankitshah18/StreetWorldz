import React from "react";
import PhotoContainer from "../PhotoContainer/PhotoContainer";
import cat from "../../assets/Cat.jpg";
import "./Rescue.css";

const Rescue = () => {
  return (
    <>
      <PhotoContainer image={cat} text="Request Rescue" minHeight="20vh" />
      <div className="rescue container">
        <div className="form">
          <h4>Request Rescue Form</h4>
          <form>
            <div className="form-grid">
              <div className="form-left">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Your First Name"
                />
                <input
                  type="file"
                  name="rescueImage"
                  placeholder="Upload Rescue Image"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                />
                <input type="text" name="address" placeholder="Your Address" />
                <select name="state">
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
                />
                <input
                  type="text"
                  name="rescueLocation"
                  placeholder="Rescue Location"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                />
                <input type="text" name="pinCode" placeholder="Pin Code" />
                <select name="city">
                  <option value="" disabled selected>
                    City
                  </option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  <option value="city3">City 3</option>
                </select>
              </div>
            </div>
            <textarea name="details" placeholder="Enter Details" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Rescue;
