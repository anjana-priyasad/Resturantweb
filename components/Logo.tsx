"use client";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 md:gap-3 select-none scale-[0.85] md:scale-100 origin-top-left">
      {/* Flame / fork icon mark */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-orange-500/25 blur-md" />
        {/* Icon background */}
        <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center shadow-lg shadow-orange-500/40">
          {/* Custom fork + flame SVG */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fork left tine */}
            <path d="M7 2v5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            {/* Fork right tine */}
            <path d="M10 2v5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            {/* Fork middle tine */}
            <path d="M8.5 7v13" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            {/* Fork bowl arc */}
            <path
              d="M7 7 Q6.5 10 8.5 10 Q10.5 10 10 7"
              stroke="white"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
            />
            {/* Flame shape on the right */}
            <path
              d="M17 20c-2.5 0-4-1.5-4-3.5 0-1.5 1-2.5 1.5-3.5C15 11.5 15 10 14 8c1.5 1 3 2.5 3 4.5 0 .5-.1 1-.2 1.5C17.5 13 18 12 18 11c1.5 1.5 2 3 2 4.5C20 18 18.8 20 17 20z"
              fill="white"
              opacity="0.95"
            />
          </svg>
        </div>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="text-white font-black tracking-[0.15em] uppercase text-lg"
          style={{ fontFamily: "var(--font-geist-sans)" }}
        >
          SAVORIA
        </span>
        <span className="text-orange-400 text-[9px] tracking-[0.3em] uppercase font-semibold mt-0.5">
          Fine Dining
        </span>
      </div>
    </div>
  );
}
