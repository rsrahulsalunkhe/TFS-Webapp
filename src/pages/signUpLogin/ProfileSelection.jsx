import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import rightArrow from '../../assets/right-arrow-white.svg'

const ProfileSelection = () => {
  const [profile, setProfile] = useState(0);
  const [selectedProfile, setSelectedProfile] = useState(profile);
  const navigate = useNavigate();

  const handleProfileChange = (e) => {
    setSelectedProfile(Number(e.target.value));
  };

  const handleNextClick = () => {
    setProfile(selectedProfile);
    console.log('Selected profile:', selectedProfile);
    navigate('/profile-detail');
    // You can handle navigation or submission logic here
  };

  const profileOptions = [
    { id: 1, label: "Trader / Stockist / Aadtiya’s" },
    { id: 2, label: "Broker / Canvassing Agent" },
    { id: 3, label: "Miller / Processor / Manufacturer" },
    { id: 4, label: "Wholesaler / Distributor / Reseller" }
  ];

  return (
    <div>
      <div style={{ width: '100%', height: '30px', backgroundColor: 'var(--primary)' }}></div>
      <div className='container py-4' style={{ backgroundColor: 'var(--secondary-bg)', height: 'calc(100vh - 30px)' }}>
        <h1 className='m-0 fw-bold'>Choose Your</h1>
        <h1 style={{ color: 'var(--primary)' }} className='mb-2 fw-bold'>Business Profile</h1>
        <p>We request you to enter correct information, else your service will be deactivated</p>

        {profileOptions.map(option => (
          <div
            key={option.id}
            style={{
              backgroundColor: selectedProfile === option.id ? "#E5811E3D" : "var(--tertiary-bg)",
              color: selectedProfile === option.id ? "#DA6901" : "rgba(0, 0, 0, 0.8)"
            }}
            className="py-3 px-4 mt-3 d-flex align-items-center rounded"
          >
            <input
              style={{ width: "22px", height: "22px" }}
              type="radio"
              id={`profile-${option.id}`}
              name="profile_type"
              value={option.id}
              checked={selectedProfile === option.id}
              onChange={handleProfileChange}
            />
            <label
              className="ms-3 mb-0 fw-semibold fs-5"
              style={{ color: selectedProfile === option.id ? "#DA6901" : "var(--black-87)" }}
              htmlFor={`profile-${option.id}`}
            >
              {option.label}
            </label>
          </div>
        ))}

        <div className="d-flex justify-content-center mt-5">
          <button
            onClick={handleNextClick}
            style={{
              width: '225px',
              backgroundColor: '#DA6901',
              fontSize: '18px',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px'
            }}
            className="py-3 fw-bold"
          >
            Next Step <img className='ms-2 mt-1' src={rightArrow} alt="right arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSelection;