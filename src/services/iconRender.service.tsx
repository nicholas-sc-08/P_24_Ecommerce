"use client";

import { Sparkles, Droplet, Zap, Flower, Package, UserRound, Tickets, Image } from "lucide-react";
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

        case "package":
            return <Package/>;

        case "userRound":
            return <UserRound/>;

        case "tickets":
            return <Tickets/>;

        case "image":
            return <Image/>;

        default:
            return "";
    };
};