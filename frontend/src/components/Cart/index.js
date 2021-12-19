import React from "react";
import "../../style.css";
import axios from "axios";
import Carousel from "react-elastic-carousel";
import imageLogo from "./pen-and-books.svg";
import { useNavigate } from "react-router-dom";
import { BsWindowSidebar } from "react-icons/bs";

const URL_TO_RETRIEVE_ITEM = "http://localhost:9002/books/";
const URL_TO_DELETE_ITEM = "http://localhost:9002/books/delete/";

async function retrieveTheBook(username, bookTitle) {
  return axios
    .get(URL_TO_RETRIEVE_ITEM + username + "/" + bookTitle)
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

const Cart = (props) => {

  const navigate = useNavigate();

  const bgGradient = {
    background: `linear-gradient(#92FE9D,#f8f9fa)`,
  };

  const breakPoints = [
    { width: 500, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
    { width: 1500, itemsToShow: 4 },
  ];

  const remove = async (bookTitle) => {
    const username = localStorage.getItem("USER_NAME");
    const bookToDelete = await retrieveTheBook(username, bookTitle);
    axios
      .post(URL_TO_DELETE_ITEM + username, bookToDelete)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

    window.location.reload();
  };
  const purchaseAll = () => {
    const username = localStorage.getItem("USER_NAME");
    axios.get("http://localhost:9002/books/deleteall/" + username)
    .then(response => console.log(response))
    .catch(error => console.error(error));
    window.location.reload();

  };

  return (
    <div>
      {props.data.length > 0 ? (
        <section id="Cart" className="results">
          <div className="flex">
            <h1 className="section-title">Your cart</h1>
            <button
              onClick={purchaseAll}
              style={{ background: "inherit", color: "inherit" }}
            >
              Purchase All
            </button>
          </div>
          <div className="list-book ">
            <Carousel
              breakPoints={breakPoints}
              pagination={false}
              className="card-list"
            >
              {props.data.map((book) => (
                <div style={bgGradient} className="book">
                  <img className="thumbnail" src={imageLogo} width="150" />

                  <div className="book-info">
                    <h3 className="book-title">{book.title}</h3>
                    <h5>quantity: {book.quantity}</h5>
                    <div className="info">
                      <button
                        onClick={() => remove(book.title)}
                        style={{ background: "inherit", color: "inherit" }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </section>
      ) : (
        console.log("No books available")
      )}
    </div>
  );
};

export default Cart;
