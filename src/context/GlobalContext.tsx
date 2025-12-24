"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import type { GlobalContextType } from "@/utils/type.util";
import { UserDTO } from "../../types/user.type";
import { UserService } from "@/services/user.service";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }){

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [arrayUsers, setArrayUsers] = useState<UserDTO[]>([]);

    useEffect(() => {

        const userService = new UserService();
        userService.getAllUsers().then(u => setArrayUsers(u));
    }, []);

    return(
        <GlobalContext.Provider value={{
            isModalOpen,
            setIsModalOpen,
            arrayUsers,
            setArrayUsers
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