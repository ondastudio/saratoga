import svgPaths from "./svg-0ws1xy5g1y";

function Frame14() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">
        <span className="leading-[1.2]">01</span>
        <span className="leading-[1.2]">{` `}</span>
      </p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
      <Frame14 />
    </div>
  );
}

function Point() {
  return (
    <div className="bg-[#110846] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Point">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Close">
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p25fa3200} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame13 />
      <Point />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
          <Frame15 />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-full">{`Integrated Compliance Software & AI-Enabled Managed Services Tailored To You`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">{`Powerful API Integrations Customizable To Your Workflows & Systems`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pt-[24px] relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Robust Partner Ecosystem Designed to Deliver Maximal Value to Clients Like You</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#33317a] border-solid border-t inset-0 pointer-events-none" />
      <Frame8 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Access to Dedicated License Operations Professionals Leveraging AI to Deliver For You</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center pt-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#33317a] border-solid border-t inset-0 pointer-events-none" />
      <Frame9 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Compliance Oversight Designed to Fit Your Business Model, Nationwide</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center py-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#33317a] border-solid border-t inset-0 pointer-events-none" />
      <Frame10 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full">
      <Frame />
      <Frame4 />
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame6 />
      <Frame3 />
    </div>
  );
}

export default function Frame12() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8px] px-[8px] relative rounded-[8px] size-full">
      <Frame11 />
    </div>
  );
}