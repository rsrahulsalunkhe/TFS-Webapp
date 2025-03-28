import React, { useEffect } from "react";
import { useHeader } from '../../components/HeaderContext';

const PrivacyPolicy = () => {
  const { setTitle } = useHeader();
  
  useEffect(() => {
    setTitle("Privacy Policy");
  }, [setTitle]);

  return (
    <div>
      <h1>privacy policy</h1>
    </div>
  )
}

export default PrivacyPolicy
