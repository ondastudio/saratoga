import svgPaths from "./svg-2h0fxmk7au";
import { useState, useEffect, useRef } from "react";
import { Link as RouterLink } from "react-router";
import { FooterLink } from "../app/components/FooterLink";
import { FilingIconAnimated } from "../app/components/FilingIconAnimated";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { NavLink } from "../app/components/NavLink";
import { IconButton } from "../app/components/IconButton";
import { ArrowIcon } from "../app/components/ArrowIcon";
import { VideoPlayer } from "../app/components/VideoPlayer";
import StickyNav from "./Navigation";

const marqueeStyles = `
@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
}
@keyframes marquee-left {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
`;

function Group() {
  return (
    <div className="absolute inset-[45.5%_0_0_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2049.12 784.86">
        <g id="Group">
          <path d={svgPaths.p22bbb900} fill="url(#paint0_linear_102_1629)" id="Vector" />
          <path d={svgPaths.p28426c0} fill="url(#paint1_linear_102_1629)" id="Vector_2" />
          <path d={svgPaths.p14433a00} fill="url(#paint2_linear_102_1629)" id="Vector_3" />
          <path d={svgPaths.p4f6b100} fill="url(#paint3_linear_102_1629)" id="Vector_4" />
          <path d={svgPaths.peca9300} fill="url(#paint4_linear_102_1629)" id="Vector_5" />
          <path d={svgPaths.p379000f0} fill="url(#paint5_linear_102_1629)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_102_1629" x1="1591.27" x2="169.453" y1="719.283" y2="719.283">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_102_1629" x1="1694.59" x2="272.768" y1="588.532" y2="588.532">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_102_1629" x1="1750.71" x2="328.889" y1="457.796" y2="457.796">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_102_1629" x1="1854.04" x2="432.217" y1="327.064" y2="327.064">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_102_1629" x1="1914.62" x2="492.793" y1="196.32" y2="196.32">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_102_1629" x1="2018.57" x2="596.749" y1="65.5768" y2="65.5768">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[0_0_45.5%_0]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2049.12 784.856">
        <g id="Group">
          <path d={svgPaths.p3e6a1300} fill="url(#paint0_linear_102_1637)" id="Vector" />
          <path d={svgPaths.p20c7400} fill="url(#paint1_linear_102_1637)" id="Vector_2" />
          <path d={svgPaths.p1db09a00} fill="url(#paint2_linear_102_1637)" id="Vector_3" />
          <path d={svgPaths.p2d125e00} fill="url(#paint3_linear_102_1637)" id="Vector_4" />
          <path d={svgPaths.pd9bc700} fill="url(#paint4_linear_102_1637)" id="Vector_5" />
          <path d={svgPaths.p2b451070} fill="url(#paint5_linear_102_1637)" id="Vector_6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_102_1637" x1="1591.27" x2="169.453" y1="65.5669" y2="65.5669">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_102_1637" x1="1694.58" x2="272.762" y1="196.322" y2="196.322">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_102_1637" x1="1750.7" x2="328.883" y1="327.054" y2="327.054">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_102_1637" x1="1854.04" x2="432.217" y1="457.8" y2="457.8">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint4_linear_102_1637" x1="1914.62" x2="492.793" y1="588.534" y2="588.534">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint5_linear_102_1637" x1="2018.57" x2="596.749" y1="719.29" y2="719.29">
            <stop stopColor="white" />
            <stop offset="0.47" stopColor="#A567F7" />
            <stop offset="0.75" stopColor="#7E44F6" />
            <stop offset="1" stopColor="#100843" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IsolationMode() {
  return (
    <div className="backdrop-blur-[2px] bg-[#110846] overflow-clip relative size-full" data-name="Isolation_Mode">
      <Group />
      <Group1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[140px] items-start relative shrink-0 w-[650px]">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[40px] tracking-[-0.4px] w-[497px] whitespace-pre-wrap">
        {`Insurance Agencies `}
        <br aria-hidden="true" />
        {`& Brokers`}
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[512px]">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] tracking-[-0.24px] w-full whitespace-pre-wrap">
        {`Compliance Software & Managed Services `}
        <br aria-hidden="true" />
        Built for the Way Agencies Actually Work
      </p>
    </div>
  );
}

function Icon() {
  return <IconButton size={32} variant="filled-lilac" />;
}

function Link() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[16px] h-[40px] items-center pl-[24px] pr-[4px] relative rounded-[8px] shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">rEQUEST A DEMO</p>
      <Icon />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <Frame2 />
      <Link />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[73px] content-stretch flex items-start left-[80px] w-[1280px]">
      <Frame />
      <Frame21 />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">{`About `}</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Carrers</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">cONTACT</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">sUPPORT</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
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

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pb-[4px] relative">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Group3() {
  return (
    <RouterLink to="/" aria-label="Go to homepage" style={{ display: "block" }}>
    <div className="h-[40px] relative shrink-0 w-[150.345px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.345 40">
        <g id="Group 15439">
          <path d={svgPaths.pfdd2400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p264cbcf0} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p33f8b580} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p6d8ab70} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p1911cd00} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p24380180} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p17e56580} fill="var(--fill-0, #110846)" id="Vector_7" />
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
          <path d={svgPaths.p2f44fa80} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p52cbc00} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p1cf9ed00} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p15175680} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p2d5e6900} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p5d26700} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p15dd8500} fill="var(--fill-0, white)" id="Vector_25" />
        </g>
      </svg>
    </div>
    </RouterLink>
  );
}

function Frame16() {
  return <NavLink variant="chevron">Products</NavLink>;
}

function Link9() {
  return <NavLink>Why Saratoga?</NavLink>;
}

function Link10() {
  return <NavLink variant="chevron">Solutions</NavLink>;
}

function Link12() {
  return <NavLink variant="chevron">Resources</NavLink>;
}

function Link14() {
  return <NavLink variant="chevron">Partners</NavLink>;
}

function Link16() {
  return <NavLink variant="chevron">Company</NavLink>;
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Frame16 />
      <Link9 />
      <Link10 />
      <Link12 />
      <Link14 />
      <Link16 />
    </div>
  );
}

function Link18() {
  return <SaratogaButton variant="ghost" color="white">Login</SaratogaButton>;
}

function Link19() {
  return <SaratogaButton variant="primary" color="lilac">Request a Demo</SaratogaButton>;
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Link18 />
      <Link19 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8740ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[8px] py-[16px] relative w-full">
          <Group3 />
          <Container1 />
          <Action />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[645px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <div className="absolute flex inset-[-201.86%_0_-15.83%_0] items-center justify-center">
        <div className="-rotate-90 flex-none h-[1440px] w-[2049.123px]">
          <IsolationMode />
        </div>
      </div>
      <Frame1 />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-end left-1/2 pt-[16px] px-[80px] top-0 w-[1440px]" data-name="Navigation">
        <Container />
        <Frame3 />
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex items-start pb-[40px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8740ff] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[350px]">{`Trusted By `}</p>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group7() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="overflow-hidden relative shrink-0 w-full">
      <div
        className="flex gap-[84px] items-start w-max"
        style={{ animation: "marquee-right 30s linear infinite" }}
      >
        <Group2 /><Group4 /><Group5 /><Group6 /><Group7 /><Group8 />
        <Group2 /><Group4 /><Group5 /><Group6 /><Group7 /><Group8 />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p33f87f00} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.pcb8b900} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p2636b00} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p135c9700} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
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
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group13() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Group14() {
  return (
    <div className="h-[41.239px] relative shrink-0 w-[155px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 155 41.239">
        <g id="Group 15438">
          <path d={svgPaths.p2bfe3a80} fill="var(--fill-0, #110846)" id="Vector" />
          <path d={svgPaths.pbee2d00} fill="var(--fill-0, #110846)" id="Vector_2" />
          <path d={svgPaths.p296810c0} fill="var(--fill-0, #110846)" id="Vector_3" />
          <path d={svgPaths.p1f644c00} fill="var(--fill-0, #110846)" id="Vector_4" />
          <path d={svgPaths.p3810b800} fill="var(--fill-0, #110846)" id="Vector_5" />
          <path d={svgPaths.p1dcd0780} fill="var(--fill-0, #110846)" id="Vector_6" />
          <path d={svgPaths.p249be680} fill="var(--fill-0, #110846)" id="Vector_7" />
          <path d={svgPaths.p8ebc680} fill="var(--fill-0, #110846)" id="Vector_8" />
          <path d={svgPaths.p289da200} fill="var(--fill-0, #110846)" id="Vector_9" />
          <path d={svgPaths.p323d7c80} fill="var(--fill-0, #110846)" id="Vector_10" />
          <path d={svgPaths.p24dfbeb0} fill="var(--fill-0, #110846)" id="Vector_11" />
          <path d={svgPaths.p8711b00} fill="var(--fill-0, #110846)" id="Vector_12" />
          <path d={svgPaths.p5ba000} fill="var(--fill-0, #110846)" id="Vector_13" />
          <path d={svgPaths.pca5b600} fill="var(--fill-0, #110846)" id="Vector_14" />
          <path d={svgPaths.p1a0ac500} fill="var(--fill-0, #110846)" id="Vector_15" />
          <path d={svgPaths.p32363640} fill="var(--fill-0, #110846)" id="Vector_16" />
          <path d={svgPaths.pa6ccf40} fill="var(--fill-0, #110846)" id="Vector_17" />
          <path d={svgPaths.p26605f00} fill="var(--fill-0, #110846)" id="Vector_18" />
          <path d={svgPaths.p309bf680} fill="var(--fill-0, #110846)" id="Vector_19" />
          <path d={svgPaths.p246aa880} fill="var(--fill-0, #110846)" id="Vector_20" />
          <path d={svgPaths.p3a58e810} fill="var(--fill-0, #110846)" id="Vector_21" />
          <path d={svgPaths.p24848980} fill="var(--fill-0, #110846)" id="Vector_22" />
          <path d={svgPaths.p8a26ef2} fill="var(--fill-0, #110846)" id="Vector_23" />
          <path d={svgPaths.p12f5a300} fill="var(--fill-0, #110846)" id="Vector_24" />
          <path d={svgPaths.p36ed7120} fill="var(--fill-0, #110846)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="overflow-hidden relative shrink-0 w-full">
      <div
        className="flex gap-[84px] items-center w-max"
        style={{ animation: "marquee-left 30s linear infinite" }}
      >
        <Group9 /><Group10 /><Group11 /><Group12 /><Group13 /><Group14 />
        <Group9 /><Group10 /><Group11 /><Group12 /><Group13 /><Group14 />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start justify-center opacity-75 relative shrink-0 w-full">
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1280px]">
      <Frame26 />
      <Frame23 />
    </div>
  );
}

function SecondHero() {
  return (
    <div className="bg-[#ededed] relative shrink-0 w-full" data-name="Second-hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[120px] pt-[64px] px-[80px] relative w-full">
          <Frame24 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[488px]" data-name="Title">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.15] not-italic relative shrink-0 text-[#110846] text-[36px] w-full whitespace-pre-wrap">
        {`Compliance is slowing `}
        <br aria-hidden="true" />
        your producers down
      </p>
    </div>
  );
}

function Body() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative self-stretch shrink-0 w-[630px]" data-name="Body">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[20px] w-full whitespace-pre-wrap">
        {`As an agency or brokerage, your revenue depends on getting producers licensed, contracted and selling as quickly as possible. `}
        <br aria-hidden="true" />
        {`But the compliance overhead – license renewals, appointment tracking, surplus lines filings, E&O verification, CE monitoring – consumes time and resources that should be driving growth. Saratoga was built to solve this exact problem.`}
      </p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[1279px]">
      <Title />
      <Body />
    </div>
  );
}

function OpeningText() {
  return (
    <div className="relative shrink-0 w-full" data-name="Opening Text">
      <div className="content-stretch flex flex-col items-start px-[80px] py-[84px] relative w-full">
        <Frame22 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic overflow-hidden relative shrink-0 text-[#110846] text-[28px] text-ellipsis w-[786px]">
        <p className="mb-0">Hear Our Customers In</p>
        <p>Their Own Words</p>
      </div>
    </div>
  );
}

function Frame19() {
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

  return (
    <div
      ref={ref}
      className="shrink-0 transition-all duration-1000 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(80px)",
      }}
    >
      <VideoPlayer className="h-[467px] w-[785px]" />
    </div>
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
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Point3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Point4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Frame10() {
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
            <path d={svgPaths.p3be57f00} fill="var(--fill-0, #110846)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Point />
      <Frame10 />
      <Point5 />
    </div>
  );
}

function Group16() {
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
          <Group16 />
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[1.2] not-italic relative shrink-0 text-[#110846] w-[293px]">
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
      <Frame18 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-between min-h-px min-w-px relative w-full">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#110846] text-[20px] tracking-[-0.2px] w-[408px] whitespace-pre-wrap">
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
      <Frame4 />
      <Frame35 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame19 />
      <Testimonial />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1280px]">
      <Frame34 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full">
      <Frame31 />
      <Frame37 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start px-[80px] py-[84px] relative shrink-0">
      <Frame38 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[1280px]">
      <Frame36 />
    </div>
  );
}

function TextHighlight() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Highlight">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[36px] w-[412px]">{`How Saratoga Helps Agencies & Brokers`}</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[64px] relative shrink-0 w-[1280px]">
      <TextHighlight />
    </div>
  );
}

function Numbers() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] text-center w-[23px]">01</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[409.557px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Saans:Medium',sans-serif] leading-[1.2] left-0 not-italic text-[#110846] text-[24px] top-[-0.01px] whitespace-nowrap">Rapid Producer Onboarding</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[24px] h-[31.991px] items-center relative shrink-0 w-full" data-name="Container">
      <Numbers />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[110px] relative shrink-0 w-[571px]" data-name="Paragraph">
      <p className="absolute font-['Saans:Regular',sans-serif] h-[131px] leading-[1.2] left-[58.02px] not-italic text-[#110846] text-[18px] top-[1.01px] w-[513px]">Operating under a trade name or “doing business as” designation? We manage the filing and publication obligations associated with DBA registrations, monitor renewal dates on your behalf and ensure your DBA registrations are filed well in advance of impending deadlines – all while providing you with complete visibility and peace of mind.</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[188px] items-start relative shrink-0 w-[571px]">
      <Container6 />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#c694fe] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[40px] relative w-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#8740ff] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[25.985px] relative w-full">
        <Container5 />
      </div>
    </div>
  );
}

function Numbers1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] text-center w-[23px]">02</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[409.557px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Saans:Medium',sans-serif] leading-[1.2] left-0 not-italic text-[#110846] text-[24px] top-[-0.01px] whitespace-nowrap">Always-On Compliance Monitoring</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[24px] h-[31.991px] items-center relative shrink-0 w-full" data-name="Container">
      <Numbers1 />
      <Heading1 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start px-[32px] py-[40px] relative rounded-[6px] shrink-0 w-[712px]" data-name="Container">
      <Frame29 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[25.985px] relative shrink-0 w-[738px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#bdbdd6] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container8 />
    </div>
  );
}

function Numbers2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] text-center w-[23px]">03</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[409.557px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Saans:Medium',sans-serif] leading-[1.2] left-0 not-italic text-[#110846] text-[24px] top-[-0.01px] whitespace-nowrap">One Unified Platform for All Producer Data</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[24px] h-[31.991px] items-center relative shrink-0 w-full" data-name="Container">
      <Numbers2 />
      <Heading2 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[40px] relative w-full">
        <Frame32 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[25.985px] relative shrink-0 w-[738px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#bdbdd6] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Numbers3() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[32px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] text-center w-[23px]">04</p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[27.997px] relative shrink-0 w-[409.557px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Saans:Medium',sans-serif] leading-[1.2] left-0 not-italic text-[#110846] text-[24px] top-[-0.01px] whitespace-nowrap">{`Affordable & Scalable`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[24px] h-[31.991px] items-center relative shrink-0 w-full" data-name="Container">
      <Numbers3 />
      <Heading3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[40px] relative w-full">
        <Frame33 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[25.985px] relative shrink-0 w-[738px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#bdbdd6] border-l-2 border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-0 top-0 w-[738px]">
      <Container4 />
      <Container7 />
      <Container10 />
      <Container13 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[624px] left-0 top-[-0.48px] w-[1280px]" data-name="Container">
      <Frame28 />
    </div>
  );
}

function Unified() {
  return <div className="bg-[#dfdfdf] h-[628px] rounded-[4px] shrink-0 w-[476px]" data-name="Unified" />;
}

function Container16() {
  return (
    <div className="absolute content-stretch flex h-[628px] items-center justify-center left-[804px] rounded-[4px] top-0 w-[476px]" data-name="Container">
      <Unified />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[624px] relative shrink-0 w-[1280px]" data-name="Container">
      <Container3 />
      <Container16 />
    </div>
  );
}

const accordionItems = [
  {
    number: "01",
    title: "Rapid Producer Onboarding",
    paragraph:
      "Operating under a trade name or \u201Cdoing business as\u201D designation? We manage the filing and publication obligations associated with DBA registrations, monitor renewal dates on your behalf and ensure your DBA registrations are filed well in advance of impending deadlines \u2013 all while providing you with complete visibility and peace of mind.",
  },
  {
    number: "02",
    title: "Always-On Compliance Monitoring",
    paragraph:
      "Stop guessing about license renewals, CE requirements or state-by-state regulatory changes. Our platform monitors compliance continuously and updates automatically as rules evolve.",
  },
  {
    number: "03",
    title: "One Unified Platform for All Producer Data",
    paragraph:
      "End the fragmentation. Consolidate producer records, license statuses, appointment details and compliance documentation into one centralized platform that your entire organization can access.",
  },
  {
    number: "04",
    title: "Affordable & Scalable",
    paragraph:
      "Whether you manage 50 producers or 5,000, our pricing scales with your business. No hidden fees, no surprise charges \u2013 just predictable costs that deliver measurable savings from Day 1.",
  },
];

function Frame25() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const STEP_DURATION = 6000;
  const INTERVAL = 50;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = (INTERVAL / STEP_DURATION) * 100;
        const next = prev + increment;
        if (next >= 100) {
          setActiveIndex((prevIndex) => (prevIndex + 1) % accordionItems.length);
          return 0;
        }
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start px-[80px] py-[84px] relative shrink-0 w-[1440px]">
      <Frame20 />
      <div className="relative shrink-0 w-[1280px]" data-name="Container">
        <div className="flex items-start justify-between w-full">
          {/* Accordion list */}
          <div className="flex flex-col gap-[8px] items-start w-[738px]">
            {accordionItems.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.number}
                  className="shrink-0 w-full cursor-pointer"
                  onClick={() => handleStepClick(index)}
                  data-name="Container"
                >
                  <div
                    className={`relative shrink-0 w-full transition-colors duration-300 ${
                      isActive ? "" : ""
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 pointer-events-none w-[2px]"
                    >
                      {/* Background line */}
                      <div className={`absolute inset-0 w-[2px] transition-colors duration-300 ${
                        index < activeIndex ? "bg-[#8740ff]" : "bg-[#bdbdd6]"
                      }`} />
                      {/* Progress fill for active step */}
                      {isActive && (
                        <div
                          className="absolute top-0 left-0 w-[2px] bg-[#8740ff]"
                          style={{ height: `${progress}%`, transition: "height 50ms linear" }}
                        />
                      )}
                    </div>
                    <div className="content-stretch flex flex-col items-start pl-[25.985px] w-full">
                      <div
                        className={`relative rounded-[4px] shrink-0 w-full transition-colors duration-300 ${
                          isActive ? "bg-[#c694fe]" : ""
                        }`}
                      >
                        <div className="content-stretch flex flex-col items-start px-[32px] py-[40px] w-full">
                          <div className="content-stretch flex flex-col gap-[24px] items-start w-[571px]">
                            {/* Number + Title row */}
                            <div className="flex flex-row gap-[24px] items-center w-full">
                              <div className="relative flex items-center justify-center rounded-[4px] shrink-0 size-[32px]" data-name="Numbers">
                                <div
                                  aria-hidden="true"
                                  className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]"
                                />
                                <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1] not-italic text-[#110846] text-[14px] text-center">
                                  {item.number}
                                </p>
                              </div>
                              <p
                                className={`leading-[1] not-italic text-[#110846] text-[24px] whitespace-nowrap transition-all duration-300 ${
                                  isActive
                                    ? "font-['Saans:Medium',sans-serif]"
                                    : "font-['Saans:Regular',sans-serif]"
                                }`}
                              >
                                {item.title}
                              </p>
                            </div>
                            {/* Paragraph with animated expand/collapse */}
                            <div
                              className="overflow-hidden transition-all duration-500 ease-in-out"
                              style={{
                                maxHeight: isActive ? "300px" : "0px",
                                opacity: isActive ? 1 : 0,
                                marginTop: isActive ? "0px" : "-24px",
                              }}
                            >
                              <div className="relative w-[571px]" data-name="Paragraph">
                                <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic text-[#110846] text-[18px] pl-[58.02px] w-[571px]">
                                  {item.paragraph}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Image placeholder */}
          <div className="content-stretch flex h-[628px] items-center justify-center rounded-[4px] shrink-0 w-[476px]" data-name="Container">
            <FilingIconAnimated activeStep={activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Ready to Work with Saratoga Compliance?</p>
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">{`Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga`}</p>
    </div>
  );
}

function Link20() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame15 />
      <Link20 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#8740ff] h-[484px] left-1/2 overflow-clip rounded-[4px] top-[120px] w-[1408px]">
      <Frame14 />
      <div className="absolute h-[484.515px] left-0 top-[-0.24px] w-[479px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 484.515">
          <path d={svgPaths.p3ee3cd80} fill="var(--fill-0, #6800E2)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex h-[484px] items-center justify-center left-[963px] top-0 w-[479px]">
        <div className="flex-none rotate-180">
          <div className="h-[484px] relative w-[479px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 484">
              <path d={svgPaths.p35868400} fill="var(--fill-0, #6800E2)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Customers() {
  return (
    <div className="h-[620px] overflow-clip relative shrink-0 w-[1440px]" data-name="Customers">
      <Frame13 />
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

function Container17() {
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

function Container18() {
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

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="capitalize font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px]">BY USE CASE</p>
      <List2 />
    </div>
  );
}

function Group15() {
  return (
    <div className="h-[60px] relative shrink-0 w-[225.518px]">
      <RouterLink to="/" aria-label="Go to homepage" className="absolute block size-full">
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
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[84px] w-[305px]">
      <Group15 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[min-content] whitespace-pre-wrap">{`Saratoga Compliance Solutions is the leading provider of all-on-one compliance and license operations software and AI-enabled managed services for insurance companies in the U.S. and Canada.  `}</p>
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

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[538px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[min-content]">Follow us</p>
      <SocialMedia />
    </div>
  );
}

function Icon3() {
  return <ArrowIcon color="#AF63FF" />;
}

function List3() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[277px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[#9293ba] text-[16px] whitespace-nowrap">Enter your email</p>
      <div className="opacity-50"><Icon3 /></div>
    </div>
  );
}

function Container20() {
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

function Container21() {
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
      <FooterLink to="/partners/alliances">Alliances</FooterLink>
    </div>
  );
}

function Container22() {
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

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Company</p>
      <List6 />
    </div>
  );
}

function Frame6() {
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

function Frame7() {
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

function Frame8() {
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

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[338px] w-[304px]">
      <Frame6 />
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="content-stretch flex font-['Px_Grotesk:Regular',sans-serif] gap-[24px] items-center leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap" data-name="Terms of Service">
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Data Security</p>
      <p className="relative shrink-0">Cookie Policy</p>
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

export default function Solutions() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-center relative size-full" data-name="Solutions">
      <style dangerouslySetInnerHTML={{ __html: marqueeStyles }} />
      <Header />
      <div className="sticky top-0 z-50 w-full h-0 overflow-visible">
        <StickyNav headerHeight={645} />
      </div>
      <SecondHero />
      <OpeningText />
      <Frame30 />
      <Frame25 />
      <Customers />
      <div className="bg-[#300067] h-[717px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <Container17 />
        <Container18 />
        <Container19 />
        <Frame17 />
        <Frame5 />
        <Container20 />
        <Container21 />
        <Container22 />
        <Container23 />
        <Frame9 />
        <Footnote />
      </div>
    </div>
  );
}