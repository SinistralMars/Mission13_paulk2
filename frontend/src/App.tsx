import React from 'react';
import './App.css';
import MovieCollection from './Movies';
import Home from './Home';
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom';
import Podcasts from './Podcast';

function App() {
  return (
    <BrowserRouter>
      <>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <div className="container-fluid">
            <div className="navbar-brand text-center">
              <h2 style={{ color: 'white', fontSize: '2rem' }}>
                The Joel Hilton Film Collection
              </h2>
            </div>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/podcasts">
                  Podcasts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/movie-collection">
                  Movie Collection
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/podcasts" Component={Podcasts} />
          <Route path="/movie-collection" Component={MovieCollection} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
