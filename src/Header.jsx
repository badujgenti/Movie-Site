import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return ( 
        <div className='flex p-[18px] justify-between align-center h-[56px] w-[100%] bg-semiDarkBlue '>
        <img src={process.env.PUBLIC_URL + "/assets/logo.svg"}className="h-[20px]" alt='icons on top'/>
        <Link to={"/home"}>
        <img src={process.env.PUBLIC_URL + "/assets/icon-nav-home.svg"} className="h-[20px]" alt='icons on top'/>
        </Link>
        <Link to={"/movies"}>
        <img src={process.env.PUBLIC_URL + "/assets/icon-nav-movies.svg"} className="h-[20px]" alt='icons on top'/>
        </Link>
        <Link to={"/series"}>
        <img src={process.env.PUBLIC_URL + "/assets/icon-nav-tv-series.svg"} className="h-[20px]"alt='icons on top' />
        </Link>
        <Link to={"/bookmarked"}>
        <img src={process.env.PUBLIC_URL + "/assets/icon-nav-bookmark.svg"} className="h-[20px]"alt='icons on top' />
        </Link>
        <img src={process.env.PUBLIC_URL + "/assets/image-avatar.png"} className="h-[20px]" alt='icons on top'/>
         </div>
     );
}
 
export default Header;