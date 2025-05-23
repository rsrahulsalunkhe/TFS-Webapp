import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CollapsibleHeader.css';
import BackArrowBlack from '../../assets/back-arrow-black.svg';
import BackIcon from '../../assets/back.svg'
import { useHeader } from '../../components/HeaderContext';
import { WhatsappShareButton } from "react-share";
import whatsapp from '../../assets/whatsapp.svg';
import phone from '../../assets/phone.svg';

const CollapsibleHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [headerBackgroundImage, setHeaderBackgroundImage] = useState('https://tripmoneycmsimgak.mmtcdn.com/img/bg_14c7031087.png');
  const { title, setTitle } = useHeader('');
  const navigate = useNavigate();

  const handleScroll = () => {
    const offset = window.scrollY;
    setScrolled(offset > 180);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Collapsible Header */}
      <div className={`top-header ${scrolled ? 'collapsed' : ''}`}>
        <div className="position-absolute top-0 start-0 p-3 text-white">
          <img src={BackArrowBlack} alt="back arrow black" onClick={ () => navigate(-1)} />
        </div>
        <div className="header-bg" style={{background: `url(${headerBackgroundImage}) no-repeat center center`}}></div>
      </div>

      {/* Sticky Navbar */}
      {scrolled && 
        <nav className={`shadow-sm sticky-top transition-navbar ${scrolled ? 'visible' : 'invisible'} d-flex align-items-center px-4 bg-header`} style={{height: '56px'}}>
            {/* <i className="bi bi-arrow-left me-2"></i> */}
            <img src={BackIcon} alt="back arrow" className='me-3' onClick={ () => navigate(-1)} />
            <h5>{title}</h5>

            <div className='d-flex align-items-center ms-auto icons'>
              <WhatsappShareButton url={window.location.href}>
                <img style={{ width: "30px", height: '30px' }} src={whatsapp} alt="Share on WhatsApp" />
              </WhatsappShareButton>
              <div className='ms-3' onClick={() => window.location.href = "tel:+919172680961"} style={{ cursor: 'pointer' }}>
                <img style={{ width: "24px", height: '24px' }} src={phone} alt="Call Now" />
              </div>
            </div>
        </nav>
      }
    </>
  );
};

export default CollapsibleHeader;