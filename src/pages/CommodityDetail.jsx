import { useParams, useNavigate, useLocation } from 'react-router-dom';
import ReportCard from '../components/reportCard/ReportCard';
import star from '../assets/star.svg';
import sentiments from '../assets/sentiment.svg';
import timeLine from '../assets/time-line.svg';
import coverage from '../assets/coverage.svg';
import seperatorLine from '../assets/seperator-line.svg';
import rightArrow from '../assets/right-arrow-orange.svg';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchData } from './../services/apiService';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useHeader } from './../components/HeaderContext';
import './style.scss';

const Detail = () => {
    const { cat_id } = useParams();
    const { commodity } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const commodityName = location.state?.commodityName;

    const [reportList, setReportList] = useState([]);
    const [banList, setBanList] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const [initialLoading, setInitialLoading] = useState(true);
    const [isFetching, setIsFetching] = useState(false);

    const loadReports = async (page) => {
        setIsFetching(true);
        try {
            const res = await fetchData(`/commoditydetailscatwise/${cat_id}/${commodity}/n/29-02-2024?pageno=${page}&pagesize=20`);
            
            const newCards = res?.data?.card || [];
            const banLists = res?.data?.ban || [];            

            setBanList(banLists);

            setReportList(prev => [...prev, ...newCards]);
            setHasMore(newCards.length === 20);

            if (page === 0) setInitialLoading(false);
        } catch (error) {
            console.error("Error fetching detail data:", error);
            setInitialLoading(false);
        }
        setIsFetching(false);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        loadReports(0);
    }, []);

    const handleScroll = useCallback(() => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (!isFetching && hasMore && scrollTop + clientHeight >= scrollHeight - 50) {
            setPageNo(prev => {
                const nextPage = prev + 1;
                loadReports(nextPage);
                return nextPage;
            });
        }
    }, [isFetching, hasMore]);

    const { setTitle } = useHeader();

    useEffect(() => {
        setTitle(commodityName);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

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
                <div style={{minHeight: 'calc(100vh - 180px)', backgroundColor: 'var(--tertiary-bg)'}}>
                    <div className='d-flex flex-column gap-3 p-3' style={{backgroundColor: 'var(--primary-bg)'}}>
                        <div>
                            <h6>MANDI CENTRAL’S</h6>
                            <h4 className='fw-bold' style={{color: 'var(--dark-red)'}}>CURATED UPDATES</h4>
                        </div>

                        <div className='d-flex gap-3 h-100'>
                            <div className='w-50 d-flex flex-column' style={{backgroundColor: 'var(--secondary-bg)', padding: '16px 12px', borderRadius: '8px', border: '1px solid #D5D5D5'}} onClick={() => handleNavigation(commodity, 'sentiment')}>
                                <h6 className='mb-2'>Major Market Sentiment</h6>
                                <p style={{fontSize: '13px', color: 'var(--black-6)', fontWeight: 500}}>Identify and Analyze Important Market Trends and Changes</p>
                                <button style={{ backgroundColor: 'rgba(218, 105, 1, 0.12)', color: '#DA6901', border: '1px solid #DA6901', fontSize: '12px', fontWeight: 700, display: 'flex', gap: '4px', width: '64px', padding: '2px 0' }}>Check <img src={rightArrow} alt="right arrow" /></button>
                                <div className='d-flex justify-content-end mt-auto'>
                                    <img src={sentiments} alt="sentiments" />
                                </div>
                            </div>
                            <div className='w-50 h-100 d-flex flex-column gap-3'>
                                <div className='h-50' style={{backgroundColor: 'var(--secondary-bg)', padding: '16px 12px', borderRadius: '8px', border: '1px solid #D5D5D5'}} onClick={() => handleNavigation(commodity, 'time-line')}>
                                    <h6>Time Line</h6>
                                    <p style={{fontSize: '13px', color: 'var(--black-6)', fontWeight: 500}} className='m-0'>Daywise Market Highlights</p>
                                    <div className='d-flex w-100 align-items-end'>
                                        <button style={{ backgroundColor: 'rgba(218, 105, 1, 0.12)', color: '#DA6901', border: '1px solid #DA6901', fontSize: '12px', fontWeight: 700, display: 'flex', gap: '4px', width: '64px', height: '20px' }}>Check <img src={rightArrow} alt="right arrow" /></button>
                                        <div className='d-flex justify-content-end w-100'>
                                            <img src={timeLine} alt="timeLine" />
                                        </div>
                                    </div>
                                </div>
                                <div className='h-50' style={{backgroundColor: 'var(--secondary-bg)', padding: '16px 12px', borderRadius: '8px', border: '1px solid #D5D5D5'}} onClick={() => handleNavigation(commodity, 'coverage')}>
                                    <h6>Coverage</h6>
                                    <p style={{fontSize: '13px', color: 'var(--black-6)', fontWeight: 500}} className='m-0'>Track Important Market Updates</p>
                                    <div className='d-flex w-100 align-items-end'>
                                        <button style={{ backgroundColor: 'rgba(218, 105, 1, 0.12)', color: '#DA6901', border: '1px solid #DA6901', fontSize: '12px', fontWeight: 700, display: 'flex', gap: '4px', width: '64px', height: '20px' }}>Check <img src={rightArrow} alt="right arrow" /></button>
                                        <div className='d-flex justify-content-end w-100'>
                                            <img src={coverage} alt="coverage" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {Array.isArray(banList) && banList.map((ban, index) => (
                        <div key={index} className='w-100'>
                            <img src={ban.i} alt="" className='w-100 h-100' />
                        </div>
                    ))}

                    {reportList.length > 0 &&
                        <div className='d-flex flex-column gap-3 py-3'>
                            <div className='px-3'>
                                <h6 style={{color: 'var(--primary)'}}>MANDI CENTRAL’S</h6>
                                <h4 className='fw-bold' style={{color: 'var(--primary)'}}>CURATED UPDATES</h4>
                            </div>
                            {Array.isArray(reportList) && reportList.map((report) => (
                                <ReportCard key={report.card_id} report={report} />
                            ))}

                            {isFetching && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <CircularProgress color="warning" />
                                </Box>
                            )}
                        </div>
                    }
                </div>
            )}
        </>
    );
};

export default Detail;
