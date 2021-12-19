import React, { useState, useEffect } from "react";
import Contents from "../../components/Contents";
import Login from "../../components/Login";
import Modal from "../../components/Modal";
import Navbar from "../../components/Navbar";
import SearchBar from "../../components/SearchBar";
import Signup from "../../components/Signup";
import { useDispatch } from "react-redux";
import axios from "axios";

const URL_FOR_RETRIEVING_BOOKS = 'http://localhost:9002/books/';

async function retrieveMyBooks(username){
    return axios
      .get(URL_FOR_RETRIEVING_BOOKS + username)
      .then(response => response.data)
      .catch(error => console.error(error))
        
}

const HomePage = () => {
    const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState();
  const [items, setItems] = useState([]);

  const handleLoginClick = () => {
    setIsOpen(true);
    setIsLogin(true);
  };
  const handleSignupClick = () => {
    setIsOpen(true);
    setIsLogin(false);
    
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  

  useEffect(() => {
      const currentUsername = localStorage.getItem("USER_NAME");
      async function fetchMyBooks(username){
        let response = await retrieveMyBooks(username);
        console.log('response...')
        console.log(response)
        setItems(response);
      }
    
      fetchMyBooks(currentUsername);
      console.log("items...")
      console.log(items)
    

  }, [])

  const renderConfitionalSwitch = (isLogin) => {
    switch (isLogin) {
      case true:
        return <Login handleClose={handleClose} />;
      case false:
        return <Signup handleClose={handleClose} />;
    }
  };
  return (
    <div className="App">
      <Navbar
        handleLoginClick={handleLoginClick}
        handleSignupClick={handleSignupClick}
        handleClose = {handleClose}
      />
      <Modal open={isOpen}>{renderConfitionalSwitch(isLogin)}</Modal>
      {/*<SearchBar />*/}
      
      <Contents
        data={{
          renderData: isLogin,
          items: items
        }}
      />
    </div>
  );
};

export default HomePage;
