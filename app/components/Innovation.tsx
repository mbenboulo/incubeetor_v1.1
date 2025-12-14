import Image from "next/image";

export default function Innovation() {
    return (
        <section id="technology" className="py-20 bg-background-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Innovation</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-text-light mt-2 mb-4">Powered by Nature</h2>
                    <p className="text-subtext-light text-lg">Harnessing the thermal properties of beeswax to create a stable microclimate.</p>
                </div>

                <div className="bg-surface-light rounded-3xl shadow-xl overflow-hidden border border-gray-100 grid md:grid-cols-2">
                    {/* Left Content */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-text-light mb-6">Phase Change Material (PCM)</h3>
                        <p className="text-subtext-light mb-6 leading-relaxed">
                            At the core of Incubeetor is a specially calibrated cartridge containing beeswax. Beeswax acts as a Phase Change Material, meaning it absorbs and releases large amounts of thermal energy as it melts and solidifies.
                        </p>
                        <p className="text-subtext-light mb-8 leading-relaxed">
                            By heating the cartridge to a specific temperature, it can maintain the incubator's internal environment at a steady 37°C for up to 6 hours without needing any external power source.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-4">
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">6h+</div>
                                <div className="text-sm text-subtext-light font-medium">Heat Retention</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary mb-1">100%</div>
                                <div className="text-sm text-subtext-light font-medium">Biodegradable</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="bg-gray-100 relative h-96 md:h-auto">
                        <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-80 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtOVmToo8bN9uI5vtYUjKAxQ-CedPUOP6HeNtLGZ7_pFjfBgAE3FV1AIK7P7X__3e5Qd0WEn0frtZWeldCBzdtmevSkNjAEn9YTaadr8qcQ5GJZYYftySsdGQaXCzE8aUH-wZvsATZfluHAPiuW9LctLAJIxA7v0lxQOenlMMMmigPbKiVkHkJVIiuuhuBUAAIAobdKxP44wVIvCuLUUIoFZc9Y-1DGFU_z1gmDZnEnFZwK9owUzfnHtOAS6-HhRuIHgrcRpdGS7Q')] bg-cover bg-center">
                            {/* Fallback pattern if URL fails or we want to use local asset later */}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>

                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="bg-surface-light/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-sm w-full">
                                <h4 className="font-bold text-lg mb-2 text-text-light">How it works:</h4>
                                <ol className="space-y-3 text-sm text-subtext-light">
                                    <Step number={1} text="Heat cartridge in hot water bath." />
                                    <Step number={2} text="Place cartridge in insulated base." />
                                    <Step number={3} text="Beeswax releases steady heat." />
                                    <Step number={4} text="Infant stays warm during transport." />
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Step({ number, text }: { number: number, text: string }) {
    return (
        <li className="flex gap-3">
            <span className="font-bold text-primary">{number}.</span>
            <span>{text}</span>
        </li>
    )
}
