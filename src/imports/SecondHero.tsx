import svgPaths from "./svg-e3zj2joxg9";
import { VideoPlayer } from "../app/components/VideoPlayer";

function Frame5() {
  return (
    <VideoPlayer className="aspect-[1920/1080] flex-[1_0_0] min-h-px min-w-px" />
  );
}

function Point() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px] opacity-50" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#9293ba] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Frame1() {
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
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
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

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Point />
      <Frame1 />
      <Point5 />
    </div>
  );
}

function Frame6() {
  return (
    <VideoPlayer className="h-[160px] shrink-0 w-[284px]" />
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame6 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[23px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">02</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] whitespace-nowrap">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[20px]">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase">Company title</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[285px]">
      <Frame7 />
      <Frame2 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0">
      <Frame9 />
      <Frame8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[40px] items-end justify-center relative shrink-0 w-full">
      <Frame5 />
      <Frame10 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[19px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">01</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] whitespace-nowrap">
      <p className="font-['Saans:Medium',sans-serif] relative shrink-0 text-[20px]">Name Surname</p>
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[14px] uppercase">Company title</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[955px]">
      <Frame13 />
      <Frame3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[1280px]">
      <Frame4 />
      <Frame12 />
    </div>
  );
}

export default function SecondHero() {
  return (
    <div className="bg-[#4e0276] content-stretch flex flex-col gap-[64px] items-start justify-center px-[80px] py-[120px] relative size-full min-h-screen" data-name="Second-hero">
      <p className="font-['Saans:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-full">
        {`Hear How We Help Our Clients, `}<br aria-hidden="true" />In Their Own Words
      </p>
      <Frame11 />
    </div>
  );
}