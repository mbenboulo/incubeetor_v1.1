import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-surface-light border-t border-gray-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="font-display font-bold text-2xl tracking-tight text-primary">
                            Incubeetor
                        </span>
                        <p className="mt-4 text-sm text-subtext-light">
                            An affordable, beeswax-powered neonatal incubator designed for low-resource settings.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-light mb-4">Project</h4>
                        <ul className="space-y-2 text-sm text-subtext-light">
                            <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">The Technology</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Open Source Plans</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-text-light mb-4">Supported By</h4>
                        <div className="bg-white p-2 rounded w-fit mb-4">
                            <div className="relative h-8 md:h-10 w-32 opacity-90 hover:opacity-100 transition-opacity">
                                <Image
                                    src="/british-council.jpg"
                                    alt="British Council Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-subtext-light">
                            Proudly supported by the British Council's innovation grant program.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-subtext-light">
                        © 2023 Incubeetor Project. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="text-xs text-subtext-light hover:text-primary">Privacy Policy</Link>
                        <Link href="#" className="text-xs text-subtext-light hover:text-primary">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
