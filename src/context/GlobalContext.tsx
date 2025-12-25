"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import type { CardHomeProps, CarouselProps, GlobalContextType } from "@/utils/type.util";
import { UserDTO } from "../utils/user.type";
import { UserService } from "@/services/user.service";
import { Variants } from "framer-motion";
import { ProductService } from "@/services/product.service";

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [arrayUsers, setArrayUsers] = useState<UserDTO[]>([]);
    const [arrayProducts, setArrayProducts] = useState<any>([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const carouselImages: CarouselProps = {
        images: ["/carousel/imageOne.svg", "/carousel/imageTwo.svg", "/carousel/imageThree.svg"]
    };

    const cardHomeImages: CardHomeProps[] = [
        {
            title: "READY TO CELEBRATE HAIR",
            description: "Selection up to",
            discount: "80%",
            image: "/cardHome/imageOne.svg"
        },
        {
            title: "SCENTS THAT EMPOWER",
            description: "Fragrances up to",
            discount: "40%",
            image: "/cardHome/imageTwo.svg"
        },
        {
            title: "MAKEUP TO SHINE",
            description: "Selection up to",
            discount: "50%",
            image: "/cardHome/imageThree.svg"
        },
        {
            title: "GLOWING & HEALTHY SKIN",
            description: "Selection up to",
            discount: "35%",
            image: "/cardHome/imageFour.svg"
        },
        {
            title: "CELEBRATE WITH BEAUTY",
            description: "Products up to",
            discount: "35%",
            image: "/cardHome/imageFive.svg"
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    useEffect(() => {

        const userService = new UserService();
        const productService = new ProductService();
        userService.getAllUsers().then(u => setArrayUsers(u));
        productService.getAll().then(p => setArrayProducts(p));

    }, []);

    return (
        <GlobalContext.Provider value={{
            isModalOpen,
            setIsModalOpen,
            arrayUsers,
            setArrayUsers,
            arrayProducts,
            setArrayProducts,
            selectedProduct,
            setSelectedProduct,
            carouselImages,
            cardHomeImages,
            containerVariants,
            itemVariants
        }}>{children}</GlobalContext.Provider>
    );
};

export function useGlobal() {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error("useGlobal must be used within a Provider!");
    };

    return context;
};