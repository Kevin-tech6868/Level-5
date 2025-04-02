import React from 'react';
import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Summary from './components/Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blogsummary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;