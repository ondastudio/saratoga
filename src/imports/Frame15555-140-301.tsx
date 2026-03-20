import svgPaths from "./svg-jgtnr72l8t";

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4.052px] shrink-0 size-[32.419px]">
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[327.371px]">
      <Frame3 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Maximize">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p19344d00} fill="#F5F5F5" />
              <path d={svgPaths.p1e891940} fill="#F5F5F5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[282px] items-start justify-between p-[24.315px] relative shrink-0 w-[376px]">
      <Frame5 />
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-[257.33px]">{`Integrated Software & Managed Services`}</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative">
      <Frame />
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#33317a] content-stretch flex items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] size-full">
      <Frame1 />
    </div>
  );
}