import Carousel from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { CarouselProps } from "@/utils/type.util";
import Image from "next/image";

export default function Home() {
  
  const carouselImages: CarouselProps = {
    images: ["/carousel/imageOne.svg", "/carousel/imageTwo.svg", "/carousel/imageThree.svg"]
  };
  
  return (
    <div className="">
        <Carousel images={carouselImages.images}/>
    </div>
  );
}
