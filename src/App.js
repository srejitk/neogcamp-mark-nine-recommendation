import "./styles.css";
import React from "react";
import { useState } from "react";
import showsDB from "./MyFavshows.json";

export default function App() {
  const [selectedGenre, setGenre] = useState("Sci-Fi");
  function setGenreHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>TV Show 📺 Recommendation</h1>
      <span className="desc">
        Here are some shows which would give you a good time 😁
      </span>

      <div className="app-content">
        {Object.keys(showsDB).map((genre) => (
          <button
            className="button-class"
            onClick={() => setGenreHandler(genre)}
            style={{
              cursor: "pointer",
              margin: "5px",
              padding: "2px"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr style={{ height: "1px", background: "black" }} />

      <div className="cards" style={{ textAlign: "left" }}>
        <ul style={{ padding: "0" }}>
          {showsDB[selectedGenre].map((shows) => (
            <li
              className="card-list"
              key={shows.Title}
              style={{
                listStyle: "none",

                margin: "1rem 0rem",
                borderRadius: "1rem"
              }}
            >
              {" "}
              <div className="img-cover">
                <img className="img-cover" src={shows.img} alt="show-cover" />{" "}
              </div>
              <div className="showTitle"> {shows.Title} </div>
              <div
                className="show-status"
                style={{
                  fontSize: "smaller"
                }}
              >
                {" "}
                {shows.Status}{" "}
              </div>
              <div className="showRating" style={{}}>
                {" "}
                {shows.Rating}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
