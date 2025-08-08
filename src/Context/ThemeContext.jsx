import { createContext, useState, useContext, useCallback } from "react";

// Création du contexte
const ThemeContext = createContext();

// Provider pour englober l'application
export const ThemeProvider = ({ children }) => {
    const [colorMainMode, setColorMainMode] = useState('light')
    const [colorElementMode, setColorElementMode] = useState('')


    const getStoredTheme = useCallback(() => {
        const mode = sessionStorage.getItem("mode");
        if (mode === "dark") {
            setColorMainMode(mode);
            setColorElementMode("-dark");
        } else {
            setColorMainMode("light");
            setColorElementMode("");
        }
    }, []);


  const toggleTheme = (e) => {
    e.preventDefault()
    if (colorMainMode === 'light') {
        sessionStorage.clear();
        setColorMainMode('dark')
        setColorElementMode('-dark')
        sessionStorage.setItem("mode", "dark");
    } else {
        sessionStorage.clear();
        setColorMainMode('light')
        setColorElementMode('')
        sessionStorage.setItem("mode", "light");
    }
}

  return (
    <ThemeContext.Provider value={{ colorMainMode, colorElementMode, toggleTheme, getStoredTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useTheme = () => {
  return useContext(ThemeContext);
};
