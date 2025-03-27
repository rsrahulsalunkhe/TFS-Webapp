import React, { useEffect } from "react";
import { useHeader } from '../../components/HeaderContext';

const FrequentlyAskedQuestions = () => {
  const { setTitle } = useHeader();
    
  useEffect(() => {
    setTitle("FAQs");
  }, [setTitle]);

  return (
    <div>
      
    </div>
  )
}

export default FrequentlyAskedQuestions
