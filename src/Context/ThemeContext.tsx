import { createContext, useState, useContext, useCallback, type ReactNode, type MouseEvent } from "react";
import type { ThemeContextValue, ColorMainMode, ColorElementMode } from "../types";

// Contexte typé avec null comme valeur sentinelle (guard dans useTheme)
const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

// Provider pour englober l'application
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [colorMainMode, setColorMainMode] = useState<ColorMainMode>('light')
    const [colorElementMode, setColorElementMode] = useState<ColorElementMode>('')

    const getStoredTheme = useCallback(() => {
        const mode = sessionStorage.getItem("mode");
        if (mode === "dark") {
            setColorMainMode("dark");
            setColorElementMode("-dark");
        } else {
            setColorMainMode("light");
            setColorElementMode("");
        }
    }, []);

    const toggleTheme = (e: MouseEvent<HTMLElement>) => {
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
export const useTheme = (): ThemeContextValue => {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme doit être utilisé à l'intérieur d'un ThemeProvider");
    }
    return context;
};
