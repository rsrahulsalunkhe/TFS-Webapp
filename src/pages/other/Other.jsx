import React from 'react'
import '../../i18n'
import { useTranslation } from "react-i18next"
import { useNavigate } from 'react-router-dom';

import rightArrow from '../../assets/right-arrow.svg'
import termsAndCondition from '../../assets/terms-and-conditons.svg'
import privacyPolicy from '../../assets/privacy_policy.svg'
import faq from '../../assets/faq.svg'

const Other = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div style={{backgroundColor: 'var(--primary-bg)', minHeight: 'calc(100vh - 780px)'}} className="p-3 d-flex flex-column gap-3">
            <div className="bg-secondary rounded" onClick={() => navigate('/terms-&-conditions')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={termsAndCondition} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.terms_and_conditons")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>
            </div>

            <div className="bg-secondary rounded" onClick={() => navigate('/privacy-policy')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={privacyPolicy} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.privacy_policy")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>
            </div>

            <div className="bg-secondary rounded" onClick={() => navigate('/faq')}>
                <div className="d-flex align-items-center py-3 px-3">
                    <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={faq} alt="change language" />
                    </div>
                    <h6 className="m-0 ms-3">{t("account.about_mandi_central.other.frequently_asked_questions")}</h6>
                    <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
                </div>
            </div>
        </div>
    )
}

export default Other
