import { useState, useEffect } from "react";
import IndiaGate from "./../assets/india-gate.svg?react";
import LondonBridge from "./../assets/london-bridge.svg?react";
import RightArrowBlack from "./../assets/right-arrow-black.svg?react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const LanguageToggle = ({redirectPath}) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  
  const [language, setLanguage] = useState(localStorage.getItem("language") || "hi");
  const [selectedLanguage, setSelectedLanguage] = useState(language);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const handleLanguageChange = (lang) => {
    // const newLang = e.target.value;
    setSelectedLanguage(lang);
  };

  const handleNextClick = () => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem("language", selectedLanguage);

    // const token = localStorage.getItem("token");

    if (redirectPath) {
      navigate(redirectPath);
    } else {
      navigate("/home");
    }
  };

  const getFillColor = (lang) => {
    if (selectedLanguage === lang) return "#DA6901";
    return theme === "dark" ? "#FFFFFF" : "#000000";
  };

  return (
    <div>
      <div
        onClick={() => handleLanguageChange("hi")}
        style={{
          backgroundColor: selectedLanguage === "hi" ? "#E5811E3D" : "var(--tertiary-bg)",
          color: selectedLanguage === "hi" ? "#DA6901" : "rgba(0, 0, 0, 0.8)"
        }}
        className="py-2 px-4 d-flex align-items-center rounded"
      >
        <input
          style={{ width: "22px", height: "22px" }}
          type="radio"
          id="hindi"
          name="fav_language"
          value="hi"
          checked={selectedLanguage === "hi"}
          readOnly
        />
        <label className="ms-3 mb-0 fw-semibold fs-5" htmlFor="hindi">हिंदी</label>
        <IndiaGate className="ms-auto me-2 pe-1" style={{ color: getFillColor("hi") }} />
      </div>

      <div
        onClick={() => handleLanguageChange("en")}
        style={{
          backgroundColor: selectedLanguage === "en" ? "#E5811E3D" : "var(--tertiary-bg)",
          color: selectedLanguage === "en" ? "#DA6901" : "rgba(0, 0, 0, 0.8)"
        }}
        className="py-2 px-4 mt-3 d-flex align-items-center rounded" 
      >
        <input
          style={{ width: "22px", height: "22px" }}
          type="radio"
          id="english"
          name="fav_language"
          value="en"
          checked={selectedLanguage === "en"}
          readOnly
        />
        <label className="ms-3 mb-0 fw-semibold fs-5" htmlFor="english">English</label>
        <LondonBridge className="ms-auto" style={{ color: getFillColor("en") }} />
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button
          onClick={handleNextClick}
          style={{
            width: '225px',
            backgroundColor: '#DA6901',
            fontSize: '18px',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px'
          }}
          className="py-3 fw-bold"
        >
          Next <RightArrowBlack style={{ color: "#FFFFFF" }} className="ms-2" />
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;