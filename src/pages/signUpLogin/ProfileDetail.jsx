import React from 'react'
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import profile from '../../assets/profile.svg'
import company from '../../assets/company.svg'
import location from '../../assets/location.svg'
import pincode from '../../assets/pincode.svg'
import rightArrow from '../../assets/right-arrow-white.svg'
import { useNavigate } from "react-router-dom";

const ariaLabel = { 'aria-label': 'description' };

const ProfileDetail = () => {
    const navigate = useNavigate();

    const handleNextClick = () => {
        // setProfile(selectedProfile);
        navigate('/select-commodity');
        // You can handle navigation or submission logic here
    };
  return (
    <div>
      <div style={{ width: '100%', height: '30px', backgroundColor: 'var(--primary)' }}></div>
      <div className='container py-4' style={{ backgroundColor: 'var(--secondary-bg)', height: 'calc(100vh - 30px)' }}>
        <h1 className='m-0 fw-bold'>Enter Your</h1>
        <h1 style={{ color: 'var(--primary)' }} className='mb-2 fw-bold'>Business Details</h1>
        <p>We request you to enter correct information, else you service will be deactivated</p>

        <div className='pt-3'>
            <div>
                <div className='d-flex gap-2 align-items-center mb-1'>
                    <img src={profile} alt="profile" />
                    <p className='m-0'>Full Name</p>
                </div>
                <Input placeholder="Enter your full name" inputProps={ariaLabel} />
            </div>
            <div className='mt-4'>
                <div className='d-flex gap-2 align-items-center mb-1'>
                    <img src={company} alt="company" />
                    <p className='m-0'>Firm / Company Name </p>
                </div>
                <Input placeholder="Enter your firm name" inputProps={ariaLabel} />
            </div>

            <div className='mt-4 d-flex gap-4'>
                <div>
                    <div className='d-flex gap-2 align-items-center mb-1'>
                        <img src={location} alt="company" />
                        <p className='m-0'>Location</p>
                    </div>
                    <Input placeholder="Your City/Town" inputProps={ariaLabel} />
                </div>

                <div>
                    <div className='d-flex gap-2 align-items-center mb-1'>
                        <img src={pincode} alt="company" />
                        <p className='m-0'>Pincode</p>
                    </div>
                    <Input placeholder="Location Pincode" inputProps={ariaLabel} />
                </div>
            </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <button
            onClick={handleNextClick}
            style={{ width: '225px', backgroundColor: '#DA6901', fontSize: '18px', color: '#FFFFFF', border: 'none', borderRadius: '8px' }}
            className="py-3 fw-bold"
          >
            Proceed <img className='ms-2 mt-1' src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetail
