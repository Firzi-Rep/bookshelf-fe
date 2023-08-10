import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import LoginPagePage from './pages/Login-page.js';
import RegisterPagePage from './pages/Register-page.js';
import ContactPagePage from './pages/Contact-page.js';
import PricingPagePage from './pages/Pricing-page.js';
import HttpresponsePage from './pages/Httpresponse.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/loginpage" element={<LoginPagePage />} />
      <Route path="/registerpage" element={<RegisterPagePage />} />
      <Route path="/contactpage" element={<ContactPagePage />} />
      <Route path="/pricingpage" element={<PricingPagePage />} />
      <Route path="/httpresponse" element={<HttpresponsePage />} />
    </Routes>
  );
}

export default App;
