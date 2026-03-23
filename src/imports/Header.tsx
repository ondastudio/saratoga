import svgPaths from "./svg-woiciahv7w";
import { useState, useEffect, useRef } from "react";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { NavLink } from "../app/components/NavLink";
import { Link } from "react-router";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[16px] items-start not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <p className="leading-[1.1] relative shrink-0 text-[40px] tracking-[-0.4px] w-[656px]">We handle compliance, license operations and surplus lines filings – so you can focus on selling insurance.</p>
      <p className="leading-[1.35] relative shrink-0 text-[20px] w-[632px] tracking-[0.2px]">Saratoga is the leading, all-in-one compliance platform for the insurance industry. We combine industry leading software, AI-enabled compliance managed services and dedicated insurance regulatory experts to deliver an efficient solution that removes barriers to your success.</p>
    </div>
  );
}

function HeroLink() {
  return <SaratogaButton variant="primary" color="purple" showArrow>Request a Demo</SaratogaButton>;
}

function HeroLink1() {
  return <SaratogaButton variant="outline" color="white" showArrow to="/company/why-saratoga">Why Saratoga</SaratogaButton>;
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="CTA">
      <HeroLink />
      <HeroLink1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[80px] top-[200px] w-[682px]">
      <Frame3 />
      <Cta />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="User--filled">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p15c76300} fill="#AF63FF" />
              <path d={svgPaths.pa517000} fill="#AF63FF" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Clients</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[40px]">330</span>
        <sup className="text-[20px] top-[-0.6em] relative">+</sup>
      </p>
    </div>
  );
}

function Container({ animStyle }: { animStyle?: React.CSSProperties }) {
  return (
    <div className="bg-[#110846] flex-[1_0_0] h-[317px] min-h-px min-w-px relative rounded-[4px] transition-all duration-1000 ease-out" data-name="Container" style={animStyle}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Document">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#F5F5F5" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#F5F5F5" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#F5F5F5" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Licenses Managed</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[40px]">40K</span>
        <sup className="text-[20px] top-[-0.6em] relative">+</sup>
      </p>
    </div>
  );
}

function Container3({ animStyle }: { animStyle?: React.CSSProperties }) {
  return (
    <div className="bg-[#8740ff] flex-[1_0_0] h-[317px] min-h-px min-w-px relative rounded-[4px] transition-all duration-1000 ease-out" data-name="Container" style={animStyle}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Money">
        <svg className="absolute block size-full" viewBox="0 0 32 32" fill="none">
          <path d="M28 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2ZM4 22V10h24v12ZM16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM7 12H4v3h3v-3Zm18 5h3v3h-3v-3Z" fill="#F5F5F5" />
        </svg>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Premiums Managed</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[40px]">$30B</span>
        <sup className="text-[20px] top-[-0.6em] relative">+</sup>
      </p>
    </div>
  );
}

function Container6({ animStyle }: { animStyle?: React.CSSProperties }) {
  return (
    <div className="bg-[#af63ff] flex-[1_0_0] h-[317px] min-h-px min-w-px relative rounded-[4px] transition-all duration-1000 ease-out" data-name="Container" style={animStyle}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Document--attachment">
        <svg className="absolute block size-full" viewBox="0 0 32 32" fill="none">
          <path d="M26 28H6V2h14l6 6ZM8 26h16V10h-6V4H8Zm10-18h3.17L18 4.83ZM14 18h8v2h-8Zm0-4h8v2h-8Zm0-4h4v2h-4Z" fill="#AF63FF" />
          <path d="M4 6v22h18v2H2V6Z" fill="#AF63FF" />
        </svg>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Entity Filings Annually</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#110846] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[40px]">1M</span>
        <sup className="text-[20px] top-[-0.6em] relative">+</sup>
      </p>
    </div>
  );
}

function Container9({ animStyle }: { animStyle?: React.CSSProperties }) {
  return (
    <div className="bg-[#bcbcbc] flex-[1_0_0] h-[317px] min-h-px min-w-px relative rounded-[4px] transition-all duration-1000 ease-out" data-name="Container" style={animStyle}>
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

export function StatCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transitionDelay: `${index * 200}ms`,
  });

  return (
    <div ref={ref} className="bg-[#300067] content-stretch flex gap-[4px] items-start pb-[64px] px-[80px] w-[1440px]">
      <Container animStyle={getCardStyle(0)} />
      <Container3 animStyle={getCardStyle(1)} />
      <Container6 animStyle={getCardStyle(2)} />
      <Container9 animStyle={getCardStyle(3)} />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[22.22%_5.55%_32.22%_66.3%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 405.335 409.999">
        <g id="Group 15501">
          <path d={svgPaths.p14e4e500} fill="var(--fill-0, #9880B3)" id="Vector" />
          <path d={svgPaths.p2392e080} fill="var(--fill-0, #9880B3)" id="Vector_2" />
          <path d={svgPaths.p22992480} fill="var(--fill-0, #9880B3)" id="Vector_3" />
          <path d={svgPaths.p3affa600} fill="var(--fill-0, #9880B3)" id="Vector_4" />
          <path d={svgPaths.pbb13280} fill="var(--fill-0, #9880B3)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0 cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[16px] relative">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >{`About `}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[40px] relative shrink-0 cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >Careers</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[40px] relative shrink-0 cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >Events</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[40px] relative shrink-0 cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >Contact</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[40px] relative shrink-0 cursor-pointer" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p
          className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap"
          style={{
            backgroundImage: "linear-gradient(#f5f5f5, #f5f5f5)",
            backgroundSize: "0% 1px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left bottom",
            transition: "background-size 0.3s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundSize = "100% 1px")}
          onMouseLeave={e => (e.currentTarget.style.backgroundSize = "0% 1px")}
        >Support</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[40px] relative shrink-0 cursor-pointer" data-name="Link" onClick={() => window.dispatchEvent(new Event("open-search"))}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
          <div className="absolute inset-[6.14%_9.37%_9.37%_6.14%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8971 16.8971">
              <path d={svgPaths.p21a38480} fill="var(--fill-0, #F5F5F5)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pb-[4px] relative">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <Link to="/" aria-label="Go to homepage" className="h-[40px] relative shrink-0 w-[150.345px] block">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.345 40">
        <g id="Group 15439">
          <path d={svgPaths.pfdd2400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p264cbcf0} fill="var(--fill-0, #AF63FF)" id="Vector_2" />
          <path d={svgPaths.p33f8b580} fill="var(--fill-0, #AF63FF)" id="Vector_3" />
          <path d={svgPaths.p6d8ab70} fill="var(--fill-0, #AF63FF)" id="Vector_4" />
          <path d={svgPaths.p1911cd00} fill="var(--fill-0, #AF63FF)" id="Vector_5" />
          <path d={svgPaths.p24380180} fill="var(--fill-0, #AF63FF)" id="Vector_6" />
          <path d={svgPaths.p17e56580} fill="var(--fill-0, #AF63FF)" id="Vector_7" />
          <path d={svgPaths.p247c72f0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p53f3b00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p107d9a40} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p10172000} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2364b500} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pcd07200} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2264e820} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p33e64cc0} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p1fcad300} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p1934b800} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p33c80500} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p2f44fa80} fill="var(--fill-0, #AF63FF)" id="Vector_19" />
          <path d={svgPaths.p52cbc00} fill="var(--fill-0, #AF63FF)" id="Vector_20" />
          <path d={svgPaths.p1cf9ed00} fill="var(--fill-0, #AF63FF)" id="Vector_21" />
          <path d={svgPaths.p15175680} fill="var(--fill-0, #AF63FF)" id="Vector_22" />
          <path d={svgPaths.p2d5e6900} fill="var(--fill-0, #AF63FF)" id="Vector_23" />
          <path d={svgPaths.p5d26700} fill="var(--fill-0, #AF63FF)" id="Vector_24" />
          <path d={svgPaths.p15dd8500} fill="var(--fill-0, white)" id="Vector_25" />
        </g>
      </svg>
    </Link>
  );
}

function Frame1() {
  return <NavLink variant="chevron">Products</NavLink>;
}

function Link10() {
  return <NavLink>Why Saratoga?</NavLink>;
}

function Link11() {
  return <NavLink variant="chevron">Solutions</NavLink>;
}

function Link13() {
  return <NavLink variant="chevron">Resources</NavLink>;
}

function Link15() {
  return <NavLink variant="chevron">Partners</NavLink>;
}

function Link17() {
  return <NavLink variant="chevron">Company</NavLink>;
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Frame1 />
      <Link10 />
      <Link11 />
      <Link13 />
      <Link15 />
      <Link17 />
    </div>
  );
}

function Link19() {
  return <SaratogaButton variant="ghost" color="white">Login</SaratogaButton>;
}

function Link20() {
  return <SaratogaButton variant="primary" color="gradient">Request a Demo</SaratogaButton>;
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Link19 />
      <Link20 />
    </div>
  );
}

function NavFrame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[8px] py-[16px] relative w-full">
          <Group />
          <Container13 />
          <Action />
        </div>
      </div>
    </div>
  );
}

function MaskedImagery() {
  const crossPath = "M405.335,164.999L405.335,245L240.335,245L240.335,410L164.999,410L164.999,245L0,245L0,164.999L164.999,164.999L164.999,0L240.335,0L240.335,164.999L405.335,164.999Z";
  return (
    <div className="absolute right-[56px] top-[148px] w-[630px] h-[630px] pointer-events-none" data-name="Mask group">
      {/* Background shape */}
      <div
        className="absolute inset-0 bg-[#110846]"
        style={{
          clipPath: `path('${crossPath}')`,
          transform: "translate(54px, 52px) scale(0.81)",
        }}
      />
      {/* Video/image with luminosity blend */}
      <div
        className="absolute inset-0 mix-blend-luminosity"
        style={{
          clipPath: `path('${crossPath}')`,
          transform: "translate(54px, 52px) scale(0.81)",
          overflow: "hidden",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{ filter: "grayscale(30%) contrast(1.1)" }}
        >
          <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#300067] relative size-full overflow-hidden" data-name="Header">
      <Frame4 />
      <Group1 />
      <MaskedImagery />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-end left-1/2 pt-[16px] px-[80px] top-0 w-[1440px]" data-name="Navigation">
        <Container12 />
        <NavFrame />
      </div>
    </div>
  );
}