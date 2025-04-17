import React, { useEffect, useState, useRef, useCallback } from "react";
import CenterRateCard from "../components/centerRateCard/CenterRateCard";
import { fetchData } from './../services/apiService';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

const Sentiment = () => {
  const { commodity } = useParams();
  const [futuresList, setFuturesList] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const observer = useRef();

  const loadFutures = async (pageNo) => {
    try {
      const res = await fetchData(`/sentimentlist/${commodity}?pageno=${pageNo}&pagesize=20`);
      const newData = res?.data.cont || [];

      setFuturesList(prev => [...prev, ...newData]);
      setHasMore(newData.length > 0);

      if (pageNo === 0) setInitialLoading(false);
    } catch (error) {
      console.error("Error fetching futures data:", error);
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    loadFutures(0);
  }, []);

  const handleObserver = useCallback((node) => {
    if (!hasMore) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => {
          const nextPage = prev + 1;
          loadFutures(nextPage);
          return nextPage;
        });
      }
    });

    if (node) observer.current.observe(node);
  }, [hasMore]);

  return (
    <>
      {initialLoading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
          <CircularProgress color="warning" />
        </Box>
      ) : (
        <div className="bg-primary">
          {futuresList.map((p, index) => {
            const triggerIndex = 10 + page * 20; // trigger after 10 cards of each page
            if (index === triggerIndex) {
              return (
                <div key={index} ref={handleObserver}>
                  <CenterRateCard rate={p} />
                </div>
              );
            } else {
              return <CenterRateCard key={index} rate={p} />;
            }
          })}
        </div>
      )}
    </>
  );
}

export default Sentiment
