import React from "react";
import "../../style.css";
import CardList from "./CardList";
import Cart from "../Cart";
import SearchBar from "../SearchBar";

const Contents = (props) => {
  return (
    <div>
      <SearchBar />
      <Cart data={props.data.items} />

      <section id="Popular" className="results">
        <div className="flex">
          <h1 className="section-title">Popular</h1>
        </div>
        <div className="list-book ">
          <CardList subject="bestseller+books" color="#ffdde1" />
        </div>
        <div className="fade left"></div>
        <div className="fade right"></div>
      </section>
      <section id="Fiction" className="results">
        <div className="flex">
          <h1 className="section-title">Fiction</h1>
        </div>
        <div className="list-book ">
          <CardList subject="popular+fiction+novels" color="#DECBA4" />
        </div>
      </section>
      <section id="Fantasy" className="results">
        <div className="flex">
          <h1 className="section-title">Fantasy</h1>
        </div>
        <div className="list-book">
          <CardList subject="fantasy+fiction" color="#ffdde1" />
        </div>
      </section>

      <section id="Manga" className="results">
        <div className="flex">
          <h1 className="section-title">Manga</h1>
        </div>
        <div className="list-book ">
          <CardList subject="bestseller+manga" color="#e1eec3" />
        </div>
      </section>
      <section id="SciFi" className="results">
        <div className="flex">
          <h1 className="section-title">Science Fiction</h1>
        </div>
        <div className="list-book ">
          <CardList subject="science+fiction+novel" color="#ffdde1" />
        </div>
      </section>
      <section id="Romance" className="results">
        <div className="flex">
          <h1 className="section-title">Romance</h1>
        </div>
        <div className="list-book ">
          <CardList subject="romance+novel" color="#DECBA4" />
        </div>
      </section>
      <section id="Poetry" className="results">
        <div className="flex">
          <h1 className="section-title">Poetry</h1>
        </div>
        <div className="list-book ">
          <CardList subject="poetry+poems" color="#C9D6FF" />
        </div>
      </section>
    </div>
  );
};

export default Contents;
