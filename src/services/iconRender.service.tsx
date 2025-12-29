"use client";

import { Sparkles, Droplet, Zap, Flower } from "lucide-react";
import React from "react";

export function iconRender(icon: string): React.ReactNode {

    switch (icon) {

        case "Sparkles":
            return <Sparkles/>;

        case "Droplets":
            return <Droplet />;

        case "Zap":
            return <Zap />;

        case "Flower":
            return <Flower />;

        default:
            return "";
    };
};