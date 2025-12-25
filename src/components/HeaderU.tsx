import { Search, ShoppingCart, User } from "lucide-react"; // npm install lucide-react
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ModeToggle from "./theme-button";

export default function Header() {

    const router = useRouter();

    return (
        <header className="shadow-[0px_1px_3px_0px_rgba(0,0,0,0.02),0px_0px_0px_1px_rgba(27,31,35,0.15)]">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
                <div>
                    <span onClick={() => router.push("/")} className="text-2xl font-bold text-foreground tracking-tighter">
                        LOGO<span className="text-primary">.</span>
                    </span>
                </div>

                <div className="w-1/4 h-full flex justify-between items-center ">
                    <Link href={"/catalog"} className="font-semibold hover:text-primary transition-colors duration-200">Catalog</Link>
                    <Link href={"/about"} className="font-semibold hover:text-primary transition-colors duration-200">About</Link>
                    <Link href={"/blog"} className="font-semibold hover:text-primary transition-colors duration-200">Blog</Link>
                </div>

                <div className="hidden md:flex flex-1 max-w-md relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search for produtos..." className="pl-10 focus-visible:ring-1 focus-visible:ring-4"/>
                </div>

                <div className="flex justify-around w-55">
                    <Button variant="default" className="cursor-pointer"><ShoppingCart/> Cart (0)</Button>
                    <ModeToggle/>
                    <Button variant="outline" className="cursor-pointer rounded-full w-10 h-10" onClick={() => router.push("/signup")}><User/></Button>
                </div>

            </div>
        </header>
    );
}