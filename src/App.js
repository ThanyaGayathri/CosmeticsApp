import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import Skincare from './pages/Skincare';
import Makeup from './pages/Makeup';
import HairCare from './pages/HairCare';
import Fragrance from './pages/Fragrance';
import PersonalCare from './pages/Personal Care';
import Wellness from './pages/Wellness';
import MomBaby from './pages/MomBaby';
import BathBody from './pages/BathBody';
import BrandList from './components/BrandList';
import Home from './pages/Home';
import CategoryList from './components/CategoryList';
import FAQPage from './components/FAQPage';
import OffersList from './components/OffersList';
import GoodVibes from './pages/GoodVibes';
import Nivea from './pages/Nivea';
import OrderPage from './pages/OrderPage';
import Lakme from './pages/Lakme';
import FacesCanada from './pages/FacesCanada.js';
import Mamaearth from './pages/Mamaearth';
import JohnsonBaby from './pages/JohnsonBaby';
import Plum from './pages/Plum';
import SugarPOP from './pages/SugarPOP';
import WOW from './pages/WOW';
import Tresemme from './pages/Tresemme';
import Nykaa from './pages/Nykaa';
import Himalaya from './pages/Himalaya';
import Garnier from './pages/Garnier';
import Biotique from './pages/Biotique';
import Eva from './pages/Eva';
import CartPage from './components/CartPage';
import DERMDOC from './pages/DERMDOC';
import LorealParis from './pages/LorealParis';
import MyOrder from './pages/MyOrder.js';
import ContactPage from './pages/ContactPage'; 
import { CartProvider } from './contexts/CartContext';
import Cart from "./components/AddCart"


function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/makeup" element={<Makeup />} />
        <Route path="/haircare" element={<HairCare />} />
        <Route path="/fragrance" element={<Fragrance />} />
        <Route path="/personalcare" element={<PersonalCare />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/momandbaby" element={<MomBaby />} />
        <Route path="/bathandbody" element={<BathBody />} />
        <Route path="/brandslist" element={<BrandList />} />
        <Route path="/categorylist" element={<CategoryList />} />
        <Route path="/offerslist" element={<OffersList />} />
        <Route path="/myorder" element={<MyOrder />} />
        <Route path="/brand-a" element={<GoodVibes />} />
        <Route path="/brand-d" element={<Nivea />} />
        <Route path="/brand-c" element={<FacesCanada />} />
        <Route path="/brand-b" element={<Lakme />} />
        <Route path="/brand-e" element={<Mamaearth />} />
        <Route path="/brand-f" element={<JohnsonBaby />} />
        <Route path="/brand-g" element={<Plum />} />
        <Route path="/brand-h" element={<SugarPOP />} />
        <Route path="/brand-j" element={<WOW />} />
        <Route path="/brand-i" element={<Tresemme />} />
        <Route path="/brand-k" element={<Nykaa />} />
        <Route path="/brand-q" element={<Himalaya />} />
        <Route path="/brand-p" element={<Garnier />} />
        <Route path="/brand-m" element={<Biotique />} />
        <Route path="/brand-o" element={<Eva />} />
        <Route path="/brand-n" element={<DERMDOC />} />
        <Route path="/brand-r" element={<LorealParis />} />
        <Route path="/orders" element={<OrderPage/>} />
        <Route path="/addcart" element={<Cart />} />
        
      </Routes>
    </Router>
    </CartProvider>
    
  );
}

export default App;
