interface ExpandButtonProps {
  size?: 32 | 40;
  icon?: "add" | "maximize";
  onClick?: () => void;
  className?: string;
}

const ADD_PATH = "M5.625 4.375V0H4.375V4.375H0V5.625H4.375V10H5.625V5.625H10V4.375H5.625Z";
const CLOSE_PATH = "M10 0.884375L9.11563 0L5 4.11563L0.884375 0L0 0.884375L4.11563 5L0 9.11563L0.884375 10L5 5.88437L9.11563 10L10 9.11563L5.88437 5L10 0.884375Z";

function IconSvg({ path }: { path: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]">
      <div className="absolute inset-1/4">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
          <path d={path} fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

export function ExpandButton({ size = 32, icon = "add", onClick, className }: ExpandButtonProps) {
  const sizeClass = size === 32 ? "size-[32px]" : "size-[40px]";
  const iconPath = icon === "add" ? ADD_PATH : CLOSE_PATH;

  return (
    <button
      onClick={onClick}
      className={`group content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 cursor-pointer transition-colors duration-200 bg-[#110846] hover:bg-[#f5f5f5] text-[#f5f5f5] hover:text-[#110846] ${sizeClass} ${className ?? ""}`}
      data-name="Point"
    >
      <IconSvg path={iconPath} />
    </button>
  );
}

interface ToggleExpandButtonProps {
  size?: 32 | 40;
  isExpanded: boolean;
  onClick?: () => void;
  className?: string;
}

export function ToggleExpandButton({ size = 32, isExpanded, onClick, className }: ToggleExpandButtonProps) {
  const sizeClass = size === 32 ? "size-[32px]" : "size-[40px]";

  return (
    <button
      onClick={onClick}
      className={`group content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 cursor-pointer transition-colors duration-200 bg-[#110846] hover:bg-[#f5f5f5] text-[#f5f5f5] hover:text-[#110846] ${sizeClass} ${className ?? ""}`}
      data-name="Point"
    >
      <IconSvg path={isExpanded ? CLOSE_PATH : ADD_PATH} />
    </button>
  );
}
