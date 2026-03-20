import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Beverages | SAVORIA Fine Dining",
  description: "Discover our curated selection of fine beverages",
};

const DRINKS = [
  { emoji: "🍸", name: "Signature Cocktails", desc: "10 creations",  color: "from-pink-500/20 to-pink-700/5 border-pink-500/25" },
  { emoji: "🍷", name: "Fine Wines",           desc: "35 selections", color: "from-red-600/20 to-red-800/5 border-red-600/25" },
  { emoji: "🍵", name: "Hot Beverages",        desc: "8 options",     color: "from-amber-500/20 to-amber-700/5 border-amber-500/25" },
  { emoji: "🥤", name: "Soft Drinks",          desc: "Unlimited",     color: "from-cyan-500/20 to-cyan-700/5 border-cyan-500/25" },
];

export default function BeveragesPage() {
  return (
    <PlaceholderPage
      emoji="🍷"
      title="Beverages"
      subtitle="From handcrafted cocktails to vintage wines — a drink for every moment."
      accentColor="bg-red-600"
    >
      <div className="grid grid-cols-2 gap-4">
        {DRINKS.map(({ emoji, name, desc, color }) => (
          <div
            key={name}
            className={`bg-gradient-to-br ${color} border backdrop-blur-sm rounded-2xl p-6 flex flex-col gap-3 hover:scale-[1.02] transition-transform duration-200 cursor-pointer`}
          >
            <span className="text-4xl">{emoji}</span>
            <div>
              <h3 className="font-bold text-white leading-tight">{name}</h3>
              <p className="text-gray-400 text-xs mt-1">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-white/4 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3">
        <span className="text-2xl">🚧</span>
        <p className="text-gray-400 text-sm">
          Full drinks menu with filters and pairing suggestions — coming soon.
        </p>
      </div>
    </PlaceholderPage>
  );
}
