export interface Shoe {
  id: number;
  name: string;
  tagline: string;
  price: number;
  originalPrice: number;
  accent: string;
  bg: string;
  image: string;
  letter: string;
  features: string[];
}

export const shoes: Shoe[] = [
  {
    id: 1,
    name: "ZYRA ULTRA",
    tagline: "Engineered for the streets.",
    price: 189,
    originalPrice: 240,
    accent: "#a8ff3e",
    bg: "from-[#0a1a00] to-[#1a3300]",
    image: "/shoes/image1.png",
    letter: "U",
    features: ["⚡ Boost Sole", "💧 Waterproof", "🔒 Ankle Lock", "🌍 Eco Material"],
  },
  {
    id: 2,
    name: "ZYRA DRIFT STAR",
    tagline: "Born for speed. Built for style.",
    price: 209,
    originalPrice: 270,
    accent: "#1e90ff",
    bg: "from-[#000d1a] to-[#001f3f]",
    image: "/shoes/image2.png",
    letter: "D",
    features: ["🏃 Drift Grip", "🧊 Cooling Mesh", "💎 Premium Build", "🛡️ Anti-Slip"],
  },
  {
    id: 3,
    name: "ZYRA BALANCE",
    tagline: "Power meets precision.",
    price: 179,
    originalPrice: 220,
    accent: "#ff2244",
    bg: "from-[#1a0000] to-[#3a0010]",
    image: "/shoes/image3.png",
    letter: "B",
    features: ["⚖️ Balance Core", "🔥 Heat Resistant", "🦾 Flex Frame", "🎯 Precision Fit"],
  },
  {
    id: 4,
    name: "ZYRA MULTIVERSE",
    tagline: "Every color. Every dimension.",
    price: 229,
    originalPrice: 300,
    accent: "#ff79c6",
    bg: "from-[#0d0d0d] to-[#1a0030]",
    image: "/shoes/image4.png",
    letter: "M",
    features: ["🌈 Multi-Panel Design", "✨ Limited Edition", "🧬 Hybrid Sole", "🎨 Hand-Finished"],
  },
];
