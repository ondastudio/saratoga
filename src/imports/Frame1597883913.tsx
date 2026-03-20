import svgPaths from "./svg-ui02i0k28q";

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[20px] items-center pl-[64px] py-[16px] relative w-full">
          <div className="h-[32px] relative shrink-0 w-[24px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 32">
              <path d={svgPaths.p34f09d00} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
          <p className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#af63ff] text-[20px] whitespace-nowrap">Executive Team</p>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center py-[16px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#33317a] border-b border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] whitespace-nowrap">Board of Directors</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <Frame1 />
    </div>
  );
}