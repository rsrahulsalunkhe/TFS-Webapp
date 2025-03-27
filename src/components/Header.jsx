import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { WhatsappShareButton } from "react-share";
import backIcon from './../assets/back.svg';
import logo from './../assets/logo.svg';
import whatsapp from './../assets/whatsapp.svg';
import phone from './../assets/phone.svg';
import './style.scss';
import ThemeToggle from './ThemeToggle';
import { useHeader } from '../components/HeaderContext';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, setTitle } = useHeader();  // Use context

  // Define route titles
  const routeTitles = {
    "/home": "HOME",
    "/futures": "FUTURES",
    "/account": "ACCOUNT",
    // "/privacy-policy": "Privacy Policy",
    // "/terms-&-conditions": "Terms & Conditions",
  };

  useEffect(() => {
    const dynamicRoute = location.pathname.substring(1);
    if (routeTitles[location.pathname]) {
      setTitle(routeTitles[location.pathname]);
    } else {
      setTitle(dynamicRoute.replace(/-/g, " ").charAt(0).toUpperCase() + dynamicRoute.slice(1));
    }
  }, [location.pathname, setTitle]);

  // Define routes where logo should be shown
  const logoRoutes = ["/home", "/futures", "/account"];
  const showLogo = logoRoutes.includes(location.pathname);

  return (
    <header className='d-flex align-items-center py-1 px-4 bg-header'>
      <img 
        onClick={showLogo ? () => navigate('/') : () => navigate(-1)} 
        src={showLogo ? logo : backIcon} 
        alt={showLogo ? "Logo" : "Back"} 
      />

      <div className='ms-3' style={{ lineHeight: 1 }}>
        <span className='fw-bold' style={{ fontSize: '20px', textTransform: 'capitalize', color: 'var(--primary)', fontWeight: '500' }}>
          {title}
        </span>
      </div>

      <div className='d-flex align-items-center ms-auto icons'>
        <ThemeToggle />
        <WhatsappShareButton url={window.location.href}>
          <img style={{ width: "30px", height: '30px' }} src={whatsapp} alt="Share on WhatsApp" />
        </WhatsappShareButton>
        <div className='ms-2' onClick={() => window.location.href = "tel:+919172680961"} style={{ cursor: 'pointer' }}>
          <img style={{ width: "24px", height: '24px' }} src={phone} alt="Call Now" />
        </div>
      </div>
    </header>
  );
};

export default Header;