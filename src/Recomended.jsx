import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { bookmarkContext } from './App';



export default function Recomended(props) {
   let marked = props.data.isBookmarked
    const [movies,setMovies] = useContext(bookmarkContext)
   

    const bookMarkClick = () => {
        const moviesCopy = [...movies]
        let moviesBookmarked ;
        for(let i=0 ; i < moviesCopy.length; i++){
            if(moviesCopy[i].title === props.data.title){
                moviesCopy[i].isBookmarked = !moviesCopy[i].isBookmarked
                
            }
            
        }
        
        setMovies(moviesCopy)

        
    }
    let bookmarkIcon ;
    if(marked ){
        bookmarkIcon = process.env.PUBLIC_URL + "/assets/icon-bookmark-full.svg"
    }else{
        bookmarkIcon = process.env.PUBLIC_URL + "/assets/icon-bookmark-empty.svg"
    }
    return(
        <div className='bg-bgColor  p-4 relative '>
            <div className='  relative '>
                <img className='w-full h-full rounded-lg' src={process.env.PUBLIC_URL + props.data.thumbnail.regular.large}/>
                <div onClick={bookMarkClick} className='absolute  top-2 right-2 z-10 flex  w-8 h-8 justify-center items-center rounded-2xl bg-[#10141E] opacity-50'> 
                <img className='w-3 h-4' src={bookmarkIcon}/>
                </div>
                </div >
                
            <div className='flex gap-2 '>
            <p className='text-xs opacity-75 '>{props.data.year }</p>
            <img src={process.env.PUBLIC_URL + "/assets/Oval.svg"}/>
            <p className='text-xs opacity-75' >{props.data.category}</p>
            <img src={process.env.PUBLIC_URL + "/assets/Oval.svg"}/>
            <p className='text-xs opacity-75' >{props.data.rating}</p>
           
            </div>
            <div>
            <p className='text-sm '>{props.data.title}</p>
            </div>
            </div>
        
    )

}