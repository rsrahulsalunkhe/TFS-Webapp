import { useParams, useNavigate } from 'react-router-dom';
import ReportCard from '../components/reportCard/ReportCard';
import star from '../assets/star.svg';
import sentiments from '../assets/sentiment.svg';
import timeLine from '../assets/time-line.svg';
import coverage from '../assets/coverage.svg';
import seperatorLine from '../assets/seperator-line.svg';
import rightArrow from '../assets/right-arrow.svg';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchData } from './../services/apiService';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import './style.scss';

const Detail = () => {
    const { commodity } = useParams();
    const navigate = useNavigate();

    const [reportList, setReportList] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoading, setInitialLoading] = useState(true);

    const observer = useRef();

    const loadReports = async (page) => {
        try {
            const res = await fetchData(`/commoditydetails/${commodity}/n/29-02-2024?pageno=${page}&pagesize=5`);
            const newCards = res?.data?.card || [];

            setReportList(prev => [...prev, ...newCards]);
            setHasMore(newCards.length === 5);

            if (page === 0) setInitialLoading(false);
        } catch (error) {
            console.error("Error fetching detail data:", error);
            setInitialLoading(false);
        }
    };

    useEffect(() => {
        loadReports(0);
    }, []);

    const handleObserver = useCallback((node) => {
        if (!hasMore) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setPageNo(prev => {
                    const nextPage = prev + 1;
                    loadReports(nextPage);
                    return nextPage;
                });
            }
        });

        if (node) observer.current.observe(node);
    }, [hasMore]);

    const handleNavigation = (commodity, nevigateOn) => {
        navigate(`/${commodity}/${nevigateOn}`);
    };

    return (
        <>
            {initialLoading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                    <CircularProgress color="warning" />
                </Box>
            ) : (
                <div className='container d-flex flex-column gap-3 py-3'>
                    {/* Header section remains unchanged */}
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
                            <div style={{ width: '31%' }} onClick={() => handleNavigation(commodity, 'time-line')}>
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
                        const triggerIndex = 2 + pageNo * 5; // after showing 2 cards, trigger fetch of next 5
                        if (index === triggerIndex) {
                            return (
                                <div ref={handleObserver} key={report.card_id}>
                                    <ReportCard report={report} />
                                </div>
                            );
                        }
                        return <ReportCard key={report.card_id} report={report} />;
                    })}
                </div>
            )}
        </>
    );
};

export default Detail;