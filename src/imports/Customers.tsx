import svgPaths from "./svg-dopj9bc3j5";
import { SaratogaButton } from "../app/components/SaratogaButton";

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Ready to Work with Saratoga Compliance?</p>
      <p className="min-w-full relative shrink-0 text-[18px] leading-[24px] tracking-[0.18px] w-[min-content]">{`Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga`}</p>
    </div>
  );
}

function Link() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
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