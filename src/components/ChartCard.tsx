"use client";

import { motion } from "framer-motion";

export default function ChartCard() {
    // Mock SVG chart line data points
    const chartPath =
        "M0,40 L10,38 L20,35 L30,37 L40,33 L50,30 L60,35 L70,28 L80,25 L90,30 L100,22 L110,20 L120,25 L130,18 L140,22 L150,15 L160,18 L170,12 L180,15 L190,10 L200,14 L210,8 L220,12 L230,10 L240,5";

    const greenChartPath =
        "M0,42 L15,40 L30,38 L45,35 L60,37 L75,32 L90,30 L105,33 L120,28 L135,25 L150,28 L165,22 L180,20 L195,18 L210,20 L225,15 L240,12";

    return (
        <div className="w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-white/60 tracking-wide">
                        /PEPE.USD
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-[10px] text-white/20 font-mono">1H</span>
                    <span className="text-[10px] text-white/40 font-mono border-b border-white/20 pb-px">
                        4H
                    </span>
                    <span className="text-[10px] text-white/20 font-mono">1D</span>
                </div>
            </div>

            {/* Chart area */}
            <div className="relative h-[60px] w-full overflow-hidden">
                <svg
                    viewBox="0 0 240 50"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    {/* Grid lines */}
                    <line
                        x1="0" y1="12.5" x2="240" y2="12.5"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="0" y1="25" x2="240" y2="25"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="0" y1="37.5" x2="240" y2="37.5"
                        stroke="rgba(255,255,255,0.03)"
                        strokeWidth="0.5"
                    />

                    {/* Green secondary line */}
                    <motion.path
                        d={greenChartPath}
                        fill="none"
                        stroke="rgba(0, 255, 136, 0.2)"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
                    />

                    {/* Orange main chart line */}
                    <motion.path
                        d={chartPath}
                        fill="none"
                        stroke="#ff8c42"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    {/* Gradient fill under orange line */}
                    <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.15" />
                            <stop offset="100%" stopColor="#ff8c42" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d={`${chartPath} L240,50 L0,50 Z`}
                        fill="url(#chartGradient)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                    />

                    {/* Current price dot */}
                    <motion.circle
                        cx="240"
                        cy="5"
                        r="2"
                        fill="#ff8c42"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.5, 1] }}
                        transition={{ duration: 2, delay: 2, repeat: Infinity }}
                    />
                </svg>
            </div>

            {/* Price info */}
            <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/20 font-mono">Last</span>
                    <span className="text-[11px] text-white/60 font-mono tabular-nums">
                        $0.00001847
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-[10px] text-[#00ff88] font-mono">
                        ▲ +12.4%
                    </span>
                </div>
            </div>
        </div>
    );
}
