import React from 'react';
import './App.css';
import NewsPage from './pages/NewsPage';
import Navbar from './components/navbar';
import Business from './pages/Business';
import Education from './pages/Education';
import Entertainment from './pages/Entertainment';
import Sports from './pages/Sport';
import Tech from './pages/Tech';
import India from './pages/India';
import World from './pages/World';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsPage />} />
          <Route exact path="/India" element={<India />} />
          <Route exact path="/World" element={<World />} />
          <Route exact path="/Sports" element={< Sports />} />
          <Route exact path="/Tech" element={<Tech />} />
          <Route exact path="/Business" element={<Business />} />
          <Route exact path="/Education" element={<Education />} />
          <Route exact path="/Entertainment" element={<Entertainment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
