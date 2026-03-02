"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
    { label: "Markets", href: "#" },
    { label: "Signals", href: "#" },
    { label: "Leaderboard", href: "#" },
    { label: "Docs", href: "#" },
];

const MOCK_WALLET = "0x3f4a...c82b";

export default function DashboardNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const menuItems = [
        { label: "Profile", icon: "○", action: () => console.log("Profile") },
        { label: "Settings", icon: "◇", action: () => console.log("Settings") },
        { label: "Logout", icon: "→", action: () => console.log("Logout"), danger: true },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06]">
            <div
                className="absolute inset-0 backdrop-blur-md bg-[#050505]/70"
                style={{ WebkitBackdropFilter: "blur(12px)" }}
            />
            <div className="relative max-w-[1440px] mx-auto px-8 md:px-12 lg:px-20 xl:px-24 h-16 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="text-white font-bold text-lg tracking-[-0.03em]">Degen</span>
                    <span className="text-white/50 font-light text-lg tracking-[-0.03em]">Sim</span>
                    <span className="ml-1 w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                </Link>

                {/* Desktop Nav */}
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
                    {/* Active page indicator */}
                    <span className="text-[13px] text-white/90 tracking-wide uppercase font-medium border-b border-white/30 pb-0.5">
                        Dashboard
                    </span>
                </div>

                {/* Wallet Address + Dropdown */}
                <div className="hidden md:block relative" ref={dropdownRef}>
                    <button
                        id="wallet-dropdown-btn"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-2.5 h-9 px-4 border border-white/[0.12] text-white/80 text-[13px] font-mono tracking-wide hover:border-white/25 transition-all duration-300"
                        style={{ background: "rgba(255,255,255,0.03)" }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot flex-shrink-0" />
                        {MOCK_WALLET}
                        <svg
                            width="10" height="10" viewBox="0 0 10 10" fill="none"
                            className="text-white/30"
                            style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
                        >
                            <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                        </svg>
                    </button>

                    <AnimatePresence>
                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.15 }}
                                className="absolute right-0 top-full mt-2 w-44 border border-white/[0.08] overflow-hidden"
                                style={{ background: "rgba(8,8,8,0.96)", backdropFilter: "blur(16px)" }}
                            >
                                {menuItems.map((item, i) => (
                                    <button
                                        key={item.label}
                                        onClick={() => { item.action(); setDropdownOpen(false); }}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-[12px] font-mono uppercase tracking-wider transition-colors duration-150 border-b border-white/[0.04] last:border-0"
                                        style={{ color: item.danger ? "rgba(248,113,113,0.7)" : "rgba(255,255,255,0.5)" }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                            e.currentTarget.style.color = item.danger ? "rgba(248,113,113,1)" : "rgba(255,255,255,0.9)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.background = "transparent";
                                            e.currentTarget.style.color = item.danger ? "rgba(248,113,113,0.7)" : "rgba(255,255,255,0.5)";
                                        }}
                                    >
                                        <span className="text-white/20">{item.icon}</span>
                                        {item.label}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Hamburger (Mobile) */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle menu"
                >
                    <motion.span className="block w-5 h-[1px] bg-white/60" animate={mobileOpen ? { rotate: 45, y: 3.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
                    <motion.span className="block w-5 h-[1px] bg-white/60" animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
                    <motion.span className="block w-5 h-[1px] bg-white/60" animate={mobileOpen ? { rotate: -45, y: -3.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} />
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
                            <div className="mt-2 flex items-center gap-2 py-3 border-t border-white/[0.06]">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                                <span className="text-sm font-mono text-white/50">{MOCK_WALLET}</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
