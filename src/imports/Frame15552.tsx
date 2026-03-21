import svgPaths from "./svg-zxa6n87bny";
import { ExpandButton } from "../app/components/ExpandButton";

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
  return <ExpandButton size={32} icon="add" />;
}

export default function Frame() {
  return (
    <div className="bg-[#6a6b9e] content-stretch flex gap-[16px] items-center pl-[16px] pr-[4px] py-[4px] relative rounded-[8px] size-full">
      <Frame1 />
      <Point />
    </div>
  );
}