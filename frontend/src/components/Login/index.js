import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL_FOR_USER_LOGIN = "http://localhost:9002/users/";

async function loginUser(username) {
  return axios
    .get(URL_FOR_USER_LOGIN + username)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

const Login = (handleClose) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const closeOnClick = async (e) => {
    e.preventDefault();
    
    let userLoggedIn = await loginUser(username);
    

    if (Object.keys(userLoggedIn).length <= 0) {
      console.log("wrong username");
      navigate("/login")
    } else {
      if (password === userLoggedIn.password) {
        console.log("correct password");
        localStorage.setItem("USER_NAME", userLoggedIn.username);
        window.location.reload();
        //navigate("/")
      } else {
        console.log("wrong password");
        navigate("/login")
      }
    }

  };
  return (
    <div className="login-form">
      <div className="form-box solid">
        <form>
          <h1 className="login-text">Sign In</h1>
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
            value="LOGIN"
            className="login-btn"
            onClick={closeOnClick}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
