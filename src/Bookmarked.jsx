import data from "./data.json"
import React from "react";
import Header from "./Header";
import Search from "./Search";
import Recomended from "./Recomended";


const Bookmarked = () => {
    
    return ( 
        <div>
            <Header/>
            <Search/>
        <h1 className="text-xl bg-bgColor p-4 md:text-3xl p-[30px]">Bookmarked</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data.filter(ravi=> ravi.isBookmarked).map((racminda, index)=>{
            return < Recomended key={index} data={racminda} />
        })}
        </div>
        </div>
     );
}
 
export default Bookmarked;