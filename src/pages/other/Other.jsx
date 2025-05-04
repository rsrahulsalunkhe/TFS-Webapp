import React, { useState, useEffect } from 'react'
import '../../i18n'
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom';

import rightArrowBlack from '../../assets/right-arrow-black.svg'
import rightArrowWhite from '../../assets/right-arrow-white.svg'
import termsAndCondition from '../../assets/terms-and-conditons.svg'
import privacyPolicy from '../../assets/privacy_policy.svg'
import deteleAccount from '../../assets/delete-account.svg'
import faq from '../../assets/faq.svg'

const Other = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const [lang, setLang] = useState('hi');
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const storedLang = localStorage.getItem('language') || 'hi';
        setLang(storedLang);

        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

    return (
        <div style={{backgroundColor: 'var(--tertiary-bg)', minHeight: 'calc(100vh - 56px)'}} className="p-3 d-flex flex-column gap-3">
            <div className="bg-secondary rounded" onClick={() => navigate('/terms-&-conditions')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={termsAndCondition} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.terms_and_conditons")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div className="bg-secondary rounded" onClick={() => navigate('/privacy-policy')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={privacyPolicy} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.privacy_policy")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div className="bg-secondary rounded" onClick={() => navigate('/content-restrictions')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={privacyPolicy} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.content_restrictions")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div className="bg-secondary rounded" onClick={() => navigate('/account-delete')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={deteleAccount} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.delete_account")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>

            <div className="bg-secondary rounded" onClick={() => navigate('/faq')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--tertiary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={faq} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.frequently_asked_questions")}</h6>
                    {theme === 'light' ? (
                        <img src={rightArrowBlack} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    ) : (
                        <img src={rightArrowWhite} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto me-2" />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Other
