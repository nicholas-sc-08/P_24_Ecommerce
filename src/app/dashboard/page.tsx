"use client";

import DashboardCard from "@/components/DashboardCard";
import { useGlobal } from "@/context/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";

export default function page() {

    const { containerVariants } = useGlobal();

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-165">
                <div>
                    <DashboardCard />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};