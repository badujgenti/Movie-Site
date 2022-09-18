import React from "react";
import data from "./data.json";
import Recomended from "./Recomended";
import Home from "./Home";
import Header from "./Header";
import Search from "./Search";
import { useState } from "react";

const Movies = (props) => {
  const [search, setAfter] = useState("");
  const changeHandler = (text) => {
    setAfter(text);
  };

  let filteredArray = data.filter(
    (movie) =>
      movie.category === "Movie" &&
      movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search filterHandler={changeHandler} />
      <h1 className="text-xl bg-bgColor p-4 md:text-3xl p-[30px]"> Movies </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {filteredArray.map((ragac, index) => {
          return <Recomended key={index} data={ragac} />;
        })}
      </div>
    </div>
  );
};

export default Movies;
