import home from './../assets/home.svg';
import futures from './../assets/futures.svg';
import account from './../assets/account.svg';
import { useNavigate } from "react-router-dom";
import '../i18n'
import { useTranslation } from "react-i18next"

const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <footer className="d-flex w-100 justify-content-around align-items-center bg-secondary">
            {/* Home */}
            <div className="d-flex flex-column align-items-center" onClick={() => handleNavigation("/home")}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                    <img className="img-fluid" src={home} alt="Home" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500' }} className='text-primary'>{t("footer.home")}</span>
            </div>

            {/* Futures */}
            <div className="d-flex flex-column align-items-center" onClick={() => handleNavigation("/futures")}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                    <img className="img-fluid" src={futures} alt="Futures" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500'}} className='text-primary'>{t("footer.futures")}</span>
            </div>

            {/* Account */}
            <div className="d-flex flex-column align-items-center" onClick={() => handleNavigation("/account")}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                    <img className="img-fluid" src={account} alt="Account" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500'}} className='text-primary'>ACCOUNT</span>
            </div>
        </footer>
    );
};

export default Footer;