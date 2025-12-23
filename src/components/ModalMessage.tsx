"use client";

import { useGlobal } from "@/context/GlobalContext";
import { Card } from "./ui/card";
import { CircleAlert, CircleCheck, CircleX, Info } from "lucide-react";
import { ModalMessageInfo } from "@/utils/type.util";
import { ModalType } from "@/utils/enum.util";
import { useEffect } from "react";

export function ModalMessage({ border, text, modalType, phrase }: ModalMessageInfo) {

    const { isModalOpen, setIsModalOpen } = useGlobal();
    useEffect(() => { setTimeout(() => { setIsModalOpen(false) }, 2000) }, []);

    return (
        <div className="z-50 inset-0 fixed bg-black/30 w-full h-full flex justify-center items-center">
            <Card className={`w-140 h-80 flex flex-col ${border} justify-center items-center`}>
                {modalType == ModalType.SUCCESS && <CircleCheck className={`${text} w-12 h-12 mb-3`} />}
                {modalType == ModalType.WARNING && <CircleAlert className={`${text} w-12 h-12 mb-3`} />}
                {modalType == ModalType.ERROR && <CircleX className={`${text} w-12 h-12 mb-3`} />}
                {modalType == ModalType.INFO && <Info className={`${text} w-12 h-12 mb-3`} />}
                <p className={`${text} font-bold`}>{phrase}</p>
            </Card>
        </div>
    );
};