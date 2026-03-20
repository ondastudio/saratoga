import svgPaths from "./svg-gcuo66l2bo";

function Numbers() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Numbers">
      <div aria-hidden="true" className="absolute border border-[#8740ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[16px] text-center w-[23px]">01</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-[225px]">
      <div className="h-[32px] relative shrink-0 w-[24px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 32">
          <path d={svgPaths.p34f09d00} fill="var(--fill-0, #AF63FF)" id="Vector" />
        </svg>
      </div>
      <Numbers />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#8740ff] text-[28px] w-[412px]">{`New Entity Formations & Secretary of State Registrations`}</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[401px]">
      <Title />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[84px] items-start min-h-px min-w-px relative">
      <Frame />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[18px] w-[718px]">Operating under a trade name or “doing business as” designation? We manage the filing and publication obligations associated with DBA registrations, monitor renewal dates on your behalf and ensure your DBA registrations are filed well in advance of impending deadlines – all while providing you with complete visibility and peace of mind.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-center min-h-px min-w-px relative" data-name="Card">
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[0_-0.5px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 240">
              <path d="M0.5 0V240" id="Vector 3253" stroke="var(--stroke-0, #AF63FF)" />
            </svg>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

export default function Scroll() {
  return (
    <div className="relative size-full" data-name="Scroll">
      <div className="content-stretch flex gap-[129px] items-start px-[80px] py-[40px] relative size-full">
        <Frame2 />
        <Card />
      </div>
      <div aria-hidden="true" className="absolute border-[#af63ff] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}