import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import "../../../style.css";

const CardList = (props) => {

  const apiKey = "AIzaSyCKZuhy3LKcKQf1mTTHg4vgC-GmUkREuGA";
  const [result, setResult] = useState([]);
  

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${props.subject}&key=${apiKey}&maxResults=20`
      )
      .then((data) => {
        setResult(data.data.items);
      });
  }, []);

  const addToCart = (title) => {
    const credentials = {
      title: title,
      quantity: 1,
      customer: localStorage.getItem("USER_NAME"),
    };
    axios
      .post("http://localhost:9002/books/kasra", credentials)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
      window.location.reload();

    
  };

  const bgGradient = {
    background: `linear-gradient(${props.color},#f8f9fa)`,
  };

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  return (
    <div>
      <Carousel
        breakPoints={breakPoints}
        pagination={false}
        className="card-list"
      >
        {result.map((book) => (
          <div style={bgGradient} className="book">
            <img
              className="thumbnail"
              src={
                book.volumeInfo.imageLinks === undefined
                  ? ""
                  : `${book.volumeInfo.imageLinks.thumbnail}`
              }
              alt={book.title}
            />
            <div className="book-info">
              <h3 className="book-title">{book.volumeInfo.title}</h3>
              <div className="info">
                <button
                  onClick={addToCart.bind(this, book.volumeInfo.title)}
                  style={{ background: "inherit", color: "inherit" }}
                >
                  Add: $15
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CardList;
