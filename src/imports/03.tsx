import svgPaths from "./svg-6xux6klcos";

function Tools() {
  return (
    <div className="relative shrink-0 size-[76px]" data-name="tools 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_3_3202)" id="tools 1">
          <path d={svgPaths.p3d3c87f0} fill="var(--fill-0, #F5F5F5)" id="tools_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_3_3202">
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
      <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[28px]">Powerful Reporting Tools</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <Frame />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] w-[449px] whitespace-pre-wrap">
        {`Choose from standard reports or design custom `}
        <br aria-hidden="true" />
        {`reports with ease. Generate board-ready compliance summaries, jurisdiction-by-jurisdiction status `}
        <br aria-hidden="true" />
        reports and deadline calendars tailored to your organization’s needs.
      </p>
    </div>
  );
}

function Partner() {
  return (
    <div className="bg-[#af63ff] content-stretch flex flex-col h-full items-start justify-between overflow-clip p-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Partner">
      <Tools />
      <Text />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[64px] whitespace-nowrap">03</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="03">
      <Partner />
    </div>
  );
}