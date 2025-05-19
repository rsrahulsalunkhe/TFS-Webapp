import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

// Import your profile images
import pulses from '../../assets/pulses.svg'
import oilseeds from '../../assets/oilseeds.svg'
import cereals from '../../assets/cereals.svg'
import cotton from '../../assets/cotton.svg'
import masala from '../../assets/masala.svg'
import others from '../../assets/others.svg'

const SelectCommodity = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelectedProfile(id);
  };

  const handleNextClick = () => {
    console.log('Selected profile:', selectedProfile);
    navigate('/home');
  };

  const profileOptions = [
    { id: 1, label: "Pulses", subLable: 'Chana, Urad, Moong, Tur, Kabuli, Masur, All Daals etc', img: pulses },
    { id: 2, label: "Oilseeds, Oil, DOC", subLable: 'Soybean, Mustard, DOCs, Veg-Oil, Sunflower, etc',  img: oilseeds },
    { id: 3, label: "Cereals", subLable: 'Wheat, Maize, Bajra, Jowar, Paddy, Rice etc',  img: cereals },
    { id: 4, label: "Cotton & Related", subLable: 'Cotton-Bales, Oil-cake, Seed, Yarn, etc ',  img: cotton },
    { id: 5, label: "Masala / Spices", subLable: 'Jeera, Chillies, Ajwain, Dhaniya ',  img: masala },
    { id: 6, label: "Other", subLable: 'Sugar, Jaggery etc',  img: others }
  ];

  return (
    <div>
      <div style={{ width: '100%', height: '30px', backgroundColor: 'var(--primary)' }}></div>
      <div className='container py-4' style={{ backgroundColor: 'var(--secondary-bg)', height: 'calc(100%)' }}>
        <div className='d-flex'>
          <h1 className='m-0 fw-bold'>Select</h1>
          <h1 style={{ color: 'var(--primary)' }} className='ps-2 fw-bold'>Commodities</h1>
        </div>
        <div className='d-flex mb-2'>
          <h1 className='m-0 fw-bold'>You</h1>
          <h1 style={{ color: 'var(--primary)' }} className='ps-2 fw-bold'>Trade</h1>
        </div>

        {profileOptions.map(option => (
          <div
            key={option.id}
            onClick={() => handleSelect(option.id)}
            style={{
              backgroundColor: selectedProfile === option.id ? "#E5811E3D" : "var(--tertiary-bg)",
              color: selectedProfile === option.id ? "#DA6901" : "rgba(0, 0, 0, 0.8)",
              cursor: "pointer",
              border: selectedProfile === option.id ? "2px solid #DA6901" : "2px solid transparent"
            }}
            className="py-3 px-4 mt-3 d-flex align-items-center rounded"
          >
            <img
              src={option.img}
              alt={option.label}
              style={{ width: "68px", height: "68px", objectFit: "contain", marginRight: "15px" }}
            />
            <div>
                <p className="fw-bold fs-5 m-0" style={{ color: selectedProfile === option.id ? "#DA6901" : "var(--black-87)" }}>
                {option.label}
                </p>
                <p className='m-0' style={{ color: selectedProfile === option.id ? "#DA6901" : "var(--black-87)" }}>{option.subLable}</p>
            </div>
          </div>
        ))}

        <div className="d-flex justify-content-center mt-5">
          <button
            onClick={handleNextClick}
            disabled={selectedProfile === null}
            style={{
              width: '225px',
              backgroundColor: selectedProfile === null ? '#cccccc' : '#DA6901',
              fontSize: '18px',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              cursor: selectedProfile === null ? 'not-allowed' : 'pointer'
            }}
            className="py-3 fw-bold"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectCommodity;