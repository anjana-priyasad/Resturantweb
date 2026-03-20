import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Support | SAVORIA Fine Dining",
  description: "We're here to help — get in touch with our team",
};

const FAQS = [
  { q: "How do I modify my order?",             a: "You can modify your order within 2 minutes of placement from the Order History page." },
  { q: "Do you cater to dietary requirements?",  a: "Yes! Every dish lists allergens and dietary badges. Filter by Vegan, Keto, Gluten-Free and more." },
  { q: "What are your opening hours?",           a: "We are open daily from 11:00 AM to 11:00 PM, including public holidays." },
  { q: "Can I make a reservation?",              a: "Online reservations are available. Tap 'Profile' to book a table for up to 20 guests." },
];

export default function SupportPage() {
  return (
    <PlaceholderPage
      emoji="💬"
      title="Support"
      subtitle="Have a question? We're here around the clock to help."
      accentColor="bg-cyan-500"
    >
      {/* FAQ Items */}
      <div className="flex flex-col gap-3">
        {FAQS.map(({ q, a }) => (
          <div
            key={q}
            className="group bg-white/4 hover:bg-white/7 border border-white/10 hover:border-cyan-500/25 rounded-2xl px-6 py-5 transition-all duration-200 cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-black text-sm mt-0.5 flex-shrink-0">Q</span>
              <div>
                <p className="text-white font-semibold text-sm mb-2">{q}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Live chat CTA */}
      <div className="mt-6 bg-gradient-to-r from-cyan-500/15 to-blue-600/10 border border-cyan-500/25 rounded-2xl px-6 py-5 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-xl">
          🟢
        </div>
        <div>
          <p className="font-bold text-white text-sm">Live Chat Available</p>
          <p className="text-gray-400 text-xs mt-0.5">Average response time: under 2 minutes</p>
        </div>
        <div className="ml-auto bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold px-4 py-2 rounded-full hover:bg-cyan-500/25 transition-colors cursor-pointer">
          Start Chat
        </div>
      </div>
    </PlaceholderPage>
  );
}
