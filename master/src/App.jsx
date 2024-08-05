import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/navbar/Navbar';
import MainHome from './component/homepage/MainHome';
import WhyChooseUsSection from './component/consulting/EducationalConsulting';
import EduSourcePage from './component/template/Tem';
import ResourcePage from './component/homepage/ResourcePage';
import MainBlog from './component/blog/MainBlog';
import MainActivity from './component/activity/MainActivity';
import Mainprofile from './component/profile/Mainprofile';
import Mainprofile1 from './component/profile1/Mainprofile1';
import TeacherCommunity from './component/profile1/Allprofiles';
import ShoppingCart from './component/checkoutandcart/Cart';
import Dd from './component/consulting/EducationalConsulting';
import EducationConsultants from './component/consulting/totur';
import Appi from './component/profile1/appisraa';
import ActivityDetails from './component/profile1/ActivityDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/why-choose-us" element={<WhyChooseUsSection />} />
        <Route path="/edu-source" element={<EduSourcePage />} />
        <Route path="/resource-page" element={<ResourcePage />} />
        <Route path="/MainBlog" element={<MainBlog />} />
        <Route path="/MainActivity" element={<MainActivity />} />
        <Route path="/Mainprofile" element={<Appi />} />
        <Route path="/Mainprofile1" element={<Mainprofile1 />} />
        <Route path="/TeacherCommunity" element={<TeacherCommunity />} />
        <Route path="/ShoppingCart" element={<ShoppingCart />} />
        <Route path="/WhyChooseUsSection" element={<Dd />} />
        <Route path="/EducationConsultants" element={<EducationConsultants />} />
        <Route path="/activity/:slug" element={<ActivityDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
