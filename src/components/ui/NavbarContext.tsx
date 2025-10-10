"use client";

import React, { createContext, useContext, useRef } from "react";

// 1 — Context accepts a ref whose `current` can be HTMLDivElement | null
const NavbarContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
    // 2 — Ref is of the same shape: RefObject<HTMLDivElement | null>
    const navRef = useRef<HTMLDivElement | null>(null);

    return (
        // 3 — Context provider value now matches perfectly
        <NavbarContext.Provider value={navRef}>
            {children}
        </NavbarContext.Provider>
    );
};

// 4 — Custom hook with correct return type
export const useNavbarRef = (): React.RefObject<HTMLDivElement | null> => {
    const context = useContext(NavbarContext);
    if (!context) {
        throw new Error("useNavbarRef must be used within NavbarProvider");
    }
    return context;
};
