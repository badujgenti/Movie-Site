import React from 'react';

const Search  = (props) => {
  
  const handleChange = (event) => {
   props.filterHandler(event.target.value)
   
   

  }
    return ( 
        <div className='bg-bgColor flex pt-6 pl-4'>
        <img src={process.env.PUBLIC_URL + "/assets/icon-search.svg"} alt='icons on top'/>
        <input onChange={handleChange} className='bg-transparent ml-5 opacity-50' placeholder='Search for movies or TV series'></input>
       </div>
     );
     
}
 
export default Search;