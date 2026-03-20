import svgPaths from "./svg-zxa6n87bny";

function Frame1() {
  return (
    <div className="content-stretch flex font-['Px_Grotesk:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">
      <p className="font-['Saans:Medium',sans-serif] leading-[0] relative shrink-0 text-[0px]">
        <span className="leading-[1.2]">04.</span>
        <span className="leading-[1.2]">{` `}</span>
      </p>
      <p className="leading-[1.2] relative shrink-0 uppercase">{`Safe, Secure & Trusted`}</p>
    </div>
  );
}

function Point() {
  return (
    <div className="bg-[#110846] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Point">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Add">
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.pb719000} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#6a6b9e] content-stretch flex gap-[16px] items-center pl-[16px] pr-[4px] py-[4px] relative rounded-[8px] size-full">
      <Frame1 />
      <Point />
    </div>
  );
}