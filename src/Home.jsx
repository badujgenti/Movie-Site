import React from "react";
import data from "./data.json";
import Trending from "./Trending";
import Recomended from "./Recomended";
import Movies from "./Movies";
import Search from "./Search";
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

import Header from "./Header";

export default function Home() {
  const [search, setAfter] = useState("");
  const changeHandler = (text) => {
    setAfter(text);
  };

  let filteredArray = data.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <Header />
      <Search filterHandler={changeHandler} />
      <h1 className="text-xl bg-bgColor p-4 md:text-3xl p-[30px]">Trending</h1>
      
        <Splide
          options={{
            fixedWidth: 700,
            autoplay: true,
            type   : 'loop',
            perMove: 1,
            interval: 2000,
            pagination: false,
            arrows: false,
            direction: "ltr",
            pauseOnFocus: true,
            pauseOnHover: true,
            start: 2,
            gap: 70,
            breakpoints: {
              1920: {
                fixedWidth: 600,
                gap: 60,
              },
              1440: {
                fixedWidth: 400,
                gap: 30,
              },
              768: {
                fixedWidth: 240,
                gap: 16,
              },
            },
          }}
          aria-label="Trending Movies"
        >
          {data.filter((movie) => movie.isTrending)
            .map((movie, index) => (
              <SplideSlide key={index}>
                <Trending data={movie} />
              </SplideSlide>
            ))}
        </Splide>
      
      <h1 className="text-xl bg-bgColor p-4 md:text-3xl p-[30px]">Recomended for you</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {" "}
        {filteredArray.map((ragac, index) => {
          return <Recomended key={index} data={ragac} />;
        })}{" "}
      </div>
    </div>
  );
}
