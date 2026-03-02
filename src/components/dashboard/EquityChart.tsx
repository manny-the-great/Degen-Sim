"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const FILTERS = ["1D", "7D", "30D", "ALL"] as const;
type Filter = (typeof FILTERS)[number];

// Mock data sets for each filter
const DATA: Record<Filter, number[]> = {
    "1D": [10000, 10042, 9998, 10110, 10230, 10180, 10310, 10280, 10420, 10388, 10510, 10490, 10622, 10700, 10680, 10750, 10820, 10790, 10900, 10930, 10990, 10960, 11080, 11200],
    "7D": [9600, 9750, 9850, 9780, 10000, 10150, 10080, 10300, 10450, 10380, 10520, 10820, 10750, 10900, 11050, 11100, 11200, 11284],
    "30D": [8800, 9100, 8950, 9300, 9150, 9400, 9600, 9500, 9800, 10000, 9900, 10200, 10100, 10400, 10300, 10600, 10750, 10900, 10800, 11050, 11100, 11284],
    "ALL": [5000, 5800, 6200, 5900, 6500, 7000, 6800, 7500, 8000, 7800, 8500, 9000, 8800, 9400, 9700, 9500, 10000, 10400, 10200, 10700, 11000, 11284],
};

function buildPath(data: number[], w: number, h: number, pad = 16) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;
    const xs = data.map((_, i) => pad + (i / (data.length - 1)) * (w - pad * 2));
    const ys = data.map(v => h - pad - ((v - min) / range) * (h - pad * 2));
    return { xs, ys, min, max };
}

export default function EquityChart() {
    const [filter, setFilter] = useState<Filter>("30D");
    const [animKey, setAnimKey] = useState(0);
    const [dimensions, setDimensions] = useState({ w: 600, h: 220 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const obs = new ResizeObserver(entries => {
            const entry = entries[0];
            if (entry) setDimensions({ w: entry.contentRect.width, h: 220 });
        });
        if (containerRef.current) obs.observe(containerRef.current);
        return () => obs.disconnect();
    }, []);

    const handleFilter = (f: Filter) => {
        setFilter(f);
        setAnimKey(k => k + 1);
    };

    const data = DATA[filter];
    const { w, h, xs, ys, min, max } = { ...buildPath(data, dimensions.w, dimensions.h), ...dimensions };

    const linePath = data
        .map((_, i) => `${i === 0 ? "M" : "L"} ${xs[i].toFixed(2)} ${ys[i].toFixed(2)}`)
        .join(" ");

    const areaPath = `${linePath} L ${xs[xs.length - 1].toFixed(2)} ${h} L ${xs[0].toFixed(2)} ${h} Z`;

    const lastY = ys[ys.length - 1];
    const firstVal = data[0];
    const lastVal = data[data.length - 1];
    const pnl = lastVal - firstVal;
    const pct = ((pnl / firstVal) * 100).toFixed(2);
    const isPositive = pnl >= 0;

    // Grid lines
    const gridLines = [0, 0.25, 0.5, 0.75, 1].map(t => {
        const val = min + t * (max - min);
        const y = h - 16 - t * (h - 32);
        return { y, val };
    });

    return (
        <div className="glass p-5 flex flex-col gap-4" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.18em]">Portfolio Performance</p>
                    <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-xl font-bold text-white tabular-nums">$11,284.23</span>
                        <span className={`text-sm font-mono font-medium ${isPositive ? "text-emerald-400" : "text-red-400"}`}>
                            {isPositive ? "+" : ""}{pct}%
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-1">
                    {FILTERS.map(f => (
                        <button
                            key={f}
                            onClick={() => handleFilter(f)}
                            className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider transition-all duration-200"
                            style={{
                                background: filter === f ? "rgba(255,255,255,0.08)" : "transparent",
                                border: filter === f ? "1px solid rgba(255,255,255,0.12)" : "1px solid transparent",
                                color: filter === f ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.3)",
                            }}
                        >
                            {f}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chart */}
            <div ref={containerRef} className="relative w-full" style={{ height: `${h}px` }}>
                <svg
                    key={animKey}
                    width="100%"
                    height={h}
                    viewBox={`0 0 ${w} ${h}`}
                    preserveAspectRatio="none"
                    className="absolute inset-0"
                >
                    <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor={isPositive ? "#10b981" : "#f87171"} stopOpacity="0.18" />
                            <stop offset="100%" stopColor={isPositive ? "#10b981" : "#f87171"} stopOpacity="0" />
                        </linearGradient>
                        <clipPath id="chartClip">
                            <motion.rect
                                x="0" y="0" height={h}
                                initial={{ width: 0 }}
                                animate={{ width: w }}
                                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </clipPath>
                    </defs>

                    {/* Grid lines */}
                    {gridLines.map(({ y, val }, i) => (
                        <g key={i}>
                            <line x1={16} x2={w - 16} y1={y} y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                            <text x={8} y={y} fontSize="9" fill="rgba(255,255,255,0.18)" fontFamily="monospace" dominantBaseline="middle" textAnchor="start">
                                ${(val / 1000).toFixed(1)}k
                            </text>
                        </g>
                    ))}

                    {/* Area */}
                    <path d={areaPath} fill="url(#chartGrad)" clipPath="url(#chartClip)" />

                    {/* Line */}
                    <path
                        d={linePath}
                        fill="none"
                        stroke={isPositive ? "#10b981" : "#f87171"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        clipPath="url(#chartClip)"
                    />

                    {/* Last point dot */}
                    <motion.circle
                        cx={xs[xs.length - 1]}
                        cy={lastY}
                        r="3.5"
                        fill={isPositive ? "#10b981" : "#f87171"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.3 }}
                    />
                    <motion.circle
                        cx={xs[xs.length - 1]}
                        cy={lastY}
                        r="7"
                        fill={isPositive ? "#10b981" : "#f87171"}
                        fillOpacity="0.15"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.3 }}
                    />
                </svg>
            </div>
        </div>
    );
}
