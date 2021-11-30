import React from 'react';
import './App.scss';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import JokesNav from './pages/jokesNav/JokesNav';
import Jokes from './pages/jokes/Jokes';
import AboutJoke from './pages/aboutJoke/AboutJoke';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<JokesNav />}>
        <Route path="/" element={<Navigate to="/jokes" />} />
        <Route path="jokes" />
        <Route path="jokes/:category" element={<Jokes />} />
        <Route path="jokes/:category/:id" element={<AboutJoke />} />
      </Route>
    </Routes>
  </div>
);

export default App;
