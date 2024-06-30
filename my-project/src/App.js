import React from 'react';
import AllRoute from './components/AllRoute';
import './App.css';
import TawkTo from './TawkTo'; // Import component TawkTo

function App() {
  return (
    <>
      <AllRoute />
      <TawkTo /> {/* Thêm component TawkTo */}
    </>
  );
}

export default App;
