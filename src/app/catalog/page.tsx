"use client";

import CatalogMenu from "@/components/CatalogMenu";
import CatalogProduct from "@/components/CatalogProduct";
import PaginationSection from "@/components/pagination";
import { useGlobal } from "@/context/GlobalContext";
import { AnimatePresence, motion } from "framer-motion";

export default function page() {

    const { containerVariants, itemVariants } = useGlobal();
    const { arrayProducts, setArrayProducts } = useGlobal();

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
                <div className="flex justify-start w-full">
                    <div className="w-90">
                        <CatalogMenu />
                    </div>
                    <div className="w-305">
                        <motion.div variants={itemVariants}>
                            <motion.div variants={itemVariants} className="mt-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                                {arrayProducts.map((p: any, i: number) => (
                                    <div key={i} className="flex justify-center">
                                        <CatalogProduct product={p} />
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                        <PaginationSection />
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
};