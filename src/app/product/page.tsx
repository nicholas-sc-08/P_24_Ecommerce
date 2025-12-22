"use client";

import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function page() {

    const [images, setImages] = useState(["./image 10.svg", "./image 9.svg", "./image 7.svg"]);
    const [productImage, setProductImage] = useState(0)

    return (
        <div className="bg-amber-300 w-full h-165 flex justify-between">
            <div className="bg-red-500 w-180 flex justify-around items-center">
                <div className="flex flex-col justify-around items-end bg-amber-400 w-50 h-100">
                    {images.map((_, i) => (
                        <Card key={i} className="h-30 w-30 flex justify-center items-center" onClick={() => setProductImage(i)}>
                            <img src={_} alt="product image" className="w-20" />
                        </Card>
                    ))}
                </div>
                <Card className="h-100 w-1/2 flex justify-center items-center">
                    <img src={images[productImage]} alt="" className="w-70"/>
                </Card>
            </div>
            <div></div>
        </div>
    );
};