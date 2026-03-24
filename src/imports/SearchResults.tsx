import svgPaths from "./svg-54wqpt5hwn";
import { Link as RouterLink, useSearchParams } from "react-router";
import React, { useState } from "react";
import { FooterLink } from "../app/components/FooterLink";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { NavLink } from "../app/components/NavLink";
import { ArrowIcon } from "../app/components/ArrowIcon";
import PrimaryNavbar from "../app/components/PrimaryNavbar";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] h-[140px] items-start leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] w-[650px]">
      <p className="relative shrink-0 text-[40px] tracking-[-0.4px] w-[440px]">Alliances</p>
      <p className="relative shrink-0 text-[24px] tracking-[-0.24px] w-[440px]">Strategic Partnerships That Deliver Greater Value to Our Clients</p>
    </div>
  );
}

function Link() {
  return <SaratogaButton variant="primary" color="white" showArrow>Request a Demo</SaratogaButton>;
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[599px]">Saratoga partners with leading technology providers, insurance associations and service providers to deliver integrated solutions that go beyond compliance. Our alliance ecosystem is designed to ensure that our clients have access to best-in-class capabilities across the full spectrum of insurance operations.</p>
      <Link />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[80px] content-stretch flex items-start left-[80px] w-[1280px]">
      <Frame />
      <Frame13 />
    </div>
  );
}


function Header({ children }: { children?: React.ReactNode }) {
  return (
    <div className="bg-[#110846] relative shrink-0 w-[1440px]" data-name="Header">
      <PrimaryNavbar />
      {children}
    </div>
  );
}

function Numbers() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[139px]" data-name="Numbers">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center uppercase w-[96px]">All PARTNERS</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Numbers />
    </div>
  );
}

function Numbers1() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[186px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center uppercase w-[146px]">SOLUTION PROVIDERS</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0">
      <Numbers1 />
    </div>
  );
}

function Numbers2() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center uppercase w-[54px]">PAS</p>
    </div>
  );
}

function Numbers3() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[126px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center uppercase w-[146px]">INSURTECH</p>
    </div>
  );
}

function Numbers4() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0 w-[201px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center uppercase w-[196px]">NETWORK/ASSOCIATION</p>
    </div>
  );
}

function Numbers5() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[4px] shrink-0" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center uppercase w-[54px]">AMS</p>
    </div>
  );
}

function Filters1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Filters">
      <Frame22 />
      <Frame23 />
      <Numbers2 />
      <Numbers3 />
      <Numbers4 />
      <Numbers5 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <Filters1 />
    </div>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[1280px]" data-name="Filters">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-full">FILTERS</p>
      <Frame17 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[36px] w-[412px]">InsurTechs Alliance Program Benefits</p>
      <Filters />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">AMS360</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Ascend's integration with AMS360 allows agents to sync customer data across platforms to easily get a comprehensive view of a client’s policy information and payment status.`}</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">VISIT WEBSITE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame53 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link20 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo />
        <Frame24 />
        <Frame54 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.33px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Agency Collective</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame36 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Ascend is the the preferred payments & financing platform for the Agency Collective and its 700+ independent agencies.`}</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">VISIT WEBSITE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame58 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link21 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo1 />
        <Frame26 />
        <Frame57 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.67px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Agency Revolution</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame38 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Agency Revolution helps agents attract clients, build relationships, and grow revenue with automated insurance marketing.</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">VISIT WEBSITE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame60 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link22 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame42 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo2 />
        <Frame27 />
        <Frame59 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[488px] items-center relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
      <Frame19 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">A’IX</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame45 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Apeironix, crafted by Triforta Insurance Partners, is the cutting-edge policy lifecycle management platform tailored for agencies, advisors, and MGUs. It revolutionizes agency operations by streamlining front, middle, and back offices.</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">VISIT WEBSITE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame62 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link23 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo3 />
        <Frame29 />
        <Frame61 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.33px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Benefit Poiny</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame48 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">BenefitPoint is a management system built to address a benefits agency’s complex and specific needs. This purpose-built design approach ensures that users can access the tools and features that impact their daily operations.</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">VISIT WEBSITE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame64 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link24 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo4 />
        <Frame30 />
        <Frame63 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.67px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Benelinx</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame52 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Benelinx provides benefits brokers with an integrated approach to agency management, automating day-to-day operations, sales & renewals, and client service within a secure, cloud-based platform.`}</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">VISIT WEBSITE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link25() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame68 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link25 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo5 />
        <Frame31 />
        <Frame65 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex h-[488px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame28 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[84px] items-start left-[80px] top-[84.48px] w-[1280px]">
      <Frame56 />
      <Frame32 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#110846] h-[1569px] relative shrink-0 w-full">
      <Frame55 />
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

function Link26() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame10 />
      <Link26 />
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

function Customers() {
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

function Icon2() {
  return (
    <ArrowIcon color="#9293BA" />
  );
}

function List3() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  return (
    <div className="flex items-center justify-between border border-[#f5f5f5] border-solid pl-[16px] pr-[8px] py-[8px] rounded-[4px] shrink-0 w-[277px] focus-within:border-[#af63ff] transition-colors duration-200" data-name="List">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder="Enter your email"
        className="flex-1 bg-transparent border-none outline-none font-['Saans:Regular',sans-serif] text-[16px] text-[#f5f5f5] placeholder:text-[#9293BA] placeholder:opacity-50 leading-[1.2] caret-[#af63ff] min-w-0"
      />
      <div className="transition-all duration-200"><ArrowIcon color={focused ? "#F5F5F5" : email.trim() ? "#AF63FF" : "#9293BA"} /></div>
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

const SEARCH_DATA = [
  { title: "Insurance Entity Management", path: "/products/insurance-entity-management" },
  { title: "Producer & License Management", path: "/products/producer-license-management" },
  { title: "Contracting & Appointment Management", path: "/products/contracting-appointment-management" },
  { title: "Surplus Lines Management", path: "/products/surplus-lines-management" },
  { title: "E&O Coverage", path: "/products/eo-coverage" },
  { title: "Regulatory Helpdesk", path: "/products/regulatory-helpdesk" },
  { title: "Why Saratoga?", path: "/company/why-saratoga" },
  { title: "Insurance Agencies & Brokers", path: "/solutions/insurance-agencies-brokers" },
  { title: "MGAs & MGUs", path: "/solutions/mgas-mgus" },
  { title: "Wholesale + E&S Brokers", path: "/solutions/wholesale-es-brokers" },
  { title: "Hybrid & Fronting Carriers", path: "/solutions/hybrid-fronting-carriers" },
  { title: "InsurTechs", path: "/solutions/insurtechs" },
  { title: "Insurance Carriers", path: "/solutions/insurance-carriers" },
  { title: "Adjusters & Claims Managers", path: "/solutions/adjusters-claims-managers" },
  { title: "Launch an Agency", path: "/solutions/launch-an-agency" },
  { title: "Mitigate Risk", path: "/solutions/mitigate-risk" },
  { title: "Streamline Operations", path: "/solutions/streamline-operations" },
  { title: "Boost Profitability", path: "/solutions/boost-profitability" },
  { title: "Improve Distribution", path: "/solutions/improve-distribution" },
  { title: "Case Studies", path: "/resources/case-studies" },
  { title: "Blog & Insights", path: "/resources/blog-insights" },
  { title: "Regulatory Database", path: "/resources/regulatory-database" },
  { title: "Events", path: "/resources/events" },
  { title: "Integrations", path: "/partners/integrations" },
  { title: "Developer Portal", path: "/partners/developer-portal" },
  { title: "Ecosystem Partners", path: "/partners/ecosystem-partners" },
  { title: "About Us", path: "/company/about-us" },
  { title: "Careers", path: "/company/careers" },
  { title: "Leadership", path: "/company/leadership" },
  { title: "Press & News", path: "/company/press-news" },
  { title: "Contact Us", path: "/company/contact-us" },
];

const PAGE_SIZE = 5;

function SearchContent() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isFocused, setIsFocused] = useState(false);

  const results = initialQuery.trim()
    ? SEARCH_DATA.filter(
        (item) =>
          item.title.toLowerCase().includes(initialQuery.toLowerCase()) ||
          item.path.toLowerCase().includes(initialQuery.toLowerCase())
      )
    : [];

  const visibleResults = results.slice(0, visibleCount);

  return (
    <div className="bg-[#110846] w-[1440px] min-h-[600px] pt-[132px]">
      {/* Hero */}
      <div className="px-[80px] pt-[84px] pb-[120px]">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic text-[#af63ff] text-[14px] uppercase mb-[16px]">
          SHOWING SEARCH RESULTS FOR
        </p>
        <h1 className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic text-[#f5f5f5] text-[40px] mb-[16px]">
          {`\u201C${initialQuery}\u201D`}
        </h1>
        <p className="font-['Saans:Regular',sans-serif] leading-[1.4] not-italic text-[#9293BA] text-[16px]">
          {`Search finished, found ${results.length} pages matching the search query.`}
        </p>
      </div>

      {/* Search + Results */}
      <div className="px-[80px] pt-[64px] pb-[120px]">
        {/* Small search input */}
        <div className="group/search flex items-center justify-between border border-[#f5f5f5] border-solid rounded-[4px] pl-[16px] pr-[8px] py-[8px] w-[277px] mb-[64px] focus-within:border-[#af63ff] transition-colors duration-200">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && query.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
              }
            }}
            placeholder="Search"
            className="flex-1 bg-transparent border-none outline-none font-['Saans:Regular',sans-serif] text-[16px] text-[#f5f5f5] placeholder:text-[#9293BA] placeholder:opacity-50 leading-[1.2] caret-[#af63ff]"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <button
            onClick={() => {
              if (query.trim()) {
                window.location.href = `/search?q=${encodeURIComponent(query.trim())}`;
              }
            }}
            className="shrink-0 flex items-center justify-center cursor-pointer transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 16.8971 16.8971" fill="none">
              <path d="M16.8971 16.0133L12.1771 11.2932C13.3113 9.9316 13.8768 8.1851 13.7561 6.41707C13.6354 4.64904 12.8378 2.99561 11.529 1.80073C10.2203 0.605848 8.50131 -0.0384808 6.72963 0.00177916C4.95794 0.0420392 3.26998 0.763788 2.01688 2.01688C0.763788 3.26998 0.0420392 4.95794 0.00177916 6.72963C-0.0384808 8.50131 0.605848 10.2203 1.80073 11.529C2.99561 12.8378 4.64904 13.6354 6.41707 13.7561C8.1851 13.8768 9.9316 13.3113 11.2932 12.1771L16.0133 16.8971L16.8971 16.0133ZM1.27212 6.89712C1.27212 5.7846 1.60202 4.69706 2.2201 3.77204C2.83819 2.84701 3.71669 2.12604 4.74453 1.7003C5.77236 1.27456 6.90336 1.16316 7.9945 1.3802C9.08565 1.59725 10.0879 2.13297 10.8746 2.91964C11.6613 3.70632 12.197 4.70859 12.414 5.79974C12.6311 6.89088 12.5197 8.02188 12.0939 9.04972C11.6682 10.0776 10.9472 10.9561 10.0222 11.5741C9.09718 12.1922 8.00964 12.5221 6.89712 12.5221C5.40579 12.5205 3.97601 11.9273 2.92147 10.8728C1.86694 9.81824 1.27377 8.38846 1.27212 6.89712Z" fill={isFocused ? "#F5F5F5" : query.trim() ? "#AF63FF" : "#9293BA"} className="transition-colors duration-200" />
            </svg>
          </button>
        </div>

        {/* Results list */}
        <div className="flex flex-col">
          {visibleResults.map((result) => (
            <RouterLink
              key={result.path}
              to={result.path}
              className="flex flex-col gap-[8px] py-[24px] border-t border-[#33317a] border-solid no-underline hover:bg-[#1E195B] transition-colors duration-150 px-[8px]"
            >
              <p className="font-['Saans:Medium',sans-serif] leading-[1.3] text-[18px] text-[#f5f5f5]">
                {result.title}
              </p>
              <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.4] text-[12px] uppercase text-[#AF63FF]">
                {result.path}
              </p>
            </RouterLink>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < results.length && (
          <div className="flex justify-center mt-[40px]">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="content-stretch flex h-[40px] items-center justify-center px-[24px] py-[8px] rounded-[4px] border border-[#af63ff] border-solid cursor-pointer hover:bg-[#af63ff] transition-colors duration-200"
            >
              <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">
                LOAD MORE
              </p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchResults() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="Search Results">
      <Header>
        <SearchContent />
      </Header>
      <Customers />
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