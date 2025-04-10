import { useState, useEffect } from "react";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import RightArrowBlack from "./../assets/right-arrow-black.svg?react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    setSelectedTheme(e.target.value);
  };

  const handleNextClick = () => {
    setTheme(selectedTheme);
  };

  const getFillColor = (mode) => {
    return selectedTheme === mode ? "#DA6901" : theme === "dark" ? "#FFFFFF" : "#000000";
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: selectedTheme === "light" ? "#E5811E3D" : "var(--tertiary-bg)",
          color: selectedTheme === "light" ? "#DA6901" : "rgba(0, 0, 0, 0.8)"
        }}
        className="py-2 px-4 d-flex align-items-center rounded"
      >
        <input
          style={{ width: "22px", height: "22px" }}
          type="radio"
          id="light"
          name="theme_mode"
          value="light"
          checked={selectedTheme === "light"}
          onChange={handleThemeChange}
        />
        <label className="ms-3 mb-0 fw-semibold fs-5" htmlFor="light">Light</label>
      </div>

      <div
        style={{
          backgroundColor: selectedTheme === "dark" ? "#E5811E3D" : "var(--tertiary-bg)",
          color: selectedTheme === "dark" ? "#DA6901" : "rgba(0, 0, 0, 0.8)"
        }}
        className="py-2 px-4 mt-3 d-flex align-items-center rounded"
      >
        <input
          style={{ width: "22px", height: "22px" }}
          type="radio"
          id="dark"
          name="theme_mode"
          value="dark"
          checked={selectedTheme === "dark"}
          onChange={handleThemeChange}
        />
        <label className="ms-3 mb-0 fw-semibold fs-5" htmlFor="dark">Dark</label>
        
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
          Next 
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
