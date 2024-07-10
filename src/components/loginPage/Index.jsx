import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Index = ({setAuth}) => {
  console.log("value is ",setAuth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 
  const navigate=useNavigate();

  const handleSignin = () => {
    if (username !=="" && password !=='') {
      if (username==="siva" && password==='1234') {
        // alert("Login Completed");
        console.log("seting is true")
        setAuth(true);
        navigate('/home')
                
      } else {
        alert("Login Failed");
        setUsername('')
        setPassword('')
      }
    } else {
      alert("null username or password");  
    }
  };

  return (
    <>
      <>
        <header>
          <div className="header">
            <div>
              <h1 className="asflix">AS Flix</h1>
            </div>
          </div>
        </header>
        <main>
          <div className="outer-container">
            <div className="inner-container">
              <h2>LOGIN</h2>
              <h3>
                <strong className='label'>User Name</strong>
              </h3>
              <input
                type="text"
                value={username}
                required
                placeholder="Enter your name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <h3>
                <strong className='label'>User password</strong>
              </h3>
              <input
                type="password"
                value={password}
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button className="btn-2" type="submit" onClick={handleSignin}>submit</button>
              <h6>Don't Have An Account?</h6>
              <button className="btn-2">
                <Link to="/resetpwd">Forgot Password</Link>
              </button>
              <br />

              <button className="btn-2">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </div>
        </main>
      </>
    </>
  );
};

export default Index;
