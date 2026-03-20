import svgPaths from "./svg-3wheanc9c4";

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

function Frame2() {
  return (
    <div className="bg-[#33317a] content-stretch flex h-[290px] items-start pb-[8.105px] px-[8.105px] relative rounded-[8.105px] shrink-0 w-[392px]">
      <Frame1 />
    </div>
  );
}

function Why() {
  return (
    <div className="absolute content-stretch flex items-start left-0 top-0" data-name="Why">
      <Logo />
      <Frame2 />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Why />
    </div>
  );
}