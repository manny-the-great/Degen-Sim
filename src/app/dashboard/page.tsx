"use client";

import { motion } from "framer-motion";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import StatCard from "@/components/dashboard/StatCard";
import EquityChart from "@/components/dashboard/EquityChart";
import Watchlist from "@/components/dashboard/Watchlist";
import PositionsTable from "@/components/dashboard/PositionsTable";
import QuickActions from "@/components/dashboard/QuickActions";
import BackgroundGrid from "@/components/BackgroundGrid";

const stats = [
    {
        label: "Total Demo Balance",
        value: "10,000.00",
        prefix: "$",
    },
    {
        label: "Total PNL",
        value: "+$1,284.23",
        sub: "+12.84% all time",
        subPositive: true,
        colorClass: "text-emerald-400",
    },
    {
        label: "Win Rate",
        value: "63%",
        sub: "38 of 60 trades",
        subPositive: true,
    },
    {
        label: "Global Rank",
        value: "#142",
        sub: "Top 5% globally",
        subPositive: true,
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-[#050505] relative overflow-x-hidden">
            {/* Background */}
            <BackgroundGrid />

            {/* Navbar */}
            <DashboardNavbar />

            {/* Page Content */}
            <motion.div
                className="relative z-10 pt-24 pb-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 max-w-[1440px] mx-auto space-y-5"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Page header */}
                <div className="flex items-center justify-between mb-2">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
                            <span className="text-[11px] font-mono text-white/20 uppercase tracking-[0.15em]">
                                // Simulator — Live
                            </span>
                        </div>
                        <h1 className="text-2xl font-bold text-white tracking-[-0.03em]">
                            Overview
                        </h1>
                    </div>
                    <div className="hidden sm:flex items-center gap-4">
                        <span className="text-[10px] font-mono text-white/15 uppercase tracking-wider">
                            UTC {new Date().toISOString().slice(11, 19)}
                        </span>
                        <span className="h-3 w-[1px] bg-white/10" />
                        <span className="text-[10px] font-mono text-white/15 uppercase tracking-wider">
                            Feed: Demo v2.4
                        </span>
                    </div>
                </div>

                {/* ─── TOP STATS ROW ─── */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {stats.map((s, i) => (
                        <StatCard
                            key={s.label}
                            index={i}
                            label={s.label}
                            value={s.value}
                            sub={s.sub}
                            subPositive={s.subPositive}
                            prefix={s.prefix}
                            colorClass={s.colorClass}
                        />
                    ))}
                </motion.div>

                {/* ─── MAIN GRID: Chart + Watchlist ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] xl:grid-cols-[1fr_320px] gap-3">
                    <EquityChart />
                    <Watchlist />
                </div>

                {/* ─── QUICK ACTIONS ─── */}
                <div className="flex items-center gap-4 py-1">
                    <QuickActions />
                </div>

                {/* ─── POSITIONS TABLE ─── */}
                <PositionsTable />

                {/* Footer micro detail */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
                        DegenSim — Demo Environment v2.4.1
                    </span>
                    <span className="text-[10px] font-mono text-white/10 uppercase tracking-widest">
                        All data simulated — Not financial advice
                    </span>
                </div>
            </motion.div>
        </main>
    );
}
