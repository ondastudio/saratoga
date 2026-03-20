import svgPaths from "./svg-3myuv0x2cn";

function Dashboard() {
  return (
    <div className="relative shrink-0 size-[76px]" data-name="dashboard 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_card01_dashboard)" id="dashboard 1">
          <path d={svgPaths.p2e7d0300} fill="var(--fill-0, #F5F5F5)" id="dashboard_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_card01_dashboard">
            <rect fill="white" height="76" width="76" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col h-full items-start justify-between overflow-clip p-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Partner">
      <Dashboard />
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
        <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
          <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[28px]">
            Intuitive Tracking Dashboard
          </p>
        </div>
        <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] w-[449px]">
          At-a-glance visibility into the status of every entity across every jurisdiction – impending deadlines, historical actions, current standings and open items. Drill down to see details with just one click.
        </p>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[64px] whitespace-nowrap">01</p>
    </div>
  );
}