"use client";

import { usePathname } from "next/navigation";
import Header from "./HeaderU";

export function HeaderWrapper(){

    const pathName = usePathname();
    const hideHeader = pathName.startsWith("/signup");

    if(!hideHeader){

        return <Header/>
    };

    return null;
};