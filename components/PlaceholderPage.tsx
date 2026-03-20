import Link from "next/link";
import Logo from "./Logo";
import BottomNav from "./BottomNav";

interface PlaceholderPageProps {
  emoji: string;
  title: string;
  subtitle: string;
  accentColor?: string; // Tailwind bg class for the top glow, e.g. "bg-orange-500"
  children: React.ReactNode;
}

export default function PlaceholderPage({
  emoji,
  title,
  subtitle,
  accentColor = "bg-orange-500",
  children,
}: PlaceholderPageProps) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white flex flex-col">
      {/* ── Ambient background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        {/* Top-right radial glow */}
        <div className={`absolute -top-40 right-0 w-[500px] h-[500px] rounded-full ${accentColor}/10 blur-[100px]`} />
        {/* Bottom-left subtle glow */}
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/2 blur-[80px]" />
        {/* Fine grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ── Logo top-left ── */}
      <div className="absolute top-6 left-10 z-50">
        <Link href="/" aria-label="Go to home">
          <Logo />
        </Link>
      </div>

      {/* ── Back to home link ── */}
      <div className="absolute top-7 right-10 z-50">
        <Link
          href="/"
          className="flex items-center gap-2 text-xs text-gray-500 hover:text-white border border-white/10 hover:border-white/25 rounded-full px-4 py-2 bg-white/3 hover:bg-white/8 transition-all duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to menu
        </Link>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-24 gap-10">
        {/* Page header card */}
        <div className="bg-white/6 backdrop-blur-2xl border border-white/12 rounded-3xl px-10 py-8 text-center shadow-2xl shadow-black/40 max-w-md w-full">
          {/* Emoji icon */}
          <div className="text-6xl mb-5 select-none">{emoji}</div>
          <h1 className="text-4xl font-black text-white tracking-tight mb-2">{title}</h1>
          <p className="text-gray-400 text-sm leading-relaxed">{subtitle}</p>
        </div>

        {/* Custom page content */}
        <div className="w-full max-w-3xl">{children}</div>
      </div>

      {/* ── Bottom navigation ── */}
      <div className="relative z-30 border-t border-white/8 bg-black/40 backdrop-blur-xl">
        <div className="max-w-lg mx-auto px-6 py-4 flex items-center justify-center">
          <BottomNav />
        </div>
      </div>
    </main>
  );
}
