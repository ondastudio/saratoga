import svgPaths from "./svg-j0uaxhej88";
import minimizeSvgPaths from "./svg-fukv325yu1";
import { Link as RouterLink } from "react-router";
import { FooterLink } from "../app/components/FooterLink";
import { useState, useEffect, useRef } from "react";
import { SaratogaButton } from "../app/components/SaratogaButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import { IconButton } from "../app/components/IconButton";
import { ArrowIcon } from "../app/components/ArrowIcon";
import { NumberHighlights as NumberHighlightsComponent } from "../app/components/NumberHighlights";

function MaxMinIcons() {
  return (
    <>
      <div className="bg-[#110846] content-stretch flex items-center justify-center relative shrink-0 size-[32px] rounded-[4px] group-hover:hidden" data-name="Maximize">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
              <g><path d={svgPaths.p19344d00} fill="#F5F5F5" /><path d={svgPaths.p1e891940} fill="#F5F5F5" /></g>
            </svg>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative shrink-0 size-[32px] rounded-[4px] hidden group-hover:flex" data-name="Minimize">
        <div className="overflow-clip relative shrink-0 size-[20px]">
          <div className="absolute inset-[6.25%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
              <g><path d={minimizeSvgPaths.p12ad8080} fill="#110846" /><path d={minimizeSvgPaths.p14e78a72} fill="#110846" /></g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

function HeroSymbol() {
  return (
    <div className="absolute left-[451px] top-[132px] w-[538px] h-[544px]" data-name="Vector">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 889.84 900">
        <g id="Group 59654">
          <path d={svgPaths.pd87ec00} fill="#300067" id="Vector" />
          <path d={svgPaths.p3b5ade80} fill="#300067" id="Vector_2" />
          <path d={svgPaths.p3e23bd00} fill="#300067" id="Vector_3" />
          <path d={svgPaths.p24395000} fill="#300067" id="Vector_4" />
          <path d={svgPaths.p3dcfed00} fill="#300067" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[44px] not-italic relative text-[#f5f5f5] text-[40px]">Why Leading Insurance Organizations Choose Saratoga?</p>
    </div>
  );
}

function HeroDescription() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[555px]">
      <p className="font-['Saans:Regular',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] w-full">{`You have options when it comes to compliance technology and managed services. Here's why the most sophisticated insurance organizations choose Saratoga.`}</p>
      <SaratogaButton variant="primary" color="white" showArrow to="/request-demo">Request a Demo</SaratogaButton>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-start left-0 pb-[40px] pt-[84px] px-[80px] w-[1440px]">
      <div className="content-stretch flex flex-[1_0_0] gap-[236px] items-start min-h-px min-w-px relative">
        <HeroTitle />
        <HeroDescription />
      </div>
    </div>
  );
}


function HeroVideoMask() {
  // Geometric mask symbol matching Figma design — ready to receive a video.
  // Place a <video> inside to use as masked background content.
  const maskSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 538 544'%3E%3Crect x='0' y='0' width='269' height='272' fill='black'/%3E%3Crect x='134' y='136' width='269' height='272' fill='black'/%3E%3Crect x='269' y='0' width='269' height='272' fill='black'/%3E%3Crect x='0' y='272' width='269' height='272' fill='black'/%3E%3Crect x='134' y='272' width='269' height='272' fill='black'/%3E%3Crect x='269' y='272' width='269' height='272' fill='black'/%3E%3C/svg%3E")`;
  return (
    <div
      className="absolute left-1/2 top-[14.7%] -translate-x-1/2 w-[37.35%] aspect-[538/544] overflow-hidden"
      data-name="Mask group"
      style={{
        maskImage: maskSvg,
        WebkitMaskImage: maskSvg,
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    >
      {/* Video placeholder — replace src with hosted video */}
      <video autoPlay loop muted playsInline className="absolute object-cover size-full mix-blend-luminosity opacity-80">
        <source src="https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#110846] h-screen overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <HeroSymbol />
      <Frame81 />
      <PrimaryNavbar />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex items-start pb-[32px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-b border-solid inset-0 pointer-events-none" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] text-center uppercase w-full">{`Trusted By The Most `}<span className="text-[#af63ff]">{`Innovative & Efficient Insurance`}</span>{` Agents, Carriers & MGAs`}</p>
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

function Frame20() {
  return (
    <div className="overflow-hidden relative shrink-0 w-full">
      <div
        className="flex gap-[84px] items-start w-max"
        style={{ animation: "marquee-right-ws 30s linear infinite" }}
      >
        <Group /><Group2 /><Group3 /><Group4 /><Group5 /><Group6 />
        <Group /><Group2 /><Group3 /><Group4 /><Group5 /><Group6 />
      </div>
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

function Frame21() {
  return (
    <div className="overflow-hidden relative shrink-0 w-full">
      <div
        className="flex gap-[84px] items-center w-max"
        style={{ animation: "marquee-left-ws 30s linear infinite" }}
      >
        <Group7 /><Group8 /><Group9 /><Group10 /><Group11 /><Group12 />
        <Group7 /><Group8 /><Group9 /><Group10 /><Group11 /><Group12 />
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start justify-center opacity-75 relative shrink-0 w-full">
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-[1280px]">
      <Frame80 />
      <Frame78 />
    </div>
  );
}

function SecondHero() {
  return (
    <div className="bg-[#110846] relative shrink-0 w-full" data-name="Second-hero">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pb-[120px] pt-[84px] px-[80px] relative w-full">
          <style>{`
            @keyframes marquee-right-ws {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0%); }
            }
            @keyframes marquee-left-ws {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <Frame79 />
        </div>
      </div>
    </div>
  );
}

function NumberHighlights() {
  const userIconWhite = (
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
  );

  const userIconLilac = (
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
  );

  return (
    <NumberHighlightsComponent
      bgColor="#4e0276"
      title="Placeholder text"
      paddingTop={84}
      cards={[
        {
          icon: userIconWhite,
          label: "Placeholder",
          value: "000+",
          bgColor: "#110846",
          labelColor: "#f5f5f5",
          valueColor: "#f5f5f5",
        },
        {
          icon: userIconWhite,
          label: "Placeholder",
          value: "00K+",
          bgColor: "#8740ff",
          labelColor: "#110846",
          valueColor: "#f5f5f5",
        },
        {
          icon: userIconWhite,
          label: "Placeholder",
          value: "$00B+",
          bgColor: "#af63ff",
          labelColor: "#110846",
          valueColor: "#f5f5f5",
        },
        {
          icon: userIconLilac,
          label: "Placeholder",
          value: "0M+",
          bgColor: "#bcbcbc",
          labelColor: "#110846",
          valueColor: "#110846",
        },
      ]}
    />
  );
}

function Integration() {
  return (
    <div className="absolute left-[34px] size-[80px] top-[33px]" data-name="integration 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1092)" id="integration 1">
          <path d={svgPaths.pe623900} fill="var(--fill-0, #AF63FF)" id="integration_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1092">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <Integration />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame46 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame45 />
      <MaxMinIcons />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col min-h-[282px] group-hover:min-h-0 items-start gap-[16.21px] p-[24.315px] relative shrink-0 w-[376px] transition-all duration-500 ease-in-out">
      <Frame70 />
      <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px]">{`Integrated Software & Managed Services`}</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame27 />
      <div className="bg-[#110846] rounded-[4.052px] w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
        <div className="pt-[24.315px] px-[24.315px] pb-[24.315px]">
          <p className="font-['Saans:Regular',sans-serif] leading-[1.35] not-italic text-[#f5f5f5] text-[16px]">Most compliance providers give you software OR managed services. Saratoga delivers both – seamlessly integrated. Our AI-enabled platform handles the automation while our dedicated license operations professionals handle everything that requires human expertise and judgment. The result: complete compliance coverage without the overhead of building an internal team.</p>
        </div>
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392px] transition-all duration-500 ease-in-out">
      <Frame40 />
    </div>
  );
}

function Why() {
  return (
    <div className="group absolute content-stretch flex items-start left-[819px] top-[202.52px] cursor-pointer" data-name="Why">
      <Logo />
      <Frame42 />
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[819px] top-[202.52px]">
      <Why />
    </div>
  );
}

function Medal() {
  return (
    <div className="absolute left-[34px] size-[80px] top-[33px]" data-name="medal--02 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1083)" id="medal--02 1">
          <path d={svgPaths.p284dff00} fill="var(--fill-0, #AF63FF)" id="medal--02_00000154411254570765863450000000895528134146281636_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1083">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <Medal />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">03</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame49 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame48 />
      <MaxMinIcons />
    </div>
  );
}

function Frame28() {
  return (
    <div className="min-h-[282px] group-hover:min-h-0 relative shrink-0 w-full transition-all duration-500 ease-in-out">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start gap-[16.21px] p-[24.315px] relative w-full h-full">
          <Frame72 />
          <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px]">20+ Years of Insurance Regulatory Expertise</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">{`We're not a Silicon Valley startup that discovered insurance compliance last year. Our team has spent over two decades in the trenches of insurance regulation. We understand the nuances. We know the regulators. We've seen every edge case. That institutional knowledge is embedded in our platform, our processes and our people.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
      <Frame3 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame28 />
      <Frame6 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px] transition-all duration-500 ease-in-out">
      <Frame41 />
    </div>
  );
}

function Why1() {
  return (
    <div className="group absolute content-stretch flex items-start left-[819px] top-[748.52px] cursor-pointer" data-name="Why">
      <Logo1 />
      <Frame43 />
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[819px] top-[748.52px]">
      <Why1 />
    </div>
  );
}

function DataApis() {
  return (
    <div className="absolute left-[34px] size-[80px] top-[33px]" data-name="data--apis 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1033)" id="data--apis 1">
          <path d={svgPaths.p320d080} fill="var(--fill-0, #AF63FF)" id="data--apis_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1033">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <DataApis />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">05</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame52 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame51 />
      <MaxMinIcons />
    </div>
  );
}

function Frame29() {
  return (
    <div className="min-h-[282px] group-hover:min-h-0 relative shrink-0 w-full transition-all duration-500 ease-in-out">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start gap-[16.21px] p-[24.315px] relative w-full h-full">
          <Frame73 />
          <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px] whitespace-pre-wrap">
            {`Powerful API `}
            <br aria-hidden="true" />
            Integrations
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px] whitespace-pre-wrap">
            {`Compliance data is only valuable if it flows `}
            <br aria-hidden="true" />
            {`into the systems your team actually uses. `}
            <br aria-hidden="true" />
            Our open API architecture and pre-built integrations with NIPR, Applied Epic, Salesforce and other leading platforms ensure that Saratoga fits seamlessly into your existing tech stack – no rip-and-replace required.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
      <Frame4 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame29 />
      <Frame7 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px] transition-all duration-500 ease-in-out">
      <Frame50 />
    </div>
  );
}

function Why2() {
  return (
    <div className="group absolute content-stretch flex items-start left-[819px] top-[1272.52px] cursor-pointer" data-name="Why">
      <Logo2 />
      <Frame44 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[819px] top-[1272.52px]">
      <Why2 />
    </div>
  );
}

function Cybersecurity() {
  return (
    <div className="absolute left-[34px] size-[80px] top-[33px]" data-name="cybersecurity 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1075)" id="cybersecurity 1">
          <path d={svgPaths.p2d2ab2f0} fill="var(--fill-0, #AF63FF)" id="cybersecurity_00000107570395889346008200000012012325998864386976_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1075">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <Cybersecurity />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">07</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame56 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame55 />
      <MaxMinIcons />
    </div>
  );
}

function Frame30() {
  return (
    <div className="min-h-[282px] group-hover:min-h-0 relative shrink-0 w-full transition-all duration-500 ease-in-out">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start gap-[16.21px] p-[24.315px] relative w-full h-full">
          <Frame74 />
          <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px] whitespace-pre-wrap">
            {`Safe, Secure `}
            <br aria-hidden="true" />
            {`& Trusted`}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px] whitespace-pre-wrap">
            {`Compliance data is only valuable if it flows `}
            <br aria-hidden="true" />
            {`into the systems your team actually uses. `}
            <br aria-hidden="true" />
            Our open API architecture and pre-built integrations with NIPR, Applied Epic, Salesforce and other leading platforms ensure that Saratoga fits seamlessly into your existing tech stack – no rip-and-replace required.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
      <Frame5 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame30 />
      <Frame8 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px] transition-all duration-500 ease-in-out">
      <Frame54 />
    </div>
  );
}

function Why3() {
  return (
    <div className="group absolute content-stretch flex items-start left-[819px] top-[1774.52px] cursor-pointer" data-name="Why">
      <Logo3 />
      <Frame53 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[819px] top-[1774.52px]">
      <Why3 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">02</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame60 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame59 />
      <MaxMinIcons />
    </div>
  );
}

function Frame31() {
  return (
    <div className="min-h-[282px] group-hover:min-h-0 relative shrink-0 w-full transition-all duration-500 ease-in-out">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start gap-[16.21px] p-[24.315px] relative w-full h-full">
          <Frame75 />
          <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px] whitespace-pre-wrap">
            {`True End-to-End `}
            <br aria-hidden="true" />
            Coverage
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">{`Entity management. Producer licensing. Contracting. Appointments. Surplus lines. E&O. Regulatory intelligence. Most providers specialize in one or two of these areas and force you to cobble together a patchwork of vendors. Saratoga covers the entire compliance lifecycle from a single partner – eliminating vendor management overhead and ensuring nothing falls through the cracks.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
      <Frame10 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame31 />
      <Frame9 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px] transition-all duration-500 ease-in-out">
      <Frame58 />
    </div>
  );
}

function UnitedGovernance() {
  return (
    <div className="absolute left-[34.93px] size-[80px] top-[33px]" data-name="united-governance 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1065)" id="united-governance 1">
          <path d={svgPaths.pe307200} fill="var(--fill-0, #AF63FF)" id="united-governance_00000101807855433432433290000014078451217247957641_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1065">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <UnitedGovernance />
    </div>
  );
}

function Why4() {
  return (
    <div className="group absolute content-stretch flex items-start left-[80px] top-[348.52px] cursor-pointer" data-name="Why">
      <Frame57 />
      <Logo4 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[80px] top-[348.52px]">
      <Why4 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">04</p>
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame64 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame63 />
      <MaxMinIcons />
    </div>
  );
}

function Frame32() {
  return (
    <div className="min-h-[282px] group-hover:min-h-0 relative shrink-0 w-full transition-all duration-500 ease-in-out">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start gap-[16.21px] p-[24.315px] relative w-full h-full">
          <Frame76 />
          <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px] whitespace-pre-wrap">
            {`Financial Savings `}
            <br aria-hidden="true" />
            from Day 1
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px] whitespace-pre-wrap">
            {`Our integrated model is designed to deliver meaningful cost savings immediately. Fewer FTEs needed for compliance. Elimination of unnecessary appointment fees through JIT processing. Zero late-filing penalties. Strategic license footprint optimization. Our clients consistently report that Saratoga pays for `}
            <br aria-hidden="true" />
            itself – and then some.
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
      <Frame12 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame32 />
      <Frame11 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px] transition-all duration-500 ease-in-out">
      <Frame62 />
    </div>
  );
}

function GlobalCurrency() {
  return (
    <div className="absolute left-[34.93px] size-[80px] top-[33px]" data-name="global--currency 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1079)" id="global--currency 1">
          <path d={svgPaths.p3e9680} fill="var(--fill-0, #AF63FF)" id="global--currency_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1079">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <GlobalCurrency />
    </div>
  );
}

function Why5() {
  return (
    <div className="group absolute content-stretch flex items-start left-[80px] top-[894.52px] cursor-pointer" data-name="Why">
      <Frame61 />
      <Logo5 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[80px] top-[894.52px]">
      <Why5 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">06</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame68 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame67 />
      <MaxMinIcons />
    </div>
  );
}

function Frame38() {
  return (
    <div className="min-h-[282px] group-hover:min-h-0 relative shrink-0 w-full transition-all duration-500 ease-in-out">
      <div className="flex flex-col size-full">
        <div className="content-stretch flex flex-col items-start gap-[16.21px] p-[24.315px] relative w-full h-full">
          <Frame77 />
          <div className="flex-1 group-hover:flex-[0_0_0px] transition-[flex] duration-500 ease-in-out" />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px] whitespace-pre-wrap">
            {`A Robust Partner `}
            <br aria-hidden="true" />
            Ecosystem
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">{`Saratoga's alliance and integration partnerships extend our value beyond compliance. We work with leading technology providers, insurance associations and service providers to deliver comprehensive solutions that address the full spectrum of your operational needs.`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full max-h-0 opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden">
      <Frame14 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame38 />
      <Frame13 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px] transition-all duration-500 ease-in-out">
      <Frame66 />
    </div>
  );
}

function GlobalPartner() {
  return (
    <div className="absolute left-[34.93px] size-[80px] top-[33px]" data-name="global--partner 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1069)" id="global--partner 1">
          <path d={svgPaths.p238100} fill="var(--fill-0, #AF63FF)" id="global--partner_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1069">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo6() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <GlobalPartner />
    </div>
  );
}

function Why6() {
  return (
    <div className="group absolute content-stretch flex items-start left-[80px] top-[1418.52px] cursor-pointer" data-name="Why">
      <Frame65 />
      <Logo6 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[80px] top-[1418.52px]">
      <Why6 />
    </div>
  );
}

function TextHighlight() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Text Highlight">
      <p className="font-['Saans:Regular',sans-serif] leading-[40px] not-italic relative shrink-0 text-[#f5f5f5] text-[36px] w-[412px]">Placeholder text</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-[80px] pb-[64px] top-[95.52px] w-[1191px]">
      <TextHighlight />
    </div>
  );
}

function Frame82() {
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

  const getStyle = (index: number): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(80px)",
    transition: "all 1000ms ease-out",
    transitionDelay: `${index * 200}ms`,
  });

  return (
    <div ref={ref} className="bg-[#300067] h-[2170px] relative shrink-0 w-[1440px]">
      <div style={getStyle(0)}><Group14 /></div>
      <div style={getStyle(2)}><Group16 /></div>
      <div style={getStyle(4)}><Group18 /></div>
      <div style={getStyle(6)}><Group20 /></div>
      <div style={getStyle(1)}><Group17 /></div>
      <div style={getStyle(3)}><Group19 /></div>
      <div style={getStyle(5)}><Group21 /></div>
      <Frame69 />
    </div>
  );
}

function Frame24() {
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

function Frame23() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame24 />
      <Link20 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-[1408px]">
      <Frame23 />
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
    <div className="bg-[#300067] content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[120px] px-[16px] relative shrink-0" data-name="Customers">
      <Frame22 />
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

function Container14() {
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

function Container15() {
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

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="capitalize font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px]">BY USE CASE</p>
      <List2 />
    </div>
  );
}

function Group13() {
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

function Frame26() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[84px] w-[305px]">
      <Group13 />
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

function Frame15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[538px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[min-content]">Follow us</p>
      <SocialMedia />
    </div>
  );
}

function Icon2() {
  return <ArrowIcon color="#9293BA" />;
}

function List3() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 w-[277px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[#9293ba] text-[16px] whitespace-nowrap">Enter your email</p>
      <div className="opacity-50"><Icon2 /></div>
    </div>
  );
}

function Container17() {
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

function Container18() {
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

function Container19() {
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

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Company</p>
      <List6 />
    </div>
  );
}

function Frame16() {
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

function Frame17() {
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

function Frame18() {
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

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[338px] w-[304px]">
      <Frame16 />
      <Frame17 />
      <Frame18 />
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

export default function WhySaratoga() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="Why Saratoga">
      <Header />
      <SecondHero />
      <NumberHighlights />
      <Frame82 />
      <Customers />
      <div className="bg-[#300067] h-[717px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <Container14 />
        <Container15 />
        <Container16 />
        <Frame26 />
        <Frame15 />
        <Container17 />
        <Container18 />
        <Container19 />
        <Container20 />
        <Frame19 />
        <Footnote />
      </div>
    </div>
  );
}