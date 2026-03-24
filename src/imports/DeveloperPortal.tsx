import svgPaths from "./svg-wrzcsbcok7";
import { useRef, useEffect } from "react";
import gradientHorizontal from "../../assets/svg/Gradient_Horizontal.svg";
import Footer from "../app/components/Footer";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { IconButton } from "../app/components/IconButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] h-[140px] items-start leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] w-[650px]">
      <p className="relative shrink-0 text-[40px] tracking-[-0.4px] w-[440px]">Developer Portal</p>
      <p className="relative shrink-0 text-[24px] tracking-[-0.24px] w-[440px] whitespace-pre-wrap">
        {`Build Custom Integrations with `}
        <br aria-hidden="true" />
        {`Saratoga's Open API`}
      </p>
    </div>
  );
}

function Link() {
  return <SaratogaButton variant="primary" color="white" showArrow>Request a Demo</SaratogaButton>;
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[599px]">{`Our RESTful API provides programmatic access to producer data, license statuses, appointment records, compliance scores and more. Whether you're building a custom integration, embedding compliance checks into your product or feeding data into a business intelligence platform, our developer resources give you everything you need to get started.`}</p>
      <Link />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[80px] content-stretch flex items-start left-[80px] w-[1280px]">
      <Frame />
      <Frame21 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#110846] h-[470px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <img src={gradientHorizontal} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <Frame1 />
      <PrimaryNavbar />
    </div>
  );
}

function ScrollTrackingTitle() {
  const ref = useRef<HTMLParagraphElement>(null);
  const targetY = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      currentY.current = lerp(currentY.current, targetY.current, 0.04);
      if (Math.abs(currentY.current - targetY.current) < 0.5) {
        currentY.current = targetY.current;
      }
      if (ref.current) {
        ref.current.style.transform = `translateY(${currentY.current}px)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    const handleScroll = () => {
      if (!ref.current) return;
      const parent = ref.current.closest('[data-name="Customers"]');
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const parentHeight = rect.height;
      const titleHeight = ref.current.getBoundingClientRect().height;
      const cardsStack = parent.querySelectorAll('[data-name="Cards"]');
      const innerCards = cardsStack.length > 1 ? cardsStack[1] : cardsStack[0];
      const cardsHeight = innerCards ? innerCards.getBoundingClientRect().height : 646;
      const maxTravel = cardsHeight - titleHeight;
      const scrollRange = parentHeight - window.innerHeight;
      const progress = scrollRange > 0 ? Math.min(Math.max(-rect.top / scrollRange, 0), 1) : 0;
      targetY.current = progress * maxTravel;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <p
      ref={ref}
      className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[28px] w-full whitespace-pre-wrap"
      style={{ willChange: "transform" }}
    >
      {`Developer `}
      <br aria-hidden="true" />
      Resources
    </p>
  );
}

function Frame22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[726px] items-start left-0 top-0 w-[434px]">
      <ScrollTrackingTitle />
    </div>
  );
}

function Api() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="api 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_144_725)" id="api 1">
          <path d={svgPaths.p6ad9680} fill="var(--fill-0, #FAFAFA)" id="api_2_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_144_725">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <IconButton size={40} variant="filled-white" />
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[10px] items-center opacity-0 relative shrink-0" data-name="CTA">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">LEARN MORE</p>
      <Icon1 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Header">
      <Api />
      <Cta />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] whitespace-nowrap">Comprehensive API Documentation</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Content">
      <Frame16 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#300067] relative rounded-[8px] shrink-0 w-full" data-name="Card-01">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[40px] relative w-full">
          <Header1 />
          <Content />
        </div>
      </div>
    </div>
  );
}

function DocumentSecurity() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="document--security 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_144_683)" id="document--security 1">
          <path d={svgPaths.p29d3f480} fill="var(--fill-0, #FAFAFA)" id="document--security_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_144_683">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Point() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
            <path d={svgPaths.p2cb8b080} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <DocumentSecurity />
      <Point />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] whitespace-nowrap">{`Authentication & Security Guides`}</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame17 />
    </div>
  );
}

function Card4() {
  return (
    <div className="bg-[#8740ff] relative rounded-[8px] shrink-0 w-full" data-name="Card-02">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[40px] relative w-full">
          <Frame13 />
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function CodeExplanation() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="code--explanation 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_144_699)" id="code--explanation 1">
          <path d={svgPaths.p2f736700} fill="var(--fill-0, #FAFAFA)" id="code--explanation_00000107547220287748776140000004506861870802611073_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_144_699">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Point1() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
            <path d={svgPaths.p2cb8b080} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <CodeExplanation />
      <Point1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] whitespace-nowrap">{`Code Samples & SDKs`}</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame18 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#af63ff] relative rounded-[8px] shrink-0 w-full" data-name="Card-01">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[40px] relative w-full">
          <Frame15 />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function WebDeveloper() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="web--developer 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_144_719)" id="web--developer 1">
          <path d={svgPaths.p192a0200} fill="var(--fill-0, #110846)" id="web--developer_00000048482210920810834670000003432370706082419375_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_144_719">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Point2() {
  return (
    <div className="content-stretch flex items-center justify-center opacity-0 relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#110846] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
            <path d={svgPaths.p2cb8b080} fill="var(--fill-0, #110846)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative">
      <WebDeveloper />
      <Point2 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[24px] whitespace-nowrap">Sandbox Environment for Testing</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame19 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#bcbcbc] relative rounded-[8px] shrink-0 w-full" data-name="Card-01">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[40px] relative w-full">
          <Frame14 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Dropper() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="dropper 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_144_713)" id="dropper 1">
          <path d={svgPaths.p15db8a00} fill="var(--fill-0, #FAFAFA)" id="dropper_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_144_713">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <IconButton size={40} variant="filled-white" />
  );
}

function Cta1() {
  return (
    <div className="content-stretch flex items-center opacity-0 relative shrink-0" data-name="CTA">
      <Icon2 />
    </div>
  );
}

function Header2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start justify-between min-h-px min-w-px relative" data-name="Header">
      <Dropper />
      <Cta1 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] whitespace-nowrap">Dedicated Developer Support</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Content">
      <Frame20 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-[#300067] relative rounded-[8px] shrink-0 w-full" data-name="Card-01">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[64px] items-center p-[40px] relative w-full">
          <Header2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Cards1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-[848px]" data-name="Cards">
      <Card3 />
      <Card4 />
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Icon3() {
  return (
    <IconButton size={32} variant="filled-lilac" />
  );
}

function Link20() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center pl-[25px] pr-[5px] py-px relative rounded-[8px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] uppercase whitespace-nowrap">Access the Developer Portal</p>
      <Icon3 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0">
      <Cards1 />
      <Link20 />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-[1283px]" data-name="Cards">
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Customers() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col items-start overflow-clip px-[78px] py-[84px] relative shrink-0" data-name="Customers">
      <Cards />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Ready to Work with Saratoga Compliance?</p>
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">{`Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga`}</p>
    </div>
  );
}

function Link21() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame10 />
      <Link21 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-[1408px]">
      <Frame9 />
      <div className="absolute h-[484.515px] left-0 top-[-0.24px] w-[479px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 484.515">
          <path d={svgPaths.p3ee3cd80} fill="var(--fill-0, #AF63FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex h-[480.469px] items-center justify-center left-[965px] top-[3.24px] w-[475px]">
        <div className="flex-none rotate-180">
          <div className="h-[480.469px] relative w-[475px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 475 480.469">
              <path d={svgPaths.pdb8db00} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Customers1() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[120px] px-[16px] relative shrink-0" data-name="Customers">
      <Frame8 />
    </div>
  );
}

export default function DeveloperPortal() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col items-start relative size-full" data-name="Developer Portal">
      <Header />
      <Customers />
      <Customers1 />
      <Footer variant="dark" />
    </div>
  );
}