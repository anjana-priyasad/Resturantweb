import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Profile | SAVORIA Fine Dining",
  description: "Your personal SAVORIA dining profile",
};

const STATS = [
  { label: "Orders Placed", value: "24",   emoji: "🧾" },
  { label: "Dishes Tried",  value: "41",   emoji: "🍽️" },
  { label: "Reviews Left",  value: "12",   emoji: "⭐" },
  { label: "Points Earned", value: "1,340", emoji: "🏆" },
];

const RECENT_ORDERS = [
  { dish: "Lamb Steak",     time: "Today, 1:30 PM",       status: "Delivered",  statusColor: "text-emerald-400" },
  { dish: "Nasi Goreng",    time: "Yesterday, 7:45 PM",   status: "Delivered",  statusColor: "text-emerald-400" },
  { dish: "Martabak Manis", time: "Mar 18, 3:00 PM",      status: "Delivered",  statusColor: "text-emerald-400" },
];

export default function ProfilePage() {
  return (
    <PlaceholderPage
      emoji="👤"
      title="My Profile"
      subtitle="Your dining history, rewards, and preferences — all in one place."
      accentColor="bg-purple-500"
    >
      {/* Stats grid */}
      <div className="grid grid-cols-4 gap-3 mb-6">
        {STATS.map(({ label, value, emoji }) => (
          <div
            key={label}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2 text-center hover:bg-white/8 transition-colors"
          >
            <span className="text-2xl">{emoji}</span>
            <span className="text-white font-black text-xl leading-none">{value}</span>
            <span className="text-gray-500 text-[10px] uppercase tracking-wide font-medium leading-tight">{label}</span>
          </div>
        ))}
      </div>

      {/* Recent orders */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 font-semibold">Recent Orders</p>
        <div className="flex flex-col gap-2">
          {RECENT_ORDERS.map(({ dish, time, status, statusColor }) => (
            <div
              key={dish + time}
              className="flex items-center justify-between bg-white/4 border border-white/10 rounded-xl px-5 py-4 hover:bg-white/7 transition-colors"
            >
              <div>
                <p className="text-white font-semibold text-sm">{dish}</p>
                <p className="text-gray-500 text-xs mt-0.5">{time}</p>
              </div>
              <span className={`text-xs font-semibold ${statusColor}`}>{status}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Rewards banner */}
      <div className="mt-5 bg-gradient-to-r from-purple-500/15 to-pink-600/10 border border-purple-500/25 rounded-2xl px-6 py-4 flex items-center gap-4">
        <span className="text-3xl">🏆</span>
        <div>
          <p className="font-bold text-white text-sm">Gold Member</p>
          <p className="text-gray-400 text-xs mt-0.5">160 points until your next free dish</p>
        </div>
        <div className="ml-auto w-20 h-2 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: "54%" }} />
        </div>
      </div>
    </PlaceholderPage>
  );
}
