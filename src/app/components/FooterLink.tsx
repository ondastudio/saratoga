import { Link as RouterLink } from "react-router";
import type { ReactNode } from "react";

const footerLinkStyle = {
  backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
  backgroundSize: "0% 1px",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "left bottom",
  transition: "background-size 0.3s ease",
};

export function FooterLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <RouterLink
      to={to}
      className="relative shrink-0"
      style={footerLinkStyle}
      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.backgroundSize = "100% 1px")}
      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.backgroundSize = "0% 1px")}
    >
      {children}
    </RouterLink>
  );
}
