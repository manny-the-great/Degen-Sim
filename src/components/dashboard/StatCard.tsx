"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface StatCardProps {
    label: string;
    value: string;
    sub?: string;
    subPositive?: boolean;
    index: number;
    prefix?: string;
    colorClass?: string;
}

function useCountUp(target: number, duration = 1400, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        const startTime = performance.now();
        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
            else setCount(target);
        };
        requestAnimationFrame(tick);
    }, [target, duration, start]);
    return count;
}

export default function StatCard({ label, value, sub, subPositive, index, prefix = "", colorClass }: StatCardProps) {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), index * 120 + 200);
        return () => clearTimeout(timer);
    }, [index]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group relative glass p-5 cursor-default"
            style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
                transition: "border-color 0.3s, box-shadow 0.3s",
            }}
            whileHover={{
                borderColor: "rgba(255,255,255,0.14)",
                boxShadow: "0 0 24px rgba(255,255,255,0.04), 0 0 48px rgba(255,255,255,0.02)",
            }}
        >
            {/* Corner accent */}
            <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/10" />
            <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/10" />

            <p className="text-[10px] font-mono text-white/25 uppercase tracking-[0.18em] mb-3">
                {label}
            </p>
            <p className={`text-2xl font-bold tabular-nums tracking-tight ${colorClass ?? "text-white"}`}>
                {prefix}{value}
            </p>
            {sub && (
                <p className={`mt-1.5 text-[12px] font-mono font-medium ${subPositive ? "text-emerald-400" : "text-red-400"}`}>
                    {sub}
                </p>
            )}
        </motion.div>
    );
}
