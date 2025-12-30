"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useGlobal } from "@/context/GlobalContext";
import { iconRender } from "@/services/iconRender.service";
import { DashboardCardProps } from "@/utils/type.util";
import { Card } from "./ui/card";
import { AnimatedCounter } from "./AnimatedCounter";

export default function DashboardCard({ icon, array, title }: DashboardCardProps) {

    const { containerVariants, itemVariants } = useGlobal();

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <Card className="w-30 h-30 flex flex-col justify-center items-center">
                    <motion.div variants={itemVariants} className="flex justify-evenly items-center w-full h-full">
                        {iconRender(icon)}
                        <AnimatedCounter price={array.length}/>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <p>{title}</p>
                    </motion.div>
                </Card>
            </motion.div>
        </AnimatePresence>
    )
};