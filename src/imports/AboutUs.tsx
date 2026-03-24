import svgPaths from "./svg-nlk6vj1kj9";
import saratogaSpring from "../assets/saratoga-spring.svg";
import { useRef, useEffect, useState } from "react";
import Footer from "../app/components/Footer";
import { SaratogaButton } from "../app/components/SaratogaButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import { IconButton } from "../app/components/IconButton";
import { VideoPlayer } from "../app/components/VideoPlayer";
import { NumberHighlights as NumberHighlightsComponent } from "../app/components/NumberHighlights";
import imgVector from "../assets/ef5572c015c73d71d9a598d94ebd28c5a06adf97.png";
import imgVector1 from "../assets/1c2a7b782923b4a797dda50a3a1e6fb0170649e1.png";
import imgVector2 from "../assets/bbdd942b9d2a3b2723a6afbdc06ece526b00d413.png";
import imgVector3 from "../assets/a3c57464946e920728513cb8363c64d414926fea.png";
import StickyNav from "./Navigation";

function Video() {
  return (
    <div className="absolute bg-[#AF63FF] h-[662px] left-0 overflow-clip top-0 w-[1440px]" data-name="Video">
      <div className="absolute h-[810px] left-0 mix-blend-luminosity top-[-74px] w-[1440px]" data-name="6248300_Metropolis Dusk America New York_By_Feelm_Artlist_4K 1">
        <video autoPlay className="absolute max-w-none object-cover size-full" controlsList="nodownload" loop muted playsInline>
          <source src="https://res.cloudinary.com/dazob8wrm/video/upload/v1773742976/6248300_Metropolis_Dusk_America_New_York_By_Feelm_Artlist_4K_pzbfkm.mp4" type="video/mp4" />
        </video>
      </div>
      <PrimaryNavbar variant="dark" />
    </div>
  );
}

function Link19() {
  return <SaratogaButton variant="primary" color="white" showArrow>Request a Demo</SaratogaButton>;
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-full items-start relative shrink-0 w-[555px]">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.1] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[24px] tracking-[-0.24px] w-[min-content] whitespace-pre-wrap">
        {`20+ Years of Insurance Compliance Expertise. `}
        <br aria-hidden="true" />
        One Mission: Make Your Life Easier.
      </p>
      <Link19 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[493px] items-start min-h-px min-w-px relative w-full">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[40px] tracking-[-0.4px] whitespace-nowrap">About us</p>
      <Frame36 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="relative bg-[#300067] content-stretch flex flex-col h-[280px] items-start p-[80px] rounded-tl-[48px] rounded-tr-[48px] w-[1440px] mt-[-42px]">
      <Frame />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#300067] h-[662px] overflow-clip shrink-0 w-[1440px]" data-name="Header">
      <Video />
    </div>
  );
}

function Group15() {
  return (
    <div className="relative" style={{ width: '194.765px', height: '197px' }}>
      <div className="absolute h-[12.745px] w-[12.6px]" style={{ left: '91.04px', top: '92.57px' }} data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6003 12.7454">
          <path d={svgPaths.p3883fc30} fill="var(--fill-0, #8740FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute h-[82.946px] w-[82.002px]" style={{ left: '0px', top: '20.74px' }} data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.946" src={imgVector} width="82.002" />
      </div>
      <div className="absolute h-[82.946px] w-[82.005px]" style={{ left: '92.25px', top: '0px' }} data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.946" src={imgVector1} width="82.005" />
      </div>
      <div className="absolute h-[82.949px] w-[82.005px]" style={{ left: '112.76px', top: '93.31px' }} data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.949" src={imgVector2} width="82.005" />
      </div>
      <div className="absolute h-[82.95px] w-[82.002px]" style={{ left: '20.5px', top: '114.05px' }} data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.95" src={imgVector3} width="82.002" />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#af63ff] text-[0px] text-[20px] w-[522px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[1.2] text-[#f5f5f5]">Saratoga Compliance Solutions was founded on a simple premise: insurance compliance is too important to get wrong, and too complex to manage with spreadsheets and manual processes. For over two decades,</span>
          <span className="leading-[1.2]">{` we've partnered with insurance organizations of every size – from newly formed MGAs to some of the largest agencies and brokerages in the country – to deliver the software, managed compliance services and regulatory expertise they need to stay compliant, reduce costs and grow their businesses.`}</span>
        </p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2] mb-0">We are a dedicated group of insurance regulatory experts, software engineers, license operations executives and product managers building solutions to make your life easier. Our team combines deep industry knowledge with modern technology to deliver a compliance experience that is actually enjoyable to work with.</p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2]">With Headquarters in Saratoga Springs, NY – we serve clients across the U.S. and Canada.</p>
      </div>
    </div>
  );
}

function ScrollTrackingGroup15() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const sectionEl = el.closest('[data-name="Second-hero"]') as HTMLElement | null;
    if (!sectionEl) return;

    const handleScroll = () => {
      const sectionRect = sectionEl.getBoundingClientRect();
      const viewportH = window.innerHeight;

      // Progress 0 → section entering viewport from bottom
      // Progress 1 → section leaving viewport from top
      const scrolled = viewportH - sectionRect.top;
      const totalRange = viewportH + sectionRect.height;
      const delay = totalRange * 0.6;
      const end = totalRange * 0.7;
      const rawProgress = Math.min(Math.max((scrolled - delay) / (end - delay), 0), 1);
      // Smoothstep easing for fluid start/end
      const progress = rawProgress * rawProgress * (3 - 2 * rawProgress);

      // In -rotate-90 context, negative translateX = visual downward movement.
      // Start at top (0) → scroll to bottom (-maxTravel).
      const paddingBottom = 64;
      const symbolContainerHeight = 195;
      const maxTravel = Math.max(sectionRect.height - paddingBottom - symbolContainerHeight, 0);
      el.style.transform = `translateX(${-maxTravel * progress}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={elRef} className="will-change-transform">
      <Group15 />
    </div>
  );
}

function ScrollRevealText() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrolled = viewportH - rect.top;
      const totalRange = viewportH + rect.height;
      const p = Math.min(Math.max(scrolled / totalRange, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Map progress to gradient: white portion grows from top to bottom
  const whiteStop = Math.min(progress * 150, 100);
  const purpleStop = Math.min(whiteStop + 15, 100);

  const gradientStyle = `
    .scroll-reveal-gradient {
      background-image: linear-gradient(to bottom, #f5f5f5 ${whiteStop}%, #af63ff ${purpleStop}%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;

  return (
    <div ref={containerRef} className="content-stretch flex items-start relative shrink-0">
      <style>{gradientStyle}</style>
      <div
        className="scroll-reveal-gradient font-['Saans:Regular',sans-serif] not-italic relative shrink-0 text-[20px] w-[522px] whitespace-pre-wrap"
      >
        <p className="leading-[1.2] mb-0">
          Saratoga Compliance Solutions was founded on a simple premise: insurance compliance is too important to get wrong, and too complex to manage with spreadsheets and manual processes. For over two decades, we've partnered with insurance organizations of every size – from newly formed MGAs to some of the largest agencies and brokerages in the country – to deliver the software, managed compliance services and regulatory expertise they need to stay compliant, reduce costs and grow their businesses.
        </p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2] mb-0">We are a dedicated group of insurance regulatory experts, software engineers, license operations executives and product managers building solutions to make your life easier. Our team combines deep industry knowledge with modern technology to deliver a compliance experience that is actually enjoyable to work with.</p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2]">With Headquarters in Saratoga Springs, NY – we serve clients across the U.S. and Canada.</p>
      </div>
    </div>
  );
}

function SecondHero() {
  return (
    <div className="bg-[#300067] relative shrink-0 w-full" data-name="Second-hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[250px] items-end pb-[64px] px-[80px] relative w-full">
          <div className="flex flex-col items-center relative shrink-0 w-[400px]">
            <img src={saratogaSpring} alt="Saratoga Springs" className="w-[400px] object-contain" />
          </div>
          <ScrollRevealText />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-start pb-[40px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[350px]">{`Trusted By `}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[84px] items-start overflow-clip relative shrink-0 w-full">
      <Group />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group8() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group10() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group11() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group12() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #F5F5F5)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #F5F5F5)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #F5F5F5)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #F5F5F5)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #F5F5F5)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #F5F5F5)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #F5F5F5)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #F5F5F5)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex gap-[84px] items-center justify-end overflow-clip relative shrink-0 w-full">
      <Group7 />
      <Group8 />
      <Group9 />
      <Group10 />
      <Group11 />
      <Group12 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start justify-center opacity-75 relative shrink-0 w-full">
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1280px]">
      <Frame34 />
      <Frame32 />
    </div>
  );
}

function SecondHero1() {
  return (
    <div className="bg-[#110846] relative shrink-0 w-full" data-name="Second-hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[80px] py-[64px] relative w-full">
          <style>{`
            @keyframes marquee-right-about {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            @keyframes marquee-left-about {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1280px]">
            <Frame34 />
            <div className="content-stretch flex flex-col gap-[64px] items-start justify-center opacity-75 relative shrink-0 w-full">
              <div className="overflow-hidden relative shrink-0 w-full">
                <div
                  className="flex gap-[84px] items-start w-max"
                  style={{ animation: "marquee-right-about 30s linear infinite" }}
                >
                  <Group /><Group2 /><Group3 /><Group4 /><Group5 /><Group6 />
                  <Group /><Group2 /><Group3 /><Group4 /><Group5 /><Group6 />
                </div>
              </div>
              <div className="overflow-hidden relative shrink-0 w-full">
                <div
                  className="flex gap-[84px] items-center w-max"
                  style={{ animation: "marquee-left-about 30s linear infinite" }}
                >
                  <Group7 /><Group8 /><Group9 /><Group10 /><Group11 /><Group12 />
                  <Group7 /><Group8 /><Group9 /><Group10 /><Group11 /><Group12 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondHero2() {
  return (
    <div className="bg-[#bdbdd6] h-[434px] relative shrink-0 w-full" data-name="Second-hero">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[80px] py-[64px] relative size-full">
          <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[64px] text-[red] whitespace-nowrap">Values</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">{`Insurance Agencies & Brokers`}</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">{`MGAs & MGUs`}</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame37 />
      <Frame38 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">{`Wholesale + E&S Brokers`}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">{`Hybrid & Fronting Carriers`}</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">Insurance Carriers</p>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">InsurTechs</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame41 />
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[16px] items-center pb-[24px] relative shrink-0 w-[630px]">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-[#af63ff] shrink-0 size-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">{`Adjusters & Claims Managers`}</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Frame43 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame49 />
      <Frame52 />
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[70px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-[412px]">Placeholder text</p>
      <Frame53 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]">
      <Frame50 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="bg-[#300067] content-stretch flex flex-col gap-[10px] items-start px-[80px] py-[120px] relative shrink-0">
      <Frame51 />
    </div>
  );
}

function Frame30() {
  return (
    <VideoPlayer className="h-[467px] shrink-0 w-[785px]" />
  );
}

function Point() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#6a6b9e] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--left">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <path d={svgPaths.pc3cec00} fill="var(--fill-0, #6A6B9E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Point1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-[#af63ff] shrink-0 size-[6px]" />
    </div>
  );
}

function Point2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#f5f5f5] shrink-0 size-[6px]" />
    </div>
  );
}

function Point3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#f5f5f5] shrink-0 size-[6px]" />
    </div>
  );
}

function Point4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#f5f5f5] shrink-0 size-[6px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Point1 />
      <Point2 />
      <Point3 />
      <Point4 />
    </div>
  );
}

function Point5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <path d={svgPaths.p3be57f00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Point />
      <Frame9 />
      <Point5 />
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[35.639px] relative shrink-0 w-[35.232px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35.2319 35.6388">
        <g id="Group 59643">
          <path d={svgPaths.p1ea67000} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.p33273900} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p3ae2ac00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p13973c00} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
          <path d={svgPaths.pd573580} fill="var(--fill-0, #F5F5F5)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#af63ff] h-full relative rounded-[4px] shrink-0 w-[54px]" data-name="Logo">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[8px] relative size-full">
          <Group14 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-[293px]">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Company title</p>
    </div>
  );
}

function LogoName() {
  return (
    <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-[268px]" data-name="Logo+Name">
      <div className="flex flex-row items-end self-stretch">
        <Logo />
      </div>
      <Frame17 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] w-[408px] whitespace-pre-wrap">
        {`"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
        <br aria-hidden="true" />
        {`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip `}
        <br aria-hidden="true" />
        ex ea commodo consequat.”
      </p>
      <LogoName />
    </div>
  );
}

function Testimonial() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] h-[467px] items-start relative shrink-0 w-[413px]" data-name="Testimonial">
      <Frame3 />
      <Frame46 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame30 />
      <Testimonial />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]">
      <Frame45 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#300067] content-stretch flex flex-col gap-[10px] items-start px-[80px] py-[120px] relative shrink-0">
      <Frame57 />
    </div>
  );
}

function NumberHighlights() {
  return (
    <NumberHighlightsComponent
      title="Saratoga by the Numbers"
      bgColor="#4E0276"
      cards={[
        {
          icon: (
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
          ),
          label: "Employees",
          value: "000+",
          bgColor: "#110846",
        },
        {
          icon: (
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
          ),
          label: "Offices",
          value: "3",
          bgColor: "#8740ff",
          labelColor: "#110846",
        },
        {
          icon: (
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="User--filled">
              <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
                  <g id="Vector">
                    <path d={svgPaths.p15c76300} fill="#F5F5F5" />
                    <path d={svgPaths.pa517000} fill="#F5F5F5" />
                  </g>
                </svg>
              </div>
            </div>
          ),
          label: "Clients",
          value: "330+",
          bgColor: "#af63ff",
          labelColor: "#110846",
        },
        {
          icon: (
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
          ),
          label: "Years Building with Passion",
          value: "23+",
          bgColor: "#bcbcbc",
          labelColor: "#110846",
          valueColor: "#110846",
        },
      ]}
    />
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex font-['Saans:Regular',sans-serif] gap-[619px] items-start not-italic text-[#f5f5f5] w-[1280px]">
      <p className="leading-[1.1] relative shrink-0 text-[40px] tracking-[-0.4px] whitespace-nowrap">Leadership</p>
      <p className="leading-[1.2] relative shrink-0 text-[24px] w-[494px]">An Inter-Disciplinary Team Purpose Built to Serve Your Compliance Operations Needs</p>
    </div>
  );
}

function Frame59({ active = true }: { active?: boolean }) {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className={`absolute border-solid border-t border-b inset-0 pointer-events-none transition-colors duration-500 ${active ? 'border-[#af63ff]' : 'border-[#33317a]'}`} />
      <div className="flex flex-row items-center size-full">
        <div className={`content-stretch flex gap-[20px] items-center py-[16px] relative w-full transition-all duration-500 ${active ? 'pl-[64px]' : 'pl-0'}`}>
          <div className={`h-[32px] relative shrink-0 transition-all duration-500 overflow-hidden ${active ? 'w-[24px] opacity-100' : 'w-0 opacity-0'}`} data-name="Vector">
            <svg className="absolute block h-full w-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 32">
              <path d={svgPaths.p34f09d00} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
          <p className={`font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] whitespace-nowrap transition-colors duration-500 ${active ? 'text-[#af63ff]' : 'text-[#f5f5f5]'}`}>Executive Team</p>
        </div>
      </div>
    </div>
  );
}

function Frame61({ active = false }: { active?: boolean }) {
  return (
    <div className={`content-stretch flex gap-[20px] items-center py-[16px] relative shrink-0 w-full transition-all duration-500 ${active ? 'pl-[64px]' : 'pl-0'}`}>
      <div aria-hidden="true" className={`absolute border-solid border-b border-t inset-0 pointer-events-none transition-colors duration-500 ${active ? 'border-[#af63ff]' : 'border-[#33317a]'}`} />
      <div className={`h-[32px] relative shrink-0 transition-all duration-500 overflow-hidden ${active ? 'w-[24px] opacity-100' : 'w-0 opacity-0'}`} data-name="Vector">
        <svg className="absolute block h-full w-[24px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 32">
          <path d={svgPaths.p34f09d00} fill="var(--fill-0, #AF63FF)" id="Vector" />
        </svg>
      </div>
      <p className={`font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[20px] whitespace-nowrap transition-colors duration-500 ${active ? 'text-[#af63ff]' : 'text-[#f5f5f5]'}`}>Board of Directors</p>
    </div>
  );
}

function Frame60({ activeSection }: { activeSection: 'executive' | 'board' }) {
  return (
    <div className="sticky top-[152px] self-start content-stretch flex flex-col items-start shrink-0 w-[305.25px] bg-[#110846]">
      <Frame59 active={activeSection === 'executive'} />
      <Frame61 active={activeSection === 'board'} />
    </div>
  );
}

function Point6() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame70() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point6 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame72 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame70 />
      <Frame18 />
    </div>
  );
}

function Point7() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame71() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point7 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame73 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame71 />
      <Frame19 />
    </div>
  );
}

function Frame65() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
  });

  return (
    <div ref={ref} className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame64 /></div>
      <div style={getCardStyle(1)}><Frame67 /></div>
    </div>
  );
}

function Point8() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame74() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point8 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame75 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame74 />
      <Frame20 />
    </div>
  );
}

function Point9() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame77() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point9 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame78 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame77 />
      <Frame21 />
    </div>
  );
}

function Frame68() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
  });

  return (
    <div ref={ref} className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame69 /></div>
      <div style={getCardStyle(1)}><Frame76 /></div>
    </div>
  );
}

function Point10() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point10 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame82 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame81 />
      <Frame22 />
    </div>
  );
}

function Point11() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame84() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point11 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame85 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame84 />
      <Frame23 />
    </div>
  );
}

function Frame79() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
  });

  return (
    <div ref={ref} className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame80 /></div>
      <div style={getCardStyle(1)}><Frame83 /></div>
    </div>
  );
}

function Point12() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame88() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point12 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame89 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[468px]">
      <Frame88 />
      <Frame24 />
    </div>
  );
}

function Frame86() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
  });

  return (
    <div ref={ref} className="content-stretch flex items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame87 /></div>
    </div>
  );
}

function Point13() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame92() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point13 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame93 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame92 />
      <Frame25 />
    </div>
  );
}

function Point14() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point14 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame96 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame95 />
      <Frame26 />
    </div>
  );
}

function Frame90() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
  });

  return (
    <div ref={ref} className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame91 /></div>
      <div style={getCardStyle(1)}><Frame94 /></div>
    </div>
  );
}

function Point15() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point15 />
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame100 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame99 />
      <Frame27 />
    </div>
  );
}

function Point16() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame102() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point16 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame103 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start justify-center min-h-px min-w-px relative">
      <Frame102 />
      <Frame28 />
    </div>
  );
}

function Frame97() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
    flex: "1 0 0",
    minWidth: 0,
    minHeight: 0,
  });

  return (
    <div ref={ref} className="content-stretch flex gap-[20px] items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame98 /></div>
      <div style={getCardStyle(1)}><Frame101 /></div>
    </div>
  );
}

function Point17() {
  return (
    <div className="absolute right-[24px] size-[40px] top-[24px]" data-name="Point">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Point">
          <path d={svgPaths.p165fb200} fill="var(--fill-0, #F5F5F5)" />
          <path d={svgPaths.pe729e00} fill="var(--fill-0, #110846)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-[336px] relative shrink-0 w-full">
      <div className="absolute bg-[rgba(217,217,217,0.5)] h-[336px] left-0 rounded-[4px] top-0 w-[468px]" />
      <Point17 />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[24px] w-full">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase w-full">Role</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <Frame107 />
      <p className="font-['Saans:Regular',sans-serif] relative shrink-0 text-[16px] w-full">Lorem ipsum dolor sit amet consectetur. Dis morbi nibh fermentum a eros ut. Dictum adipiscing leo volutpat auctor tempus a semper ut nisi.</p>
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-[468px]">
      <Frame106 />
      <Frame29 />
    </div>
  );
}

function Frame104() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getCardStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: `opacity 1000ms ease-out ${index * 200}ms, transform 1000ms ease-out ${index * 200}ms`,
  });

  return (
    <div ref={ref} className="content-stretch flex items-start relative shrink-0 w-full">
      <div style={getCardStyle(0)}><Frame105 /></div>
    </div>
  );
}

function Frame66({ boardRef }: { boardRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div className="content-stretch flex flex-col gap-[120px] items-start w-[956px]">
      <Frame65 />
      <Frame68 />
      <Frame79 />
      <Frame86 />
      <div ref={boardRef} className="-mb-[120px]" />
      <Frame90 />
      <Frame97 />
      <Frame104 />
    </div>
  );
}

function OurValues() {
  const values = [
    {
      title: "Precision",
      description: "We strive for excellence in performance and outcomes, in everything we do. Being right and accurate matters to us.",
      icon: new URL("../assets/icon-goals.svg", import.meta.url).href,
    },
    {
      title: "Integrity",
      description: "We value honesty, transparency and strive to hold ourselves to a high standard.",
      icon: new URL("../assets/icon-integrity.svg", import.meta.url).href,
    },
    {
      title: "Trust",
      description: "We know our counterparties rely on us for critical workflows. We have earned that trust with 20 years of diligence. We do not want to lose that.",
      icon: new URL("../assets/icon-trust.svg", import.meta.url).href,
    },
    {
      title: "Expert",
      description: "We strive to be the best at what we do, to know our subject matter, to be interimately familiar with each of the regulators we interface with, to be a trusted thought partner to the clients we serve.",
      icon: new URL("../assets/icon-trophy.svg", import.meta.url).href,
    },
    {
      title: "Service",
      description: 'How can we do more for our clients? That is the question at the core of everything we do here. New products, innovative approaches, improved pricing, new features, more interface options. It\'s all about having a service mindset.',
      icon: new URL("../assets/icon-service.svg", import.meta.url).href,
    },
    {
      title: "Rigor",
      description: 'We sweat the details. We rely on our team to cross every "T", dot every "I" and ensure we test every line of code, every compliance managed service offering and validate each payment orchestration. Having attention to detail is critical.',
      icon: new URL("../assets/icon-rigor.svg", import.meta.url).href,
    },
    {
      title: "Ownership",
      description: "We are building Saratoga for the next 20 years, and every decision should be put in that context. We are curious, we care about the long-term well being of our clients, we care about excellence and craftsmanship. We don't hide things under the rug - we fix and remodel the flooring for the long-term.",
      icon: new URL("../assets/icon-ownership.svg", import.meta.url).href,
    },
  ];

  return (
    <div className="bg-[#110846] content-stretch flex items-start justify-between px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="Our Values">
      <p className="font-['Saans:Regular',sans-serif] leading-[40px] not-italic sticky top-[152px] shrink-0 text-[#f5f5f5] text-[36px] self-start">Our Values</p>
      <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip relative shrink-0 w-[738px]">
        {values.map((value, index) => (
          <div key={index} className="border-[#af63ff] border-solid border-t content-stretch flex items-start pb-[64px] pt-[32px] relative shrink-0 w-full" style={{ gap: `${140 - value.title.length * 2}px` }}>
            <div className="content-stretch flex gap-[32px] items-start relative shrink-0">
              <div className="relative shrink-0 size-[76px]">
                <img alt={value.title} className="absolute block max-w-none size-full" src={value.icon} />
              </div>
              <p className="font-['Saans:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[0.2px] whitespace-nowrap pt-[4px]">{value.title}</p>
            </div>
            <p className="font-['Saans:Regular',sans-serif] leading-[20px] not-italic relative text-[#f5f5f5] text-[16px] tracking-[0.16px] flex-1">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LatestFromTeamCard() {
  return (
    <div className="content-stretch flex gap-[24px] h-[420px] items-start relative shrink-0 w-[1089px]">
      <div className="bg-[#9293ba] h-full rounded-[4px] shrink-0 w-[500px]" />
      <div className="border-[#6a6b9e] border-l border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px pb-[24px] pl-[24px] pr-[40px] pt-[40px] relative">
        <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
          <div className="bg-[#af63ff] content-stretch flex h-[32px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0">
            <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Tag</p>
          </div>
          <div className="bg-[#af63ff] content-stretch flex h-[32px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0">
            <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Tag</p>
          </div>
          <div className="bg-[#af63ff] content-stretch flex h-[32px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0">
            <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Tag</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Saans:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] w-full">Maryland passes new insurance producer law</p>
          <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-full">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 cursor-pointer group/link">
          <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">READ MORE</p>
          <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
            <div className="overflow-clip relative shrink-0 size-[20px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
                <path d={svgPaths.p3be57f00} fill="var(--fill-0, #AF63FF)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LatestFromTeam() {
  return (
    <div className="bg-[#300067] content-stretch flex flex-col gap-[40px] items-start px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="Latest From Our Team">
      <p className="font-['Saans:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#f5f5f5] text-[28px]">Latest From Out Team</p>
      <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0">
        <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-[1360px]">
          <LatestFromTeamCard />
          <LatestFromTeamCard />
        </div>
      </div>
      {/* Navigation */}
      <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0 w-full">
        <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px] opacity-50">
          <div aria-hidden="true" className="absolute border border-[#9293ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="overflow-clip relative shrink-0 size-[20px]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
              <path d={svgPaths.pc3cec00} fill="var(--fill-0, #9293BA)" />
            </svg>
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]">
            <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="bg-[#af63ff] shrink-0 size-[6px]" />
          </div>
          <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]">
            <div className="bg-[#f5f5f5] shrink-0 size-[6px]" />
          </div>
          <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]">
            <div className="bg-[#f5f5f5] shrink-0 size-[6px]" />
          </div>
        </div>
        <IconButton size={40} variant="outline-white" />
      </div>
    </div>
  );
}

function TeamPhotos() {
  const labels = [
    "Lorem Ipsum Sin Dolore", "Lorem Ipsum Sin Dolore", "Lorem Ipsum Sin Dolore",
    "Lorem Ipsum Sin Dolore", "Lorem Ipsum Sin Dolore", "Lorem Ipsum Sin Dolore",
    "Lorem Ipsum Sin Dolore", "Lorem Ipsum Sin Dolore", "Lorem Ipsum Sin Dolore",
  ];

  return (
    <div className="bg-[#300067] content-stretch flex flex-col items-start px-[80px] py-[120px] relative shrink-0 w-[1440px]" data-name="Team Photos">
      <div className="content-stretch flex flex-col gap-[68px] items-start relative shrink-0 w-[1280px]">
        <p className="font-['Saans:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#f5f5f5] text-[28px]">Placeholder Text</p>
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          {[0, 1, 2].map((row) => (
            <div key={row} className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
              {[0, 1, 2].map((col) => (
                <div key={col} className="relative shrink-0 w-[420px] h-[336px]">
                  <div className="absolute bg-[rgba(217,217,217,0.5)] rounded-[4px] inset-0" />
                  <div className="absolute bottom-[24px] left-[24px] bg-[#af63ff] content-stretch flex h-[32px] items-center justify-center px-[24px] py-[8px] rounded-[4px]">
                    <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">{labels[row * 3 + col]}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  const boardRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<'executive' | 'board'>('executive');

  useEffect(() => {
    const el = boardRef.current;
    if (!el) return;
    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      setActiveSection(rect.top <= 150 ? 'board' : 'executive');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#110846] relative shrink-0 w-[1440px] px-[80px] pt-[120px]">
      <Frame1 />
      <div className="flex items-start gap-[20px] pt-[58px] pb-[120px]">
        <Frame60 activeSection={activeSection} />
        <Frame66 boardRef={boardRef} />
      </div>
    </div>
  );
}

function Icon2() {
  return <IconButton size={40} variant="filled-white" />;
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="CTA">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">LEARN MORE</p>
      <Icon2 />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <div className="h-[39px] relative shrink-0 w-[44px]" data-name="briefcase_00000176028188989042191350000009464438092062443450_">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 39">
          <path d={svgPaths.p13669700} fill="var(--fill-0, #F5F5F5)" id="briefcase_00000176028188989042191350000009464438092062443450_" />
        </svg>
      </div>
      <Cta />
    </div>
  );
}

function Frame48() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px] transition-colors duration-300"
      style={{ backgroundColor: hovered ? '#8740ff' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
            <div className="h-[39px] relative shrink-0 w-[44px]" data-name="briefcase_00000176028188989042191350000009464438092062443450_">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 39">
                <path d={svgPaths.p13669700} fill="var(--fill-0, #F5F5F5)" id="briefcase_00000176028188989042191350000009464438092062443450_" />
              </svg>
            </div>
            {hovered ? <Cta /> : (
              <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
                <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow--right">
                  <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
                      <path d={svgPaths.p2cb8b080} fill="var(--fill-0, #F5F5F5)" id="Vector" />
                    </svg>
                  </div>
                </div>
              </div>
            )}
          </div>
          <p className="font-['Saans:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-full">Careers</p>
        </div>
      </div>
      {!hovered && <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />}
    </div>
  );
}

function Point18() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Header2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <div className="h-[33px] relative shrink-0 w-[44px]" data-name="envelope_1_">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
          <path d={svgPaths.p23236880} fill="var(--fill-0, #F5F5F5)" id="envelope_1_" />
        </svg>
      </div>
      <Point18 />
    </div>
  );
}

function Frame62() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px] transition-colors duration-300"
      style={{ backgroundColor: hovered ? '#8740ff' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
            <div className="h-[33px] relative shrink-0 w-[44px]" data-name="envelope_1_">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
                <path d={svgPaths.p23236880} fill="var(--fill-0, #F5F5F5)" id="envelope_1_" />
              </svg>
            </div>
            {hovered ? <Cta /> : <Point18 />}
          </div>
          <p className="font-['Saans:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-full">Newsroom</p>
        </div>
      </div>
      {!hovered && <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />}
    </div>
  );
}

function Point19() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Header3() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <div className="h-[38px] relative shrink-0 w-[44px]" data-name="storage--systems_00000138564125714695197280000006890426104017600137_">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 38">
          <path d={svgPaths.p9343180} fill="var(--fill-0, #F5F5F5)" id="storage--systems_00000138564125714695197280000006890426104017600137_" />
        </svg>
      </div>
      <Point19 />
    </div>
  );
}

function Frame63() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px] transition-colors duration-300"
      style={{ backgroundColor: hovered ? '#8740ff' : 'transparent' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
          <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
            <div className="h-[38px] relative shrink-0 w-[44px]" data-name="storage--systems_00000138564125714695197280000006890426104017600137_">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 38">
                <path d={svgPaths.p9343180} fill="var(--fill-0, #F5F5F5)" id="storage--systems_00000138564125714695197280000006890426104017600137_" />
              </svg>
            </div>
            {hovered ? <Cta /> : <Point19 />}
          </div>
          <p className="font-['Saans:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-full">Resources</p>
        </div>
      </div>
      {!hovered && <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />}
    </div>
  );
}

function Frame47() {
  return (
    <div className="bg-[#300067] content-stretch flex gap-[16px] h-[323px] items-center pt-[120px] px-[16px] relative shrink-0 w-[1440px]">
      <Frame48 />
      <Frame62 />
      <Frame63 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Join Saratoga.<br/>Build Something Special With Us</p>
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">{`Our team is growing. Are you talented, passionate, detail-oriented and looking to join a high growth organization? Connect with us today.`}</p>
    </div>
  );
}

function Link20() {
  return <SaratogaButton variant="primary" color="white" showArrow>View open roles</SaratogaButton>;
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame14 />
      <Link20 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-[1408px]">
      <Frame13 />
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

function Customers() {
  return (
    <div className="bg-[#300067] content-stretch flex flex-col items-start overflow-clip p-[16px] relative shrink-0" data-name="Customers">
      <Frame12 />
    </div>
  );
}

const CARD_ICONS = {
  briefcase: "https://www.figma.com/api/mcp/asset/d7fa3b75-08df-479d-bd5c-8d5d3fea7260",
  envelope: "https://www.figma.com/api/mcp/asset/a7ba7335-a7ed-4723-809d-22f6fddceeb5",
  storage: "https://www.figma.com/api/mcp/asset/e8b78873-2a0d-42e3-add6-8faca555809b",
};

function AboutUsCardsRow() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cards = [
    { bg: "#110846", icon: CARD_ICONS.briefcase, title: "Careers",   textColor: "#f5f5f5", borderColor: "#f5f5f5", hoverBg: "#f5f5f5", hoverArrow: "#110846" },
    { bg: "#bcbcbc", icon: CARD_ICONS.envelope,  title: "Newsroom",  textColor: "#110846", borderColor: "#110846", hoverBg: "#110846", hoverArrow: "#f5f5f5" },
    { bg: "#af63ff", icon: CARD_ICONS.storage,   title: "Resources", textColor: "#f5f5f5", borderColor: "#f5f5f5", hoverBg: "#f5f5f5", hoverArrow: "#110846" },
  ];

  return (
    <div className="bg-[#300067] w-full px-[16px] pt-[120px]">
      <div className="flex gap-[16px] w-full">
        {cards.map((card, i) => (
          <div
            key={i}
            className="flex-[1_0_0] h-[200px] flex flex-col justify-between p-[24px] rounded-[8px]"
            style={{ backgroundColor: card.bg }}
          >
            <div className="flex items-start justify-between w-full">
              <img src={card.icon} alt="" className="h-[38px] w-[44px] object-contain" />
              <div
                className="flex items-center gap-[16px] cursor-pointer"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <span
                  className="font-['Px_Grotesk:Regular',sans-serif] text-[14px] uppercase tracking-[0.08em] whitespace-nowrap"
                  style={{
                    color: card.textColor,
                    opacity: hovered === i ? 1 : 0,
                    transition: "opacity 0.25s ease",
                  }}
                >
                  LEARN MORE
                </span>
                <div
                  className="flex items-center justify-center rounded-[4px] size-[40px]"
                  style={{
                    backgroundColor: hovered === i ? card.hoverBg : "transparent",
                    border: `1px solid ${card.borderColor}`,
                    transition: "background-color 0.25s ease",
                  }}
                >
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                    <path d="M14 6.5L8.5 1M14 6.5L8.5 12M14 6.5H1" stroke={hovered === i ? card.hoverArrow : card.textColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Saans:Medium',sans-serif] text-[24px] leading-[28px]" style={{ color: card.textColor }}>
              {card.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function JoinSaratogaSection() {
  const imgLeft  = "https://www.figma.com/api/mcp/asset/1304d266-09cb-4e06-8617-851913f15811";
  const imgRight = "https://www.figma.com/api/mcp/asset/cabc1599-4037-42dc-97f7-c1f148f8a81b";
  const imgArrow = "https://www.figma.com/api/mcp/asset/d9e28ab3-043b-4e15-976e-36f23de1ceea";

  return (
    <div className="bg-[#300067] p-[16px]">
      <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px]">
        <div className="absolute left-0 top-0 h-full w-[479px]">
          <img alt="" className="absolute block size-full object-cover" src={imgLeft} />
        </div>
        <div className="absolute right-0 top-0 h-full w-[475px] rotate-180">
          <img alt="" className="absolute block size-full object-cover" src={imgRight} />
        </div>
        <div className="absolute inset-0 flex flex-col gap-[40px] items-center justify-center">
          <div className="flex flex-col gap-[24px] items-center w-[731px]">
            <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[40px] text-[#f5f5f5] text-center">
              {"Join Saratoga. \nBuild Something \nSpecial With Us"}
            </p>
            <p className="font-['Saans:Regular',sans-serif] text-[18px] leading-[24px] text-[#f5f5f5] text-center tracking-[0.18px]">
              Our team is growing. Are you talented, passionate,<br />
              detail-oriented and looking to join a high growth organization? Connect with us today.
            </p>
          </div>
          <div className="bg-[#f5f5f5] flex gap-[16px] h-[40px] items-center pl-[24px] pr-[4px] rounded-[4px] cursor-pointer">
            <span className="font-['Px_Grotesk:Regular',sans-serif] text-[14px] text-[#110846] uppercase whitespace-nowrap">view open roles</span>
            <div className="bg-[#af63ff] flex items-center justify-center rounded-[4px] size-[32px]">
              <img src={imgArrow} alt="" className="size-[20px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const headerWrapperRef = useRef<HTMLDivElement>(null);
  // Navbar height (~132px): 16px padding-top + 44px secondary nav + 72px main nav
  const NAV_HEIGHT = 132;
  // Frame54: visual top = 620px (662 header - 42 overlap), height = 280px, bottom = 900px
  // Push starts 168px before Frame54 reaches navbar bottom edge
  const PUSH_START = 620 - NAV_HEIGHT - 168; // ~320px
  // Frame54 fully exits viewport when its bottom (900px) scrolls past y=0
  const FRAME54_EXIT = 900;

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (headerWrapperRef.current) {
            if (scrollY >= PUSH_START) {
              const offset = scrollY - PUSH_START;
              headerWrapperRef.current.style.transform = `translateY(-${offset}px)`;
            } else {
              headerWrapperRef.current.style.transform = '';
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="About us">
      <div
        ref={headerWrapperRef}
        className="sticky top-0 z-0 w-full will-change-transform"
        style={{ transition: 'transform 0.3s ease-out' }}
      >
        <Header />
      </div>
      <div className="sticky top-0 z-50 w-full h-0 overflow-visible">
        <StickyNav headerHeight={FRAME54_EXIT} />
      </div>
      <div className="relative z-10 flex flex-col items-start w-full">
        <Frame54 />
        <SecondHero />
        <SecondHero1 />
        <LatestFromTeam />
        <OurValues />
        <TeamPhotos />
        <NumberHighlights />
        <Frame58 />
        <AboutUsCardsRow />
        <Customers />
        <Footer variant="purple" />
      </div>
    </div>
  );
}