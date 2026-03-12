"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { useState } from "react";
import { Dish } from "../data/data";
import Image from "next/image";

interface RightSidebarProps {
    currentDish: Dish;
}

export default function RightSidebar({ currentDish }: RightSidebarProps) {
    const [activeTab, setActiveTab] = useState<"overview" | "ingredients">("overview");

    return (
        <div className="w-[35%] h-full flex flex-col justify-center p-8 relative z-20">
            {/* Glassmorphism Card */}
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 h-[85%] flex flex-col w-full shadow-2xl relative overflow-hidden">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

                {/* Header */}
                <div className="flex justify-between items-center mb-10 relative z-10">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Search size={24} className="text-white" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                        <Menu size={24} className="text-white" />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 mb-10 border-b border-white/10 pb-4 relative z-10">
                    <button
                        onClick={() => setActiveTab("overview")}
                        className={`text-lg font-medium transition-colors relative ${activeTab === "overview" ? "text-white" : "text-gray-400"}`}
                    >
                        Overview
                        {activeTab === "overview" && (
                            <motion.div layoutId="activeTab" className="absolute -bottom-[17px] left-0 right-0 h-1 bg-orange-500 rounded-full" />
                        )}
                        {activeTab === "overview" && (
                            <span className="absolute -top-1 -right-2 w-2 h-2 bg-orange-500 rounded-full" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("ingredients")}
                        className={`text-lg font-medium transition-colors relative ${activeTab === "ingredients" ? "text-white" : "text-gray-400"}`}
                    >
                        Ingredients
                        {activeTab === "ingredients" && (
                            <motion.div layoutId="activeTab" className="absolute -bottom-[17px] left-0 right-0 h-1 bg-orange-500 rounded-full" />
                        )}
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 relative z-10">
                    <AnimatePresence mode="wait">
                        {activeTab === "overview" ? (
                            <motion.div
                                key="overview"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {/* Rating */}
                                <div className="flex items-start justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="bg-orange-500 p-1.5 rounded-lg rotate-12 shadow-lg shadow-orange-500/30">
                                                <Star size={20} fill="white" className="text-white" />
                                            </div>
                                            <span className="text-4xl font-bold">{currentDish.rating}</span>
                                        </div>
                                        <div className="flex text-yellow-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} fill="currentColor" className={i < Math.floor(currentDish.rating) ? "opacity-100" : "opacity-30"} />
                                            ))}
                                        </div>
                                        <p className="text-gray-400 text-sm mt-1">based on 124 reviews</p>
                                    </div>
                                </div>

                                {/* Chef Info */}
                                <motion.div
                                    key={currentDish.chef}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gray-500 overflow-hidden relative">
                                        {/* Placeholder for chef avatar if no image provided */}
                                        <div className="absolute inset-0 flex items-center justify-center bg-gray-700 text-xs">Chef</div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{currentDish.chef}</h3>
                                        <p className="text-sm text-gray-400 italic">"{currentDish.chefQuote}"</p>
                                    </div>
                                </motion.div>

                            </motion.div>
                        ) : (
                            <motion.div
                                key="ingredients"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold mb-4">Under Construction</h3>
                                <p className="text-gray-400">Ingredients list would go here.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Footer Actions */}
                <div className="mt-8 flex gap-4 relative z-10">
                    <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-red-500/20 flex items-center justify-center gap-2 transition-colors">
                        <ThumbsUp size={20} fill="white" />
                        <span>{currentDish.likes} likes</span>
                    </button>
                    <button className="w-16 bg-white/5 hover:bg-white/10 text-white py-4 rounded-xl font-bold border border-white/10 flex items-center justify-center transition-colors">
                        <ThumbsDown size={20} />
                    </button>
                </div>

            </div>
        </div>
    );
}
