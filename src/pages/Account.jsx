import LanguageToggle from "../components/LanguageToggle";
import '../i18n'
import { useTranslation } from "react-i18next"
import aboutUs from "../assets/about-us.svg"
import other from '../assets/other.svg'
import rightArrow from "../assets/right-arrow.svg"
import Divider from '@mui/material/Divider';

const Account = () => {
    const { t } = useTranslation();
    
    return (
        <div style={{backgroundColor: 'var(--tertiary-bg)'}} className="p-3 d-flex flex-column gap-3">
            {/* <h1>{t("welcome")}</h1>
            <p>{t("description")}</p> */}
            <LanguageToggle />

            <div className="bg-primary rounded py-3">
                <div style={{borderLeft: '4px solid #E5811E'}} className="mb-2">
                    <h5 className="fw-semibold ps-3 m-0 py-1">About Mandi Central</h5>
                </div>
                <div className="d-flex align-items-center py-2 px-3">
                    <div style={{backgroundColor: '#FBEDE0', padding: '10px', width: 'fit-content', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={aboutUs} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">About Us</h6>
                    <img src={rightArrow} alt="right arrow" className="ms-auto" />
                </div>

                <Divider variant="inset" component="div" />

                <div className="d-flex align-items-center py-2 px-3">
                    <div style={{backgroundColor: '#FBEDE0', padding: '10px', width: 'fit-content', borderRadius: '50%'}} className="d-flex alig-items-center justify-content-center">
                        <img src={other} alt="about us" />
                    </div>
                    <h6 className="m-0 ms-3">Other</h6>
                    <img src={rightArrow} alt="right arrow" className="ms-auto" />
                </div>
            </div>
        </div>
    );
  };
  
  export default Account;