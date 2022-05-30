import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './App.scss';
import React from 'react';
function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
      </>
    );
}

export default App;
