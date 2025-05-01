import React, { useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import kabuli from './../assets/kabuli.svg'
import urad from './../assets/urad.svg'
import chana from './../assets/chana.svg'
import dividerLine from './../assets/divider-line.svg'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import placeholder from '../assets/placeholder.webp'
import './style.scss'

import { fetchData } from './../services/apiService'

const Home = () => {
    const [homeData, setUsers] = useState({});
    const [loading, setLoading] = useState(true);
    const [lang, setLang] = useState('hi');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang') || 'hi';
        setLang(storedLang);
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
          setLoading(true);
          const data = await fetchData("/homescreendata");
          setUsers(data);
        } catch (error) {
          console.error("Error fetching home screen data:", error);
        } finally {
          setLoading(false);
        }
    };

    const navigate = useNavigate();

    const handleNavigation = (cat_id, commodity, commodityName) => {
        navigate(`/${cat_id}/${commodity}`, { state: { commodityName: commodityName } });
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                <CircularProgress color="warning" />
            </Box>
        );
    }
      
    return (
        <main style={{backgroundColor: 'var(--gray-000)'}}>
            <div className='d-grid'>
                {homeData.data?.ban?.map((b, index) => (
                    <div className='w-100 h-100' key={index} onClick={() => window.open(b.re, '_blank')}>
                        <img className='w-100 h-100' src={b.i} alt={`banner-${index + 1}`} loading='lazy' />
                    </div>
                ))}
            </div>

            {/* <div className='mt-4'>
                <img className='w-100 h-100' src={dividerLine} alt="" />
            </div> */}
            
            <div style={{ backgroundColor: 'var(--primary-bg)', borderRadius: '36px' }} className='my-5 py-4'>
                {homeData.data?.N?.sec.map((s) => (
                    <div key={s.cat_id}>
                        <div className='mx-4 px-2 pt-3'>
                            <div className='w-100 d-flex align-items-center'>
                                <span style={{ fontSize: lang === 'hi' ? '24px' : '22px', color: 'var(--primary)' }} className='fw-bold'>{s.cat_name}</span>
                                <div style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #FF5C00 100%)', flexGrow: 1, height: '2px', marginLeft: '20px' }}></div>
                            </div>
                        </div>

                        {/* Grouping commodities into rows of 3 */}
                        {Array.from({ length: Math.ceil(s.com.length / 3) }, (_, rowIndex) => (
                            <div 
                                key={`row-${rowIndex}`} 
                                className='d-flex flex-wrap justify-content-start' // Added spacing
                            >
                                {s.com.slice(rowIndex * 3, rowIndex * 3 + 3).map((c, cIndex) => (
                                    <div 
                                        key={c.id || `commodity-${rowIndex}-${cIndex}`} 
                                        className='commodity d-flex flex-column align-items-center text-center p-3' 
                                        style={{ width: '33%', gap: '10px' }} // Increased spacing
                                        onClick={() => handleNavigation(c.cat_id, c.commodity_id, c.commodity_name)}
                                    >
                                        {/* Image Handling */}
                                        <div className='img' style={{ width: '75px', height: '75px' }}>
                                            {c.det.i ? (
                                                <img src={c.det.i} alt={c.commodity_name} className='w-100 h-100 rounded-circle' loading='lazy' />
                                            ) : (
                                                // <div className='w-100 h-100 rounded-circle bg-secondary'></div>
                                                <img src={placeholder} alt={c.commodity_name} className='w-100 h-100 rounded-circle' loading='lazy' />
                                            )}
                                        </div>
                                        {/* Centered Text */}
                                        <div className='w-100'>
                                            <h5 style={{ fontSize: lang === 'hi' ? '18px' : '16px' }} className='m-0'>{c.commodity_name}</h5>
                                            {c.det.t && <p style={{ fontSize: lang === 'hi' ? '14px' : '12px' }} className='special m-0'>• {c.det.t}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            {/* <div className='d-flex justify-content-evenly'>
                <div className='commodity' onClick={() => handleNavigation("chana")}>
                    <div className='img'>
                        <img src={chana} alt="" />
                    </div>
                    <span>Chana</span>
                    <p className='special text-center'>• Special Report</p>
                </div>
                <div className='commodity' onClick={() => handleNavigation("kabuli")}>
                    <div className='img'>
                        <img src={kabuli} alt="" />
                    </div>
                    <span>Kabuli</span>
                </div>
                <div className='commodity' onClick={() => handleNavigation("urad")}>
                    <div className='img'>
                        <img src={urad} alt="" />
                    </div>
                    <span>Urad</span>
                </div>
            </div> */}

            <div style={{backgroundColor: '#FBEDE0'}} className='py-5 px-2 mt-3'>
                <h1 style={{fontSize: '60px', color: 'var(--primary)'}} className='fw-bold'>Mandi Centrar</h1>
                <p className='fs-5 mt-3' style={{color: '#000000'}}>Agri Trade Assistance App</p>
            </div>
        </main>
    );
  };
  
  export default Home;