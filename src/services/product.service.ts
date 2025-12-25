"use client";

import api from "./api";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export class ProductService {

    async getAll() {

        try {

            const products = await api.get("/product");
            return products.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };

    async getUnique(id: number, router: AppRouterInstance) {

        try {

            
            const product = await api.get(`/product/${id}`);
            router.push("/product");
            console.log(product.data);
            return product.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };

    async postProduct(data: any) {

        try {

            const product = await api.post("/product", data);
            return product.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };
};