"use client";

import { useRef } from "react";
import { cubicBezier, motion, useScroll, useTransform } from "framer-motion";

const letterVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.9,
      ease: cubicBezier(0.16, 1, 0.3, 1),
    },
  }),
};

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const brandName = "ZYRA";

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        >
          <source src="/shoes/zyra_noedit.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.95)_100%)] z-[1]" />

      {/* Grain texture overlay */}
      <div className="absolute inset-0 z-[2] opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-6"
      >
        {/* Brand Name */}
        <h1 className="font-display text-[18vw] md:text-[14vw] lg:text-[12vw] leading-none tracking-[0.15em] text-white mb-4 overflow-hidden">
          {brandName.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block"
              style={{
                textShadow: "0 0 80px rgba(168, 255, 62, 0.3), 0 0 160px rgba(168, 255, 62, 0.1)",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base md:text-lg text-white/50 tracking-[0.4em] uppercase mb-12"
        >
          Redefine Every Step
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#shoe-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(168, 255, 62, 0.4), 0 0 80px rgba(168, 255, 62, 0.15)",
          }}
          whileTap={{ scale: 0.97 }}
          className="inline-block px-10 py-4 bg-[#a8ff3e] text-black font-display text-lg tracking-[0.2em] rounded-full hover:bg-[#b8ff5e] transition-colors duration-300 shadow-[0_0_30px_rgba(168,255,62,0.25)]"
        >
          EXPLORE COLLECTION
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-white/30 text-xs font-body tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-5 h-5 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Side decorative lines */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent z-10 origin-top hidden lg:block"
      />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.4, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-8 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent z-10 origin-top hidden lg:block"
      />
    </section>
  );
}
