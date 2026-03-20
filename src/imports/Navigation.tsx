import { Link } from "react-router";
import svgPaths from "./svg-zs9ybbwn1o";
import { useEffect, useState } from "react";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { NavLink } from "../app/components/NavLink";

const HEADER_HEIGHT = 900;

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[120.276px]">
      <Link to="/" aria-label="Go to homepage" className="absolute block size-full">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.276 32">
          <g id="Group 15440">
            <path d={svgPaths.p39277c00} fill="#110846" id="Vector" />
            <path d={svgPaths.p4ba9900} fill="#8740FF" id="Vector_2" />
            <path d={svgPaths.pf83fc00} fill="#8740FF" id="Vector_3" />
            <path d={svgPaths.pe86b800} fill="#8740FF" id="Vector_4" />
            <path d={svgPaths.p18516400} fill="#8740FF" id="Vector_5" />
            <path d={svgPaths.p25d10b00} fill="#8740FF" id="Vector_6" />
            <path d={svgPaths.p374d0480} fill="#8740FF" id="Vector_7" />
            <path d={svgPaths.pfd1f800} fill="#110846" id="Vector_8" />
            <path d={svgPaths.p33f1c500} fill="#110846" id="Vector_9" />
            <path d={svgPaths.p2e2d2590} fill="#110846" id="Vector_10" />
            <path d={svgPaths.p22ee2c00} fill="#110846" id="Vector_11" />
            <path d={svgPaths.p1b61de00} fill="#110846" id="Vector_12" />
            <path d={svgPaths.p1d6b7b00} fill="#110846" id="Vector_13" />
            <path d={svgPaths.p3db88b80} fill="#110846" id="Vector_14" />
            <path d={svgPaths.p16e67100} fill="#110846" id="Vector_15" />
            <path d={svgPaths.p128a7f00} fill="#110846" id="Vector_16" />
            <path d={svgPaths.pbdd2b80} fill="#110846" id="Vector_17" />
            <path d={svgPaths.p2c57ef00} fill="#110846" id="Vector_18" />
            <path d={svgPaths.p6983e80} fill="#8740FF" id="Vector_19" />
            <path d={svgPaths.pc622bf0} fill="#8740FF" id="Vector_20" />
            <path d={svgPaths.p29944600} fill="#8740FF" id="Vector_21" />
            <path d={svgPaths.p3f1f9e00} fill="#8740FF" id="Vector_22" />
            <path d={svgPaths.p12d5bd00} fill="#8740FF" id="Vector_23" />
            <path d={svgPaths.pc8d4500} fill="#8740FF" id="Vector_24" />
            <path d={svgPaths.p23fb1600} fill="#110846" id="Vector_25" />
          </g>
        </svg>
      </Link>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <NavLink color="dark" variant="chevron">Products</NavLink>
      <NavLink color="dark">Why Saratoga?</NavLink>
      <NavLink color="dark" variant="chevron">Solutions</NavLink>
      <NavLink color="dark" variant="chevron">Resources</NavLink>
      <NavLink color="dark" variant="chevron">Partners</NavLink>
      <NavLink color="dark" variant="chevron">Company</NavLink>
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <SaratogaButton variant="ghost">Login</SaratogaButton>
      <SaratogaButton variant="primary" color="gradient">Request a Demo</SaratogaButton>
    </div>
  );
}

export default function Navigation({ headerHeight = HEADER_HEIGHT }: { headerHeight?: number }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY >= headerHeight);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [headerHeight]);

  return (
    <div
      className="w-full px-[80px] py-[40px]"
      data-name="Navigation"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-110%)",
        opacity: visible ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <div className="bg-[#d8c1fe] w-full rounded-[4px]">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] py-[8px] w-full">
          <Logo />
          <NavLinks />
          <Actions />
        </div>
      </div>
    </div>
  );
}