import { postData, fetchData } from '../../services/apiService'
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone.svg'
import RightArrowBlack from './../../assets/right-arrow-black.svg?react'
import { useNavigate } from "react-router-dom";
import backIcon from './../../assets/back.svg'
import { useHeader } from '../../components/HeaderContext';
import { WhatsappShareButton } from "react-share";
import './style.scss'

const MobileInsertion = () => {
    const { setTitle } = useHeader();
    const [mobile, setMobile] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setTitle("For Any Help");
    }, [setTitle]);

    const sendOTP = async () => {
        if (!mobile || mobile.length !== 10 || isNaN(mobile)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
    
        const body = {
            mobile: Number(mobile),
            language: "hi"
        };
    
        try {
            const data = await postData("/login", body);
            if (data.status === 200) {
                navigate("/otp-verification", { state: { mobile: mobile, language: "hi" } });
                data.data.user_token
                data.data.user_uid
                data.data.user_id

            }
        } catch (error) {
            console.error("Error posting send OTP screen data:", error);
        }
    };    

  return (
    <div>
        <div style={{ width: '100%', height: '30px', backgroundColor: 'var(--primary)' }}></div>
        <div style={{width: '100%', height: '56px'}} className='d-flex align-items-center px-3 bg-header'>
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
        <div style={{width: '100%', height: '190px', backgroundColor: '#D9D9D9'}}></div>
        <div className='container py-3 px-4 pt-5' style={{backgroundColor: 'var(--secondary-bg)', height: 'calc(100vh - 276px)'}}>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Enter your mobile number" variant="outlined" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
            </Box>

            <div className="d-flex justify-content-center mt-4">
                <button
                    style={{
                    width: '160px',
                    backgroundColor: '#DA6901',
                    fontSize: '18px',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                    }}
                    className="py-2 fw-bold"
                    onClick={sendOTP}
                    >
                    GET OTP <RightArrowBlack style={{ color: "#FFFFFF" }} className="ms-2" />
                </button>
            </div>

            <p className='m-0 mt-5'><strong>Important Note :</strong></p>
            <p>We are verifiying your number to create free account, just like Whatsapp and other mobile app</p>
        </div>
        <div style={{position: 'absolute', bottom: '30px', width: '100%'}}>
            <p className='py-2 px-4 m-auto' style={{backgroundColor: 'var(--tertiary-bg)', width: 'fit-content'}}>By continuing, you agree to our</p>
            <div className='d-flex justify-content-evenly mt-2'>
                <p style={{fontSize: '14px', textDecorationLine: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px'}} className='m-0'>Terms & Conditions</p>
                <p style={{fontSize: '14px', textDecorationLine: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px'}} className='m-0'>Privacy Policy</p>
                <p style={{fontSize: '14px', textDecorationLine: 'underline', textDecorationStyle: 'dotted', textUnderlineOffset: '4px'}} className='m-0'>Content Policy</p>
            </div>
        </div>
    </div>
  )
}

export default MobileInsertion
