import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { AppContext } from "../context/AppContext"; // Import your context
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const AdminUsername = "ankit";
  const AdminPassword = "shah";

  const { setIsAuthorized } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === AdminUsername && password === AdminPassword) {
      setIsAuthorized(true);
      navigate("/create-campaign");
    } else {
      toast.error("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="parent-login">
      <div className="login-main-container">
        <h2>Notice</h2>
        <p className="admin-note">
          This page is intended exclusively for administrative use. If you are
          not an authorized admin, we kindly request that you do not proceed
          further. Instead, please explore and enjoy the rest of our website.
        </p>
        <div className="login">
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
