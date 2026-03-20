"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Utensils, Wine, Mic, MessageCircle, User } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type NavItem = {
  href: string;
  label: string;
  Icon: LucideIcon;
  isMic?: boolean;
};

const NAV_ITEMS: NavItem[] = [
  { href: "/menu",        label: "Menu",    Icon: Utensils },
  { href: "/beverages",   label: "Drinks",  Icon: Wine },
  { href: "/voice-order", label: "Voice",   Icon: Mic, isMic: true },
  { href: "/support",     label: "Support", Icon: MessageCircle },
  { href: "/profile",     label: "Profile", Icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2">
      {NAV_ITEMS.map(({ href, label, Icon, isMic }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            aria-label={label}
            title={label}
            className={[
              // base
              "relative flex items-center justify-center select-none",
              "transition-all duration-200 hover:-translate-y-1 active:scale-90",
              // mic vs regular
              isMic
                ? [
                    "p-4 rounded-full shadow-xl",
                    isActive
                      ? "bg-orange-500 shadow-orange-500/70 ring-2 ring-orange-400/50"
                      : "bg-orange-600 shadow-orange-600/40 hover:bg-orange-500 hover:shadow-orange-500/60",
                  ].join(" ")
                : [
                    "p-3 rounded-2xl border",
                    isActive
                      ? "text-orange-500 bg-orange-500/15 border-orange-500/40 shadow-md shadow-orange-500/20"
                      : "text-gray-400 border-transparent bg-black/20 hover:text-white hover:bg-white/10 hover:border-white/15",
                  ].join(" "),
            ].join(" ")}
          >
            {/* Icon */}
            <Icon
              size={20}
              className={isMic ? "text-white" : ""}
              {...(isMic && isActive ? { fill: "white" } : {})}
            />

            {/* Active dot — non-mic items */}
            {isActive && !isMic && (
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full shadow-sm shadow-orange-400" />
            )}

            {/* Pulse ring — mic when active */}
            {isMic && isActive && (
              <span className="absolute inset-0 rounded-full ring-2 ring-orange-400/40 animate-ping pointer-events-none" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
