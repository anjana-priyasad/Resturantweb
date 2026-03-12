"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, ShoppingBag, ChevronLeft, ChevronRight, Utensils, Martini, MessageCircle, User, Mic } from "lucide-react";
import Image from "next/image";
import { Dish } from "../data/data";

interface LeftSectionProps {
    currentDish: Dish;
    dishes: Dish[];
    onDishSelect: (dish: Dish) => void;
}

export default function LeftSection({ currentDish, dishes, onDishSelect }: LeftSectionProps) {
    // Split title for styling (Outlined vs Solid)
    const titleParts = currentDish.title.split(" ");
    const firstWord = titleParts[0];
    const restOfTitle = titleParts.slice(1).join(" ");

    return (
        <div className="flex-1 flex flex-col justify-between p-8 pl-16 pt-12 relative h-full">
            {/* Main Content */}
            <div className="relative z-10 flex-1 flex flex-col justify-center max-w-2xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentDish.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-orange-400 font-medium tracking-wide mb-2 uppercase">
                            {currentDish.subtitle}
                        </p>
                        <h1 className="text-8xl font-black tracking-tight leading-none mb-8">
                            <span className="text-stroke block text-transparent">{firstWord}</span>
                            <span className="text-white block">{restOfTitle}</span>
                        </h1>
                        <p className="text-gray-300 text-lg mb-8 max-w-md line-clamp-3">
                            {currentDish.description}
                        </p>

                        {/* Action Buttons */}
                        <div className="flex gap-6">
                            <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-colors">
                                <div className="bg-black text-white p-1 rounded-full">
                                    <Play size={16} fill="white" />
                                </div>
                                Play video
                            </button>
                            <button className="flex items-center gap-3 border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors">
                                <ShoppingBag size={20} />
                                Order food
                            </button>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Floating Hero Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentDish.id}
                    initial={{ opacity: 0, x: 100, rotate: 20 }}
                    animate={{ opacity: 1, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: -100, rotate: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="absolute top-1/2 -translate-y-1/2 right-[-10%] w-[600px] h-[600px] pointer-events-none z-0"
                >
                    <Image
                        src={currentDish.image}
                        alt={currentDish.title}
                        fill
                        className="object-cover rounded-full shadow-2xl"
                        priority
                    />
                </motion.div>
            </AnimatePresence>

            {/* Bottom Section: Carousel & Dock */}
            <div className="space-y-8 z-20">
                {/* Carousel */}
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex gap-6 overflow-x-auto no-scrollbar pb-2">
                        {dishes.map((dish) => (
                            <button
                                key={dish.id}
                                onClick={() => onDishSelect(dish)}
                                className={`group relative flex flex-col items-center gap-3 min-w-[100px] transition-all duration-300 ${currentDish.id === dish.id ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-80'}`}
                            >
                                <div className={`relative w-16 h-16 rounded-full overflow-hidden border-2 ${currentDish.id === dish.id ? 'border-orange-500' : 'border-transparent'}`}>
                                    <Image
                                        src={dish.image}
                                        alt={dish.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-xs font-medium uppercase tracking-wider text-center max-w-[80px] truncate">{dish.title}</span>
                            </button>
                        ))}
                    </div>

                    <button className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors">
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Dock Icons */}
                <div className="flex items-center gap-8 pl-4">
                    <Utensils size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                    <Martini size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                    <div className="bg-orange-500 p-4 rounded-full shadow-lg shadow-orange-500/50 cursor-pointer hover:scale-105 transition-transform">
                        <Mic size={24} fill="white" />
                    </div>
                    <MessageCircle size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                    <User size={24} className="text-gray-400 hover:text-white transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    );
}
