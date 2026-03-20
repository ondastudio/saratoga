import { ArrowIcon } from "./ArrowIcon";

interface IconButtonProps {
  size?: 32 | 40;
  variant?: "outline-white" | "outline-dark" | "filled-lilac" | "filled-dark" | "filled-white";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function IconButton({
  size = 40,
  variant = "outline-white",
  disabled = false,
  onClick,
  className,
  children,
}: IconButtonProps) {
  const sizeClass = size === 32 ? "size-[32px]" : "size-[40px]";

  const baseClasses: Record<string, { bg: string; border: string; arrowColor: string; hoverBg: string; hoverArrow: string }> = {
    "outline-white": { bg: "", border: "border border-[#f5f5f5] border-solid", arrowColor: "#F5F5F5", hoverBg: "hover:bg-[#f5f5f5] hover:border-transparent", hoverArrow: "#110846" },
    "outline-dark": { bg: "", border: "border border-[#110846] border-solid", arrowColor: "#110846", hoverBg: "hover:bg-[#110846] hover:border-transparent", hoverArrow: "#F5F5F5" },
    "filled-lilac": { bg: "bg-[#af63ff]", border: "", arrowColor: "#F5F5F5", hoverBg: "hover:bg-[#9a35fe]", hoverArrow: "#F5F5F5" },
    "filled-dark": { bg: "bg-[#110846]", border: "", arrowColor: "#F5F5F5", hoverBg: "hover:bg-[#33317a]", hoverArrow: "#F5F5F5" },
    "filled-white": { bg: "bg-[#f5f5f5]", border: "", arrowColor: "#202020", hoverBg: "hover:bg-[#110846]", hoverArrow: "#F5F5F5" },
  };

  const styles = baseClasses[variant];

  const iconSwaps = styles.arrowColor !== styles.hoverArrow;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`group content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 cursor-pointer transition-all duration-200 ${sizeClass} ${styles.bg} ${styles.border} ${styles.hoverBg} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className ?? ""}`}
    >
      {children ? (
        children
      ) : iconSwaps ? (
        <>
          <span className="group-hover:hidden"><ArrowIcon color={styles.arrowColor} /></span>
          <span className="hidden group-hover:block"><ArrowIcon color={styles.hoverArrow} /></span>
        </>
      ) : (
        <ArrowIcon color={styles.arrowColor} />
      )}
    </button>
  );
}
