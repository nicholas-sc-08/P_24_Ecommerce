"use client";

import DashboardCard from "@/components/DashboardCard";
import { useGlobal } from "@/context/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";

export default function page() {

    const { containerVariants, arrayProducts, arrayUsers } = useGlobal();

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-165">
                <div className="w-full h-50 flex justify-around items-center">
                    <DashboardCard icon={"package"} array={arrayProducts} title="Products"/>
                    <DashboardCard icon={"userRound"} array={arrayUsers} title="Users"/>
                    <DashboardCard icon={"tickets"} array={[]} title="Categories"/>
                    <DashboardCard icon={"image"} array={[]} title="Images"/>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};