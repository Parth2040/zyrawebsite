"use client";

import { motion } from "framer-motion";

const marqueeText =
  "FREE SHIPPING · 30-DAY RETURNS · EXCLUSIVE DROPS · WORLDWIDE DELIVERY · PREMIUM QUALITY · FREE SHIPPING · 30-DAY RETURNS · EXCLUSIVE DROPS · WORLDWIDE DELIVERY · PREMIUM QUALITY · ";

const accents = ["#a8ff3e", "#1e90ff", "#ff2244", "#ff79c6"];

export default function MarqueeStrip() {
  return (
    <div className="relative w-full overflow-hidden bg-black py-6 border-y border-white/5">
      {/* Top glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#a8ff3e]/30 to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {marqueeText.split(" · ").map((text, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-base md:text-lg tracking-[0.3em] text-white/60 mx-4">
              {text}
            </span>
            <span
              className="w-2 h-2 rounded-full mx-4 flex-shrink-0"
              style={{
                background: accents[i % accents.length],
                boxShadow: `0 0 10px ${accents[i % accents.length]}60`,
              }}
            />
          </span>
        ))}
      </motion.div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff79c6]/30 to-transparent" />
    </div>
  );
}
