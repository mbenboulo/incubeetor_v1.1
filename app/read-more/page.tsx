import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";
import { ArrowLeft, Zap, DollarSign, Thermometer, Droplets, Info, Plus, Network, CheckCircle2 } from "lucide-react";

export default function ReadMore() {
    return (
        <main className="min-h-screen bg-white font-sans text-gray-900">
            {/* 1. Header Navigation */}
            <div className="max-w-7xl mx-auto px-6 py-6 border-b border-gray-100/50">
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors gap-2"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
            </div>

            {/* 2. Page Title */}
            <section className="pt-20 pb-16 text-center max-w-4xl mx-auto px-6">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
                    Redefining Neonatal Care with <span className="text-primary relative inline-block">Nature
                        <svg className="absolute w-full h-2 bottom-0 left-0 text-primary opacity-30" preserveAspectRatio="none" viewBox="0 0 100 10">
                            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
                        </svg>
                    </span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    Incubeetor leverages the thermal properties of beeswax to provide affordable, reliable, and portable life support for newborns in low-resource settings.
                </p>
            </section>

            {/* 3. Overview Section (Bridging the Gap) */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Device Image */}
                    <div className="mb-10 lg:mb-0">
                        <div className="bg-gradient-to-tr from-yellow-100 to-white p-8 rounded-2xl border border-gray-100 shadow-lg relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary opacity-10 rounded-full blur-3xl"></div>
                            <Image
                                src="/unnamed.jpg"
                                alt="Incubeetor Prototype Device"
                                width={800}
                                height={600}
                                className="w-full h-auto rounded-lg shadow-md transform hover:scale-[1.02] transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <div className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Overview</div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                            Bridging the Gap in Neonatal Survival
                        </h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Millions of premature babies are born each year in developing regions where access to standard electric incubators is limited or unreliable due to power outages. Hypothermia is a silent killer in these environments.
                        </p>
                        <p className="text-gray-600 mb-10 leading-relaxed">
                            The <strong>Incubeetor</strong> is designed to address this critical gap. By utilizing a phase-change material—beeswax—it maintains a stable, life-saving temperature for hours without continuous electricity. It serves a dual purpose: a stationary care unit for rural clinics and a safe transport incubator for ambulances or transfers.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="text-primary mb-3"><Zap size={24} /></div>
                                <h4 className="font-bold text-gray-900 mb-1">Low Energy</h4>
                                <p className="text-xs text-gray-500">Minimal power required to recharge thermal banks.</p>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <div className="text-primary mb-3"><DollarSign size={24} /></div>
                                <h4 className="font-bold text-gray-900 mb-1">Affordable</h4>
                                <p className="text-xs text-gray-500">Significantly lower cost than traditional incubators.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Power of Beeswax Section */}
            <section className="bg-yellow-50 py-16">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center p-2 bg-yellow-100 rounded-full mb-4">
                            <Droplets size={24} className="text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">The Power of Beeswax</h2>
                        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
                            Why we chose nature's perfect insulator for our thermal regulation system.
                        </p>
                    </div>

                    <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-l-4 border-primary">
                        <div className="p-8 md:p-12">
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                <Thermometer className="text-primary" />
                                Phase Change Material (PCM) Technology
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Beeswax has a melting point of approximately <strong>62°C to 64°C</strong>. However, when specially formulated, it can act as a highly effective Phase Change Material. The Incubeetor uses a proprietary beeswax blend that stores heat energy when melted and releases it slowly as it solidifies.
                            </p>

                            <div className="grid md:grid-cols-3 gap-6 mt-8 border-t border-gray-100 pt-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-1">6h+</div>
                                    <div className="text-sm font-medium text-gray-500">Heat Retention</div>
                                </div>
                                <div className="text-center border-l border-r border-gray-100">
                                    <div className="text-4xl font-bold text-primary mb-1">37°C</div>
                                    <div className="text-sm font-medium text-gray-500">Target Temp</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-1">100%</div>
                                    <div className="text-sm font-medium text-gray-500">Non-Toxic</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 flex items-start gap-4">
                            <Info size={18} className="text-primary mt-1 shrink-0" />
                            <p className="text-sm text-gray-600 italic">
                                Unlike water which cools rapidly, or chemical gels which can be hazardous if leaked, beeswax is organic, locally sourceable in many regions, and provides a gentle, consistent radiative heat profile.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Designed for Versatility */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 text-center mb-16">
                    Designed for Versatility
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center">
                            <Plus className="text-gray-300 w-16 h-16" strokeWidth={1} />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Rural Clinic Care</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                In remote health centers with intermittent electricity, Incubeetor acts as a primary care unit. The removable heating cassette can be "charged" (heated) via solar heater or boiling water, then inserted into the unit to provide hours of warmth.
                            </p>
                            <ul className="space-y-2">
                                <FeatureItem text="Easy to sanitize surfaces" />
                                <FeatureItem text="Transparent viewing dome" />
                            </ul>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-gray-200 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-gray-100 h-48 md:h-64 flex items-center justify-center">
                            <Network className="text-gray-300 w-16 h-16" strokeWidth={1} />
                        </div>
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Safe Transport</h3>
                            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Transporting a fragile neonate to a larger hospital is often where hypothermia occurs. Incubeetor's compact form factor and battery-free thermal retention make it the perfect transit companion in ambulances or private vehicles.
                            </p>
                            <ul className="space-y-2">
                                <FeatureItem text="Shock-absorbing chassis" />
                                <FeatureItem text="Lightweight ergonomic handles" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Vision / Footer CTA */}
            <section className="bg-gray-900 py-16 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-8">
                        Vision for Global Health Impact
                    </h2>
                    <p className="text-gray-300 mb-10 text-lg leading-relaxed">
                        Our goal isn't just to build a device; it's to build a sustainable ecosystem. We are partnering with local NGOs to manufacture the Incubeetor chassis using locally available materials, empowering communities while saving lives.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 border border-white/20">
                            <div className="p-1 rounded-lg h-8 w-24 relative">
                                <Image
                                    src="/british-council-2-removebg-preview.png"
                                    alt="British Council Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="text-left">
                                <div className="text-xs text-gray-400 uppercase tracking-widest">Supported By</div>
                                <div className="font-bold">British Council</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-gray-900 bg-primary hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-primary/50">
                            Join Our Mission
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center text-sm text-gray-500">
            <CheckCircle2 size={14} className="text-primary mr-2" />
            {text}
        </li>
    )
}
