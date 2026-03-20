import svgPaths from "./svg-fukv325yu1";

function Integration() {
  return (
    <div className="absolute left-[34px] size-[80px] top-[33px]" data-name="integration 1">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g clipPath="url(#clip0_136_1092)" id="integration 1">
          <path d={svgPaths.pe623900} fill="var(--fill-0, #AF63FF)" id="integration_1_" />
          <g id="_Transparent_Rectangle" />
        </g>
        <defs>
          <clipPath id="clip0_136_1092">
            <rect fill="white" height="80" width="80" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#110846] h-[145.888px] relative rounded-[7.943px] shrink-0 w-[148.927px]" data-name="Logo">
      <Integration />
    </div>
  );
}

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

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame6 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Minimize">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p12ad8080} fill="#F5F5F5" />
              <path d={svgPaths.p14e78a72} fill="#F5F5F5" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[16.21px] items-start justify-center p-[24.315px] relative w-full">
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

function Frame5() {
  return (
    <div className="bg-[#33317a] content-stretch flex h-[399.992px] items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392.073px]">
      <Frame4 />
    </div>
  );
}

export default function Why() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Why">
      <Logo />
      <Frame5 />
    </div>
  );
}