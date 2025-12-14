"use client";

import { Thermometer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "./FadeIn";

export default function Hero() {
    return (
        <section id="home" className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 text-center lg:text-left z-10">
                        <FadeIn delay={0.1}>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6 tracking-wide uppercase">
                                Neonatal Innovation
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-text-light">
                                Life-saving warmth for <span className="text-primary">every newborn.</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <p className="mt-4 text-xl text-subtext-light leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                An affordable, transportable neonatal incubator powered by nature. Bringing critical care to where it's needed most.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link
                                    href="/read-more"
                                    className="px-8 py-3.5 rounded-full bg-primary text-white font-semibold shadow-lg hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 text-center"
                                >
                                    Read More
                                </Link>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-6 mt-12 lg:mt-0 relative">
                        <FadeIn direction="left" delay={0.5}>
                            <div className="relative rounded-2xl shadow-2xl bg-surface-light p-4 border border-gray-100">
                                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
                                    <Image
                                        src="/unnamed.jpg"
                                        alt="Incubeetor Prototype Device"
                                        fill
                                        className="object-cover transform hover:scale-[1.02] transition-transform duration-500"
                                        priority
                                    />
                                </div>

                                <div className="absolute -bottom-6 -left-6 bg-surface-light p-4 rounded-lg shadow-xl border border-gray-100 hidden md:block">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-100 p-2 rounded-full">
                                            <Thermometer className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <p className="text-xs text-subtext-light font-medium uppercase">Temperature Stability</p>
                                            <p className="text-lg font-bold text-text-light">36.5 ± 0.5°C</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        {/* Blob Effect */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-3xl rounded-full opacity-50 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
