function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center pt-[2px] relative shrink-0">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[20px] w-[232px]">01</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[28px] w-[412px]">{`New Entity Formations & Secretary of State Registrations`}</p>
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
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative">
      <Frame />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[18px] w-[718px]">Operating under a trade name or “doing business as” designation? We manage the filing and publication obligations associated with DBA registrations, monitor renewal dates on your behalf and ensure your DBA registrations are filed well in advance of impending deadlines – all while providing you with complete visibility and peace of mind.</p>
    </div>
  );
}

function Card() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[40px] h-[260px] items-center min-h-px min-w-px relative" data-name="Card">
      <div className="h-full relative shrink-0 w-0">
        <div className="absolute inset-[0_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 260">
            <path d="M0.5 0V260" id="Vector 3253" stroke="var(--stroke-0, #BDBDD6)" />
          </svg>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

export default function Scroll() {
  return (
    <div className="relative size-full" data-name="Scroll">
      <div className="content-stretch flex gap-[77px] items-start px-[80px] py-[40px] relative size-full">
        <Frame2 />
        <Card />
      </div>
      <div aria-hidden="true" className="absolute border-[#bdbdd6] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}