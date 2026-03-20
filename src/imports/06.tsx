import svgPaths from "./svg-gij7ltb3rh";

function AiGovernanceLifecycleFactsheet() {
  return (
    <div className="relative shrink-0 size-[76px]" data-name="ai-governance--lifecycle-factsheet 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_3_3218)" id="ai-governance--lifecycle-factsheet 1">
          <path d={svgPaths.p2665a2f0} fill="var(--fill-0, #F5F5F5)" id="ai-governance--lifecycle-factsheet_00000049209056769764781100000005734169963678780095_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_3_3218">
            <rect fill="white" height="76" width="76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[28px] whitespace-pre-wrap">
        {`Corporate Restructuring `}
        <br aria-hidden="true" />
        {`& Rebranding Support`}
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <Frame />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] w-[449px]">Acquisitions, mergers, name changes and corporate reorganizations generate a cascade of filing obligations across every jurisdiction where your entities are registered. Our team provides compliance due diligence, manages the filing execution and ensures your restructured organization is fully compliant on day one.</p>
    </div>
  );
}

function Partner() {
  return (
    <div className="bg-[#8740ff] content-stretch flex flex-col h-full items-start justify-between overflow-clip p-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Partner">
      <AiGovernanceLifecycleFactsheet />
      <Text />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[64px] whitespace-nowrap">06</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="06">
      <Partner />
    </div>
  );
}