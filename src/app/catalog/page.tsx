"use client";

import CatalogMenu from "@/components/catalog-menu";
import CatalogProduct from "@/components/catalog-product";
import PaginationSection from "@/components/pagination";

export default function page() {

    return (
        <div>
            <div className="flex justify-start w-full">
            <div className="w-90">
                <CatalogMenu />
            </div>
            <div className="w-305">
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                <CatalogProduct />
                </div>
                <PaginationSection />
            </div>
            </div>
        </div>
    )
};