"use client";

import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle } from "./ui/card";

export default function CatalogMenu() {

    return (
        <Card className="w-1/4 h-150 ml-5 mt-5 flex-col">
            <CardHeader className="h-10 flex items-center">
                <CardTitle className="text-2xl font-sans">Filters</CardTitle>
            </CardHeader>
        </Card>
    )
};