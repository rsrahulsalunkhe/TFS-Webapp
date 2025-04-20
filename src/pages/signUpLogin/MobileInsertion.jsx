import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone.svg'
import RightArrowBlack from './../../assets/right-arrow-black.svg?react'
import { useNavigate } from "react-router-dom";
import backIcon from './../../assets/back.svg'
import { useHeader } from '../../components/HeaderContext';
import './style.scss'

const MobileInsertion = () => {
    const { setTitle } = useHeader();

    useEffect(() => {
        setTitle("For Any Help");
    }, [setTitle]);

    const navigate = useNavigate();

    const handleBack = () => {
        const previousPath = localStorage.getItem("redirectAfterLogin");
        if (previousPath) {
            navigate("/home");
        } else {
            navigate(-1); // fallback
        }
    };

    const handleNextClick = () => {
        navigate("/otp-verification");
    };

  return (
    <div>
        {/* <div style={{width: '100%', height: '30px', backgroundColor: '#DA6901'}}></div>
            <div style={{width: '100%', height: '56px', backgroundColor: '#F5F5F5'}} className='d-flex align-items-center px-3'>
            <img src={backIcon} alt="back" onClick={handleBack} className='me-3' />
            <h5 className='m-0' style={{color: '#DA6901'}}>For Any Help</h5>

            <div className='ms-auto d-flex gap-3'>
                <img src={whatsapp} alt="" />
                <img src={phone} alt="" />
            </div>
        </div> */}
        <div style={{width: '100%', height: '190px', backgroundColor: '#D9D9D9'}}></div>
        <div className='container py-3 px-4 mt-4'>
            <Box
                component="form"
                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
                {/* <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField id="standard-basic" label="Standard" variant="standard" /> */}
            </Box>

            <div className="d-flex justify-content-center mt-4">
                <button
                    onClick={handleNextClick}
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
                    
                    >
                    GET OTP <RightArrowBlack style={{ color: "#FFFFFF" }} className="ms-2" />
                </button>
            </div>

            <p className='m-0 mt-5'><strong>Important Note :</strong></p>
            <p>We are verifiying your number to create free account, just like Whatsapp and other mobile app</p>
        </div>
        <div style={{position: 'absolute', bottom: '30px', width: '100%'}}>
            <p className='py-2 px-4 m-auto' style={{backgroundColor: '#F5F5F5', width: 'fit-content'}}>By continuing, you agree to our</p>
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
