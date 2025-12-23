import { ModalType } from "./enum.util";

export type GlobalContextType = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
};

export type ModalMessageInfo = {

    modalType: ModalType;
    text: string;
    border: string;
    phrase: string;
};