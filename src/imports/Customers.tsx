import svgPaths from "./svg-dopj9bc3j5";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Ready to Work with Saratoga Compliance?</p>
      <p className="min-w-full relative shrink-0 text-[18px] leading-[24px] tracking-[0.18px] w-[min-content]">{`Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#af63ff] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--right">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
              <path d={svgPaths.p3be57f00} fill="var(--fill-0, #F5F5F5)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#f5f5f5] content-stretch flex gap-[16px] h-[40px] items-center pl-[24px] pr-[4px] relative rounded-[4px] shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Contact us</p>
      <Icon />
    </div>
  );
}

function Frame1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame2 />
      <Link />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-[1408px]">
      <Frame1 />
      <div className="absolute h-[484.515px] left-0 top-[-0.24px] w-[479px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 479 484.515">
          <path d={svgPaths.p3ee3cd80} fill="var(--fill-0, #AF63FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute flex h-[480.469px] items-center justify-center left-[965px] top-[3.24px] w-[475px]">
        <div className="flex-none rotate-180">
          <div className="h-[480.469px] relative w-[475px]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 475 480.469">
              <path d={svgPaths.pdb8db00} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Customers() {
  return (
    <div className="bg-[#300067] content-stretch flex flex-col items-start pb-[16px] pt-[120px] px-[16px] relative size-full" data-name="Customers">
      <Frame />
    </div>
  );
}