import React from 'react'
import LanguageToggle from './../../components/LanguageToggle'
import { useNavigate } from "react-router-dom";
import { WhatsappShareButton } from "react-share";
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone.svg'

const LanguageSelection = () => {
  const navigate = useNavigate();

  return (
    <div className='d-flex flex-column' style={{height: '100vh'}}>
      <div style={{width: '100%', height: '30px', backgroundColor: '#DA6901'}}></div>
      <div style={{width: '100%', height: '56px', backgroundColor: 'var(--secondary-bg)'}} className='d-flex align-items-center px-3'>
        <h5 className='m-0' style={{color: '#DA6901'}}>For Any Help</h5>

        <div className='ms-auto d-flex gap-3'>
            <WhatsappShareButton url={window.location.href}>
              <img style={{ width: "30px", height: '30px' }} src={whatsapp} alt="Share on WhatsApp" />
            </WhatsappShareButton>
            <div onClick={() => window.location.href = "tel:+919172680961"} style={{ cursor: 'pointer' }}>
              <img style={{ width: "24px", height: '24px' }} src={phone} alt="Call Now" />
            </div>
        </div>
      </div>
      <div className='container d-flex flex-column py-3' style={{height: 'calc(100vh - 86px)'}}>
        <h1 className='fw-bold'>Choose <span className='fw-bold' style={{color: 'var(--primary)'}}>Language</span></h1>

        <p className='mt-3'>You can use our app in Hindi or English. Please select your preferred language.</p>

        <p className='my-3'>आप हमारे ऐप को हिंदी या अंग्रेजी में उपयोग कर सकते हैं, कृपया अपनी पसंदीदा भाषा चुनें।</p>

        <LanguageToggle redirectPath="/home" />

        <div style={{  bottom: '30px', width: '100%'}} className='mt-auto mb-5'>
          <p className='py-2 px-4 m-auto' style={{backgroundColor: 'var(--secondary-bg)', width: 'fit-content'}}>By continuing, you agree to our</p>
          <div className='d-flex justify-content-evenly mt-2'>
              <p style={{fontSize: '14px', textDecorationLine: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px'}} className='m-0' onClick={() => navigate('/terms-&-conditions')}>Terms & Conditions</p>
              <p style={{fontSize: '14px', textDecorationLine: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px'}} className='m-0' onClick={() => navigate('/privacy-policy')}>Privacy Policy</p>
              <p style={{fontSize: '14px', textDecorationLine: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px'}} className='m-0' onClick={() => navigate('/content-policy')}>Content Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LanguageSelection
