import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Privacy from './Privacy.js';
import Terms from './Terms.js';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="terms" element={<Terms />} />
    </Routes>
  )
}

export default App;