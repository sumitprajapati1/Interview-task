import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login'; 
import Products from './pages/Products'; 
import ManageProducts from './pages/ManageProducts'; 

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>To Do App</h1>
        <Routes>
          <Route exact path="/" element={<Login />} />  
          <Route exact path="/Products" element={<Products />} />
          <Route exact path="/ManageProducts" element={<ManageProducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
