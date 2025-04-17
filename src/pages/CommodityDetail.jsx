import { useParams } from 'react-router-dom';
import ReportCard from '../components/reportCard/ReportCard';
import star from '../assets/star.svg';
import sentiments from '../assets/sentiment.svg';
import timeLine from '../assets/time-line.svg';
import coverage from '../assets/coverage.svg';
import seperatorLine from '../assets/seperator-line.svg';
import rightArrow from '../assets/right-arrow.svg';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import './style.scss';

import { fetchData } from './../services/apiService';
import React, { useEffect, useState, useRef, useCallback } from 'react';

const Detail = () => {
    const { commodity } = useParams();
    const [reportList, setReportList] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(true);

    const observer = useRef();

    const lastReportRef = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasMore) {
                    setPageNo((prev) => prev + 1);
                }
            });

            if (node) observer.current.observe(node);
        },
        [loading, hasMore]
    );

    const loadReports = async () => {
        try {
            setLoading(true);
            const data = await fetchData(`/commoditydetails/${commodity}/n/29-02-2024?pageno=${pageNo}&pagesize=5`);
            const cards = data?.data?.card || [];

            setReportList((prev) => [...prev, ...cards]);
            setHasMore(cards.length === 5);
        } catch (error) {
            console.error('Error fetching home screen data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadReports();
    }, [pageNo]);

    const navigate = useNavigate();

    const handleNavigation = (commodity, nevigateOn) => {
        navigate(`/${commodity}/${nevigateOn}`);
    };

    return (
        <div className='container d-flex flex-column gap-3 py-3'>
            <div>
                <p
                    style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#DA6901',
                        backgroundColor: '#FFF2EA',
                    }}
                    className="m-0 py-2 text-center header-border rounded"
                >
                    Everything here is Chana Exclusive
                </p>

                <div className='d-flex align-items-center justify-content-center mt-3'>
                    <div style={{ width: '18px', height: '18px' }} className='d-flex align-items-center justify-content-center'>
                        <img className='w-100 h-100' src={star} alt="star" />
                    </div>
                    <p className='m-0'><strong><i>Premium</i></strong> Member Offers for you</p>
                    <div style={{ width: '18px', height: '18px', rotate: 'revert' }} className='d-flex align-items-center justify-content-center'>
                        <img className='w-100 h-100' src={star} alt="star" />
                    </div>
                </div>

                <p style={{ fontSize: "11px", fontWeight: '600' }} className='text-center mb-3'>
                    Up to 50% extra off on crores of products using supercoins
                </p>

                <div className='d-flex justify-content-between'>
                    <div style={{ width: '31%' }} onClick={() => handleNavigation(commodity, 'sentiment')}>
                        <div className='d-flex flex-column align-items-center justify-content-center py-2' style={{ border: '2px solid #FFCDAE', borderRadius: '8px', backgroundColor: 'var(--secondary-bg)' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#001D67', width: '58px', height: '58px', padding: '10px', borderRadius: '50%', border: '1px solid #FFD4B9' }}>
                                <img src={sentiments} alt="" />
                            </div>
                            <h6 className='text-center mt-2'>Chana Sentiments</h6>
                            <button style={{ backgroundColor: 'rgba(218, 105, 1, 0.12)', color: '#DA6901', border: '1px solid #DA6901', borderRadius: '8px', fontSize: '12px', fontWeight: 700, display: 'flex', gap: '4px' }}>Check <img src={rightArrow} alt="right arrow" /></button>
                        </div>
                    </div>
                    <div style={{ width: '31%' }}>
                        <div className='d-flex flex-column align-items-center justify-content-center py-2' style={{ border: '2px solid #FFCDAE', borderRadius: '8px', backgroundColor: 'var(--secondary-bg)' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#001D67', width: '58px', height: '58px', padding: '10px', borderRadius: '50%', border: '1px solid #FFD4B9' }}>
                                <img src={timeLine} alt="" />
                            </div>
                            <h6 className='text-center mt-2'>Chana <br /> Time Line</h6>
                            <button style={{ backgroundColor: 'rgba(218, 105, 1, 0.12)', color: '#DA6901', border: '1px solid #DA6901', borderRadius: '8px', fontSize: '12px', fontWeight: 700, display: 'flex', gap: '4px' }}>Detail <img src={rightArrow} alt="right arrow" /></button>
                        </div>
                    </div>
                    <div style={{ width: '31%' }} onClick={() => handleNavigation(commodity, 'coverage')}>
                        <div className='d-flex flex-column align-items-center justify-content-center py-2' style={{ border: '2px solid #FFCDAE', borderRadius: '8px', backgroundColor: 'var(--secondary-bg)' }}>
                            <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#001D67', width: '58px', height: '58px', padding: '10px', borderRadius: '50%', border: '1px solid #FFD4B9' }}>
                                <img src={coverage} alt="" />
                            </div>
                            <h6 className='text-center mt-2'>Chana Coverage</h6>
                            <button style={{ backgroundColor: 'rgba(218, 105, 1, 0.12)', color: '#DA6901', border: '1px solid #DA6901', borderRadius: '8px', fontSize: '12px', fontWeight: 700, display: 'flex', gap: '4px' }}>Read <img src={rightArrow} alt="right arrow" /></button>
                        </div>
                    </div>
                </div>

                <div className='text-center mt-3'>
                    <img src={seperatorLine} alt="" />
                </div>
            </div>

            {reportList.map((report, index) => {
                if (index === reportList.length - 1) {
                    return (
                        <div ref={lastReportRef} key={report.card_id}>
                            <ReportCard report={report} />
                        </div>
                    );
                }
                return <ReportCard key={report.card_id} report={report} />;
            })}

            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
                    <CircularProgress color="warning" />
                </Box>
            )}
        </div>
    );
};

export default Detail;