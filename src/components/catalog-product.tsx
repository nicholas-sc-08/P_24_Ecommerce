"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function CatalogProduct() {

    return (
        <div className="rounded-2xl cursor-pointer flex flex-col justify-evenly items-center w-70 h-85 hover:bg-accent transition duration-300">
            <Card className="bg-product w-60 h-60 flex items-center justify-center rounded-2xl">
                <img className="w-full h-full" src="./image 10.svg" />
            </Card>
            <div className="w-60">
                <h1>Baseball T-Shirt</h1>
                <div className="flex items-center">
                    <span className="text-lg font-semibold mr-2">$100.00</span>
                    <s className="text-lg text-muted-foreground font-semibold chart-1 mr-3 ">$140.00</s>
                    <Badge variant="outline" className="bg-red-200 border-0 text-red-600 h-6 ">-40%</Badge>
                </div>
            </div>
        </div>
    );
};