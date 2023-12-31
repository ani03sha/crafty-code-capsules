
import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
    children: React.ReactNode
}

export type ActiveSectionContextType = {
    activeSection: SectionName,
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>,
    timeOfLastClick: number,
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

export type Theme = "light" | "dark";

export type ThemeContextType = {
    theme: Theme,
    toggleTheme: () => void
}

export type ThemeContextProviderProps = {
    children: React.ReactNode;
}