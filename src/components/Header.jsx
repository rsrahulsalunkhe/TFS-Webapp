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
import '../i18n'
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { title, setTitle } = useHeader();

  // Define route titles as translation keys
  const routeTitles = {
    "/home": "footer.home",
    "/futures": "footer.futures",
    "/account": "footer.account",
    "/other": "account.about_mandi_central.other.other",
    "/privacy-policy": "account.about_mandi_central.other.privacy_policy",
    "/terms-&-conditions": "account.about_mandi_central.other.terms_and_conditons",
    "/content_restrictions": "account.about_mandi_central.other.content_restrictions",
    "/delete_account": "account.about_mandi_central.other.delete_account"
  };

  useEffect(() => {
    const routeKey = routeTitles[location.pathname];
    if (routeKey) {
      setTitle(t(routeKey));
    } else {
      // fallback: prettify path
      const dynamicRoute = location.pathname.substring(1);
      const prettified = dynamicRoute
        .replace(/-/g, " ")
        .replace(/_/g, " ")
        .replace(/\b\w/g, l => l.toUpperCase());
      setTitle(prettified);
    }
  }, [location.pathname, setTitle, t]);

  const logoRoutes = ["/home", "/futures", "/account"];
  const showLogo = logoRoutes.includes(location.pathname);

  return (
    <header className='d-flex align-items-center py-2 px-4 bg-header'>
      <img
        onClick={showLogo ? () => navigate('/') : () => navigate(-1)}
        src={showLogo ? logo : backIcon}
        alt={showLogo ? "Logo" : "Back"}
      />

      <div className='ms-3' style={{ lineHeight: 1 }}>
        <span className='fw-bold' style={{
          fontSize: '20px',
          textTransform: 'capitalize',
          color: 'var(--primary)',
          fontWeight: '500'
        }}>
          {title}
        </span>
      </div>

      <div className='d-flex align-items-center ms-auto icons'>
        {/* <ThemeToggle /> */}
        <WhatsappShareButton url={window.location.href}>
          <img style={{ width: "30px", height: '30px' }} src={whatsapp} alt="Share on WhatsApp" />
        </WhatsappShareButton>
        <div className='ms-3' onClick={() => window.location.href = "tel:+919172680961"} style={{ cursor: 'pointer' }}>
          <img style={{ width: "24px", height: '24px' }} src={phone} alt="Call Now" />
        </div>
      </div>
    </header>
  );
};

export default Header;