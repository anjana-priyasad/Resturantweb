import type { Metadata } from "next";
import PlaceholderPage from "../../components/PlaceholderPage";

export const metadata: Metadata = {
  title: "Voice Order | SAVORIA Fine Dining",
  description: "Order with your voice — hands-free dining experience",
};

const SAMPLE_COMMANDS = [
  "\"Order the lamb steak, medium rare\"",
  "\"Add a glass of red wine\"",
  "\"What are today's specials?\"",
  "\"I'd like the salad bowl, please\"",
  "\"Check my order total\"",
];

export default function VoiceOrderPage() {
  return (
    <PlaceholderPage
      emoji="🎙️"
      title="Voice Order"
      subtitle="Speak your order naturally — our AI will handle the rest."
      accentColor="bg-orange-500"
    >
      {/* Mic animation placeholder */}
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex items-center justify-center">
          {/* Outer pulse rings */}
          <div className="absolute w-36 h-36 rounded-full bg-orange-500/10 animate-ping" style={{ animationDuration: "2s" }} />
          <div className="absolute w-28 h-28 rounded-full bg-orange-500/15 animate-ping" style={{ animationDuration: "2.5s", animationDelay: "0.3s" }} />
          {/* Mic button */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-2xl shadow-orange-500/50 cursor-pointer hover:scale-110 transition-transform duration-200">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" stroke="white" fill="none" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="8" y1="23" x2="16" y2="23" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <p className="text-gray-400 text-sm text-center">Tap the mic and start speaking</p>
      </div>

      {/* Sample commands */}
      <div className="mt-8">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4 text-center font-semibold">Try saying…</p>
        <div className="flex flex-col gap-2">
          {SAMPLE_COMMANDS.map((cmd) => (
            <div
              key={cmd}
              className="bg-white/4 border border-white/10 rounded-xl px-5 py-3 text-sm text-gray-300 italic hover:bg-white/8 hover:border-orange-500/20 transition-all duration-200 cursor-pointer"
            >
              {cmd}
            </div>
          ))}
        </div>
      </div>
    </PlaceholderPage>
  );
}
