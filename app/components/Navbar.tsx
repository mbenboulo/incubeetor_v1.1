import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-surface-light/90 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-display font-bold text-2xl tracking-tight text-primary">
                            Incubeetor
                        </Link>
                    </div>

                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink href="#home">Home</NavLink>
                        <NavLink href="#motivation">Motivation</NavLink>
                        <NavLink href="#technology">Technology</NavLink>
                        <NavLink href="#impact">Impact</NavLink>
                        <Link
                            href="#"
                            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-full font-semibold transition-colors shadow-md"
                        >
                            Get Involved
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="text-text-light hover:text-primary focus:outline-none">
                            <Menu className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-subtext-light hover:text-primary transition-colors font-medium"
        >
            {children}
        </Link>
    );
}
