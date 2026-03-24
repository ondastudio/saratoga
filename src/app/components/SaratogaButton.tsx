import { Link } from "react-router";
import { ArrowBadge } from "./ArrowIcon";

const gradientKeyframes = `
@keyframes gradient-slide {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
`;

// Inject keyframes once
if (typeof document !== "undefined" && !document.getElementById("saratoga-gradient-keyframes")) {
  const style = document.createElement("style");
  style.id = "saratoga-gradient-keyframes";
  style.textContent = gradientKeyframes;
  document.head.appendChild(style);
}

interface SaratogaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  color?: "purple" | "white" | "lilac" | "gradient";
  showArrow?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  to?: string;
}

function MaybeLink({ to, children }: { to?: string; children: React.ReactNode }) {
  if (to) {
    return <Link to={to} className="no-underline">{children}</Link>;
  }
  return <>{children}</>;
}

export function SaratogaButton({
  children,
  variant = "primary",
  color = "purple",
  showArrow = false,
  onClick,
  className,
  disabled = false,
  to,
}: SaratogaButtonProps) {
  // --- Primary variant ---
  if (variant === "primary" && color === "gradient") {
    return (
      <MaybeLink to={to}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`group content-stretch flex h-[40px] items-center justify-center ${showArrow ? "gap-[16px] pl-[24px] pr-[4px]" : "px-[24px]"} relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 overflow-hidden shadow-[0px_0px_2px_0px_#af63ff] hover:shadow-[0px_0px_4px_0px_#9a35fe] disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
        >
          {/* Default sliding gradient */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-0"
            style={{
              background: "linear-gradient(90deg, #6a6b9e 0%, #8a7db2 25%, #af63ff 50%, #8a7db2 75%, #6a6b9e 100%)",
              backgroundSize: "300% 100%",
              animation: "gradient-slide 12s ease-in-out infinite",
            }}
          />
          {/* Hover sliding gradient — darker/more vibrant */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: "linear-gradient(90deg, #4e4d8c 0%, #6a6b9e 25%, #9a35fe 50%, #6a6b9e 75%, #4e4d8c 100%)",
              backgroundSize: "300% 100%",
              animation: "gradient-slide 12s ease-in-out infinite",
            }}
          />
          <span className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap relative z-10">
            {children}
          </span>
          {showArrow && <ArrowBadge size={32} variant="white" hoverArrowColor="#F5F5F5" className="relative z-10 group-hover:bg-[#af63ff] transition-colors duration-200" />}
        </button>
      </MaybeLink>
    );
  }

  if (variant === "primary" && color === "purple") {
    return (
      <MaybeLink to={to}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`group content-stretch flex h-[40px] items-center justify-center ${showArrow ? "gap-[16px] pl-[24px] pr-[4px]" : "px-[24px]"} relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 bg-[#af63ff] hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
        >
          <span className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[#f5f5f5] group-hover:text-[#110846] text-[14px] uppercase whitespace-nowrap transition-colors duration-200">
            {children}
          </span>
          {showArrow && (
            <ArrowBadge
              size={32}
              variant="white"
              arrowColor="#110846"
              hoverArrowColor="#F5F5F5"
              className="group-hover:bg-[#af63ff] transition-colors duration-200"
            />
          )}
        </button>
      </MaybeLink>
    );
  }

  if (variant === "primary" && color === "white") {
    return (
      <MaybeLink to={to}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`group content-stretch flex h-[40px] items-center justify-center ${showArrow ? "gap-[16px] pl-[24px] pr-[4px]" : "px-[24px]"} relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 bg-[#f5f5f5] hover:bg-[#ededed] disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
        >
          <span className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[#110846] text-[14px] uppercase whitespace-nowrap">
            {children}
          </span>
          {showArrow && (
            <ArrowBadge
              size={32}
              variant="lilac"
              arrowColor="#F5F5F5"
              hoverArrowColor="#F5F5F5"
              className="group-hover:bg-[#110846] transition-colors duration-200"
            />
          )}
        </button>
      </MaybeLink>
    );
  }

  if (variant === "primary" && color === "lilac") {
    return (
      <MaybeLink to={to}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`group content-stretch flex h-[40px] items-center justify-center ${showArrow ? "gap-[16px] pl-[24px] pr-[4px]" : "px-[24px]"} relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 bg-[#c694fe] hover:bg-[#af63ff] disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
        >
          <span className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[#110846] group-hover:text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap transition-colors duration-200">
            {children}
          </span>
          {showArrow && <ArrowBadge size={32} variant="dark" className="group-hover:bg-[#f5f5f5]" />}
        </button>
      </MaybeLink>
    );
  }

  // --- Outline variant (outside stroke via absolute overlay) ---
  if (variant === "outline") {
    return (
      <MaybeLink to={to}>
        <button
          onClick={onClick}
          disabled={disabled}
          className={`group content-stretch flex h-[40px] items-center justify-center ${showArrow ? "gap-[16px] pl-[24px] pr-[4px]" : "px-[24px]"} relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 hover:bg-[#f5f5f5] disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
        >
          <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-[-1px] pointer-events-none rounded-[4px] transition-opacity duration-200 group-hover:opacity-0" />
          <span className={`font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[14px] uppercase whitespace-nowrap transition-colors duration-200 ${color === "white" ? "text-[#f5f5f5] group-hover:text-[#110846]" : "text-[#f5f5f5] group-hover:text-[#110846]"}`}>
            {children}
          </span>
          {showArrow && (
            <ArrowBadge
              size={32}
              variant="lilac"
              arrowColor="#F5F5F5"
              className="group-hover:bg-[#af63ff] transition-colors duration-200"
            />
          )}
        </button>
      </MaybeLink>
    );
  }

  // --- Ghost variant (outside stroke, no arrow) ---
  return (
    <MaybeLink to={to}>
      <button
        onClick={onClick}
        disabled={disabled}
        className={`group content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ${color === "dark" ? "hover:bg-[#8740FF]" : "hover:bg-[#af63ff]"} disabled:opacity-50 disabled:cursor-not-allowed ${className ?? ""}`}
      >
        <div aria-hidden="true" className={`absolute border border-solid inset-[-1px] pointer-events-none rounded-[4px] transition-opacity duration-200 group-hover:opacity-0 ${color === "dark" ? "border-[#8740FF]" : "border-[#af63ff]"}`} />
        <span className={`font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[14px] uppercase whitespace-nowrap transition-colors duration-200 ${color === "white" ? "text-[#f5f5f5] group-hover:text-[#f5f5f5]" : "text-[#110846] group-hover:text-[#f5f5f5]"}`}>
          {children}
        </span>
      </button>
    </MaybeLink>
  );
}
