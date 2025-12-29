"use client";

import { Footprints, Laptop, House, Smartphone, Album, Shirt, SlidersVertical } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { useState } from "react";

export default function CatalogMenu() {

    const [price, setPrice] = useState<[number, number]>([0, 100]);

    return (
        <Card className="w-80 h-160 ml-5 mt-5 flex-col items-center">
            <CardHeader className="h-10 w-70 flex items-center">
                <CardTitle className="text-2xl font-sans">Filters</CardTitle>
                <CardContent className="flex justify-end ml-28"><SlidersVertical /></CardContent>
            </CardHeader>
            <div className="flex flex-col justify-evenly w-65 h-30">
                <Button className="flex justify-start cursor-pointer" variant="ghost"><Shirt />Shirts</Button>
                <Button className="flex justify-start cursor-pointer" variant="ghost"><Laptop />Eletronics</Button>
                <Button className="flex justify-start cursor-pointer" variant="ghost"><Footprints /> Shoes</Button>
            </div>
            <div className="flex flex-col justify-evenly w-65 h-30">
                <h3>Price</h3>
                <Slider min={0} max={1000} step={0.01} value={price} onValueChange={e => setPrice(e as [number, number])} />
                <div className="text-sm w-full flex justify-between">
                    <span>Min ${price[0].toFixed(2)}</span>
                    <span>Max ${price[1].toFixed(2)}</span>
                </div>
            </div>
            <div className="flex flex-col justify-evenly w-65 h-30">
                <Button className="flex justify-start cursor-pointer" variant="ghost"><Album />Books</Button>
                <Button className="flex justify-start cursor-pointer" variant="ghost"><House />Home</Button>
                <Button className="flex justify-start cursor-pointer" variant="ghost"><Smartphone />Phones</Button>
            </div>
            <div className="flex justify-center items-end h-20">
                <Button className="h-10 w-60 cursor-pointer">Applicate Filter</Button>
            </div>
        </Card>
    )
};