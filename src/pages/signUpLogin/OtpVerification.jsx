import React, { useState, useEffect } from 'react';
import whatsapp from './../../assets/whatsapp.svg'
import phone from './../../assets/phone.svg'

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(30); // Timer in seconds
  const [isResendEnabled, setIsResendEnabled] = useState(false);

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

    // Auto-focus next input
    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleResend = () => {
    if (!isResendEnabled) return;
    // Logic to resend OTP
    console.log("OTP Resent!");
    setOtp(['', '', '', '']);
    setTimer(30);
    setIsResendEnabled(false);
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    console.log("Entered OTP:", enteredOtp);
    // Verify logic here
  };

  return (
    <div style={styles.container}>
        <div style={{width: '100%', height: '30px', backgroundColor: '#DA6901'}}></div>
            <div style={{width: '100%', height: '56px', backgroundColor: '#F5F5F5'}} className='d-flex align-items-center px-3'>
            <h5 className='m-0' style={{color: '#DA6901'}}>OTP Verification</h5>

            <div className='ms-auto d-flex gap-3'>
                <img src={whatsapp} alt="" />
                <img src={phone} alt="" />
            </div>
        </div>
      <p style={styles.text}>We have sent a OTP code to</p>
      <p style={styles.phone}>+91-7378963818</p>
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
          {/* {isResendEnabled ? (
            <button style={styles.resendBtnActive} onClick={handleResend}>
              Resend OTP
            </button>
          ) : (
            <span style={styles.resendTimer}>Resend in {timer}s</span>
          )} */}
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

      <button style={styles.verifyBtn} onClick={handleVerify}>
        Verify & Proceed →
      </button>
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
    width: '100%',
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