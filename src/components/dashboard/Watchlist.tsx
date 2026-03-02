"use client";

import { motion } from "framer-motion";

const tokens = [
    { symbol: "BTC", name: "Bitcoin", pct: 2.14, price: "67,284.00" },
    { symbol: "ETH", name: "Ethereum", pct: 1.73, price: "3,481.20" },
    { symbol: "SOL", name: "Solana", pct: -0.88, price: "182.44" },
    { symbol: "BNB", name: "BNB Chain", pct: 3.14, price: "604.17" },
    { symbol: "PEPE", name: "Pepe", pct: 12.4, price: "0.0000148" },
    { symbol: "DEGEN", name: "Degen", pct: -4.2, price: "0.0218" },
];

export default function Watchlist() {
    return (
        <div className="glass flex flex-col h-full" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Header */}
            <div className="px-5 pt-5 pb-4 border-b border-white/[0.06]">
                <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.18em]">Market Snapshot</p>
                <div className="flex items-center gap-2 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                    <span className="text-[11px] text-white/30 font-mono">Live Feed</span>
                </div>
            </div>

            {/* Token List */}
            <div className="flex flex-col divide-y divide-white/[0.04] flex-1">
                {tokens.map((t, i) => (
                    <motion.div
                        key={t.symbol}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                        className="flex items-center justify-between px-5 py-3.5 cursor-pointer group"
                        style={{ transition: "background 0.2s" }}
                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.03)")}
                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                    >
                        <div className="flex items-center gap-3">
                            {/* Token icon placeholder */}
                            <div
                                className="w-7 h-7 flex items-center justify-center text-[10px] font-bold font-mono"
                                style={{
                                    background: "rgba(255,255,255,0.06)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                    color: "rgba(255,255,255,0.5)",
                                }}
                            >
                                {t.symbol.slice(0, 2)}
                            </div>
                            <div>
                                <p className="text-[13px] font-semibold text-white/80">{t.symbol}</p>
                                <p className="text-[10px] text-white/25 font-mono">{t.name}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-[13px] font-mono text-white/60 tabular-nums">${t.price}</p>
                            <p className={`text-[12px] font-mono font-medium tabular-nums ${t.pct >= 0 ? "text-emerald-400" : "text-red-400"}`}>
                                {t.pct >= 0 ? "+" : ""}{t.pct}%
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Footer */}
            <div className="px-5 py-3 border-t border-white/[0.04]">
                <button
                    onClick={() => console.log("View all markets")}
                    className="text-[11px] font-mono text-white/25 hover:text-white/50 uppercase tracking-wider transition-colors"
                >
                    View All Markets →
                </button>
            </div>
        </div>
    );
}
