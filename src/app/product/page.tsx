"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, Minus, Plus, ShoppingCart } from "lucide-react";

export default function page() {

    const [images, setImages] = useState(["./image 10.svg", "./image 9.svg", "./image 7.svg"]);
    const [productImage, setProductImage] = useState(0)

    return (
        <div className="w-full h-165 flex justify-between">
            <aside className="w-140 flex justify-start items-center">
                <div className="flex flex-col cursor-pointer justify-around items-end w-50 h-100 pr-3">
                    {images.map((_, i) => (
                        <Card key={i} className={cn("h-30 w-30 bg-product flex justify-center items-center border-2 transition-colors", i === productImage ? "border-primary" : "hover:border-primary/40")} onClick={() => setProductImage(i)}>
                            <img src={_} alt="product image" className="w-20" />
                        </Card>
                    ))}
                </div>
                <Card className="h-100 w-100 flex bg-product justify-center items-center">
                    <img src={images[productImage]} alt="" className="w-70" />
                </Card>
            </aside>
            <main className="w-250 flex flex-col justify-center">
                <h1 className="text-3xl font-semibold leading-tight">Baseball T-Shirt</h1>
                <div className="flex items-center">
                    <span className="text-lg font-semibold mr-2">$100.00</span>
                    <s className="text-lg text-muted-foreground font-semibold chart-1 mr-3 ">$140.00</s>
                    <Badge variant="outline" className="bg-red-200 border-0 text-red-600 h-6 ">-40%</Badge>
                </div>
                <div className="w-200 h-25 pt-3">
                    <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
                </div>
                <div className="w-200 h-20 flex flex-col justify-around">
                    <h4>Select Colors</h4>
                    <div className="w-40 h-10 flex justify-between items-center">
                        <Button className="rounded-full w-10 h-10 bg-blue-500 cursor-pointer"><Check /></Button>
                        <Button className="rounded-full w-10 h-10 bg-blue-800 cursor-pointer"></Button>
                        <Button className="rounded-full w-10 h-10 bg-blue-950 cursor-pointer"></Button>
                    </div>
                </div>
                <div className="w-200 h-25 flex flex-col justify-center">
                    <h4 className="pb-2">Choose Size</h4>
                    <div className="w-100 flex justify-between">
                        <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">Small</Button>
                        <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">Medium</Button>
                        <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">Large</Button>
                        <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">X-Large</Button>
                    </div>
                </div>
                    <div className="flex justify-between items-center h-10 w-100">
                        <div className="w-30 h-10 border-secondary border-2 rounded-l-lg rounded-r-lg bg-secondary flex justify-between items-center">
                            <Button variant="secondary" className="rounded-l-lg w-10 cursor-pointer hover:bg-product"><Minus/></Button>
                            <span className="bg-secondary w-full h-10 flex justify-center items-center">1</span>
                            <Button variant="secondary" className="rounded-r-lg w-10 cursor-pointer hover:bg-product"><Plus/></Button>
                        </div>
                        <Button className="bg-chart-3 w-60 h-10 cursor-pointer"><ShoppingCart/>Add to Cart</Button>
                    </div>
            </main>
        </div>
    );
};