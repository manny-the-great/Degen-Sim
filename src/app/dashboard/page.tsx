import Link from "next/link";

export default function Dashboard() {
    return (
        <main className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative">
            {/* Grid background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 text-center space-y-6 px-6">
                {/* Status */}
                <div className="flex items-center justify-center gap-2 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-white/25 tracking-[0.15em] uppercase">
            // SIMULATOR — INITIALIZING
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-[-0.03em]">
                    Dashboard
                </h1>
                <p className="text-white/30 text-sm max-w-md mx-auto leading-relaxed">
                    The simulator dashboard is under construction. Real-time market
                    analysis, signal processing, and risk management tools are being
                    calibrated.
                </p>

                {/* Placeholder cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
                    {[
                        { label: "Portfolio Value", value: "$0.00" },
                        { label: "Active Positions", value: "0" },
                        { label: "Win Rate", value: "—" },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className="border border-white/[0.06] bg-white/[0.02] p-5 space-y-2"
                        >
                            <p className="text-[10px] text-white/20 font-mono uppercase tracking-widest">
                                {item.label}
                            </p>
                            <p className="text-2xl text-white/60 font-bold tabular-nums font-mono">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Back link */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 mt-8 text-[13px] text-white/30 hover:text-white/60 transition-colors font-mono uppercase tracking-wider"
                >
                    <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="square"
                            d="M11 17l-5-5m0 0l5-5m-5 5h12"
                        />
                    </svg>
                    Back to Terminal
                </Link>
            </div>
        </main>
    );
}
