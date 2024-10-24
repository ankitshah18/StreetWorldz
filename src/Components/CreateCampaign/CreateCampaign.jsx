import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./CreateCampaign.css";
import { toast } from "react-toastify";

const CreateCampaign = () => {
  const { isAuthorized, setIsAuthorized } = useContext(AppContext);
  const navigate = useNavigate();
  const sessionTimeout = 30 * 60 * 1000;

  useEffect(() => {
    const checkSession = () => {
      const loginTime = localStorage.getItem("loginTime");
      const currentTime = Date.now();

      // Check if login time exists and session is valid
      if (loginTime && currentTime - loginTime < sessionTimeout) {
        return true;
      } else {
        // Session expired
        setIsAuthorized(false);
        localStorage.removeItem("loginTime");
        toast.warning("Session expired. Please log in again.");
        navigate("/login");
        return false;
      }
    };
    if (!checkSession()) {
      return;
    }
  }, [navigate, setIsAuthorized]);

  return isAuthorized ? (
    <div>
      <h1>Create Campaign Page</h1>
      {/* Rest of your component */}
    </div>
  ) : null;
};

export default CreateCampaign;
