"use client";

import { motion } from "framer-motion";

interface PriceItem {
    symbol: string;
    price: string;
    change: string;
    positive: boolean;
    barWidth: string;
}

const prices: PriceItem[] = [
    { symbol: "BTC", price: "$98,240", change: "+2.14%", positive: true, barWidth: "85%" },
    { symbol: "ETH", price: "$3,412", change: "+1.73%", positive: true, barWidth: "70%" },
    { symbol: "SOL", price: "$187.4", change: "-0.88%", positive: false, barWidth: "55%" },
    { symbol: "BNB", price: "$412.8", change: "+3.14%", positive: true, barWidth: "60%" },
    { symbol: "ARB", price: "$38.14", change: "+3.14%", positive: true, barWidth: "45%" },
];

const marketData = [
    { label: "MCAP", value: "$3.61T", change: "+1.90%", positive: true },
    { label: "DOM", value: "54.2%", change: "-0.30%", positive: false },
];

export default function PriceWidget() {
    return (
        <div className="w-full">
            {/* Header row */}
            <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                    <span className="text-[10px] text-white/30 font-mono uppercase tracking-widest">
                        Live Market Data
                    </span>
                </div>
                <span className="text-[10px] text-white/20 font-mono">
                    24H
                </span>
            </div>

            {/* Price rows */}
            <div className="space-y-0">
                {prices.map((item, index) => (
                    <motion.div
                        key={item.symbol}
                        className="flex items-center justify-between py-[6px] px-1 group hover:bg-white/[0.02] transition-colors"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            <span className="text-[11px] font-semibold text-white/80 w-8 tracking-wide">
                                {item.symbol}
                            </span>
                            {/* Mini bar chart */}
                            <div className="flex-1 h-[3px] bg-white/[0.04] rounded-full overflow-hidden max-w-[120px]">
                                <motion.div
                                    className={`h-full rounded-full ${item.positive ? "bg-green-400/30" : "bg-red-400/30"
                                        }`}
                                    initial={{ width: 0 }}
                                    animate={{ width: item.barWidth }}
                                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8, ease: "easeOut" }}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="text-[11px] text-white/50 font-mono tabular-nums">
                                {item.price}
                            </span>
                            <span
                                className={`text-[11px] font-mono tabular-nums font-medium ${item.positive ? "text-[#00ff88]" : "text-[#ff4444]"
                                    }`}
                            >
                                {item.positive ? "▲" : "▼"} {item.change}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Divider */}
            <div className="h-px bg-white/[0.06] my-2" />

            {/* Market data row */}
            <div className="flex items-center gap-6 px-1">
                {marketData.map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                        <span className="text-[10px] text-white/25 font-mono uppercase">
                            {item.label}
                        </span>
                        <span className="text-[11px] text-white/50 font-mono tabular-nums">
                            {item.value}
                        </span>
                        <span
                            className={`text-[10px] font-mono tabular-nums ${item.positive ? "text-[#00ff88]/80" : "text-[#ff4444]/80"
                                }`}
                        >
                            {item.change}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
