import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Menu | SAVORIA Fine Dining",
  description: "Browse our curated menu of premium dishes",
};

const CATEGORIES = [
  { emoji: "🥗", name: "Starters",  count: 12, color: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20" },
  { emoji: "🍖", name: "Mains",     count: 24, color: "from-orange-500/20 to-orange-600/5 border-orange-500/20" },
  { emoji: "🍮", name: "Desserts",  count: 8,  color: "from-amber-500/20 to-amber-600/5 border-amber-500/20" },
  { emoji: "🌟", name: "Specials",  count: 5,  color: "from-purple-500/20 to-purple-600/5 border-purple-500/20" },
];

export default function MenuPage() {
  return (
    <PlaceholderPage
      emoji="🍽️"
      title="Our Menu"
      subtitle="Crafted with passion — explore our full selection of authentic dishes."
      accentColor="bg-orange-500"
    >
      <div className="grid grid-cols-2 gap-4">
        {CATEGORIES.map(({ emoji, name, count, color }) => (
          <div
            key={name}
            className={`bg-gradient-to-br ${color} border backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-200 cursor-pointer`}
          >
            <span className="text-4xl">{emoji}</span>
            <div>
              <h3 className="font-bold text-white text-lg leading-tight">{name}</h3>
              <p className="text-gray-400 text-xs mt-1">{count} items</p>
            </div>
          </div>
        ))}
      </div>

      {/* Coming soon banner */}
      <div className="mt-6 bg-white/4 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-3">
        <span className="text-2xl">🚧</span>
        <p className="text-gray-400 text-sm">
          Full interactive menu coming soon. Tap a dish from the home screen to explore.
        </p>
      </div>
    </PlaceholderPage>
  );
}
