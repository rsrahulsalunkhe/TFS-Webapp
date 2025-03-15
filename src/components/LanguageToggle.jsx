import { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const handleChange = (event, newLanguage) => {
    if (newLanguage) setLanguage(newLanguage);
  };

  return (
    <ToggleButtonGroup
      value={language}
      exclusive
      onChange={handleChange}
      aria-label="language selection"
    >
      <ToggleButton value="en">{t("english")}</ToggleButton>
      <ToggleButton value="hi">{t("hindi")}</ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LanguageToggle;