"use client";

import { motion } from "framer-motion";

interface Position {
    token: string;
    entry: number;
    current: number;
    size: number;
    side: "LONG" | "SHORT";
}

const mockPositions: Position[] = [
    { token: "BTC", entry: 65000, current: 67284, size: 0.05, side: "LONG" },
    { token: "ETH", entry: 3600, current: 3481.2, size: 0.8, side: "LONG" },
    { token: "SOL", entry: 190, current: 182.44, size: 5, side: "SHORT" },
];

function calcPnl(pos: Position) {
    const diff = pos.current - pos.entry;
    const pnl = pos.side === "LONG" ? diff * pos.size : -diff * pos.size;
    const pct = (pnl / (pos.entry * pos.size)) * 100;
    return { pnl, pct };
}

export default function PositionsTable() {
    return (
        <div className="glass flex flex-col" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Header */}
            <div className="px-5 pt-5 pb-3 border-b border-white/[0.06] flex items-center justify-between">
                <div>
                    <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.18em]">Active Positions</p>
                    <p className="text-sm font-semibold text-white/70 mt-0.5">{mockPositions.length} Open</p>
                </div>
                <span className="text-[10px] font-mono text-white/20 uppercase tracking-wider">
                    Demo Account
                </span>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                {mockPositions.length > 0 ? (
                    <table className="w-full min-w-[680px]">
                        <thead>
                            <tr className="border-b border-white/[0.04]">
                                {["Token", "Side", "Entry Price", "Current", "Size", "P&L", "% Change", ""].map((col) => (
                                    <th
                                        key={col}
                                        className="px-5 py-3 text-left text-[10px] font-mono text-white/20 uppercase tracking-[0.15em] font-normal whitespace-nowrap"
                                    >
                                        {col}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {mockPositions.map((pos, i) => {
                                const { pnl, pct } = calcPnl(pos);
                                const pos_color = pnl >= 0 ? "text-emerald-400" : "text-red-400";
                                return (
                                    <motion.tr
                                        key={pos.token}
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08, duration: 0.35 }}
                                        className="border-b border-white/[0.03] group cursor-default"
                                        style={{ transition: "background 0.2s" }}
                                        onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
                                        onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                                    >
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-2.5">
                                                <div
                                                    className="w-6 h-6 flex items-center justify-center text-[9px] font-bold font-mono"
                                                    style={{
                                                        background: "rgba(255,255,255,0.06)",
                                                        border: "1px solid rgba(255,255,255,0.08)",
                                                        color: "rgba(255,255,255,0.5)",
                                                    }}
                                                >
                                                    {pos.token.slice(0, 2)}
                                                </div>
                                                <span className="text-[13px] font-semibold text-white/80">{pos.token}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span
                                                className="text-[10px] font-mono font-semibold px-2 py-0.5 tracking-wider"
                                                style={{
                                                    background: pos.side === "LONG" ? "rgba(16,185,129,0.1)" : "rgba(248,113,113,0.1)",
                                                    border: `1px solid ${pos.side === "LONG" ? "rgba(16,185,129,0.2)" : "rgba(248,113,113,0.2)"}`,
                                                    color: pos.side === "LONG" ? "#10b981" : "#f87171",
                                                }}
                                            >
                                                {pos.side}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5 text-[13px] font-mono text-white/50 tabular-nums">
                                            ${pos.entry.toLocaleString()}
                                        </td>
                                        <td className="px-5 py-3.5 text-[13px] font-mono text-white/70 tabular-nums">
                                            ${pos.current.toLocaleString()}
                                        </td>
                                        <td className="px-5 py-3.5 text-[13px] font-mono text-white/50 tabular-nums">
                                            {pos.size}
                                        </td>
                                        <td className={`px-5 py-3.5 text-[13px] font-mono font-medium tabular-nums ${pos_color}`}>
                                            {pnl >= 0 ? "+" : ""}${pnl.toFixed(2)}
                                        </td>
                                        <td className={`px-5 py-3.5 text-[13px] font-mono font-medium tabular-nums ${pos_color}`}>
                                            {pct >= 0 ? "+" : ""}{pct.toFixed(2)}%
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <button
                                                onClick={() => console.log(`Close ${pos.token} position`)}
                                                className="text-[11px] font-mono font-medium uppercase tracking-wider px-3 py-1 transition-all duration-200"
                                                style={{
                                                    border: "1px solid rgba(248,113,113,0.25)",
                                                    color: "rgba(248,113,113,0.6)",
                                                }}
                                                onMouseEnter={e => {
                                                    e.currentTarget.style.borderColor = "rgba(248,113,113,0.5)";
                                                    e.currentTarget.style.color = "rgba(248,113,113,0.9)";
                                                    e.currentTarget.style.background = "rgba(248,113,113,0.06)";
                                                }}
                                                onMouseLeave={e => {
                                                    e.currentTarget.style.borderColor = "rgba(248,113,113,0.25)";
                                                    e.currentTarget.style.color = "rgba(248,113,113,0.6)";
                                                    e.currentTarget.style.background = "transparent";
                                                }}
                                            >
                                                Close
                                            </button>
                                        </td>
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 gap-3">
                        <div className="w-8 h-8 border border-white/10 flex items-center justify-center">
                            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} className="text-white/20">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
                            </svg>
                        </div>
                        <p className="text-[13px] text-white/25 font-mono">No active positions. Start trading.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
