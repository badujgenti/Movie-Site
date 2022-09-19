import React , { createContext, useState }from 'react';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Register from './Register';
import Login from './login';
import Home from './Home';
import Movies from './Movies';
import Series from './Series';
import Bookmarked from './Bookmarked';
import data from "./data.json"

export const bookmarkContext = createContext();
const App =()=>{
   

const [movies, setMovies] = useState(data);
    return  <React.StrictMode>
    <bookmarkContext.Provider value={[movies, setMovies]}>
        
  <BrowserRouter>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/series' element={<Series/>}/>
          <Route path='/bookmarked' element={<Bookmarked/>}/>
          
    </Routes>
  </BrowserRouter>
  </bookmarkContext.Provider>
</React.StrictMode>
}


export default App ;






