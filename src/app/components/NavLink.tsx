import { ArrowIcon } from "./ArrowIcon";

interface NavLinkProps {
  children: React.ReactNode;
  variant?: "default" | "chevron";
  color?: "white" | "dark";
  isSelected?: boolean;
  onClick?: () => void;
  className?: string;
}

export function NavLink({
  children,
  variant = "default",
  color = "white",
  isSelected = false,
  onClick,
  className,
}: NavLinkProps) {
  const textColor = color === "white" ? "text-[#f5f5f5]" : "text-[#110846]";
  const hoverTextColor = "group-hover:text-[#110846]";
  const chevronColor = color === "white" ? "#f5f5f5" : "#110846";

  return (
    <button
      onClick={onClick}
      className={`group h-[40px] relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ${isSelected ? "bg-[#bc96fe]" : "hover:bg-[#bc96fe]"} ${className ?? ""}`}
    >
      <div className="content-stretch flex h-full items-center justify-center px-[16px]">
        <div className="content-stretch flex gap-[4px] items-center">
          <p className={`font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[14px] uppercase whitespace-nowrap transition-colors duration-200 ${isSelected ? "text-[#110846]" : `${textColor} ${hoverTextColor}`}`}>
            {children}
          </p>
          {variant === "chevron" && (
            <div className={`transition-transform duration-200 ${isSelected ? "rotate-180" : ""}`}>
              <ArrowIcon
                type="chevron-down"
                color={isSelected ? "#110846" : chevronColor}
                className="group-hover:[&_path]:fill-[#110846] transition-colors duration-200"
              />
            </div>
          )}
        </div>
      </div>
    </button>
  );
}
