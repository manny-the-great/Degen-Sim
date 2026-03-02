"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const actions = [
    { label: "Trade Now", primary: true, id: "btn-trade-now" },
    { label: "Claim Faucet", primary: false, id: "btn-claim-faucet" },
    { label: "Reset Demo Account", primary: false, id: "btn-reset-demo" },
];

export default function QuickActions() {
    const router = useRouter();

    const handleAction = (label: string) => {
        if (label === "Trade Now") {
            console.log("Routing to /simulator");
            router.push("/simulator");
        } else if (label === "Claim Faucet") {
            console.log("Claiming faucet...");
        } else {
            console.log("Resetting demo account...");
        }
    };

    return (
        <motion.div
            className="flex items-center gap-3 flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.18em] mr-2 hidden sm:inline">
                Quick Actions
            </span>
            {actions.map((action) => (
                <button
                    key={action.id}
                    id={action.id}
                    onClick={() => handleAction(action.label)}
                    className="h-8 px-5 text-[11px] font-medium uppercase tracking-wider transition-all duration-200"
                    style={
                        action.primary
                            ? {
                                background: "white",
                                color: "black",
                                fontWeight: 600,
                            }
                            : {
                                background: "transparent",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "rgba(255,255,255,0.5)",
                            }
                    }
                    onMouseEnter={e => {
                        if (!action.primary) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                        } else {
                            e.currentTarget.style.opacity = "0.88";
                        }
                    }}
                    onMouseLeave={e => {
                        if (!action.primary) {
                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                            e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                        } else {
                            e.currentTarget.style.opacity = "1";
                        }
                    }}
                >
                    {action.label}
                </button>
            ))}
        </motion.div>
    );
}
