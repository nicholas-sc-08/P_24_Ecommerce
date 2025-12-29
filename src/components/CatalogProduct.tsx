"use client";

import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useRouter } from "next/navigation";
import { useGlobal } from "@/context/GlobalContext";
import { ProductService } from "@/services/product.service";
import { AnimatedPrice } from "./AnimatedPrice";
import { useEffect, useState } from "react";

export default function CatalogProduct({ product }: any) {

    const router = useRouter();
    const { setSelectedProduct } = useGlobal();
    const productService = new ProductService();
    const [price, setPrice] = useState(product.variants[0].price);
    const discount = product.variants[0].discount;
    const [discountPrice, setDiscountPrice] = useState(0);

    useEffect(() => setDiscountPrice((discount > 0 ? price - ((price * discount) / 100) : price)), [price]);

    return (
        <div onClick={() => productService.getUnique(product.id, router).then(p => setSelectedProduct(p))} className="rounded-2xl cursor-pointer flex flex-col justify-evenly items-center w-70 h-85 hover:bg-accent transition duration-300">
            <Card className="bg-product w-60 h-60 flex items-center justify-center rounded-2xl">
                <img className="w-full h-full" src={product.images[0].url} alt={product.images[0].alt} />
            </Card>
            <div className="w-60">
                <h1 className="line-clamp-1">{product.name}</h1>
                <div className="flex items-center">
                    <AnimatedPrice price={discountPrice} />
                    {product.variants[0].discount ?
                        <div>
                            <s className="text-lg text-muted-foreground font-semibold chart-1 mr-3 "><AnimatedPrice price={price} /></s>
                            <Badge variant="outline" className="bg-red-200 border-0 text-red-600 h-6 ">-{product.variants[0].discount}%</Badge>
                        </div>
                        : ""
                    }
                </div>
            </div>
        </div>
    );
};