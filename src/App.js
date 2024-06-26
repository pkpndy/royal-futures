import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import BotsPage from './pages/BotsPage';
import UsersPage from './pages/UsersPage';
import CoinsPage from './pages/CoinsPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/coins" element={<CoinsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/bots" element={<BotsPage />} />
          <Route path="/" element={<BotsPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
