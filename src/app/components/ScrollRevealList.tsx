import { useEffect, useRef, useState } from "react";

const CHEVRON_PATH = "M8.00011 0L4.00014 4L7.99994 7.99983L0 15.9998L8.00028 24.0002L4.00031 28.0002L8.00011 32L24 16L8.00011 0Z";

const LINE_LENGTH = 240;
const ROW_HEIGHT_MIN = 148;
const ROW_HEIGHT_MAX = 240;

// Interpolate between two hex colors
function lerpColor(
  from: [number, number, number],
  to: [number, number, number],
  t: number
): string {
  const r = Math.round(from[0] + (to[0] - from[0]) * t);
  const g = Math.round(from[1] + (to[1] - from[1]) * t);
  const b = Math.round(from[2] + (to[2] - from[2]) * t);
  return `rgb(${r},${g},${b})`;
}

const COLOR_MUTED: [number, number, number] = [106, 107, 158]; // #6A6B9E
const COLOR_FULL: [number, number, number] = [17, 8, 70];     // #110846
const COLOR_TITLE_ACTIVE: [number, number, number] = [135, 64, 255]; // #8740FF
const COLOR_NUMBER_BORDER: [number, number, number] = [135, 64, 255]; // #8740FF

const COLOR_BORDER_MUTED: [number, number, number] = [189, 189, 214]; // #BDBDD6
const COLOR_BORDER_ACTIVE: [number, number, number] = [175, 99, 255]; // #AF63FF

const ROWS = [
  {
    number: "01",
    title: "New Entity Formations &\nSecretary of State Registrations",
    description:
      "Operating under a trade name or \u201cdoing business as\u201d designation? We manage the filing and publication obligations associated with DBA registrations, monitor renewal dates on your behalf and ensure your DBA registrations are filed well in advance of impending deadlines \u2013 all while providing you with complete visibility and peace of mind.",
    hasBottomBorder: false,
    cardAlign: "items-center",
  },
  {
    number: "02",
    title: "Ongoing Corporate Maintenance\n& Amendments",
    description:
      "Address changes, name changes, officer and director updates, mergers, conversions, amendments to articles – corporate life never stops moving. Our team ensures every change is properly filed with the relevant Secretary of State and that your records stay current and compliant across all jurisdictions.",
    hasBottomBorder: false,
    cardAlign: "items-start",
  },
  {
    number: "03",
    title: "Withdrawals & Dissolutions",
    description:
      "Exiting a state or winding down an entity? We manage the withdrawal of certificates of authority and formal dissolutions, ensuring all final filings, tax clearances and regulatory notifications are handled cleanly – eliminating trailing compliance obligations that can haunt you for years.",
    hasBottomBorder: false,
    cardAlign: "items-start",
  },
  {
    number: "04",
    title: "State-Level Requirements,\nFilings & Tracking",
    description:
      "Every state has its own corporate filing requirements – annual reports, franchise taxes, beneficial ownership disclosures and more. Our platform tracks every deadline and our managed services team handles the filings on your behalf, so nothing slips through the cracks.",
    hasBottomBorder: false,
    cardAlign: "items-center",
  },
  {
    number: "05",
    title: "Registered Agent Services",
    description:
      "A registered agent is one of the most critical appointments for any insurance entity. Saratoga provides professional registered agent services across all U.S. states and territories – ensuring that all legal notices, service of process and third-party notifications are received, processed and forwarded to you immediately. Pair our registered agent services with our corporate filing services for a seamless, end-to-end experience.",
    hasBottomBorder: false,
    cardAlign: "items-start",
  },
  {
    number: "06",
    title: "DBA Services",
    description:
      "Operating under a trade name or \u201cdoing business as\u201d designation? We manage the filing and publication obligations associated with DBA registrations, monitor renewal dates on your behalf and ensure your DBA registrations are filed well in advance of impending deadlines \u2013 all while providing you with complete visibility and peace of mind.",
    hasBottomBorder: true,
    cardAlign: "items-start",
  },
];

const TRANSITION_DURATION = "0.6s";
const TRANSITION_EASE = "cubic-bezier(0.25, 0.1, 0.25, 1)";
const ACTIVE_TRANSITION = `all ${TRANSITION_DURATION} ${TRANSITION_EASE}`;

function ScrollRevealRow({
  number,
  title,
  description,
  hasBottomBorder,
  cardAlign,
}: (typeof ROWS)[0]) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = rowRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Expansion progress (permanent — stays once scrolled in)
      const start = windowH * 0.85;
      const end = windowH * 0.3;
      if (start !== end) {
        const p = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
        setProgress(p);
      }

      // Active state (temporary — true when row is in sweet spot)
      const center = rect.top + rect.height / 2;
      const target = windowH * 0.4;
      const range = windowH * 0.35;
      const dist = Math.abs(center - target);
      setIsActive(dist < range * 0.55);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Line draws from top to bottom: dashoffset goes from LINE_LENGTH → 0
  const dashOffset = LINE_LENGTH * (1 - progress);
  const rowHeight = ROW_HEIGHT_MIN + (ROW_HEIGHT_MAX - ROW_HEIGHT_MIN) * progress;
  const textColor = lerpColor(COLOR_MUTED, COLOR_FULL, progress);
  // Description fades in from progress 0.3 → 1
  const descOpacity = Math.max(0, Math.min(1, (progress - 0.3) / 0.7));

  // Active-driven colors (smoothed by CSS transition)
  const borderColor = isActive ? "rgb(175,99,255)" : "rgb(189,189,214)";
  const titleColor = isActive ? "rgb(135,64,255)" : "rgb(106,107,158)";
  const verticalLineColor = isActive ? "rgb(175,99,255)" : "rgb(189,189,214)";
  const titleFont = isActive ? "Saans:Medium" : "Saans:Regular";

  return (
    <div className="relative shrink-0 w-full" ref={rowRef}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[77px] items-start px-[80px] py-[40px] relative w-full">

          {/* Number */}
          <div
            className="content-stretch flex items-center gap-[16px] justify-end relative shrink-0 w-[225px] overflow-hidden"
            style={{
              transform: isActive ? "translateX(0px)" : "translateX(-153px)",
              transition: `transform ${TRANSITION_DURATION} ${TRANSITION_EASE}`,
            }}
          >
            {/* Chevron SVG */}
            <div
              className="h-[32px] relative shrink-0 w-[24px]"
              style={{
                opacity: isActive ? 1 : 0,
                transition: `opacity ${TRANSITION_DURATION} ${TRANSITION_EASE}`,
              }}
            >
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 32">
                <path d={CHEVRON_PATH} fill="#AF63FF" />
              </svg>
            </div>
            {/* Number box */}
            <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
              <div
                aria-hidden="true"
                className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]"
                style={{
                  opacity: isActive ? 1 : 0,
                  transition: `opacity ${TRANSITION_DURATION} ${TRANSITION_EASE}`,
                }}
              />
              <p
                className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[16px] text-center w-[23px]"
                style={{ color: textColor }}
              >
                {number}
              </p>
            </div>
          </div>

          {/* Card — height animates 148px → 340px with scroll */}
          <div
            className={`content-stretch flex flex-[1_0_0] gap-[40px] ${cardAlign} min-h-px min-w-px relative overflow-hidden`}
            style={{ height: `${rowHeight}px` }}
          >
            {/* Single line that draws top-to-bottom with scroll */}
            <div
              className="h-full relative shrink-0 w-px"
              style={{
                backgroundColor: verticalLineColor,
                transition: `background-color ${TRANSITION_DURATION} ${TRANSITION_EASE}`,
              }}
            >
            </div>

            {/* Content */}
            <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
              <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                <p
                  className={`font-['${titleFont}',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[28px] w-[868px] whitespace-pre-wrap`}
                  style={{
                    color: titleColor,
                    transition: `color ${TRANSITION_DURATION} ${TRANSITION_EASE}`,
                  }}
                >
                  {title}
                </p>
              </div>
              <p
                className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[18px] w-[718px]"
                style={{ opacity: descOpacity }}
              >
                {description}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Borders */}
      <div
        aria-hidden="true"
        className={`absolute border-solid border-t${hasBottomBorder ? " border-b" : ""} inset-0 pointer-events-none`}
        style={{
          borderColor,
          transition: `border-color ${TRANSITION_DURATION} ${TRANSITION_EASE}`,
        }}
      />
    </div>
  );
}

export function ScrollRevealList() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      {ROWS.map((row) => (
        <ScrollRevealRow key={row.number} {...row} />
      ))}
    </div>
  );
}