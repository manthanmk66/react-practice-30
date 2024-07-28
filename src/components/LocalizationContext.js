// LocalizationContext.js
import { createContext, useState, useContext } from "react";

const LocalizationContext = createContext();

export const useLocalization = () => {
  return useContext(LocalizationContext);
};

export function LocalizationProvider({ children }) {
  const [locale, setLocale] = useState("en");

  const localizedString = {
    en: {
      greeting: "Hello World",
      welcome: "Welcome to the App",
    },
    es: {
      greeting: "Hola Mundo",
      welcome: "Bienvenido a mi aplicación",
    },
  };

  const translate = (key) => {
    return localizedString[locale][key];
  };

  return (
    <LocalizationContext.Provider value={{ setLocale, locale, translate }}>
      {children}
    </LocalizationContext.Provider>
  );
}
