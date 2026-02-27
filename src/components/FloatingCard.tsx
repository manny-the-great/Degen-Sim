"use client";

import { motion } from "framer-motion";
import { CSSProperties, ReactNode } from "react";

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    delay?: number;
    floatRange?: number;
}

export default function FloatingCard({
    children,
    className = "",
    style,
    delay = 0,
    floatRange = 8,
}: FloatingCardProps) {
    return (
        <motion.div
            className={`glass rounded-sm ${className}`}
            style={style}
            initial={{ opacity: 0, y: 20 }}
            animate={{
                opacity: 1,
                y: [0, -floatRange, 0],
            }}
            transition={{
                opacity: { duration: 0.8, delay },
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay,
                },
            }}
        >
            {children}
        </motion.div>
    );
}
