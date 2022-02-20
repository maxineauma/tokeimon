import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Ranking from './pages/Ranking';
import Pokemon from './pages/Pokemon';
import Search from './pages/Search';

const App = () => {

  return (

    <Router>
      <Routes>

        <Route path="/" element={<Home />} exact />
        <Route path="/ranking" element={<Ranking />} exact />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/search/:name" element={<Search />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </Router>

  );

}

export default App;
