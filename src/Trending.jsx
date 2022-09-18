import React from 'react';


export default function Trending(props) {
  return (
    
    <div className='bg-bgColor relative p-3 '>
   
    <div className=' '>

   <img className=' w-full rounded-lg' src={process.env.PUBLIC_URL + props.data.thumbnail.trending.large} alt="guram aeeee"/>
   <div className='flex flex-col absolute bottom-4 p-1 '>
    <div className='flex gap-1'>
    <p className='text-xs opacity-75' >{props.data.year }</p>
    <img src={process.env.PUBLIC_URL + "/assets/Oval.svg"}/>
    <img className='h-3 w-3' src={process.env.PUBLIC_URL + "/assets/icon-category-movie.svg"} /> 
    <img src={process.env.PUBLIC_URL + "/assets/Oval.svg"}/>
     <span className='text-xs opacity-75'>{ props.data.category}</span>
    </div>
    <div>
    <p className='text-xs opacity-75'>{props.data.title}</p>
    </div>
   
   </div >
   <div className='absolute top-6 right-6 z-10 flex  w-8 h-8 justify-center items-center rounded-2xl bg-[#10141E] opacity-50'>
   <img className='w-3 h-4' src={process.env.PUBLIC_URL + "/assets/icon-bookmark-empty.svg"}/>
   </div>


    </div>
    </div>
    
  )
}
