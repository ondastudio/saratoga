import svgPaths from "./svg-y6bv0g0spm";

function Frame7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame7 />
    </div>
  );
}

function Point() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Point">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Minimize">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p12ad8080} fill="#110846" />
              <path d={svgPaths.p14e78a72} fill="#110846" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <Point />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24.315px] relative w-full">
          <Frame8 />
          <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px]">{`Integrated Software & Managed Services`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24.315px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Most compliance providers give you software OR managed services. Saratoga delivers both – seamlessly integrated. Our AI-enabled platform handles the automation while our dedicated license operations professionals handle everything that requires human expertise and judgment. The result: complete compliance coverage without the overhead of building an internal team.</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pt-[24.315px] relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24.315px] items-start pb-[24.315px] relative rounded-[4.052px] shrink-0 w-full">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

export default function Frame5() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8px] px-[8px] relative rounded-[8px] size-full">
      <Frame4 />
    </div>
  );
}