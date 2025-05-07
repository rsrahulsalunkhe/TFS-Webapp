import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import './CollapsibleHeader.css';
import BackArrowBlack from '../../assets/back-arrow-black.svg';
import BackIcon from '../../assets/back.svg'
import { useHeader } from '../../components/HeaderContext';
import '../../i18n'
// import { useTranslation } from "react-i18next";

const CollapsibleHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [headerBackgroundImage, setHeaderBackgroundImage] = useState('https://tripmoneycmsimgak.mmtcdn.com/img/bg_14c7031087.png');
  const { title, setTitle } = useHeader('');
  // const { t } = useTranslation();
    const navigate = useNavigate();

  // const routeTitles = {
  //   "/home": "footer.home",
  //   "/futures": "footer.futures",
  //   "/account": "footer.account",
  //   "/other": "account.about_mandi_central.other.other",
  //   "/privacy-policy": "account.about_mandi_central.other.privacy_policy",
  //   "/terms-&-conditions": "account.about_mandi_central.other.terms_and_conditons",
  //   "/content_restrictions": "account.about_mandi_central.other.content_restrictions",
  //   "/delete_account": "account.about_mandi_central.other.delete_account"
  // };

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 100);
  };

  useEffect(() => {
    // const routeKey = routeTitles[location.pathname];
    // if (routeKey) {
    //   setTitle(t(routeKey));
    // }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Collapsible Header */}
      <div className={`top-header ${scrolled ? 'collapsed' : ''}`}>
        <div className="position-absolute top-0 start-0 p-3 text-white">
          {/* <i className="bi bi-arrow-left"></i> */}
          <img src={BackArrowBlack} alt="back arrow black" onClick={ () => navigate(-1)} />
        </div>
        <div className="header-bg" style={{background: `url(${headerBackgroundImage}) no-repeat center center`}}></div>
      </div>

      {/* Sticky Navbar */}
      <nav className={`shadow-sm sticky-top transition-navbar ${scrolled ? 'visible' : 'invisible'} d-flex align-items-center px-4 bg-header`} style={{height: '56px'}}>
          {/* <i className="bi bi-arrow-left me-2"></i> */}
          <img src={BackIcon} alt="back arrow" className='me-3' onClick={ () => navigate(-1)} />
          <h5>{title}</h5>
      </nav>

      {/* Main Content */}
      {/* <div className="container mt-4">
        <h4>Multicurrency Card</h4>
        <p>Details about the card...</p>
        <div style={{ height: '1000px' }}>Scroll down to test header collapse...</div>
      </div> */}
    </>
  );
};

export default CollapsibleHeader;