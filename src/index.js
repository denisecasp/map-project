import React from 'react';
import ReactDOM from 'react-dom';
import Map from './Map';
import Restaurants from './Restaurants';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Map />} />
        <Route path='/restaurants' element={<Restaurants />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);