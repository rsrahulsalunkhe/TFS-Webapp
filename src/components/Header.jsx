import React from 'react';
import logo from './../assets/logo.svg'
import whatsapp from './../assets/whatsapp.svg'
import phone from './../assets/phone.svg'
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import { WhatsappShareButton } from "react-share";
import './style.css'

const Header = (props) => {
  const navigate = useNavigate();
  const { categorieType } = useParams();
  const location = useLocation();

  const title = location.pathname === "/home" ? "HOME" : props.title === 'detail' ? props.title : categorieType;

  return (
    <header className='container d-flex align-items-center px-4 py-3'>
        <div 
          style={{ width: '38px', height: '38px', cursor: 'pointer' }} 
          onClick={() => navigate('/')}
        >
          <img className='w-100 h-100' src={logo} alt="logo" />
        </div>

        <div className='ms-2' style={{ lineHeight: 1 }}>
            <span style={{ fontSize: '20px', textTransform: 'capitalize', color: '#E5811E', fontWeight: '500' }}>{title}</span>
            {(title !== "HOME" && title !== "detail" && title !== "categorie") && (
            <span style={{ fontSize: '20px', textTransform: 'capitalize', color: '#E5811E', fontWeight: '500' }}>{title}</span>
            )}
        </div>

        <div className='d-flex align-items-center ms-auto icons'>
          <WhatsappShareButton url={window.location.href}>
            <img style={{width: "30px", height: '30px'}} src={whatsapp} alt="Share on WhatsApp" />
          </WhatsappShareButton>

          <a className='ms-4' href="tel:+91 9172680961">
            <img style={{ width: "24px", height: '24px' }} src={phone} alt="Call Now" />
          </a>
        </div>
    </header>
  );
};

export default Header;