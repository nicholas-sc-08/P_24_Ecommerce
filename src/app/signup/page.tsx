"use client";

import { ModalMessage } from "@/components/ModalMessage";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useGlobal } from "@/context/GlobalContext";
import { handleForm } from "@/services/signup.service";
import { ModalType } from "@/utils/enum.util";
import { modalTheme } from "@/utils/modal-theme";
import { Eye, EyeOff, House } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function page() {

    const router = useRouter();
    const { arrayUsers, setArrayUsers } = useGlobal();
    const { isModalOpen, setIsModalOpen } = useGlobal();
    const { containerVariants, itemVariants } = useGlobal();
    const [inptPassword, setInptPassword] = useState({ password: "password", confirmPassword: "password" });
    const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
    const [modalProps, setModalProps] = useState({ phrase: "Email already signed up on the plataform!", modalType: ModalType.ERROR, text: modalTheme.error.text, border: modalTheme.error.border });

    return (
        <AnimatePresence>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-screen h-screen flex justify-center items-center">
                {isModalOpen && <ModalMessage phrase={modalProps.phrase} modalType={modalProps.modalType} text={modalProps.text} border={modalProps.border} />}
                <motion.div variants={itemVariants}>
                    <Card className="w-250 h-120 pt-0 pb-0 flex-row items-center">
                        <aside className="w-1/2 h-full bg-cover bg-center rounded-tl-lg rounded-bl-lg" style={{ backgroundImage: "url('/signUpImage.jpg')" }}>
                            <div className="w-full h-full bg-black/30 flex flex-col justify-center items-center rounded-tl-lg rounded-bl-lg">
                                <h2 className="font-semibold text-white">Produtos pensados para valorizar o melhor de você.</h2>
                                <Button variant="default" className="mx-auto w-30 mt-4 cursor-pointer">Sign in</Button>
                            </div>
                        </aside>
                        <main className="w-1/2 h-120">
                            <motion.div variants={itemVariants}>
                                <CardHeader className="h-20 flex items-center justify-between">
                                    <CardTitle>Sign up</CardTitle>
                                    <CardAction className="flex items-center justify-center w-35 h-full">
                                        <Button variant="link" className="cursor-pointer" onClick={() => router.push("/")}><House />Back to Home</Button>
                                    </CardAction>
                                </CardHeader>
                            </motion.div>
                            <CardContent className="h-100 w-full">
                                <form onSubmit={e => handleForm(e, form, arrayUsers, setModalProps, setIsModalOpen)}>
                                    <div className="h-80 flex flex-col justify-around">
                                        <motion.div variants={itemVariants}>
                                            <Label className="pb-2" htmlFor="name">Name</Label>
                                            <Input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="What is your name?" id="name" />
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <Label className="pb-2" htmlFor="email">Email Address</Label>
                                            <Input required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="youremail@example.com" type="email" id="email" />
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <Label className="pb-2" htmlFor="password">Password</Label>
                                            <div className="flex-1 max-w-md relative">
                                                <Input required value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} placeholder="Minimum 7 max 12 caracters" minLength={7} maxLength={12} type={inptPassword.password} className="pr-10 focus-visible:ring-1 focus-visible:ring-4" />
                                                {inptPassword.password == "password" && <Eye className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, password: "string" })} />}
                                                {inptPassword.password == "string" && <EyeOff className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, password: "password" })} />}
                                            </div>
                                        </motion.div>
                                        <motion.div variants={itemVariants}>
                                            <Label className="pb-2" htmlFor="confirmPassword">Confirm Password</Label>
                                            <div className="flex-1 max-w-md relative">
                                                <Input required value={form.confirmPassword} onChange={e => setForm({ ...form, confirmPassword: e.target.value })} placeholder="Password again" minLength={7} maxLength={12} type={inptPassword.confirmPassword} className="pr-10 focus-visible:ring-1 focus-visible:ring-4" />
                                                    {inptPassword.confirmPassword == "password" && <Eye className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, confirmPassword: "string" })} />}
                                                    {inptPassword.confirmPassword == "string" && <EyeOff className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" onClick={() => setInptPassword({ ...inptPassword, confirmPassword: "password" })} />}
                                            </div>
                                        </motion.div>
                                    </div>
                                    <CardFooter className="h-20 flex flex-col justify-evenly pl-0 pr-0">
                                        <Button className="w-110 cursor-pointer" variant="default" type="submit">Sign Up</Button>
                                    </CardFooter>
                                </form>
                            </CardContent>
                        </main>
                    </Card>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};