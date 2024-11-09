import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentDetails from './components/PaymentDetails';
import PaymentStatus from './components/PaymentStatus';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaymentDetails />} />
        <Route path="/payment-status" element={<PaymentStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
