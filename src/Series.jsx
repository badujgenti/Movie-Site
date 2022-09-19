import React from "react";

import Header from "./Header";
import Search from "./Search";
import Recomended from "./Recomended";
import { useState, useContext } from "react";
import { bookmarkContext } from "./App";

const Series = (props) => {
  const [search,setAfter] = useState("");
  const changeHandler = (text) =>{
    setAfter(text);
  }


  const [movies] = useContext(bookmarkContext)



        let filteredArray = movies.filter((movie) => movie.category === "TV Series" && movie.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <Header />
      <Search filterHandler={changeHandler}/>
      <h1 className="text-xl bg-bgColor p-4 md:text-3xl p-[30px]"> Tv Series</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        
        {filteredArray.map((ragac,index) => {
          return <Recomended key={index} data={ragac} />;
        })}
      </div>
    </div>
     );
}
 
export default Series;