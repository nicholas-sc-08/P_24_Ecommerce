"use client";

import { useGlobal } from "@/context/GlobalContext";
import { Card } from "./ui/card";
import { CircleAlert, CircleCheck, CircleX, Info } from "lucide-react";
import { ModalInfoProps } from "@/utils/type.util";
import { ModalType } from "@/utils/enum.util";

export function ModalInfo({ modalType, phrase }: ModalInfoProps) {

    const { isModalOpen, setIsModalOpen } = useGlobal();

    return (
        <div className="z-50 inset-0 fixed bg-black/30 w-full h-full flex justify-center items-center" onClick={() => setIsModalOpen(false)}>
            <Card className={`w-140 h-80 flex flex-col border-${modalType} justify-center items-center`}>
                {modalType == ModalType.SUCCESS && <CircleCheck className={`text-${modalType} w-12 h-12 mb-3`}/>}
                {modalType == ModalType.WARNING && <CircleAlert className={`text-${modalType} w-12 h-12 mb-3`}/>}
                {modalType == ModalType.ERROR && <CircleX className={`text-${modalType} w-12 h-12 mb-3`}/>}
                {modalType == ModalType.INFO && <Info className={`text-${modalType} w-12 h-12 mb-3`}/>}
                <p className={`text-${modalType} font-bold`}>{phrase}</p>
            </Card>
        </div>
    );
};