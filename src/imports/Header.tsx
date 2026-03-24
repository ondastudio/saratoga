import svgPaths from "./svg-woiciahv7w";
import { useState, useEffect, useRef } from "react";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { NavLink } from "../app/components/NavLink";
import { Link } from "react-router";
import PrimaryNavbar from "../app/components/PrimaryNavbar";

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


function MaskedImagery() {
  const heroPath = "M274.218 305.094V526.999H219.375V471.525H109.688V360.567H54.8457V305.094H274.218ZM521.004 305.114H466.161V416.072H356.465V471.546H301.622V249.641H521.004V305.114ZM277.237 281.737H243.528V247.641H277.237V281.737ZM219.372 277.388H0V221.914H54.8428V110.966H164.529V55.4922H219.372V277.388ZM301.654 55.4736H411.351V166.422H466.193V221.896H246.812V0H301.654V55.4736Z";
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return (
    <>
      <svg width="0" height="0" className="absolute" style={{ overflow: "hidden" }}>
        <defs>
          <clipPath id="hero-symbol-clip" clipPathUnits="userSpaceOnUse">
            <path d={heroPath} />
          </clipPath>
        </defs>
      </svg>
      <div
        className="absolute right-[80px] top-[200px] pointer-events-none"
        style={{ width: "521px", height: "527px", clipPath: "url(#hero-symbol-clip)" }}
        data-name="Mask group"
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          playsInline
          preload="auto"
          className="absolute w-full h-full object-cover"
        >
          <source src="https://onda-studio.lon1.cdn.digitaloceanspaces.com/saratoga.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#300067] opacity-50" />
      </div>
    </>
  );
}

export default function Header() {
  return (
    <div className="bg-[#300067] relative size-full overflow-hidden" data-name="Header">
      <Frame4 />
      <MaskedImagery />
      <PrimaryNavbar />
    </div>
  );
}