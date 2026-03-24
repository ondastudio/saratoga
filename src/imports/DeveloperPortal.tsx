import svgPaths from "./svg-wrzcsbcok7";
import { Link as RouterLink } from "react-router";
import { FooterLink } from "../app/components/FooterLink";
import { useRef, useEffect } from "react";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { IconButton } from "../app/components/IconButton";
import { ArrowIcon } from "../app/components/ArrowIcon";
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

function List() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <FooterLink to="/products/insurance-entity-management">Insurance Entity Management</FooterLink>
      <p className="relative shrink-0">{`Producer & License Management`}</p>
      <p className="relative shrink-0">{`Contracting & Appointment Management`}</p>
      <p className="relative shrink-0">Surplus Lines Management</p>
      <p className="relative shrink-0">{`E&O Coverage`}</p>
      <p className="relative shrink-0">Regulatory Helpdesk</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(33.33%+34px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Products</p>
      <List />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <FooterLink to="/solutions/insurance-agencies-brokers">{`Insurance Agencies & Brokers`}</FooterLink>
      <p className="relative shrink-0">{`MGAs & MGUs`}</p>
      <p className="relative shrink-0">{`Wholesale + E&S Brokers`}</p>
      <p className="relative shrink-0">{`Hybrid & Fronting Carriers`}</p>
      <p className="relative shrink-0">InsurTechs</p>
      <p className="relative shrink-0">Insurance Carriers</p>
      <p className="relative shrink-0">{`Adjusters & Claims Managers`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(58.33%+67px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">BY BUSINESS TYPE</p>
      <List1 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">Launch an Agency</p>
      <p className="relative shrink-0">Mitigate Risk</p>
      <p className="relative shrink-0">Strealine Operations</p>
      <p className="relative shrink-0">Boost Profitability</p>
      <p className="relative shrink-0">Improve Distribution</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="capitalize font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px]">BY USE CASE</p>
      <List2 />
    </div>
  );
}

function Group1() {
  return (
    <RouterLink to="/" aria-label="Go to homepage" className="h-[60px] relative shrink-0 w-[225.518px] block">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.518 60">
        <g id="Group 15440">
          <path d={svgPaths.p3e219680} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.p55c9900} fill="var(--fill-0, #AF63FF)" id="Vector_2" />
          <path d={svgPaths.p2d2bf980} fill="var(--fill-0, #AF63FF)" id="Vector_3" />
          <path d={svgPaths.p32eb7880} fill="var(--fill-0, #AF63FF)" id="Vector_4" />
          <path d={svgPaths.p45d3700} fill="var(--fill-0, #AF63FF)" id="Vector_5" />
          <path d={svgPaths.pf7d2900} fill="var(--fill-0, #AF63FF)" id="Vector_6" />
          <path d={svgPaths.p1c0c5580} fill="var(--fill-0, #AF63FF)" id="Vector_7" />
          <path d={svgPaths.p3a6da400} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p342a1000} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p39ebd070} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p2cdd600} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.pd199e00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p3cf85f80} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pb15400} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p116ec100} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p1d9c0600} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.p9809f00} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p3498d900} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p3d74900} fill="var(--fill-0, #AF63FF)" id="Vector_19" />
          <path d={svgPaths.p2cddf300} fill="var(--fill-0, #AF63FF)" id="Vector_20" />
          <path d={svgPaths.p170a2d00} fill="var(--fill-0, #AF63FF)" id="Vector_21" />
          <path d={svgPaths.p3c41e200} fill="var(--fill-0, #AF63FF)" id="Vector_22" />
          <path d={svgPaths.p1f98ad80} fill="var(--fill-0, #AF63FF)" id="Vector_23" />
          <path d={svgPaths.p1640070} fill="var(--fill-0, #AF63FF)" id="Vector_24" />
          <path d={svgPaths.p143b9500} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </RouterLink>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[84px] w-[305px]">
      <Group1 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[min-content] whitespace-pre-wrap">{`Saratoga Compliance Solutions is the leading provider of all-in-one compliance and license operations software and AI-enabled compliance managed services for insurance companies in the U.S. and Canada.  `}</p>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152px]" data-name="Social Media">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 24">
        <g id="Social Media">
          <path d={svgPaths.p223b8700} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.p1ffe4480} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p2cc02a00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p166dcf40} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[538px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[min-content]">Follow us</p>
      <SocialMedia />
    </div>
  );
}

function Icon5() {
  return (
    <ArrowIcon color="#9293BA" />
  );
}

function List3() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 w-[277px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[#9293ba] text-[16px] whitespace-nowrap">Enter your email</p>
      <div className="opacity-50"><Icon5 /></div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(33.33%+34px)] top-[538px]" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">Subscribe to our News and update</p>
      <List3 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">Case Studies</p>
      <p className="relative shrink-0">{`Blog & Insights`}</p>
      <FooterLink to="/resources/regulatory-database">Regulatory Database</FooterLink>
      <p className="relative shrink-0">Events</p>
      <FooterLink to="/company/why-saratoga">Why Saratoga?</FooterLink>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(58.33%+67px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Resources</p>
      <List4 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <FooterLink to="/partners/integrations">Integrations</FooterLink>
      <FooterLink to="/partners/developer-portal">Developer Portal</FooterLink>
      <FooterLink to="/partners/ecosystem-partners">Ecosystem Partners</FooterLink>
      <p className="relative shrink-0">{`Legal & Regulatory Alliances`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(33.33%+34px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Partners</p>
      <List5 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <FooterLink to="/company/about-us">About Us</FooterLink>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Leadership</p>
      <p className="relative shrink-0">{`Press & News`}</p>
      <p className="relative shrink-0">Contact Us</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Company</p>
      <List6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Building">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p377f4a80} fill="#AF63FF" />
              <path d="M11.25 3.75H10V5H11.25V3.75Z" fill="#AF63FF" />
              <path d="M15 3.75H13.75V5H15V3.75Z" fill="#AF63FF" />
              <path d={svgPaths.p3839e700} fill="#AF63FF" />
              <path d="M15 7.5H13.75V8.75H15V7.5Z" fill="#AF63FF" />
              <path d={svgPaths.p345af8b0} fill="#AF63FF" />
              <path d={svgPaths.p143f4940} fill="#AF63FF" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[272px] whitespace-pre-wrap">
        {`36 Long Alley `}
        <br aria-hidden="true" />
        Saratoga Springs, NY 12866
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Email">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 12.5">
            <path d={svgPaths.p2fbb7800} fill="var(--fill-0, #AF63FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[272px]">info@saratogacompliance.com</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Phone">
        <div className="absolute inset-[9.37%_9.37%_9.38%_9.35%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.256 16.25">
            <path d={svgPaths.p3d023580} fill="var(--fill-0, #AF63FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[272px]">+1 (518) 583-0639</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[338px] w-[304px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="content-stretch flex font-['Px_Grotesk:Regular',sans-serif] gap-[24px] items-center leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap" data-name="Terms of Service">
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Data Security</p>
    </div>
  );
}

function Footnote() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[79px] py-[16px] top-[651px] w-[1281px]" data-name="Footnote">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase w-[672px] whitespace-pre-wrap">
        {`Copyright © 2026 Saratoga Compliance Solutions, LLC. `}
        <br aria-hidden="true" />
        {`All Rights Reserved. “Saratoga” and the stylized monogram are registered trademarks.  `}
      </p>
      <TermsOfService />
    </div>
  );
}

export default function DeveloperPortal() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col items-start relative size-full" data-name="Developer Portal">
      <Header />
      <Customers />
      <Customers1 />
      <div className="bg-[#110846] h-[717px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <Container2 />
        <Container3 />
        <Container4 />
        <Frame12 />
        <Frame3 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Frame7 />
        <Footnote />
      </div>
    </div>
  );
}