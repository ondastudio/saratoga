import { useState, useRef, useCallback, useEffect } from "react";
import Card01 from "../../imports/ProductsCard01";
import Card02 from "../../imports/02";
import Card03 from "../../imports/03";
import Card04 from "../../imports/04";
import Card05 from "../../imports/05";
import Card06 from "../../imports/06";

const CARDS = [Card01, Card02, Card03, Card04, Card05, Card06];

const AUTO_INTERVAL = 6000; // ms per card

export function AnimatedCardCarousel() {
  // displayed = currently visible card index
  const [displayed, setDisplayed] = useState(0);
  // animating = incoming card index (null = no animation in progress)
  const [animating, setAnimating] = useState<number | null>(null);
  const [direction, setDirection] = useState<"up" | "down">("up");

  // Timeline progress 0→1 within the current card's auto interval
  const [timelineProgress, setTimelineProgress] = useState(0);

  // ref-tracked current index so handlers always read the latest value
  const currentRef = useRef(0);
  const animatingRef = useRef(false);

  // Auto-advance timer refs
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef(Date.now());

  const triggerTransition = useCallback((newIdx: number) => {
    if (animatingRef.current) return;
    if (newIdx === currentRef.current) return;

    const dir = newIdx > currentRef.current ? "up" : "down";
    currentRef.current = newIdx;
    animatingRef.current = true;

    setDirection(dir);
    setAnimating(newIdx);

    setTimeout(() => {
      setDisplayed(newIdx);
      setAnimating(null);
      animatingRef.current = false;
    }, 550);
  }, []);

  // Restart auto-advance timer whenever displayed card changes
  useEffect(() => {
    // Reset timeline
    startTimeRef.current = Date.now();
    setTimelineProgress(0);

    // Animate timeline progress via rAF
    const tick = () => {
      const elapsed = Date.now() - startTimeRef.current;
      const p = Math.min(elapsed / AUTO_INTERVAL, 1);
      setTimelineProgress(p);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    // Auto-advance after interval
    timerRef.current = setTimeout(() => {
      const next = (currentRef.current + 1) % CARDS.length;
      triggerTransition(next);
    }, AUTO_INTERVAL);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [displayed, triggerTransition]);

  const CurrentCard = CARDS[displayed];
  const IncomingCard = animating !== null ? CARDS[animating] : null;

  return (
    <div className="relative w-full bg-[#ededed] flex items-start justify-center overflow-hidden">
      <style>{`
        @keyframes card-slide-in-up {
          from { transform: translateX(102%); }
          to   { transform: translateX(0); }
        }
        @keyframes card-slide-out-up {
          from { transform: translateX(0); }
          to   { transform: translateX(-102%); }
        }
        @keyframes card-slide-in-down {
          from { transform: translateX(-102%); }
          to   { transform: translateX(0); }
        }
        @keyframes card-slide-out-down {
          from { transform: translateX(0); }
          to   { transform: translateX(102%); }
        }
        .csc-outgoing-up   { animation: card-slide-out-up   0.55s cubic-bezier(0.4,0,0.2,1) forwards; }
        .csc-incoming-up   { animation: card-slide-in-up    0.55s cubic-bezier(0.4,0,0.2,1) forwards; }
        .csc-outgoing-down { animation: card-slide-out-down 0.55s cubic-bezier(0.4,0,0.2,1) forwards; }
        .csc-incoming-down { animation: card-slide-in-down  0.55s cubic-bezier(0.4,0,0.2,1) forwards; }
      `}</style>

      {/* Content row — matches original 1440px layout */}
      <div className="relative flex items-start justify-between px-[80px] py-[120px] w-full max-w-[1440px]">
        {/* Left label */}
        <p
          className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic shrink-0 text-[#110846] text-[36px] w-[434px] self-center -translate-y-[40px]"
        >
          Discover The Most Powerful Insurance Entity Management Software
        </p>

        {/* Right column: Card + Navigation */}
        <div className="flex flex-col gap-[40px] items-end shrink-0 w-[630px]">
          {/* Card stage */}
          <div
            className="relative overflow-hidden shrink-0 w-full rounded-[4px]"
            style={{ height: "633px" }}
          >
            {/* Outgoing card */}
            <div
              className={`absolute inset-0 w-full h-full${
                animating !== null
                  ? direction === "up"
                    ? " csc-outgoing-up"
                    : " csc-outgoing-down"
                  : ""
              }`}
            >
              <CurrentCard />
            </div>

            {/* Incoming card */}
            {IncomingCard && (
              <div
                className={`absolute inset-0 w-full h-full${
                  direction === "up" ? " csc-incoming-up" : " csc-incoming-down"
                }`}
              >
                <IncomingCard />
              </div>
            )}
          </div>

          {/* Navigation dots + arrows */}
          <div className="flex gap-[60px] h-[40px] items-center justify-center w-full">
            {/* Prev arrow */}
            <button
              onClick={() =>
                triggerTransition(
                  (currentRef.current - 1 + CARDS.length) % CARDS.length
                )
              }
              className={`group content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px] border border-solid cursor-pointer bg-transparent transition-colors duration-200 hover:bg-[#af63ff] hover:border-[#af63ff] ${displayed > 0 ? "border-[#8740ff]" : "border-[#bdbdd6]"}`}
              aria-label="Previous card"
            >
              <span className="group-hover:hidden">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[18.75%_12.5%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
                      <path d="M6.25 12.5L7.13125 11.6188L2.39375 6.875H15V5.625H2.39375L7.13125 0.88125L6.25 0L0 6.25L6.25 12.5Z" fill={displayed > 0 ? "#110846" : "#BDBDD6"} />
                    </svg>
                  </div>
                </div>
              </span>
              <span className="hidden group-hover:block">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[18.75%_12.5%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
                      <path d="M6.25 12.5L7.13125 11.6188L2.39375 6.875H15V5.625H2.39375L7.13125 0.88125L6.25 0L0 6.25L6.25 12.5Z" fill="#F5F5F5" />
                    </svg>
                  </div>
                </div>
              </span>
            </button>

            {/* Dots with timeline stroke */}
            <div className="flex gap-[8px] items-center">
              {CARDS.map((_, i) => {
                // Perimeter of the rounded rect for dashoffset calculation
                const perimeter = 54;
                let offset = perimeter; // fully hidden by default

                if (i === displayed) {
                  // Active dot: stroke draws based on timeline progress
                  offset = perimeter * (1 - timelineProgress);
                } else if (i < displayed) {
                  // Past dots: fully drawn
                  offset = 0;
                }

                return (
                  <button
                    key={i}
                    onClick={() => triggerTransition(i)}
                    className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px] cursor-pointer bg-transparent border-0 p-0"
                    aria-label={`Go to card ${i + 1}`}
                  >
                    <svg
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="15"
                        height="15"
                        rx="3.5"
                        stroke="#8740ff"
                        strokeWidth="1"
                        strokeDasharray={perimeter}
                        strokeDashoffset={i === displayed ? offset : perimeter}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div
                      className={`shrink-0 size-[6px] ${i === displayed ? "bg-[#af63ff]" : "bg-[#110846]"}`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Next arrow */}
            <button
              onClick={() =>
                triggerTransition(
                  (currentRef.current + 1) % CARDS.length
                )
              }
              className={`group content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px] border border-solid cursor-pointer bg-transparent transition-colors duration-200 hover:bg-[#af63ff] hover:border-[#af63ff] ${displayed < CARDS.length - 1 ? "border-[#8740ff]" : "border-[#bdbdd6]"}`}
              aria-label="Next card"
            >
              <span className="group-hover:hidden">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[18.75%_12.5%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
                      <path d="M8.75 0L7.85625 0.870625L12.5937 5.625H0V6.875H12.5937L7.85625 11.6081L8.75 12.5L15 6.25L8.75 0Z" fill={displayed < CARDS.length - 1 ? "#110846" : "#BDBDD6"} />
                    </svg>
                  </div>
                </div>
              </span>
              <span className="hidden group-hover:block">
                <div className="overflow-clip relative shrink-0 size-[20px]">
                  <div className="absolute inset-[18.75%_12.5%]">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
                      <path d="M8.75 0L7.85625 0.870625L12.5937 5.625H0V6.875H12.5937L7.85625 11.6081L8.75 12.5L15 6.25L8.75 0Z" fill="#F5F5F5" />
                    </svg>
                  </div>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}