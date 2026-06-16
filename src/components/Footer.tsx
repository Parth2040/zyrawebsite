"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const footerLinks = {
  Shop: ["New Releases", "Men", "Women", "Sale"],
  Support: ["FAQ", "Shipping", "Returns", "Size Guide"],
  Company: ["About", "Careers", "Press", "Sustainability"],
};

const socialIcons = [
  {
    name: "Instagram",
    path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
  },
  {
    name: "Twitter",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  },
  {
    name: "YouTube",
    path: "M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-50px" });

  return (
    <footer ref={footerRef} className="relative bg-black border-t border-white/5">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-[#a8ff3e]/0 via-[#a8ff3e]/40 to-[#a8ff3e]/0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            <h3 className="font-display text-4xl tracking-[0.3em] text-white">
              ZYRA
            </h3>
            <p className="font-body text-sm text-white/30 leading-relaxed max-w-sm">
              Redefining sneaker culture through innovation, sustainability, and
              unmatched design. Every pair tells a story.
              Developer : Parth Patel
              linkedin :
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#a8ff3e] hover:border-[#a8ff3e]/30 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * (i + 1), duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h4 className="font-display text-sm tracking-[0.3em] text-white/60 uppercase">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-white/30 hover:text-[#a8ff3e] transition-colors duration-300 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-xs text-white/20 tracking-wider">
            © 2026 ZYRA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-white/20 hover:text-white/40 transition-colors tracking-wider"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
