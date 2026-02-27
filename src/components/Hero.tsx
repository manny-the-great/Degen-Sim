"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import FloatingCard from "./FloatingCard";
import PriceWidget from "./PriceWidget";
import ChartCard from "./ChartCard";

export default function Hero() {
    return (
        <section
            className="relative overflow-hidden"
            style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "64px" }}
        >
            <div
                className="relative"
                style={{
                    zIndex: 10,
                    width: "100%",
                    margin: "0 auto",
                    padding: "80px 6vw",
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1.1fr",
                        gap: "8vw",
                        alignItems: "center",
                    }}
                    className="hero-grid"
                >
                    {/* LEFT SIDE — Text Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                        {/* System status */}
                        <motion.div
                            style={{ display: "flex", alignItems: "center", gap: "12px" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="pulse-dot" style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#4ade80" }} />
                            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "rgba(255,255,255,0.25)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                // LIVE ON BASE — DEMO ENVIRONMENT
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-glow" style={{
                                fontSize: "clamp(48px, 5vw, 72px)",
                                fontWeight: 700,
                                color: "white",
                                lineHeight: 1.05,
                                letterSpacing: "-0.04em",
                            }}>
                                Master
                                <br />
                                Digital{" "}
                                <span style={{ position: "relative", display: "inline-block" }}>
                                    Trading
                                    <span style={{
                                        position: "absolute",
                                        left: "-8px",
                                        right: "-8px",
                                        top: 0,
                                        bottom: 0,
                                        border: "1px solid rgba(255,255,255,0.08)",
                                    }} />
                                </span>
                                .
                            </h1>
                        </motion.div>

                        {/* Subtext */}
                        <motion.p
                            style={{
                                fontSize: "15px",
                                color: "rgba(255,255,255,0.35)",
                                lineHeight: 1.7,
                                maxWidth: "420px",
                                fontWeight: 300,
                            }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Train with real market data. Zero risk. Real skills.
                            <br />
                            Engineered for those who move before the market.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Link
                                href="/dashboard"
                                className="btn-glow"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    height: "44px",
                                    padding: "0 28px",
                                    backgroundColor: "white",
                                    color: "black",
                                    fontSize: "13px",
                                    fontWeight: 600,
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase" as const,
                                    textDecoration: "none",
                                    transition: "all 0.3s",
                                }}
                            >
                                Launch Simulator
                                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="square" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="btn-glow"
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    height: "44px",
                                    padding: "0 28px",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    color: "rgba(255,255,255,0.6)",
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase" as const,
                                    textDecoration: "none",
                                    transition: "all 0.3s",
                                }}
                            >
                                View Leaderboard
                            </Link>
                        </motion.div>

                        {/* Bottom status bar */}
                        <motion.div
                            style={{ display: "flex", alignItems: "center", gap: "24px", marginTop: "16px", flexWrap: "wrap" }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.15)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                All Systems Normal
                            </span>
                            <span style={{ height: "12px", width: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
                            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.15)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                FEED: ATMOS* 12%
                            </span>
                            <span style={{ height: "12px", width: "1px", backgroundColor: "rgba(255,255,255,0.08)" }} />
                            <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.15)", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                                UTC 02:17:33
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT SIDE — Statue + Floating Cards */}
                    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* Statue Container */}
                        <motion.div
                            style={{
                                position: "relative",
                                width: "100%",
                                maxWidth: "640px",
                                aspectRatio: "4/5",
                            }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                        >
                            {/* Statue Image */}
                            <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
                                <Image
                                    src="/statue.png"
                                    alt="Classical trading statue"
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "top", filter: "grayscale(100%)", opacity: 0.7 }}
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Scanline overlay */}
                                <div className="statue-scanlines" style={{ position: "absolute", inset: 0, opacity: 0.4 }} />
                                {/* Gradient fade edges */}
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #050505, transparent, rgba(5,5,5,0.3))" }} />
                                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,5,5,0.5), transparent, rgba(5,5,5,0.3))" }} />
                            </div>

                            {/* Floating Chart Card */}
                            <FloatingCard
                                className="glass"
                                style={{
                                    position: "absolute",
                                    bottom: "35%",
                                    left: "-40px",
                                    width: "260px",
                                    padding: "16px",
                                    zIndex: 20,
                                }}
                                delay={0.8}
                                floatRange={6}
                            >
                                <ChartCard />
                            </FloatingCard>

                            {/* Floating Price Widget */}
                            <FloatingCard
                                className="glass"
                                style={{
                                    position: "absolute",
                                    bottom: "5%",
                                    right: "-24px",
                                    width: "320px",
                                    padding: "16px",
                                    zIndex: 20,
                                }}
                                delay={1.2}
                                floatRange={10}
                            >
                                <PriceWidget />
                            </FloatingCard>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
