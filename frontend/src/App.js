import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import WebRoutes from "./WebRoutes";

const URL_FOR_RETRIEVING_BOOKS = "http://localhost:9002/books/";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/*<Navbar />*/}
        <WebRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
