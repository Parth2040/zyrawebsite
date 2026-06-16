"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Shoe } from "@/lib/shoes";
import FeaturesBadge from "./FeaturesBadge";

interface ShoeSectionProps {
  shoe: Shoe;
  index: number;
}

export default function ShoeSection({ shoe, index }: ShoeSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const isEven = index % 2 === 0;

  return (
    <section
      id={`shoe-${shoe.id}`}
      ref={sectionRef}
      className={`relative min-h-screen w-full bg-gradient-to-br ${shoe.bg} flex items-center overflow-hidden`}
    >
      {/* Large Background Letter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 0.06, scale: 1 } : {}}
        transition={{ duration: 1.67, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
      >
        <span
          className="font-display text-[40vw] md:text-[35vw] lg:text-[30vw] leading-none"
          style={{ color: shoe.accent }}
        >
          {shoe.letter}
        </span>
      </motion.div>

      {/* Accent glow blob */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[200px] opacity-20 pointer-events-none"
        style={{
          background: shoe.accent,
          top: "20%",
          left: isEven ? "10%" : "50%",
        }}
      />

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 py-20 lg:py-0">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-20`}>
          
          {/* Text Panel */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -80 : 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.17, ease: [0.16, 1, 0.3, 1], delay: 0.37 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.47, duration: 0.77 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-body tracking-[0.3em] uppercase"
              style={{
                border: `1px solid ${shoe.accent}30`,
                color: shoe.accent,
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: shoe.accent }}
              />
              New Release
            </motion.div>

            {/* Name */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.57, duration: 0.97, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-none tracking-wider"
            >
              {shoe.name}
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.72, duration: 0.77 }}
              className="font-body text-base md:text-lg text-white/40 tracking-wide max-w-md mx-auto lg:mx-0"
            >
              {shoe.tagline}
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.82, duration: 0.77 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {shoe.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.87 + i * 0.1, duration: 0.67 }}
                >
                  <FeaturesBadge label={feature} accent={shoe.accent} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.02, duration: 0.77 }}
              className="flex items-baseline gap-4 justify-center lg:justify-start"
            >
              <span
                className="font-display text-4xl md:text-5xl"
                style={{ color: shoe.accent }}
              >
                ${shoe.price}
              </span>
              <span className="font-body text-lg text-white/25 line-through">
                ${shoe.originalPrice}
              </span>
              <span
                className="text-xs font-body tracking-widest px-2 py-1 rounded-full"
                style={{
                  background: `${shoe.accent}15`,
                  color: shoe.accent,
                }}
              >
                SAVE ${shoe.originalPrice - shoe.price}
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.12, duration: 0.77 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 40px ${shoe.accent}40`,
                }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full font-display text-sm tracking-[0.2em] text-black transition-all duration-300"
                style={{ background: shoe.accent }}
              >
                ADD TO CART
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3.5 rounded-full font-display text-sm tracking-[0.2em] text-white bg-transparent transition-all duration-300"
                style={{ border: `1.5px solid ${shoe.accent}50` }}
              >
                VIEW DETAILS
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Shoe Image */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 300 : -300, rotateY: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.27, ease: [0.16, 1, 0.3, 1], delay: 0.27 }}
            className="flex-1 relative flex items-center justify-center"
          >
            {/* Glow behind image */}
            <div
              className="absolute w-3/4 h-3/4 rounded-full blur-[100px] opacity-20"
              style={{ background: shoe.accent }}
            />

            {/* The shoe image */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 3.17,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-lg lg:max-w-xl aspect-square"
            >
              <Image
                src={shoe.image}
                alt={shoe.name}
                fill
                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_30px_80px_rgba(0,0,0,0.7)] transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={shoe.id === 1}
              />
            </motion.div>

            {/* Floating decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[90%] aspect-square rounded-full border opacity-10 pointer-events-none"
              style={{ borderColor: shoe.accent }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </section>
  );
}
