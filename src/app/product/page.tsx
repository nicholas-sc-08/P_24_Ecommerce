"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Check, Droplets, Minus, Plus, ShoppingCart, Sparkles, Zap } from "lucide-react";
import { ModalMessage } from "@/components/ModalMessage";
import { useGlobal } from "@/context/GlobalContext";
import { ModalType } from "@/utils/enum.util";
import { ModalMessageInfo } from "@/utils/type.util";
import { modalTheme } from "@/utils/modal-theme";
import { AnimatePresence, motion } from "framer-motion";

export default function page() {

    const { containerVariants, itemVariants, cardHomeImages, carouselImages } = useGlobal();
    const [images, setImages] = useState(["/cardHome/imageThree.svg", "/product/imageProductTwo.svg", "/product/imageProductThree.svg"]);
    const [productImage, setProductImage] = useState(0);
    const [modalProps, setModalProps] = useState<ModalMessageInfo>({ border: modalTheme.success.border, text: modalTheme.success.text, phrase: "All set! The product has been added to your cart.", modalType: ModalType.SUCCESS });
    const { isModalOpen, setIsModalOpen } = useGlobal();
    const [counter, setCounter] = useState(1);

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full h-165 flex justify-between">
                {isModalOpen && <ModalMessage border={modalProps.border} text={modalProps.text} phrase={modalProps.phrase} modalType={modalProps.modalType} />}
                <aside className="w-140 flex justify-start items-center">
                    <div className="flex flex-col cursor-pointer justify-around items-end w-50 h-100 pr-3">
                        {images.map((_, i) => (
                            <motion.div key={i} variants={itemVariants}>
                                <Card className={cn("h-30 w-30 bg-product flex justify-center items-center border-2 transition-colors", i === productImage ? "border-primary" : "hover:border-primary/40")} onClick={() => setProductImage(i)}>
                                    <img src={_} alt="product image" className="w-20" />
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                    <motion.div variants={itemVariants}>
                        <Card className="h-100 w-100 flex bg-product justify-center items-center">
                            <motion.img key={productImage} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} src={images[productImage]}  alt="product image"  className="w-70" />
                        </Card>
                    </motion.div>
                </aside>
                <main className="w-250 flex flex-col justify-center">
                    <motion.div variants={itemVariants}>
                        <h1 className="text-3xl font-semibold leading-tight">Gloss labial fran by franciny ehlke lip honey</h1>
                        <div className="flex items-center">
                            <span className="text-lg font-semibold mr-2">$29.99</span>
                            <s className="text-lg text-muted-foreground font-semibold chart-1 mr-3 ">$42.99</s>
                            <Badge variant="outline" className="bg-red-200 border-0 text-red-600 h-6 ">-40%</Badge>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-200 h-25 pt-3">
                        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">Lip Honey Fran by Franciny Ehlke is a limited edition lip gloss. It combines intense shine and immediate hydration in a convenient everyday format. With the action of honey, it is the ideal option for those seeking hydrated lips with a sweet taste and aroma, which awaken delightful sensations during use.  </p>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-200 h-20 flex flex-col justify-around">
                        <h4>Categories</h4>
                        <div className="w-full h-10 flex items-center">
                            <Badge variant="outline" className="pt-1 pb-1 pl-2 pr-2 mr-4 bg-beauty-makeup text-beauty-makeup-foreground"><Sparkles/>Lip Gloss</Badge>
                            <Badge variant="outline" className="pt-1 pb-1 pl-2 pr-2 mr-4 bg-beauty-skincare text-beauty-skincare-foreground"><Droplets/>Lip Care</Badge>
                            <Badge variant="outline" className="pt-1 pb-1 pl-2 pr-2 mr-4 bg-beauty-hair text-beauty-hair-foreground"><Zap/>Honey Infused</Badge>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="w-200 h-25 flex flex-col justify-center">
                        <h4 className="pb-2">Volume</h4>
                        <div className="w-100 flex justify-between">
                            <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">30ml</Button>
                            <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">50ml</Button>
                            <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">100ml</Button>
                            <Button variant="secondary" className="cursor-pointer hover:bg-chart-1 text-accent-foreground">Full Size</Button>
                        </div>
                    </motion.div>
                    <motion.div variants={itemVariants} className="flex justify-between items-center h-10 w-100">
                        <div className="w-30 h-10 border-secondary border-2 rounded-l-lg rounded-r-lg bg-secondary flex justify-between items-center">
                            <Button disabled={counter == 1} variant="secondary" className="rounded-l-lg w-10 cursor-pointer hover:bg-product" onClick={() => setCounter(counter - 1)}><Minus /></Button>
                            <motion.span key={counter} initial={{scale: 0.8, opacity: 0}} animate={{scale: 1, opacity: 1}} className="bg-secondary w-full h-10 flex justify-center items-center">{counter}</motion.span>
                            <Button variant="secondary" className="rounded-r-lg w-10 cursor-pointer hover:bg-product" onClick={() => setCounter(counter + 1)}><Plus /></Button>
                        </div>
                        <Button className="bg-chart-3 w-60 h-10 cursor-pointer" onClick={() => setIsModalOpen(true)}><ShoppingCart />Add to Cart</Button>
                    </motion.div>
                </main>
            </motion.div>
        </AnimatePresence>
    );
};