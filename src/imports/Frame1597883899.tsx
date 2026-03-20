import svgPaths from "./svg-60c4twviac";

function Point() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Point">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
            <path d={svgPaths.p2cb8b080} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Header">
      <div className="h-[33px] relative shrink-0 w-[44px]" data-name="envelope_1_">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 33">
          <path d={svgPaths.p23236880} fill="var(--fill-0, #F5F5F5)" id="envelope_1_" />
        </svg>
      </div>
      <Point />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative rounded-[4px] size-full">
      <div className="content-stretch flex flex-col items-start justify-between overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Header />
        <p className="font-['Saans:Medium',sans-serif] leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-full">Newsroom</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}