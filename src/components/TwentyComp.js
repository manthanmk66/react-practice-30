import React from "react";
import { useTheme } from "./ThemeContext";
import "./Styles/Twenty.css";

const NineteenComp = () => {
  const { isDarkMode } = useTheme();
  const themeClass = isDarkMode ? "dark-theme" : "light-theme";
  return (
    <div className={`container ${themeClass}`}>
      <p className=" text-3xl h-screen w-full">
        This Component uses Selected Theme
      </p>
    </div>
  );
};

export default NineteenComp;
