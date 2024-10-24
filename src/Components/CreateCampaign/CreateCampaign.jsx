import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./CreateCampaign.css";

const CreateCampaign = () => {
  const { isAuthorized } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuthorized");
    if (!isAuth) {
      navigate("/"); // Redirect to login if not authorized
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className=" create-donation">
        <h4>Create New Donation Campaign</h4>
        <input type="number" placeholder="Enter amount of donation" />
        <input type="text" placeholder="Title of Donation" />
        <input type="number" placeholder="Enter your phone number" />
        <input type="email" placeholder="Enter your email" />
        <input type="file" />
        <textarea placeholder="Description of the donation" rows={15} />

        <button className="btn">Create Campaign</button>
      </div>
    </div>
  );
};

export default CreateCampaign;
