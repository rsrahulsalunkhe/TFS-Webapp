import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // corrected import
import whatsapp from './../../assets/whatsapp.svg';
import phone from './../../assets/phone.svg';
import { postData, fetchData } from '../../services/apiService'
import RightArrowBlack from './../../assets/right-arrow-black.svg?react'

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(120);
  const [isResendEnabled, setIsResendEnabled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate(); // added navigate
  const mobile = location.state?.mobile;
  const language = location.state?.language || "hi";

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    } else {
      setIsResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResend = async () => {
    if (!isResendEnabled) return;

    console.log("OTP Resent!");
    setOtp(['', '', '', '']);
    setTimer(120);
    setIsResendEnabled(false);

    const body = {
      mobile: Number(mobile),
      language: language
    };

    // Here, call your resend OTP API if needed
    const data = await postData("/resendOTP", body);
  };

  const handleVerify = async () => {
    const enteredOtp = otp.join('');

    const body = {
      mobile: Number(mobile),
      otp_val: enteredOtp, // send joined OTP, not array
      language: language
    };

    try {
      const data = await postData("/verifyOTP", body);
      if (data.status === 200 && data.data) {
        // Save to localStorage
        localStorage.setItem('user_token', data.data.user_token);
        localStorage.setItem('user_uid', data.data.user_uid);
        localStorage.setItem('user_id', data.data.user_id);

        // Then navigate to OTP screen with mobile and language
        navigate("/home");
      } else if (data.status === 100) {

      } else {
          console.error("OTP verification failed:", data);
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
      }
  };

  return (
    <div style={styles.container}>
      <div style={{ width: '100%', height: '30px', backgroundColor: '#DA6901' }}></div>
      <div style={{ width: '100%', height: '56px', backgroundColor: '#F5F5F5' }} className='d-flex align-items-center px-3'>
        <h5 className='m-0' style={{ color: '#DA6901' }}>OTP Verification</h5>

        <div className='ms-auto d-flex gap-3'>
          <img src={whatsapp} alt="WhatsApp" />
          <img src={phone} alt="Phone" />
        </div>
      </div>

      <p style={styles.text}>We have sent an OTP code to</p>
      <p style={styles.phone}>+91-{mobile}</p>
      <p style={styles.subtext}>Check text messages for OTP</p>

      <div style={styles.otpContainer} className='container'>
        {otp.map((digit, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e.target.value, i)}
            style={styles.otpInput}
          />
        ))}

        <p style={styles.resendText}>
          Didn’t receive the OTP?{' '}
          {!(isResendEnabled) && (
            <span style={styles.resendTimer}>Resend in {timer}s</span>
          )}
        </p>

        {isResendEnabled && (
          <button style={styles.resendBtnActive} onClick={handleResend}>
            Resend OTP
          </button>
        )}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <button disabled={otp.some(digit => digit === '')} style={{ width: '220px', backgroundColor: '#DA6901', fontSize: '18px', color: '#FFFFFF', border: 'none', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: otp.some(digit => digit === '') ? 'not-allowed' : 'pointer', opacity: otp.some(digit => digit === '') ? 0.7 : 1 }} className="py-2 fw-bold" onClick={handleVerify}>
          Verify & Proceed <RightArrowBlack style={{ color: "#FFFFFF" }} className="ms-2" />
        </button>
      </div>
    </div>
  );
};

// --- 💄 Inline Styles ---
const styles = {
  container: {
    textAlign: 'center',
    // padding: '1rem',
    // maxWidth: '320px',
    margin: 'auto',
    fontFamily: 'sans-serif',
  },
  text: {
    marginBottom: 4,
    fontSize: '16px',
  },
  phone: {
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: 4,
  },
  subtext: {
    marginBottom: '1rem',
    fontSize: '14px',
    color: '#555',
  },
  otpContainer: {
    backgroundColor: '#f6f6f6',
    padding: '1rem',
    borderRadius: '10px',
    marginBottom: '1rem',
  },
  otpInput: {
    width: '40px',
    height: '48px',
    fontSize: '20px',
    textAlign: 'center',
    marginRight: '8px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  resendText: {
    marginTop: '1rem',
    color: '#DA6901',
    fontSize: '14px',
  },
  resendTimer: {
    fontWeight: '500',
  },
  resendBtnActive: {
    border: 'none',
    backgroundColor: '#f5e1d0',
    padding: '8px 16px',
    borderRadius: '6px',
    color: '#DA6901',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  verifyBtn: {
    width: 'fit-content',
    backgroundColor: '#DA6901',
    color: '#fff',
    padding: '12px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default OtpVerification;