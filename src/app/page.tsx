"use client";

import CardCTA from "@/components/CardCTA";
import Carousel from "@/components/Carousel";
import { AnimatePresence, motion } from "framer-motion";
import { useGlobal } from "@/context/GlobalContext";

export default function Home() {

  const { containerVariants, itemVariants, cardHomeImages, carouselImages } = useGlobal();

  return (
    <AnimatePresence>
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
        <motion.div variants={itemVariants} className="w-full h-full flex justify-center">
          <Carousel images={carouselImages.images} />
        </motion.div>
        <div className="w-full h-120 flex items-center justify-around">
          {cardHomeImages.map((card, i) => (
            <motion.div key={i} variants={itemVariants}>
              <CardCTA title={card.title} description={card.description} discount={card.discount} image={card.image} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
