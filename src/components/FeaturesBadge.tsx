"use client";

import { motion } from "framer-motion";

interface FeaturesBadgeProps {
  label: string;
  accent: string;
}

export default function FeaturesBadge({ label, accent }: FeaturesBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.08, y: -2 }}
      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-body tracking-wide backdrop-blur-sm transition-all duration-300"
      style={{
        border: `1px solid ${accent}30`,
        background: `${accent}08`,
        color: accent,
        boxShadow: `0 0 20px ${accent}08`,
      }}
    >
      <span>{label}</span>
    </motion.div>
  );
}
