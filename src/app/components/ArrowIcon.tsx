const PLAY_FILLED = "M0.625 15C0.45924 15 0.300269 14.9342 0.183058 14.817C0.0658481 14.6998 0 14.5408 0 14.375V0.625046C0 0.516433 0.0282889 0.409692 0.0821012 0.315346C0.135914 0.221 0.213383 0.142306 0.306874 0.0870217C0.400365 0.0317372 0.506649 0.00177051 0.61525 0.0000760769C0.72385 -0.00161835 0.831018 0.025018 0.926188 0.0773589L13.4262 6.95236C13.5243 7.00629 13.606 7.08556 13.663 7.1819C13.72 7.27823 13.75 7.3881 13.75 7.50002C13.75 7.61193 13.72 7.7218 13.663 7.81814C13.606 7.91447 13.5243 7.99374 13.4262 8.04767L0.926188 14.9227C0.833909 14.9734 0.73031 15 0.625 15Z";
const ARROW_RIGHT = "M8.75 0L7.85625 0.870625L12.5937 5.625H0V6.875H12.5937L7.85625 11.6081L8.75 12.5L15 6.25L8.75 0Z";
const CHEVRON_DOWN = "M6.25 7.125L0 0.875L0.875 0L6.25 5.375L11.625 0L12.5 0.875L6.25 7.125Z";
const CHEVRON_UP = "M6.25 0L0 6.25L0.875 7.125L6.25 1.75L11.625 7.125L12.5 6.25L6.25 0Z";

interface ArrowIconProps {
  type?: "arrow" | "chevron-down" | "chevron-up";
  color?: string;
  className?: string;
}

export function ArrowIcon({ type = "arrow", color = "#110846", className }: ArrowIconProps) {
  if (type === "arrow") {
    return (
      <div className={`overflow-clip relative shrink-0 size-[20px] ${className ?? ""}`}>
        <div className="absolute inset-[18.75%_12.5%]">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <path d={ARROW_RIGHT} fill={color} />
          </svg>
        </div>
      </div>
    );
  }

  const path = type === "chevron-down" ? CHEVRON_DOWN : CHEVRON_UP;
  return (
    <div className={`overflow-clip relative shrink-0 size-[20px] ${className ?? ""}`}>
      <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
          <path d={path} fill={color} />
        </svg>
      </div>
    </div>
  );
}

interface ArrowBadgeProps {
  size?: 32 | 40;
  variant?: "white" | "lilac" | "dark" | "transparent";
  arrowColor?: string;
  hoverArrowColor?: string;
  className?: string;
}

export function ArrowBadge({ size = 32, variant = "white", arrowColor, hoverArrowColor, className }: ArrowBadgeProps) {
  const bgClass =
    variant === "white" ? "bg-[#f5f5f5]" :
    variant === "lilac" ? "bg-[#af63ff]" :
    variant === "dark" ? "bg-[#110846]" :
    "";

  const defaultArrowColor =
    variant === "white" ? "#110846" :
    variant === "lilac" ? "#F5F5F5" :
    variant === "dark" ? "#F5F5F5" :
    "#F5F5F5";

  const resolvedColor = arrowColor ?? defaultArrowColor;

  return (
    <div
      className={`${bgClass} content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 ${size === 32 ? "size-[32px]" : "size-[40px]"} ${className ?? ""}`}
    >
      {hoverArrowColor ? (
        <>
          <span className="group-hover:hidden"><ArrowIcon color={resolvedColor} /></span>
          <span className="hidden group-hover:block"><ArrowIcon color={hoverArrowColor} /></span>
        </>
      ) : (
        <ArrowIcon color={resolvedColor} />
      )}
    </div>
  );
}

interface PlayIconProps {
  color?: string;
  className?: string;
}

export function PlayIcon({ color = "#202020", className }: PlayIconProps) {
  return (
    <div className={`overflow-clip relative shrink-0 size-[20px] ${className ?? ""}`}>
      <div className="absolute inset-[12.5%_12.5%_12.5%_18.75%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.75 15">
          <path d={PLAY_FILLED} fill={color} />
        </svg>
      </div>
    </div>
  );
}

interface PauseIconProps {
  color?: string;
  className?: string;
}

export function PauseIcon({ color = "#110846", className }: PauseIconProps) {
  return (
    <div className={`overflow-clip relative shrink-0 size-[20px] ${className ?? ""}`}>
      <div className="absolute inset-[18.75%_25%]">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 12.5">
          <rect x="0" y="0" width="3.5" height="12.5" rx="0.5" fill={color} />
          <rect x="6.5" y="0" width="3.5" height="12.5" rx="0.5" fill={color} />
        </svg>
      </div>
    </div>
  );
}
