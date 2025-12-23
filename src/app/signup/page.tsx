"use client";

import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, House } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function page() {

    const router = useRouter();
    const [inptPassword, setInptPassword] = useState({ password: "password", confirmPassword: "password" });

    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <Card className="w-250 h-120 pt-0 pb-0 flex-row items-center">
                <aside className="w-1/2 h-full bg-primary rounded-tl-lg rounded-bl-lg">

                </aside>
                <main className="w-1/2 h-120">
                    <CardHeader className="h-20 flex items-center justify-between">
                        <CardTitle>Sign up</CardTitle>
                        <CardAction className="flex items-center justify-center w-35 h-full">
                            <Button variant="link" className="cursor-pointer" onClick={() => router.push("/")}><House />Back to Home</Button>
                        </CardAction>
                    </CardHeader>
                    <CardContent className="h-100 w-full">
                        <form>
                            <div className="h-80 flex flex-col justify-around">
                                <div>
                                    <Label className="pb-2" htmlFor="name">Name</Label>
                                    <Input placeholder="What is your name?" id="name" />
                                </div>
                                <div>
                                    <Label className="pb-2" htmlFor="email">Email Address</Label>
                                    <Input placeholder="youremail@example.com" type="email" id="email" />
                                </div>
                                <div>
                                    <Label className="pb-2" htmlFor="password">Password</Label>
                                    <div className="flex-1 max-w-md relative">
                                        <Input placeholder="Minimum 7 max 12 caracters" minLength={7} maxLength={12} type={inptPassword.password} className="pr-10 focus-visible:ring-1 focus-visible:ring-4" />
                                        {inptPassword.password == "password" && <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, password: "string" })} />}
                                        {inptPassword.password == "string" && <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, password: "password" })} />}
                                    </div>
                                </div>
                                <div>
                                    <Label className="pb-2" htmlFor="confirmPassword">Confirm Password</Label>
                                    <div className="flex-1 max-w-md relative">
                                        <Input placeholder="Password again" minLength={7} maxLength={12} type={inptPassword.confirmPassword} className="pr-10 focus-visible:ring-1 focus-visible:ring-4" />
                                        {inptPassword.confirmPassword == "password" && <Eye className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, confirmPassword: "string" })} />}
                                        {inptPassword.confirmPassword == "string" && <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, confirmPassword: "password" })} />}
                                    </div>
                                </div>
                            </div>
                            <CardFooter className="h-20 flex flex-col justify-evenly pl-0 pr-0">
                                <Button className="w-110 cursor-pointer" variant="default">Sign Up</Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </main>
            </Card>
        </div>
    );
};