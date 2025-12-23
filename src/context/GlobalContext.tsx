"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { GlobalContextType } from "@/utils/type.util";
import { ModalVariant } from "@/utils/enum.util";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }){

    const [isModalOpen, setIsModalOpen] = useState(true);

    return(
        <GlobalContext.Provider value={{
            isModalOpen,
            setIsModalOpen,
        }}>{children}</GlobalContext.Provider>
    );
};

export function useGlobal(){
    const context = useContext(GlobalContext);

    if(!context){
        throw new Error("useGlobal must be used within a Provider!");
    };

    return context;
};