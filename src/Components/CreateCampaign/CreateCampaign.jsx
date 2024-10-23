import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./CreateCampaign.css";

const CreateCampaign = () => {
  const { isAuthorized } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthorized) {
      navigate("/"); // Redirect to login if not authorized
    }
  }, [isAuthorized, navigate]);

  return (
    <div>
      <h1>Create Campaign Page</h1>
      {/* Rest of your component */}
    </div>
  );
};

export default CreateCampaign;
