const ARROW_SMALL = "M7 0L6.285 0.6965L10.075 4.5H0V5.5H10.075L6.285 9.2865L7 10L12 5L7 0Z";

interface LearnMoreCtaProps {
  variant?: "dark" | "light";
}

/**
 * "LEARN MORE" CTA with outline arrow button.
 * Uses `group-hover` — place inside a parent with `group` class so hover activates on the whole card.
 * - dark: white text/border/arrow on dark bg cards
 * - light: dark text/border/arrow on light bg cards
 */
export function LearnMoreCta({ variant = "dark" }: LearnMoreCtaProps) {
  const isDark = variant === "dark";
  const textColor = isDark ? "#f5f5f5" : "#110846";
  const hoverBg = isDark ? "#f5f5f5" : "#110846";
  const hoverArrowColor = isDark ? "#110846" : "#f5f5f5";

  return (
    <div className="flex items-center gap-[10px] cursor-pointer" data-name="CTA">
      <p
        className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic text-[14px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        style={{ color: textColor }}
      >
        LEARN MORE
      </p>
      <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
        <div
          aria-hidden="true"
          className="absolute inset-0 border border-solid pointer-events-none rounded-[4px] transition-colors duration-200"
          style={{ borderColor: textColor }}
        />
        {/* Default arrow — hidden on group hover */}
        <span className="group-hover:hidden">
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[18.75%_12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
                <path d={ARROW_SMALL} fill={textColor} />
              </svg>
            </div>
          </div>
        </span>
        {/* Hover arrow — shown on group hover with filled bg */}
        <span className="hidden group-hover:block">
          <div
            className="absolute inset-0 rounded-[4px]"
            style={{ backgroundColor: hoverBg }}
          />
          <div className="overflow-clip relative shrink-0 size-[16px]">
            <div className="absolute inset-[18.75%_12.5%]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
                <path d={ARROW_SMALL} fill={hoverArrowColor} />
              </svg>
            </div>
          </div>
        </span>
      </div>
    </div>
  );
}
