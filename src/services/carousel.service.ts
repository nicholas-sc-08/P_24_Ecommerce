import React, { SetStateAction } from "react";

export function nextSlide(current: number, setCurrent: React.Dispatch<SetStateAction<number>>, length: number): void {

   setCurrent(current == length - 1 ? 0 : current + 1);
};

export function prevSlide(current: number, setCurrent: React.Dispatch<SetStateAction<number>>, length: number): void {

   setCurrent(current == 0 ? length + 1 : current - 1);
};