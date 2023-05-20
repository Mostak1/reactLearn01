import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import NoPage from "./pages/NoPage";
import './App.css';
import { Props } from './pages/clswork/Props';
import { Stylecompo } from './pages/clswork/Stylecompo';
import { Axios } from './pages/Axios';
import { Maintenance } from './pages/clswork/Maintenance';
import { Ustate } from './pages/clswork/Ustate';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Props" element={<Props />} />
          <Route path="Stylecompo" element={<Stylecompo />} />
          <Route path="Axios" element={<Axios />} />
          <Route path="Ustate" element={<Ustate />} />
          <Route path="Maintenance" element={<Maintenance />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;