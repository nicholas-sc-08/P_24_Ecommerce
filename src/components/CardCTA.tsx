"use client";

import { CardHomeProps } from "@/utils/type.util";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { motion, AnimatePresence } from "framer-motion";

export default function CardCTA({ title, description, discount, image }: CardHomeProps) {

    return (
        <AnimatePresence>
            <motion.div whileHover={{ y: -8, transition: { duration: 0.3 } }}>
                <Card className="bg-chart-5 w-55 h-80 rounded-2xl hover:bg-chart-4 transition-all duration-300 cursor-pointer dark:bg-chart-3 dark:hover:bg-chart-1">
                    <CardHeader>
                        <CardTitle className="text-secondary font-light text-center h-8">{title}</CardTitle>
                        <div className="pt-1">
                            <CardDescription className="text-secondary text-center">{description}</CardDescription>
                            <span className="text-secondary text-2xl font-bold flex justify-center">{discount}<p className="font-medium">OFF</p></span>
                        </div>
                    </CardHeader>
                    <CardContent className="w-full h-1/1 flex justify-center items-center">
                        <img src={image} />
                    </CardContent>
                </Card>
            </motion.div>
        </AnimatePresence>
    );
};