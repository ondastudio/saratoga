import svgPaths from "./svg-woiciahv7w";

function Frame3() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[16px] items-start not-italic relative shrink-0 text-[#f5f5f5] w-full">
      <p className="leading-[1.1] relative shrink-0 text-[40px] tracking-[-0.4px] w-[656px]">We handle compliance, license operations and surplus lines filings – so you can focus on selling insurance.</p>
      <p className="leading-[1.35] relative shrink-0 text-[20px] w-[632px]">Saratoga is the leading, all-in-one compliance platform for the insurance industry. We combine industry leading software, AI-enabled managed services and dedicated insurance regulatory experts to deliver an efficient solution that removes barriers to your success.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--right">
          <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
              <path d={svgPaths.p3be57f00} fill="var(--fill-0, #110846)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#af63ff] content-stretch flex gap-[16px] h-[40px] items-center pl-[24px] pr-[4px] relative rounded-[8px] shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">rEQUEST A DEMO</p>
      <Icon />
    </div>
  );
}

function Icon1() {
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

function Link1() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center pl-[25px] pr-[5px] py-px relative rounded-[8px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Why saratoga</p>
      <Icon1 />
    </div>
  );
}

function Cta() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="CTA">
      <Link />
      <Link1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[80px] top-[200px] w-[682px]">
      <Frame3 />
      <Cta />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="User--filled">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p15c76300} fill="#AF63FF" />
              <path d={svgPaths.pa517000} fill="#AF63FF" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Clients</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[36px]">330</span>
        <span className="leading-none text-[23.22px]">+</span>
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#110846] flex-[1_0_0] h-[141px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Document">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p2f81c380} fill="#F5F5F5" />
              <path d="M10 12.5H2.5V13.75H10V12.5Z" fill="#F5F5F5" />
              <path d="M10 8.75H2.5V10H10V8.75Z" fill="#F5F5F5" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Licenses Managed</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[36px]">40K</span>
        <span className="leading-none text-[23.22px]">+</span>
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#8740ff] flex-[1_0_0] h-[141px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Container4 />
        <Container5 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="User--filled">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p15c76300} fill="#F5F5F5" />
              <path d={svgPaths.pa517000} fill="#F5F5F5" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Premiums Managed</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#f5f5f5] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[36px]">$30B</span>
        <span className="leading-none text-[23.22px]">+</span>
      </p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#af63ff] flex-[1_0_0] h-[141px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="User--filled">
        <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p15c76300} fill="#AF63FF" />
              <path d={svgPaths.pa517000} fill="#AF63FF" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Entity Filings Annually</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#110846] text-[0px] tracking-[0.3955px] whitespace-nowrap">
        <span className="leading-none text-[36px]">1M</span>
        <span className="leading-none text-[23.22px]">+</span>
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#bcbcbc] flex-[1_0_0] h-[141px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start justify-between pb-[24px] pt-[16px] px-[24px] relative size-full">
        <Container10 />
        <Container11 />
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#300067] bottom-0 content-stretch flex gap-[4px] items-start left-1/2 pb-[64px] px-[80px] w-[1440px]">
      <Container />
      <Container3 />
      <Container6 />
      <Container9 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[22.22%_5.55%_32.22%_66.3%]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 405.335 409.999">
        <g id="Group 15501">
          <path d={svgPaths.p14e4e500} fill="var(--fill-0, #9880B3)" id="Vector" />
          <path d={svgPaths.p2392e080} fill="var(--fill-0, #9880B3)" id="Vector_2" />
          <path d={svgPaths.p22992480} fill="var(--fill-0, #9880B3)" id="Vector_3" />
          <path d={svgPaths.p3affa600} fill="var(--fill-0, #9880B3)" id="Vector_4" />
          <path d={svgPaths.pbb13280} fill="var(--fill-0, #9880B3)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">{`About `}</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Carrers</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">cONTACT</p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">sUPPORT</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
          <div className="absolute inset-[6.14%_9.37%_9.37%_6.14%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8971 16.8971">
              <path d={svgPaths.p21a38480} fill="var(--fill-0, #F5F5F5)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pb-[4px] relative">
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
        <Link7 />
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[40px] relative shrink-0 w-[150.345px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.345 40">
        <g id="Group 15439">
          <path d={svgPaths.pfdd2400} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p264cbcf0} fill="var(--fill-0, #AF63FF)" id="Vector_2" />
          <path d={svgPaths.p33f8b580} fill="var(--fill-0, #AF63FF)" id="Vector_3" />
          <path d={svgPaths.p6d8ab70} fill="var(--fill-0, #AF63FF)" id="Vector_4" />
          <path d={svgPaths.p1911cd00} fill="var(--fill-0, #AF63FF)" id="Vector_5" />
          <path d={svgPaths.p24380180} fill="var(--fill-0, #AF63FF)" id="Vector_6" />
          <path d={svgPaths.p17e56580} fill="var(--fill-0, #AF63FF)" id="Vector_7" />
          <path d={svgPaths.p247c72f0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p53f3b00} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p107d9a40} fill="var(--fill-0, white)" id="Vector_10" />
          <path d={svgPaths.p10172000} fill="var(--fill-0, white)" id="Vector_11" />
          <path d={svgPaths.p2364b500} fill="var(--fill-0, white)" id="Vector_12" />
          <path d={svgPaths.pcd07200} fill="var(--fill-0, white)" id="Vector_13" />
          <path d={svgPaths.p2264e820} fill="var(--fill-0, white)" id="Vector_14" />
          <path d={svgPaths.p33e64cc0} fill="var(--fill-0, white)" id="Vector_15" />
          <path d={svgPaths.p1fcad300} fill="var(--fill-0, white)" id="Vector_16" />
          <path d={svgPaths.p1934b800} fill="var(--fill-0, white)" id="Vector_17" />
          <path d={svgPaths.p33c80500} fill="var(--fill-0, white)" id="Vector_18" />
          <path d={svgPaths.p2f44fa80} fill="var(--fill-0, #AF63FF)" id="Vector_19" />
          <path d={svgPaths.p52cbc00} fill="var(--fill-0, #AF63FF)" id="Vector_20" />
          <path d={svgPaths.p1cf9ed00} fill="var(--fill-0, #AF63FF)" id="Vector_21" />
          <path d={svgPaths.p15175680} fill="var(--fill-0, #AF63FF)" id="Vector_22" />
          <path d={svgPaths.p2d5e6900} fill="var(--fill-0, #AF63FF)" id="Vector_23" />
          <path d={svgPaths.p5d26700} fill="var(--fill-0, #AF63FF)" id="Vector_24" />
          <path d={svgPaths.p15dd8500} fill="var(--fill-0, white)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Link9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Products</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Link9 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron--down">
        <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
            <path d={svgPaths.p23048b80} fill="var(--fill-0, #AF63FF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[123px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
        <Link8 />
      </div>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Why Saratoga?</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Solutions</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link12 />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron--down">
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
              <path d={svgPaths.p23048b80} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link14() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Resources</p>
      </div>
    </div>
  );
}

function Link13() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link14 />
        <div className="relative shrink-0 size-[20px]" data-name="Chevron--down">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
                <path d={svgPaths.p23048b80} fill="var(--fill-0, #AF63FF)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link16() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Partners</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link16 />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron--down">
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
              <path d={svgPaths.p23048b80} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Company</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link18 />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Chevron--down">
          <div className="absolute inset-[33.13%_18.75%_31.25%_18.75%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 7.125">
              <path d={svgPaths.p23048b80} fill="var(--fill-0, #AF63FF)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Frame1 />
      <Link10 />
      <Link11 />
      <Link13 />
      <Link15 />
      <Link17 />
    </div>
  );
}

function Link19() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[17px] py-px relative rounded-[4px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Login</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="bg-[#c694fe] content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Request a Demo</p>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Link19 />
      <Link20 />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8740ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[8px] py-[16px] relative w-full">
          <Group />
          <Container13 />
          <Action />
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#300067] relative shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full" data-name="Header">
      <Frame4 />
      <Frame2 />
      <Group1 />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-end left-1/2 pt-[16px] px-[80px] top-0 w-[1440px]" data-name="Navigation">
        <Container12 />
        <Frame />
      </div>
    </div>
  );
}