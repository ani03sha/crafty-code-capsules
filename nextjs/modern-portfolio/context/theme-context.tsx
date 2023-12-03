"use client";

import { Theme, ThemeContextProviderProps, ThemeContextType } from "@/lib/types";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
    children
}: ThemeContextProviderProps) {

    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme") as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === "dark") {
                document.documentElement.classList.add("dark");
            }
        } else if (matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    }


    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error("useTheme must be used within ThemeContextProvider");
    }
    return context;
}
