import React from "react";
import { useLocalization } from "./LocalizationContext";

const TwentySeven = () => {
  const { locale, setLocale, translate } = useLocalization();

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
  };

  return (
    <div>
      <h1>{translate("greeting")}</h1>
      <h1>{translate("welcome")}</h1>
      <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => handleLocaleChange("en")}
      >
        English
      </button>
      <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        onClick={() => handleLocaleChange("es")}
      >
        Español
      </button>
    </div>
  );
};

export default TwentySeven;
