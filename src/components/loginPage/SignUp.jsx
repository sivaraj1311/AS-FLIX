import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = ({ setAuth }) => {
  const [username1, setUsername1] = useState("");
  const [password1, setPassword1] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate=useNavigate()

  const handleSignUp = () => {
    if (username1 !== "" && password1 !== "" && confirmPassword !== "") {
      if (password1 === confirmPassword) {
        // Simulate a sign-up process
        // For now, just log in directly
        setAuth(true);
        navigate('/home')
        
      } else {
        alert("Passwords do not match");
        setPassword1("");
        setConfirmPassword("");
      }
    } else {
      alert("All fields are required");
    }
  };

  return (
    <>
      <header>
        <div className="header">
          <div>
            <h1 className="asflix">AS Flix</h1>
          </div>
        </div>
      </header>
      <div className="outter-container">
        <div className="inner-container">
          <h2>CREATE ACCOUNT</h2>
          <h3>
            <strong className='label'>User Name</strong>
          </h3>
          <input
            type="text"
            placeholder="Enter your name"
            value={username1}
            onChange={(e) => setUsername1(e.target.value)}
          />
          <h3>
            <strong className='label'>User password</strong>
          </h3>
          <input
            type="password"
            placeholder="Enter your password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
          <br />
          <h3>
            <strong className='label'>Confirm Password</strong>
          </h3>
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button className="btn-2" onClick={handleSignUp}>
            Submit
          </button>
          <h6>Don't Have An Account?</h6>
          <button className="btn-2">
            <Link to="/">Go Back</Link>
          </button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
