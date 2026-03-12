"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { dishes } from "../data/data";
import LeftSection from "../components/LeftSection";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  const [currentDish, setCurrentDish] = useState(dishes[0]);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-black text-white flex">
      {/* Dynamic Background */}
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
              className="object-cover opacity-60 blur-md"
              priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex w-full h-full max-w-[1920px] mx-auto">
        <LeftSection
          currentDish={currentDish}
          dishes={dishes}
          onDishSelect={setCurrentDish}
        />
        <RightSidebar currentDish={currentDish} />
      </div>
    </main>
  );
}
