import { Link } from "react-router";
import svgPaths from "./svg-zs9ybbwn1o";
import { useEffect, useState } from "react";

const HEADER_HEIGHT = 900;

function Logo() {
  return (
    <div className="h-[32px] relative shrink-0 w-[120.276px]">
      <Link to="/" aria-label="Go to homepage" className="absolute block size-full">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 120.276 32">
          <g id="Group 15438">
            <path d={svgPaths.p39277c00} fill="var(--fill-0, #110846)" id="Vector" />
            <path d={svgPaths.p4ba9900} fill="var(--fill-0, #110846)" id="Vector_2" />
            <path d={svgPaths.pf83fc00} fill="var(--fill-0, #110846)" id="Vector_3" />
            <path d={svgPaths.pe86b800} fill="var(--fill-0, #110846)" id="Vector_4" />
            <path d={svgPaths.p18516400} fill="var(--fill-0, #110846)" id="Vector_5" />
            <path d={svgPaths.p25d10b00} fill="var(--fill-0, #110846)" id="Vector_6" />
            <path d={svgPaths.p374d0480} fill="var(--fill-0, #110846)" id="Vector_7" />
            <path d={svgPaths.pfd1f800} fill="var(--fill-0, #110846)" id="Vector_8" />
            <path d={svgPaths.p33f1c500} fill="var(--fill-0, #110846)" id="Vector_9" />
            <path d={svgPaths.p2e2d2590} fill="var(--fill-0, #110846)" id="Vector_10" />
            <path d={svgPaths.p22ee2c00} fill="var(--fill-0, #110846)" id="Vector_11" />
            <path d={svgPaths.p1b61de00} fill="var(--fill-0, #110846)" id="Vector_12" />
            <path d={svgPaths.p1d6b7b00} fill="var(--fill-0, #110846)" id="Vector_13" />
            <path d={svgPaths.p3db88b80} fill="var(--fill-0, #110846)" id="Vector_14" />
            <path d={svgPaths.p16e67100} fill="var(--fill-0, #110846)" id="Vector_15" />
            <path d={svgPaths.p128a7f00} fill="var(--fill-0, #110846)" id="Vector_16" />
            <path d={svgPaths.pbdd2b80} fill="var(--fill-0, #110846)" id="Vector_17" />
            <path d={svgPaths.p2c57ef00} fill="var(--fill-0, #110846)" id="Vector_18" />
            <path d={svgPaths.p6983e80} fill="var(--fill-0, #110846)" id="Vector_19" />
            <path d={svgPaths.pc622bf0} fill="var(--fill-0, #110846)" id="Vector_20" />
            <path d={svgPaths.p29944600} fill="var(--fill-0, #110846)" id="Vector_21" />
            <path d={svgPaths.p3f1f9e00} fill="var(--fill-0, #110846)" id="Vector_22" />
            <path d={svgPaths.p12d5bd00} fill="var(--fill-0, #110846)" id="Vector_23" />
            <path d={svgPaths.pc8d4500} fill="var(--fill-0, #110846)" id="Vector_24" />
            <path d={svgPaths.p23fb1600} fill="var(--fill-0, #110846)" id="Vector_25" />
          </g>
        </svg>
      </Link>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Chevron--down">
      <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 5.7">
          <path d={svgPaths.p32d32200} fill="var(--fill-0, #300067)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function NavItem({ label, hasChevron }: { label: string; hasChevron?: boolean }) {
  return (
    <div className="h-[40px] relative shrink-0 cursor-pointer group">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center gap-[2px] px-[16px] relative">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#110846, #110846)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >
          {label}
        </p>
        {hasChevron && <ChevronDown />}
      </div>
    </div>
  );
}

function NavLinks() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Container">
      <NavItem label="Products" hasChevron />
      <NavItem label="Why Saratoga?" />
      <NavItem label="Solutions" hasChevron />
      <NavItem label="Resources" hasChevron />
      <NavItem label="Partners" hasChevron />
      <NavItem label="Company" hasChevron />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0" data-name="Action">
      <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center relative rounded-[8px] shrink-0 cursor-pointer group">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#110846, #110846)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >
          Login
        </p>
      </div>
      <div className="bg-[#c694fe] hover:bg-[#AF63FF] content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">
          Request a Demo
        </p>
      </div>
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
      <div className="bg-[#dfdfdf] w-full rounded-[8px]">
        <div className="content-stretch flex items-center justify-between pl-[24px] pr-[8px] py-[8px] w-full">
          <Logo />
          <NavLinks />
          <Actions />
        </div>
      </div>
    </div>
  );
}