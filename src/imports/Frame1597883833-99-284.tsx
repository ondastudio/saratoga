import svgPaths from "./svg-bfogd3uh9g";

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

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[36px]">Intuitive Tracking Dashboard</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Text">
      <Frame2 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] w-[449px]">At-a-glance visibility into the status of every entity across every jurisdiction – impending deadlines, historical actions, current standings and open items. Drill down to see details with just one click.</p>
    </div>
  );
}

function Partner() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col h-[685px] items-start justify-between overflow-clip p-[40px] relative rounded-[4px] shrink-0 w-[630px]" data-name="Partner">
      <Dashboard />
      <Text />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[40px] whitespace-nowrap">01</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Partner />
    </div>
  );
}

function Point() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#bdbdd6] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--left">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <path d={svgPaths.pc3cec00} fill="var(--fill-0, #BDBDD6)" id="Vector" />
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
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Point3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Point4() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Point5() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#110846] shrink-0 size-[6px]" />
    </div>
  );
}

function Point6() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px]" data-name="Point">
      <div className="bg-[#110846] shrink-0 size-[6px]" />
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
      <Point5 />
      <Point6 />
    </div>
  );
}

function Point7() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <path d={svgPaths.p3be57f00} fill="var(--fill-0, #110846)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[60px] h-[40px] items-center justify-center relative shrink-0 w-full">
      <Point />
      <Frame1 />
      <Point7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-end relative shrink-0 w-[630px]">
      <Frame4 />
      <Frame />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="bg-[#ededed] content-stretch flex items-start justify-between px-[80px] py-[120px] relative size-full">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[36px] w-[434px]">Discover The Most Powerful Insurance Entity Management Software</p>
      <Frame5 />
    </div>
  );
}