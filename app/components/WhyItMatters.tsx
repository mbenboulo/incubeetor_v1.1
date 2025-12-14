import { AlertTriangle, ZapOff, DollarSign, Car, CheckCircle } from "lucide-react";

export default function WhyItMatters() {
    return (
        <section id="motivation" className="py-20 bg-surface-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light mb-4">Why It Matters</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <ChallengeCard
                                icon={<AlertTriangle className="w-10 h-10 text-red-500" />}
                                title="Hypothermia Risk"
                                description="Premature infants lack the body fat to regulate temperature, making cold stress a leading cause of mortality."
                            />
                            <ChallengeCard
                                icon={<ZapOff className="w-10 h-10 text-blue-500" />}
                                title="Power Outages"
                                description="Traditional incubators rely on constant electricity, which is unreliable in many developing regions."
                                className="mt-8"
                            />
                            <ChallengeCard
                                icon={<DollarSign className="w-10 h-10 text-primary" />}
                                title="High Cost"
                                description="Standard medical incubators cost thousands of dollars, making them inaccessible for rural clinics."
                            />
                            <ChallengeCard
                                icon={<Car className="w-10 h-10 text-green-500" />}
                                title="Transport"
                                description="Safely moving infants to advanced care facilities is often impossible without portable equipment."
                                className="mt-8"
                            />
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h3 className="text-2xl font-bold text-text-light mb-6">The Gap in Care</h3>
                        <p className="text-lg text-subtext-light mb-6 leading-relaxed">
                            Every year, millions of premature babies are born in low-resource settings. The inability to maintain a stable body temperature is one of the primary dangers they face.
                        </p>
                        <p className="text-lg text-subtext-light mb-8 leading-relaxed">
                            Incubeetor bridges this gap by providing a low-cost, electricity-independent solution designed specifically for the unique challenges of developing healthcare infrastructures.
                        </p>

                        <ul className="space-y-4">
                            <ListItem text="Zero-electricity operation mode" />
                            <ListItem text="Portable and lightweight design" />
                            <ListItem text="Affordable manufacturing materials" />
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChallengeCard({ icon, title, description, className = "" }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
    return (
        <div className={`bg-background-light p-6 rounded-xl shadow-sm border border-gray-100 ${className}`}>
            <div className="mb-4">{icon}</div>
            <h3 className="text-lg font-bold mb-2 text-text-light">{title}</h3>
            <p className="text-sm text-subtext-light">{description}</p>
        </div>
    );
}

function ListItem({ text }: { text: string }) {
    return (
        <li className="flex items-start">
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1" />
            <span className="text-subtext-light">{text}</span>
        </li>
    );
}
