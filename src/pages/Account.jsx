import React, { useEffect, useState  } from 'react';
import '../i18n'
import { useTranslation } from "react-i18next"

import company from '../assets/company.svg'
import profile from '../assets/profile.svg'
import dialer from '../assets/dialer.svg'

import changeLanguage from "../assets/change-language.svg"
import share from "../assets/share.svg"
import downloadApp from "../assets/download-app.svg"
import helpAndSupport from "../assets/help-and-support.svg"

import aboutUs from "../assets/about-us.svg"
import other from '../assets/other.svg'
import rightArrowBlack from './../assets/right-arrow-black.svg'
import rightArrowWhite from './../assets/right-arrow-white.svg'

import logout from '../assets/logout.svg'
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [lang, setLang] = useState('hi');
    const [theme, setTheme] = useState('light');
    const [user_name, setUserName] = useState('');
    const [user_firm, setFirm] = useState('');
    const [user_mobile, setMobile] = useState('');
    
    useEffect(() => {
        const storedLang = localStorage.getItem('language') || 'hi';
        setLang(storedLang);

        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);

        const user_name = localStorage.getItem('user_name');
        setUserName(user_name);

        const user_firm = localStorage.getItem('user_firm');
        setFirm(user_firm);

        const user_mobile = localStorage.getItem('user_mobile');
        setMobile(user_mobile);
    }, []);
    
    return (
        <div style={{backgroundColor: 'var(--tertiary-bg)', minHeight: '90vh'}} className="p-3 d-flex flex-column gap-3">
            <div className="bg-secondary b-rounded">
                {user_firm != '' && 
                    <div className="d-flex align-items-center pt-3 px-3">
                        <div style={{width: '16px'}} className="d-flex alig-items-center justify-content-center">
                            <img className="w-100 h-100" src={company} alt="company" />
                        </div>
                        <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{user_firm}</h6>
                    </div>
                }

                <div className="d-flex align-items-center pt-3 px-3">
                    <div style={{width: '16px'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={profile} alt="profile" />
                    </div>
                    {user_firm != '' ? (
                        <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{user_name}</h6>
                    ) : (
                        <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>Hello Guest</h6>
                    )}
                </div>

                {user_firm != '' && 
                    <div className="d-flex align-items-center py-3 px-3">
                        <div style={{width: '16px'}} className="d-flex alig-items-center justify-content-center">
                            <img className="w-100 h-100" src={dialer} alt="dialer" />
                        </div>
                        {user_firm != '' ? (
                            <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{user_mobile}</h6>
                        ) : (
                            <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>Hello Guest</h6>
                        )}
                    </div>
                }
            </div>

            <div className="bg-secondary b-rounded">
                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/help-&-support')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={helpAndSupport} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.help_and_support.help_and_support")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div className="bg-secondary b-rounded py-3">
                <div style={{borderLeft: '4px solid #E5811E'}} className="mb-2">
                    <h5 className="fw-semibold ps-3 m-0 py-1">{t("account.app_related.app_related")}</h5>
                </div>

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/change-language')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={changeLanguage} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.app_related.change_language")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/change-theme')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.app_related.change_theme")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/other')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={share} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.app_related.share_app")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/rate-us')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.app_related.rate_us")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => window.open('https://tradeforsure.com/download.html', '_blank')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={downloadApp} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.app_related.download_app")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div className="bg-secondary b-rounded py-3">
                <div style={{borderLeft: '4px solid #E5811E'}} className="mb-2">
                    <h5 className="fw-semibold ps-3 m-0 py-1">{t("account.about_mandi_central.about_mandi_central")}</h5>
                </div>
                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/about-us')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={aboutUs} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.about_mandi_central.about_us")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/other')}>
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.about_mandi_central.other.other")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={logout} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3" style={{ fontSize: lang === 'hi' ? '18px' : '16px' }}>{t("account.about_mandi_central.logout")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div>
                <h6 className="text-center mt-2" style={{color: "var(--primary)"}}>Web Version 0.1</h6>
            </div>
        </div>
    );
  };
  
  export default Account;