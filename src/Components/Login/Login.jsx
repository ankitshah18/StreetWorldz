import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./Login.css";
import { toast } from "react-toastify";
import bcrypt from "bcryptjs"; // Import bcryptjs

const Login = () => {
  // Pre-hashed password using bcrypt
  const AdminUsername = "ankit";
  const AdminPasswordHash =
    "$2a$10$xwmP0oMVV6WT0P3lCTE8qO1ScFLhp6cCeCKHs.B14FwAPJHF8vGNa";

  const { setIsAuthorized } = useContext(AppContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const sessionTimeout = 60 * 60 * 1000;

  const handleLogout = () => {
    setIsAuthorized(false);
    localStorage.removeItem("loginTime");
    navigate("/login");
    toast.warning("Your session has expired. Please log in again.");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if the username matches
    if (username === AdminUsername) {
      const isPasswordValid = await bcrypt.compare(password, AdminPasswordHash);
      if (isPasswordValid) {
        localStorage.setItem("loginTime", Date.now());
        setIsAuthorized(true);
        navigate("/create-campaign");
        setTimeout(() => {
          handleLogout();
        }, sessionTimeout);
      } else {
        toast.error("Invalid username or password. Please try again.");
      }
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
