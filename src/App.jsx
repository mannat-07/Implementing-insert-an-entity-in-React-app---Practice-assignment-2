
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Form';


const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
  );
};

export default App;