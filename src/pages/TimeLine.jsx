import { useParams, useNavigate } from 'react-router-dom';
import ReportCard from '../components/reportCard/ReportCard';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { fetchData } from './../services/apiService';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import './style.scss';

const TimeLine = () => {
  const { commodity } = useParams();
  const navigate = useNavigate();

  const [reportList, setReportList] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);

  const observer = useRef();

  const loadReports = async (page) => {
      try {
          const res = await fetchData(`/timelinelist/${commodity}?pageno=${page}&pagesize=20`);
          const newCards = res?.data?.cont || [];

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
}

export default TimeLine
