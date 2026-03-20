import svgPaths from "./svg-avhrccbq2f";

function FileBackup() {
  return (
    <div className="relative shrink-0 size-[76px]" data-name="file--backup 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_3_3206)" id="file--backup 1">
          <path d={svgPaths.p3176e400} fill="var(--fill-0, #110846)" id="file--backup_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_3_3206">
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
      <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#110846] text-[28px]">{`Entity Library & Data Repository`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <Frame />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[18px] w-[449px]">Store articles of organization, operating agreements, certificates of authority, organization charts, officer records and key documentation in a secure, centralized repository. Everything your compliance, legal and finance teams need – accessible anytime.</p>
    </div>
  );
}

function Partner() {
  return (
    <div className="bg-[#bcbcbc] content-stretch flex flex-col h-full items-start justify-between overflow-clip p-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Partner">
      <FileBackup />
      <Text />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[64px] whitespace-nowrap">04</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="04">
      <Partner />
    </div>
  );
}