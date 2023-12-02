"use client";

import type { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName } from "@/lib/types";
import React, { createContext, useContext, useState } from "react";

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);

    return (
        <ActiveSectionContext.Provider
        value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </ActiveSectionContext.Provider>
    )
}

export function useActiveSectionContext() {
    const context = useContext(ActiveSectionContext);
    if (context === null) {
        throw new Error("useActiveSectionContext must be used within ActiveSectionContextProvider");
    }
    return context;
}