import React from "react";
import { UserDTO } from "./user.type";
import { ModalType } from "./enum.util";

export type GlobalContextType = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    arrayUsers: UserDTO[],
    setArrayUsers: React.Dispatch<React.SetStateAction<any>>
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