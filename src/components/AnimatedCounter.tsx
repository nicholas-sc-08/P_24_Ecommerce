"use client";

import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedCounter({ price }: { price: number }) {

    const springPrice = useSpring(price, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const displayValue = useTransform(springPrice, latest => `${latest.toFixed(0)}`)

    useEffect(() => springPrice.set(price), [price, springPrice]);

    return <motion.span className="text-lg font-semibold mr-2">{displayValue}</motion.span>;
};