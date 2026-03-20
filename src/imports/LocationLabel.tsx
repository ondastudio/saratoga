import svgPaths from "./svg-bd42k75egi";

function Frame1() {
  return <div className="absolute h-[22px] left-[96px] top-[-3.62px] w-[19px]" />;
}

function Frame() {
  return (
    <div className="absolute bg-[#ddc0fe] content-stretch flex items-center justify-center left-0 px-[24px] py-[4px] rounded-[4px] top-[16px]">
      <div aria-hidden="true" className="absolute border border-[#110846] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#110846] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">alabama</p>
    </div>
  );
}

function Cursor() {
  return (
    <div className="relative size-[20px]" data-name="Cursor--2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Cursor--2">
          <rect fill="white" height="20" style={{ mixBlendMode: "multiply" }} width="20" />
          <path d={svgPaths.p2ec200} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function LocationLabel() {
  return (
    <div className="relative size-full" data-name="Location Label">
      <Frame1 />
      <Frame />
      <div className="absolute flex items-center justify-center left-[111px] size-[20px] top-[0.38px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Cursor />
        </div>
      </div>
    </div>
  );
}