import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation after login
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigation hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); 
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/auth/login", { email, password });
      console.log(response);

      if (response.status === 200) {
        setMessage("Login successful!");
        
        // Store token in localStorage
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data.user)

        // Redirect to dashboard or home page
        navigate("/"); 
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Login failed. Check credentials.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <h1>Welcome Back</h1>
        {message && <p className="message success">{message}</p>}
        {error && <p className="message error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="extra-links">
          <a href="#">Forgot Password?</a> | <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
