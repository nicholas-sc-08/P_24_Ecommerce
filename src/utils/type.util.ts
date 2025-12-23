import { ModalType } from "./enum.util";

export type GlobalContextType = {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
};

export type ModalInfoProps = {

    modalType: ModalType;
    phrase: string;
};