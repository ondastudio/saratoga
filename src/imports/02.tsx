import svgPaths from "./svg-55nvxb2u02";

function Dashboard() {
  return (
    <div className="relative shrink-0 size-[76px]" data-name="dashboard 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_3_2960)" id="dashboard 1">
          <path d={svgPaths.p2e7d0300} fill="var(--fill-0, #F5F5F5)" id="dashboard_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_3_2960">
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
      <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[28px]">
        {`Manage, Track & Edit`}
        <br aria-hidden="true" />
        Filings and Requests
      </p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <Frame />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] w-[449px] whitespace-pre-wrap">
        {`Renew, amend, track and manage all of your entity actions from a single dashboard. Submit new requests, monitor progress, receive confirmations and maintain `}
        <br aria-hidden="true" />a complete audit trail of every filing.
      </p>
    </div>
  );
}

function Partner() {
  return (
    <div className="bg-[#8740ff] content-stretch flex flex-col h-full items-start justify-between overflow-clip p-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Partner">
      <Dashboard />
      <Text />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[64px] whitespace-nowrap">02</p>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="02">
      <Partner />
    </div>
  );
}