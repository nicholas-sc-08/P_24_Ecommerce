"use client";

import { useGlobal } from "@/context/GlobalContext";
import { Card } from "./ui/card";
import { CircleAlert, CircleCheck, CircleX, Info } from "lucide-react";
import { ModalMessageInfo } from "@/utils/type.util";
import { ModalType } from "@/utils/enum.util";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ModalMessage({ border, text, modalType, phrase }: ModalMessageInfo) {

    const { isModalOpen, setIsModalOpen } = useGlobal();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {

        setIsVisible(true);

        const time = setTimeout(() => {

            setIsVisible(false);
            setTimeout(() => setIsModalOpen(false), 300);
        }, 2000);

        return () => clearTimeout(time);

    }, [isModalOpen]);

    return (
        <AnimatePresence>
            {isVisible &&
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="z-50 inset-0 fixed bg-black/30 w-full h-full flex justify-center items-center">
                    <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}>
                        <Card className={`w-140 h-80 flex flex-col ${border} justify-center items-center`}>
                            {modalType == ModalType.SUCCESS && <CircleCheck className={`${text} w-12 h-12 mb-3`} />}
                            {modalType == ModalType.WARNING && <CircleAlert className={`${text} w-12 h-12 mb-3`} />}
                            {modalType == ModalType.ERROR && <CircleX className={`${text} w-12 h-12 mb-3`} />}
                            {modalType == ModalType.INFO && <Info className={`${text} w-12 h-12 mb-3`} />}
                            <p className={`${text} font-bold`}>{phrase}</p>
                        </Card>
                    </motion.div>
                </motion.div>
            }
        </AnimatePresence>
    );
};