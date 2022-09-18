import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Register from './Register';
import Login from './login';
import Home from './Home';
import Movies from './Movies';
import Series from './Series';
import Bookmarked from './Bookmarked';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

