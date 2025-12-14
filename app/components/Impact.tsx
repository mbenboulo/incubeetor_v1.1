"use client";

import { PiggyBank, Baby, Leaf } from "lucide-react";
import { useModal } from "../context/ModalContext";
import FadeIn from "./FadeIn";

export default function Impact() {
    const { openModal } = useModal();

    return (
        <section id="impact" className="py-20 bg-surface-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeIn direction="up">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light mb-4">Projected Impact</h2>
                        <p className="text-subtext-light text-lg max-w-2xl mx-auto">
                            Our mission is to reduce neonatal mortality rates in developing regions through accessible technology.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-3 gap-8">
                    <FadeIn delay={0.2}>
                        <ImpactCard
                            icon={<PiggyBank className="w-8 h-8" />}
                            title="Lower Cost"
                            description="Compared to traditional transport incubators, making it affordable for rural clinics."
                        />
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <ImpactCard
                            icon={<Baby className="w-8 h-8" />}
                            title="Safe Transport"
                            description="Enables critical transfer of neonates from home births or rural centers to hospitals."
                        />
                    </FadeIn>
                    <FadeIn delay={0.4}>
                        <ImpactCard
                            icon={<Leaf className="w-8 h-8" />}
                            title="Sustainable"
                            description="Utilizes locally sourced, organic materials that are easy to maintain and replace."
                        />
                    </FadeIn>
                </div>

                {/* Embedded CTA Section as per design */}
                <FadeIn delay={0.6} direction="up">
                    <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-lg">
                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-4">Help us bring warmth to the world.</h3>
                            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                                Join our mission to provide affordable neonatal care solutions globally. Whether you are an engineer, doctor, or donor.
                            </p>
                            <button
                                onClick={openModal}
                                className="bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                            >
                                Contact Project Team
                            </button>
                        </div>
                        {/* Background pattern */}
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

function ImpactCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <div className="p-8 rounded-2xl bg-background-light border border-gray-100 hover:border-primary/50 transition-colors text-center group">
            <div className="w-16 h-16 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-text-light mb-3">{title}</h3>
            <p className="text-subtext-light">
                {description}
            </p>
        </div>
    );
}
