// import LanguageToggle from "../components/LanguageToggle";
import '../i18n'
import { useTranslation } from "react-i18next"

import changeLanguage from "../assets/change-language.svg"
import share from "../assets/share.svg"
import downloadApp from "../assets/download-app.svg"
import helpAndSupport from "../assets/help-and-support.svg"

import aboutUs from "../assets/about-us.svg"
import other from '../assets/other.svg'
import rightArrow from "../assets/right-arrow.svg"


import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';

const Account = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    
    return (
        <div style={{backgroundColor: 'var(--primary-bg)', minHeight: '90vh'}} className="p-3 d-flex flex-column gap-3">
            {/* <h1>{t("welcome")}</h1>
            <p>{t("description")}</p> */}
            {/* <LanguageToggle /> */}

            <div className="bg-secondary rounded">
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={helpAndSupport} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.help_and_support.help_and_support")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>
            </div>

            <div className="bg-secondary rounded py-3">
                <div style={{borderLeft: '4px solid #E5811E'}} className="mb-2">
                    <h5 className="fw-semibold ps-3 m-0 py-1">{t("account.app_related.app_related")}</h5>
                </div>

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/change-language')}>
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={changeLanguage} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.app_related.change_language")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/change-theme')}>
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.app_related.change_theme")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/other')}>
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={share} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.app_related.share_app")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/rate-us')}>
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.app_related.rate_us")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/download-app')}>
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={downloadApp} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.app_related.download_app")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>
            </div>

            <div className="bg-secondary rounded py-3">
                <div style={{borderLeft: '4px solid #E5811E'}} className="mb-2">
                    <h5 className="fw-semibold ps-3 m-0 py-1">{t("account.about_mandi_central.about_mandi_central")}</h5>
                </div>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={aboutUs} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.about_us")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-3 px-3" onClick={() => navigate('/other')}>
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img className="w-100 h-100" src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.other")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>
            </div>

            <div>
                <h6 className="text-center mt-2" style={{color: "var(--primary)"}}>Web Version 0.1</h6>
            </div>
        </div>
    );
  };
  
  export default Account;