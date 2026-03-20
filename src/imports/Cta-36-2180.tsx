import svgPaths from "./svg-jitwjth4yp";

function Icon() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 10">
            <path d={svgPaths.p2cb8b080} fill="var(--fill-0, #110846)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Cta() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative size-full" data-name="CTA">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">LEARN MORE</p>
      <Icon />
    </div>
  );
}