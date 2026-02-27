"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "Markets", href: "#" },
    { label: "Signals", href: "#" },
    { label: "Leaderboard", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Simulator", href: "/dashboard" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]">
            <div
                className="absolute inset-0 backdrop-blur-md bg-[#050505]/70"
                style={{ WebkitBackdropFilter: "blur(12px)" }}
            />
            <div className="relative max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 xl:px-24 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-white font-bold text-lg tracking-[-0.03em]">
                        Degen
                    </span>
                    <span className="text-white/50 font-light text-lg tracking-[-0.03em]">
                        Sim
                    </span>
                    <span className="ml-1 w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                </Link>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[13px] text-white/40 hover:text-white/90 transition-colors duration-300 tracking-wide uppercase font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Connect Wallet Button (Desktop) */}
                <button
                    onClick={() => console.log("Connect")}
                    className="hidden md:flex items-center gap-2 h-9 px-5 border border-white/[0.12] text-white/80 text-[13px] font-medium tracking-wide uppercase hover:border-white/30 hover:text-white transition-all duration-300 btn-glow"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500/80" />
                    Connect Wallet
                </button>

                {/* Hamburger Button (Mobile) */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span
                        className="block w-5 h-[1px] bg-white/60"
                        animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="block w-5 h-[1px] bg-white/60"
                        animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.2 }}
                    />
                    <motion.span
                        className="block w-5 h-[1px] bg-white/60"
                        animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden relative border-t border-white/[0.06] bg-[#050505]/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="text-sm text-white/50 hover:text-white transition-colors tracking-wide uppercase"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    console.log("Connect");
                                    setMobileOpen(false);
                                }}
                                className="mt-2 w-full h-10 border border-white/[0.12] text-white/80 text-sm font-medium tracking-wide uppercase hover:border-white/30 transition-all"
                            >
                                Connect Wallet
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
