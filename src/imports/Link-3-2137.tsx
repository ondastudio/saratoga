import svgPaths from "./svg-hx3gj2bgkk";

function Icon() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--right">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
              <path d={svgPaths.p3be57f00} fill="var(--fill-0, #202020)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Link() {
  return (
    <div className="bg-[#c694fe] content-stretch flex gap-[16px] items-center relative rounded-[8px] size-full pl-[24px] pr-[4px] py-[4px]" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Why saratoga?</p>
      <Icon />
    </div>
  );
}