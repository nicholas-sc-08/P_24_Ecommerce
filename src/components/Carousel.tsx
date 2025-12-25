"use client";

import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { CarouselProps } from "@/utils/type.util";
import { nextSlide, prevSlide } from "@/services/carousel.service";
import { Button } from "./ui/button";

export default function Carousel({ images }: CarouselProps) {

    const [current, setCurrent] = useState<number>(0);
    const length: number = images.length;
    const handlers = useSwipeable({
        onSwipedRight: () => prevSlide(current, setCurrent, length),
        onSwipedLeft: () => nextSlide(current, setCurrent, length),
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    useEffect(() => {

        setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1), 3000);
    }, [current]);

    return (
        <div className="relative w-380 h-150 overflow-hidden pt-8" {...handlers}>
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((img, i) => (
                    <Card key={i} className="pt-0 pb-0 bg-cover flex-shrink-0 w-full h-150 flex justify-center rounded-lg items-center bg-product" style={{ backgroundImage: `url(${img})` }}>
                        <div className="bg-black/20 object-cover w-full h-full rounded-lg">
                            {current == 0 &&
                                <div className="w-full h-full flex justify-between items-center">
                                    <div className="w-130 h-full flex flex-col justify-center items-center">
                                        <h1 className="font-semibold text-4xl w-70 text-white">Unlock your Inner Radiance.</h1>
                                        <h2 className="w-70 text-center  text-2xl text-white pt-8 pb-6">Show new Arrivals</h2>
                                        <span className="bg-black/20 p-2 rounded-lg text-center text-white text-2xl">Fair not Fear</span>
                                    </div>
                                    <div className="w-130 h-full flex flex-col justify-center items-center">
                                        <h1 className="font-semibold text-center text-4xl w-70 text-white">GLOW UP!</h1>
                                        <span className="bg-black/20 p-2 mt-5 mb-5 rounded-lg text-center text-white text-2xl">Final days: Up to 20% OFF</span>
                                        <h2 className="w-70 text-center  text-2xl text-white">Self-Care Essencials</h2>
                                    </div>
                                </div>
                            }
                            {current == 1 &&
                                <div className="w-full h-full">
                                    <div className="flex flex-col items-start justify-center h-full pl-12 lg:pl-24">
                                        <h1 className="text-start text-4xl font-semibold text-slate-900 w-80">Nature’s Secret for Radiant Skin</h1>
                                        <h2 className="text-2x1 text-slate-900 w-80 mt-2 mb-6">Pure botanical extracts for your daily glow.</h2>
                                        <Button className=" w-40 cursor-pointer hover:bg-[#5558e3] transition-colors shadow-sm">Get the Glow</Button>
                                    </div>
                                </div>
                            }
                        </div>
                    </Card>
                ))}
            </div>
            <div className="absolute bottom-4 w-full flex justify-center space-x-2">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={cn(
                            "w-3 h-3 rounded-full cursor-pointer",
                            current === i ? "bg-primary" : "bg-gray-300"
                        )}
                        onClick={() => setCurrent(i)}
                    />
                ))}
            </div>
        </div>
    );
};