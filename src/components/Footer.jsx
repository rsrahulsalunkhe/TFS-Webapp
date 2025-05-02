import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Home from './../assets/home.svg?react';
import Futures from './../assets/futures.svg?react';
import Account from './../assets/account.svg?react';
import '../i18n';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        const currentPath = location.pathname.replace("/", "") || "home";
        setActiveTab(currentPath);
    }, [location]);

    const handleNavigation = (route) => {
        navigate(route);
    };

    const getFillColor = (tabName) => (tabName === activeTab ? "#E5811E" : "#000");

    return (
        <footer className="d-flex w-100 justify-content-around align-items-center" style={{ backgroundColor: 'var(--gray-000)' }}>
            {/* Home */}
            <div className="d-flex flex-column align-items-center" onClick={() => handleNavigation("/home")}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                    <Home style={{ color: getFillColor("home") }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: getFillColor("home") }}>
                    {t("footer.home")}
                </span>
            </div>

            {/* Futures */}
            <div className="d-flex flex-column align-items-center" onClick={() => handleNavigation("/futures")}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                    <Futures style={{ color: getFillColor("futures") }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: getFillColor("futures") }}>
                    {t("footer.futures")}
                </span>
            </div>

            {/* Account */}
            <div className="d-flex flex-column align-items-center" onClick={() => handleNavigation("/account")}>
                <div className="d-flex justify-content-center align-items-center" style={{ width: '25px', height: '25px' }}>
                    <Account style={{ color: getFillColor("account") }} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: getFillColor("account") }}>
                    {t("footer.account")}
                </span>
            </div>
        </footer>
    );
};

export default Footer;