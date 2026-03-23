"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Dish } from "../data/data";
import BottomNav from "./BottomNav";

interface LeftSectionProps {
  currentDish: Dish;
  dishes: Dish[];
  onDishSelect: (dish: Dish) => void;
  rightSidebar?: React.ReactNode;
}

export default function LeftSection({ currentDish, dishes, onDishSelect, rightSidebar }: LeftSectionProps) {
  // Split title for outlined vs solid style
  const titleParts = currentDish.title.split(" ");
  const firstWord = titleParts[0];
  const restOfTitle = titleParts.slice(1).join(" ");

  // Carousel navigation
  const currentIndex = dishes.findIndex((d) => d.id === currentDish.id);
  const prev = () => onDishSelect(dishes[(currentIndex - 1 + dishes.length) % dishes.length]);
  const next = () => onDishSelect(dishes[(currentIndex + 1) % dishes.length]);

  return (
    <div className="w-full relative flex flex-col md:flex-row h-full">
      {/* ── LEFT AREA (Desktop) / TOP & BOTTOM AREA (Mobile) ── */}
      <div className="flex-1 flex flex-col justify-between pt-16 md:pt-20 pb-8 px-6 md:pl-16 md:pr-8 relative">

      {/* ── Main Text Content (z-10 above image) ── */}
      <div className="relative z-10 flex-col flex items-center text-center md:items-start md:text-left flex-none md:flex-1 md:justify-center w-full max-w-[460px] mx-auto md:mx-0 pt-0 md:pt-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDish.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start pt-12 md:pt-0"
          >
            {/* Subtitle */}
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.08 }}
              className="inline-flex items-center gap-2 text-orange-400 font-semibold tracking-widest mb-4 uppercase text-xs"
            >
              <span className="w-5 h-px bg-orange-400 inline-block" />
              {currentDish.subtitle}
            </motion.span>

            {/* Large title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.92] mb-6 flex flex-col items-center md:items-start">
              <motion.span
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.12, duration: 0.4 }}
                className="text-stroke block"
              >
                {firstWord}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.19, duration: 0.4 }}
                className="text-white block"
              >
                {restOfTitle}
              </motion.span>
            </h1>

            {/* Description — inside a dark pill for guaranteed readability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.28 }}
              className="mb-8 flex justify-center md:justify-start"
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-4 py-3 border border-white/5 inline-block max-w-[400px]">
                <p className="text-gray-200 text-sm md:text-base leading-relaxed text-center md:text-left">
                  {currentDish.description}
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <button className="flex items-center gap-3 bg-white text-black px-7 py-3.5 rounded-full font-bold hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg text-sm">
                <div className="bg-black text-white p-1.5 rounded-full">
                  <Play size={12} fill="white" />
                </div>
                Play video
              </button>
              <button className="flex items-center gap-3 border border-white/30 text-white px-7 py-3.5 rounded-full font-bold hover:bg-white/10 hover:border-white/60 hover:scale-105 active:scale-95 transition-all duration-200 text-sm">
                <ShoppingBag size={16} />
                Order food
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Hero Dish Image (Mobile inline, Desktop absolute) ── */}
      <div className="relative z-0 mt-8 mb-6 md:mt-0 md:mb-0 flex justify-center w-full md:absolute md:top-1/2 md:-translate-y-[55%] md:right-[2%] md:w-[430px] md:h-[430px] pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDish.id}
            initial={{ opacity: 0, x: 80, rotate: 20, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, x: -60, rotate: -15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative w-[300px] h-[300px] md:w-full md:h-full -mt-10 md:mt-0"
          >
            {/* ambient glow */}
            <div className="absolute inset-[-10%] rounded-full bg-orange-500/15 blur-3xl" />
            <Image
              src={currentDish.image}
              alt={currentDish.title}
              fill
              className="object-cover rounded-full shadow-2xl shadow-black/70 ring-2 ring-white/10"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Mobile Glass Card ── */}
      {/* On mobile: displayed inline. On desktop: hidden. */}
      {rightSidebar && (
        <div className="md:hidden w-full px-1 my-6 relative z-20 mx-auto max-w-[500px]">
          {rightSidebar}
        </div>
      )}

      {/* ── Bottom Section: Carousel + Dock ── */}
      <div className="relative z-30 space-y-6 flex flex-col items-center md:items-start w-full">

        {/* Carousel */}
        <div className="flex items-center gap-3 w-full justify-center md:justify-start">
          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            onClick={prev}
            className="flex-shrink-0 p-2 rounded-full border border-white/20 bg-black/30 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            <ChevronLeft size={18} />
          </motion.button>

          <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2 px-1 w-full max-w-[320px] md:max-w-max justify-start md:justify-start items-center">
            {dishes.map((dish) => {
              const isActive = currentDish.id === dish.id;
              return (
                <button
                  key={dish.id}
                  onClick={() => onDishSelect(dish)}
                  className={`group flex flex-col items-center gap-2 min-w-[80px] transition-all duration-300 ${
                    isActive ? "opacity-100 scale-105" : "opacity-40 hover:opacity-70 hover:scale-105"
                  }`}
                >
                  <div
                    className={`relative w-14 h-14 rounded-full overflow-hidden transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "ring-2 ring-orange-500 ring-offset-2 ring-offset-black/0 shadow-lg shadow-orange-500/40"
                        : "ring-1 ring-white/15 group-hover:ring-white/35"
                    }`}
                  >
                    <Image
                      src={dish.image}
                      alt={dish.title}
                      fill
                      className="object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-orange-500/15 rounded-full" />
                    )}
                  </div>
                  <span className="text-[9px] font-semibold uppercase tracking-wider text-center w-[72px] truncate leading-tight">
                    {dish.title}
                  </span>
                </button>
              );
            })}
          </div>

          <motion.button
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.88 }}
            onClick={next}
            className="flex-shrink-0 p-2 rounded-full border border-white/20 bg-black/30 hover:bg-white/10 hover:border-white/40 transition-all duration-200"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>

        {/* ── Bottom Dock Nav — routing handled by BottomNav component ── */}
        <div className="flex flex-col md:flex-row items-center gap-2 w-full pt-4 md:pt-0">
          <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 py-4 bg-black/85 backdrop-blur-xl border-t border-white/10 flex justify-center md:static md:p-0 md:bg-transparent md:border-none md:block shadow-[0_-20px_40px_rgba(0,0,0,0.5)] md:shadow-none">
            <BottomNav />
          </div>

          {/* Price tag — premium detail */}
          <div className="hidden md:flex ml-auto items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-2 mt-4 md:mt-0">
            <span className="text-orange-400 text-sm font-black">$</span>
            <span className="text-white text-sm font-bold">
              {(currentDish.likes * 0.12 + 8).toFixed(0)}.99
            </span>
          </div>
        </div>
      </div>
      
      </div>

      {/* ── Desktop Right Sidebar ── */}
      <div className="hidden md:block w-[36%] h-full flex-shrink-0 relative z-20">
        {rightSidebar}
      </div>
    </div>
  );
}
