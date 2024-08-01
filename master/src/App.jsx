import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import MainHome from './component/homepage/MainHome';
import WhyChooseUsSection from './component/consulting/card1';
import EduSourcePage from './component/template/Tem';
import ResourcePage from './component/homepage/ResourcePage';
import MainBlog from './component/blog/MainBlog';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/why-choose-us" element={<WhyChooseUsSection />} />
        <Route path="/edu-source" element= {<EduSourcePage />} />
        <Route path="/resource-page" element= {<ResourcePage />} />
        <Route path="/MainBlog" element= {<MainBlog />} />

      </Routes>
    </Router>
  );
}

export default App;
