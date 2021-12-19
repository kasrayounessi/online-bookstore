import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL_FOR_USERS_LOGIN = 'http://localhost:9002/users/';

const Signup = ({handleClose}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  


  const closeOnClick = async (e) => {
    e.preventDefault();

    const smallCaseCheck = /[a-z]/.test(password);
    const bigCaseCheck = /[A-Z]/.test(password);
    const numberCheck = /[0-9]/.test(password)

    const credentials = {
      username: username,
      password: password,
    };

    

    if(password.length < 8){
      console.log("Password too short")
      navigate('/signup')
    }
    else if(!smallCaseCheck){
      console.log("small case letter required")
      navigate('/signup')
    } 
    else if(!bigCaseCheck){
      console.log("big case alphabet required")
      navigate('/signup')
    } else if(!numberCheck){
      console.log("numbers required")
      navigate('/signup')
    }  else{
    axios
      .post(URL_FOR_USERS_LOGIN, credentials)
      .then((response) => {
        localStorage.setItem("USER_NAME", credentials.username);
        //window.location.reload();
        navigate("/");
      })
      .catch((error) => console.error(error));
    
    }
  };

  return (
    <div className="login-form">
      <div className="form-box solid">
        <form>
          <h1 className="login-text">Sign Up</h1>
          <label>Username</label>
          <br></br>
          <input
            type="text"
            name="username"
            className="login-box"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            className="login-box"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <input
            type="submit"
            value="SIGN UP"
            className="login-btn"
            onClick={closeOnClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
