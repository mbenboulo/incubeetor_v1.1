"use client";

import { X } from "lucide-react";
import { useModal } from "../context/ModalContext";
import { useState } from "react";

export default function ContactModal() {
    const { isModalOpen, closeModal } = useModal();
    const [formData, setFormData] = useState({ name: "", email: "", role: "Medical Professional", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    if (!isModalOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setTimeout(() => {
                    closeModal();
                    setStatus("idle");
                    setFormData({ name: "", email: "", role: "Medical Professional", message: "" });
                }, 2000);
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-text-light">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={closeModal}
            ></div>

            <div className="relative w-full max-w-lg bg-surface-light rounded-2xl shadow-2xl transform transition-all flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                    <div>
                        <h3 className="text-xl font-display font-bold text-gray-900">Get Involved</h3>
                        <p className="text-sm text-subtext-light mt-1">Join our mission to save lives.</p>
                    </div>
                    <button
                        onClick={closeModal}
                        className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 overflow-y-auto">
                    {status === "success" ? (
                        <div className="text-center py-10">
                            <div className="text-green-500 text-5xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-gray-500">We'll be in touch shortly.</p>
                        </div>
                    ) : (
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
                                <select
                                    id="role"
                                    value={formData.role}
                                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                                >
                                    <option>Medical Professional</option>
                                    <option>Engineer / Developer</option>
                                    <option>Investor / Donor</option>
                                    <option>Student</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-transparent focus:border-primary focus:bg-white focus:ring-0 transition-colors"
                                    placeholder="Tell us how you'd like to help..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-primary/20 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "error" && (
                                <p className="text-red-500 text-sm text-center">Something went wrong. Please check if your SMTP environment variables are set correctly.</p>
                            )}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
