import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Components/Products.jsx";
import "./index.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </Router>
  </React.StrictMode>
);