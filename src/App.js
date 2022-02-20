import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Pokemon from './pages/Pokemon';
import Search from './pages/Search';

const App = () => {

  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} exact />
        <Route path="/ranking" element={<Ranking />} exact />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>

  );

}

export default App;
