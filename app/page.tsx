"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dishes } from "../data/data";
import LeftSection from "../components/LeftSection";
import RightSidebar from "../components/RightSidebar";
import Logo from "../components/Logo";

export default function Home() {
  const [currentDish, setCurrentDish] = useState(dishes[0]);

  return (
    <main className="relative min-h-screen md:h-screen w-full overflow-x-hidden overflow-y-auto md:overflow-hidden bg-black text-white flex flex-col">
      {/* ── Dynamic blurred background ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDish.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <Image
              src={currentDish.image}
              alt="Background"
              fill
              className="object-cover opacity-50 blur-md"
              priority
            />
            {/* Deep left-side gradient so text is always readable */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
            {/* Bottom gradient for dock area */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Restaurant Logo — fixed top-left overlay ── */}
      <div className="absolute top-4 left-4 md:top-6 md:left-10 z-[60]">
        <Logo />
      </div>

      {/* ── Main content layer ── */}
      <div className="relative z-10 flex flex-col md:flex-row w-full md:h-full min-h-screen max-w-[1920px] mx-auto pb-[100px] md:pb-0">
        <LeftSection
          currentDish={currentDish}
          dishes={dishes}
          onDishSelect={setCurrentDish}
          rightSidebar={<RightSidebar currentDish={currentDish} />}
        />
      </div>
    </main>
  );
}
