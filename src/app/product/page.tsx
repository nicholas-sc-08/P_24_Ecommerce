"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Droplets, Minus, Plus, ShoppingCart, Sparkles, Zap } from "lucide-react";
import { ModalMessage } from "@/components/ModalMessage";
import { useGlobal } from "@/context/GlobalContext";
import { ModalType } from "@/utils/enum.util";
import { ModalMessageInfo } from "@/utils/type.util";
import { modalTheme } from "@/utils/modal-theme";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedPrice } from "@/components/AnimatedPrice";
import { iconRender } from "@/services/iconRender.service";

export default function page() {

    const { containerVariants, itemVariants } = useGlobal();
    const { selectedProduct, setSelectedProduct } = useGlobal();
    const [productImage, setProductImage] = useState(0);
    const [modalProps, setModalProps] = useState<ModalMessageInfo>({ border: modalTheme.success.border, text: modalTheme.success.text, phrase: "All set! The product has been added to your cart.", modalType: ModalType.SUCCESS });
    const { isModalOpen, setIsModalOpen } = useGlobal();
    const [counter, setCounter] = useState(1);

    const [price, setPrice] = useState(selectedProduct.variants[0].price);
    const discount = selectedProduct.variants[0].discount;
    const [discountPrice, setDiscountPrice] = useState(0);

    useEffect(() => setDiscountPrice((discount > 0 ? (price * counter) - ((price * discount) / 100) : (price * counter))), [price, counter]);

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-165 flex justify-between">
                {isModalOpen && <ModalMessage border={modalProps.border} text={modalProps.text} phrase={modalProps.phrase} modalType={modalProps.modalType} />}
                <aside className="w-140 flex justify-start items-center">
                    <div className="flex flex-col cursor-pointer justify-around items-end w-50 h-100 pr-3">
                        {selectedProduct.images.map((_: any, i: number) => (
                            <motion.div key={i} variants={itemVariants}>
                                <Card className={cn("h-30 w-30 bg-product flex justify-center items-center border-2 transition-colors", i === productImage ? "border-primary" : "hover:border-primary/40")} onClick={() => setProductImage(i)}>
                                    <img src={_.url} alt={_.alt} className="w-20" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div variants={itemVariants}>
                        <Card className="h-100 w-100 flex bg-product justify-center items-center">
                            <motion.img key={productImage} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} src={selectedProduct.images[productImage].url} alt="product image" className="w-70" />
                        </Card>
                    </motion.div>
                </aside>
                <main className="w-250 flex flex-col justify-center">
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl font-semibold leading-tight">{selectedProduct.name}</h1>
                        <div className="flex items-center">
                            <AnimatedPrice price={discountPrice} />
                            {discount > 0 &&
                                <div>
                                    <s className="text-lg text-muted-foreground font-semibold chart-1 mr-3 "><AnimatedPrice price={price * counter} /></s>
                                    <Badge variant="outline" className="bg-red-200 border-0 text-red-600 h-6 ">-{selectedProduct.variants[0].discount}%</Badge>
                                </div>
                            }
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-200 h-25 pt-3">
                        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">{selectedProduct.description}</p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-200 h-20 flex flex-col justify-around">
                        <h4>Categories</h4>
                        <div className="w-full h-10 flex items-center">
                            {selectedProduct.categories.map((c: any, i: number) => (
                                <motion.div key={i} whileHover={{ y: -2, scale: 1.05, filter: "brightness(1.05)" }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <Badge variant="outline" className={`pt-1 pb-1 pl-2 pr-2 mr-4`} style={{backgroundColor: `var(--${c.bgColor})`, color: `var(--${c.textColor})`}}>{iconRender(c.icon)}{c.name}</Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-200 h-25 flex flex-col justify-center">
                        <h4 className="pb-2">Volume</h4>
                        <div className="w-100 flex justify-between">
                            {selectedProduct.variants.map((v: any, i: number) => (
                                <motion.div key={i} whileTap={{ scale: 0.95 }} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                                    <Button onClick={() => setPrice(v.price)} variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">{v.size}</Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex justify-between items-center h-10 w-100">
                        <div className="w-30 h-10 border-secondary border-2 rounded-l-lg rounded-r-lg bg-secondary flex justify-between items-center">
                            <motion.div whileTap={counter > 1 ? { scale: 0.9 } : {}}>
                                <Button disabled={counter == 1} variant="secondary" className="rounded-l-lg w-10 cursor-pointer hover:bg-product" onClick={() => setCounter(counter - 1)}><Minus /></Button>
                            </motion.div>
                            <motion.span key={counter} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.2 }} className="bg-secondary w-full h-10 flex justify-center items-center">{counter}</motion.span>
                            <motion.div whileTap={{ scale: 0.9 }}>
                                <Button variant="secondary" className="rounded-r-lg w-10 cursor-pointer hover:bg-product" onClick={() => setCounter(counter + 1)}><Plus /></Button>
                            </motion.div>
                        </div>
                        <motion.div whileHover={{ scale: 1.02, filter: "brightness(1.1)" }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                            <Button className="bg-chart-3 w-60 h-10 cursor-pointer" onClick={() => setIsModalOpen(true)}><ShoppingCart />Add to Cart</Button>
                        </motion.div>
                    </motion.div>
                </main>
            </motion.div>
        </AnimatePresence>
    );
};