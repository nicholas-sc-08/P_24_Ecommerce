import React from "react";
import { UserDTO } from "./user.type";
import { ModalType } from "./enum.util";
import { Variants } from "framer-motion";

export type GlobalContextType = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    arrayUsers: UserDTO[],
    setArrayUsers: React.Dispatch<React.SetStateAction<any>>,
    arrayProducts: any,
    setArrayProducts: React.Dispatch<React.SetStateAction<any>>,
    selectedProduct: any,
    setSelectedProduct: React.Dispatch<React.SetStateAction<any>>,
    carouselImages: CarouselProps,
    cardHomeImages: CardHomeProps[],
    containerVariants: Variants,
    itemVariants: Variants
};

export type ModalMessageInfo = {

    modalType: ModalType;
    text: string;
    border: string;
    phrase: string;
};

export type CarouselProps = {

    images: string[]
};
export type CardHomeProps = {

    title: string;
    description: string;
    discount: string;
    image: string;
};

export type DashboardCardProps = {

    icon: string;
    array: Array<any>;
    title: string;
};