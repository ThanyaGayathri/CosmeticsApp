import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, [location.pathname]);

  const handleNavClick = (linkName, path) => {
    if (activeLink === linkName && location.pathname === path) {
      setActiveLink(null);
      navigate('/');
    } else {
      setActiveLink(linkName);
      navigate(path);
    }
  };

  return (
    <div className="nav-menu">
      <div className="nav-left">
        <span
          className="nav-button"
          onClick={() => handleNavClick('categories', '/categorylist')}
        >
          SHOP CATEGORIES
        </span>

        <span
          className="nav-button"
          onClick={() => handleNavClick('brands', '/brandslist')}
        >
          BRANDS
        </span>

        <span
          className="nav-button"
          onClick={() => handleNavClick('offers', '/offerslist')}
        >
          ELITE OFFERS
        </span>

        {isLoggedIn && (
          <>
            <span
              className="nav-button"
              onClick={() => handleNavClick('orders', '/myorder')}
            >
              MY ORDERS
            </span>

            <span
              className="nav-button"
              onClick={() => handleNavClick('cart', '/cart')}
            >
              MY CART
            </span>
          </>
        )}
      </div>

      <div className="nav-right">
        {!isLoggedIn ? (
          <>
            <span className="auth-button" onClick={() => navigate('/login')}>
              Login
            </span>
            <span className="auth-button" onClick={() => navigate('/signup')}>
              Sign Up
            </span>
          </>
        ) : (
          <span
            className="auth-button"
            onClick={() => {
              localStorage.setItem('isLoggedIn', 'false');
              setIsLoggedIn(false);
              navigate('/');
            }}
          >
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
