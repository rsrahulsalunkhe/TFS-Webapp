import React from 'react'
import dialer from '../../assets/dialer.svg'
import rightArrow from "../../assets/right-arrow.svg"
import '../../i18n'
import { useTranslation } from "react-i18next"

import whatsapp from "../../assets/whatsapp.svg"
import helpAndSupport from "../../assets/help-and-support.svg"

const HelpAndSupport = () => {
    const { t } = useTranslation();

  return (
    <div className='container mt-4'>
      <h1 className='fw-bold'>Need Help <br /> <span className='fw-bold' style={{color: 'var(--primary)'}}>Contact Our Team</span></h1>
      <p className='fw-medium'>We committed to resolve your problems. Reach us during working hours for assistance.</p>

      <div className="bg-secondary b-rounded mt-4" onClick={() => window.location.href = "tel:+919172680961"}>
        <div className="d-flex align-items-center py-3 px-3">
            <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                <img src={dialer} alt="change language" />
            </div>
            <h6 className="m-0 ms-3">{t("account.help_and_support.phone_call_support")}</h6>
            <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
        </div>
      </div>

      <div className="bg-secondary b-rounded mt-3" onClick={() => window.open('https://wa.me/919172680961', '_blank')}>
        <div className="d-flex align-items-center py-3 px-3">
            <div className="d-flex alig-items-center justify-content-center">
                <img src={whatsapp} alt="change language" />
            </div>
            <h6 className="m-0 ms-3">{t("account.help_and_support.whatsapp_support")}</h6>
            <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
        </div>
      </div>

      <div className="bg-secondary b-rounded mt-3" onClick={() => window.location.href = 'mailto:rsrahulsalunkhe4@gmail.com'}>
        <div className="d-flex align-items-center py-3 px-3">
            <div style={{backgroundColor: 'var(--primary-bg)', padding: '8px', width: '32px', height: '32px', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                <img src={helpAndSupport} alt="change language" />
            </div>
            <h6 className="m-0 ms-3">{t("account.help_and_support.email_support")}</h6>
            <img src={rightArrow} alt="right arrow" style={{width: '8px', height: '12px'}} className="ms-auto" />
        </div>
      </div>
    </div>
  )
}

export default HelpAndSupport
