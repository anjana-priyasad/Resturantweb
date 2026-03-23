"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, Star, ThumbsUp, ThumbsDown, Clock, Flame, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Dish } from "../data/data";

interface RightSidebarProps {
  currentDish: Dish;
}

// ─── Badge Chips ──────────────────────────────────────────────────────────────
function StatBadge({
  icon,
  label,
  value,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.35 }}
      className="flex flex-col min-[450px]:flex-row items-center justify-center min-[450px]:justify-start gap-1.5 min-[450px]:gap-2.5 bg-white/5 border border-white/10 rounded-2xl p-2 min-[450px]:px-4 min-[450px]:py-3 backdrop-blur-sm group hover:bg-white/10 hover:border-orange-500/30 transition-all duration-300 text-center min-[450px]:text-left"
    >
      <span className="text-orange-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
        {icon}
      </span>
      <div className="flex flex-col leading-tight items-center min-[450px]:items-start">
        <span className="text-[8px] min-[450px]:text-[10px] uppercase tracking-wider min-[450px]:tracking-widest text-gray-500 font-medium">
          {label}
        </span>
        <span className="text-xs min-[450px]:text-sm font-bold text-white">{value}</span>
      </div>
    </motion.div>
  );
}

// ─── Ingredient Row ───────────────────────────────────────────────────────────
function IngredientRow({
  emoji,
  name,
  quantity,
  index,
}: {
  emoji: string;
  name: string;
  quantity: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.06, duration: 0.3 }}
      className="group flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-white/8 border border-transparent hover:border-white/10 transition-all duration-300 cursor-default"
    >
      {/* Emoji icon circle */}
      <div className="w-10 h-10 rounded-full bg-white/8 border border-white/10 flex items-center justify-center text-lg flex-shrink-0 group-hover:scale-110 group-hover:border-orange-500/40 transition-all duration-300">
        {emoji}
      </div>
      <span className="flex-1 text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
      <span className="text-xs font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-full">
        {quantity}
      </span>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function RightSidebar({ currentDish }: RightSidebarProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "ingredients">("overview");
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center px-2 py-4 md:p-8 relative z-20 min-h-[550px] md:min-h-0">
      {/* Glassmorphism Card */}
      <div className="bg-white/8 backdrop-blur-3xl border border-white/15 rounded-3xl p-5 md:p-7 h-full md:h-[88%] flex flex-col w-full shadow-2xl shadow-black/40 relative overflow-hidden">
        {/* Subtle gradient shimmer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-orange-500/5 pointer-events-none rounded-3xl" />

        {/* ── Header ── */}
        <div className="flex justify-between items-center mb-8 relative z-10">
          <button className="p-2.5 rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/0 hover:border-white/10">
            <Search size={20} className="text-gray-300" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-xs text-gray-400 font-medium tracking-wide">LIVE MENU</span>
          </div>
          <button className="p-2.5 rounded-xl hover:bg-white/10 transition-all duration-200 border border-white/0 hover:border-white/10">
            <Menu size={20} className="text-gray-300" />
          </button>
        </div>

        {/* ── Tabs ── */}
        <div className="flex gap-8 mb-8 border-b border-white/8 pb-4 relative z-10">
          {(["overview", "ingredients"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-base font-semibold transition-colors relative capitalize tracking-wide ${
                activeTab === tab ? "text-white" : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -bottom-[17px] left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"
                />
              )}
              {activeTab === tab && (
                <span className="absolute -top-1 -right-2 w-1.5 h-1.5 bg-orange-500 rounded-full shadow-sm shadow-orange-500" />
              )}
            </button>
          ))}
        </div>

        {/* ── Content ── */}
        <div className="flex-1 relative z-10 overflow-hidden">
          <AnimatePresence mode="wait">
            {/* ── OVERVIEW TAB ── */}
            {activeTab === "overview" ? (
              <motion.div
                key={`overview-${currentDish.id}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col gap-6 overflow-y-auto no-scrollbar pr-1"
              >
                {/* Rating Row */}
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="bg-gradient-to-br from-orange-500 to-amber-500 p-1.5 rounded-xl rotate-12 shadow-lg shadow-orange-500/40">
                        <Star size={18} fill="white" className="text-white" />
                      </div>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={currentDish.rating}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.3 }}
                          className="text-4xl font-black tracking-tighter"
                        >
                          {currentDish.rating}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    <div className="flex text-amber-400 gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={13}
                          fill="currentColor"
                          className={i < Math.floor(currentDish.rating) ? "opacity-100" : "opacity-25"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-500 text-xs mt-1.5 font-medium">based on 124 reviews</p>
                  </div>
                  {/* Dish badge */}
                  <motion.div
                    key={currentDish.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-gradient-to-r ${currentDish.badge.color} border text-xs font-semibold backdrop-blur-sm`}
                  >
                    <span>{currentDish.badge.icon}</span>
                    <span>{currentDish.badge.label}</span>
                  </motion.div>
                </div>

                {/* Stat Badges */}
                <div className="grid grid-cols-3 gap-2.5">
                  <StatBadge icon={<Clock size={16} />} label="Prep Time" value={currentDish.prepTime} delay={0.05} />
                  <StatBadge icon={<Flame size={16} />} label="Calories" value={currentDish.calories} delay={0.1} />
                  <StatBadge icon={<ShieldCheck size={16} />} label="Quality" value="Premium" delay={0.15} />
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Chef Info */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentDish.chef}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/8 hover:border-white/15 transition-all duration-300"
                  >
                    {/* Chef Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500/60 to-amber-600/60 flex items-center justify-center text-lg font-black text-white flex-shrink-0 border border-orange-500/30 shadow-md shadow-orange-500/20">
                      {currentDish.chef.split(" ").pop()?.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base text-white">{currentDish.chef}</h3>
                      <p className="text-xs text-gray-400 italic truncate">&quot;{currentDish.chefQuote}&quot;</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-[10px] uppercase tracking-widest text-orange-400 font-semibold">Chef</span>
                      <div className="w-6 h-0.5 bg-orange-500 rounded-full" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{currentDish.description}</p>
              </motion.div>
            ) : (

              /* ── INGREDIENTS TAB ── */
              <motion.div
                key={`ingredients-${currentDish.id}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4 flex-shrink-0">
                  <div>
                    <h3 className="font-bold text-base text-white">What&apos;s Inside</h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {currentDish.ingredients.length} fresh ingredients
                    </p>
                  </div>
                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
                    <span className="text-orange-400 text-xs font-semibold">All Fresh</span>
                  </div>
                </div>

                {/* Scrollable list */}
                <div className="flex-1 overflow-y-auto no-scrollbar -mx-1 px-1 space-y-1">
                  {currentDish.ingredients.map((ingredient, i) => (
                    <IngredientRow
                      key={ingredient.name}
                      emoji={ingredient.emoji}
                      name={ingredient.name}
                      quantity={ingredient.quantity}
                      index={i}
                    />
                  ))}
                  {/* Bottom spacer */}
                  <div className="h-4" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Footer Actions ── */}
        <div className="mt-6 flex gap-3 relative z-10 flex-shrink-0">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setLiked((p) => !p)}
            className={`flex-1 py-4 rounded-2xl font-bold flex items-center justify-center gap-2.5 transition-all duration-300 shadow-lg ${
              liked
                ? "bg-gradient-to-r from-orange-500 to-amber-500 shadow-orange-500/30 text-white"
                : "bg-gradient-to-r from-orange-600 to-red-600 shadow-red-500/20 text-white hover:shadow-orange-500/30"
            }`}
          >
            <ThumbsUp size={18} fill="white" />
            <span>{currentDish.likes + (liked ? 1 : 0)} likes</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 bg-white/5 hover:bg-white/12 text-white py-4 rounded-2xl font-bold border border-white/10 hover:border-white/20 flex items-center justify-center transition-all duration-300"
          >
            <ThumbsDown size={18} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
