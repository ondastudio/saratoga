import svgPaths from "./svg-adm5ef8z0b";
import { SaratogaButton } from "../app/components/SaratogaButton";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] h-[140px] items-start leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] w-[650px]">
      <p className="relative shrink-0 text-[40px] tracking-[-0.4px] w-[440px]">Integrations</p>
      <p className="relative shrink-0 text-[24px] tracking-[-0.24px] w-[440px]">Powerful Integrations That Connect Saratoga to the Systems You Already Use</p>
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
    <div className="bg-[#f5f5f5] content-stretch flex gap-[16px] h-[40px] items-center pl-[24px] pr-[4px] relative rounded-[8px] shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">rEQUEST A DEMO</p>
      <Icon />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[599px]">Saratoga is designed to fit seamlessly into your existing technology ecosystem. Our pre-built integrations and open API architecture ensure that compliance data flows where it needs to go – eliminating manual data entry, connecting disparate systems and keeping your entire organization aligned on one authoritative set of records.</p>
      <Link />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[80px] content-stretch flex items-start left-[80px] w-[1280px]">
      <Frame />
      <Frame13 />
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">{`About `}</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Carrers</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Events</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">cONTACT</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">sUPPORT</p>
      </div>
    </div>
  );
}

function Link6() {
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

function Container() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-start pb-[4px] relative">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
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

function Link8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Products</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Link">
      <Link8 />
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

function Frame11() {
  return (
    <div className="h-[40px] relative shrink-0 w-[123px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center px-[16px] relative size-full">
        <Link7 />
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[40px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center px-[16px] relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Why Saratoga?</p>
      </div>
    </div>
  );
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Solutions</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link11 />
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

function Link13() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Resources</p>
      </div>
    </div>
  );
}

function Link12() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link13 />
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

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Partners</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link15 />
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

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Company</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center px-[16px] relative">
        <Link17 />
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

function Container1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Container">
      <Frame11 />
      <Link9 />
      <Link10 />
      <Link12 />
      <Link14 />
      <Link16 />
    </div>
  );
}

function Link18() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center px-[17px] py-px relative rounded-[4px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Login</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="bg-[#c694fe] content-stretch flex h-[40px] items-center justify-center px-[24px] relative rounded-[4px] shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Request a Demo</p>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Action">
      <Link18 />
      <Link19 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#8740ff] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[8px] py-[16px] relative w-full">
          <Group />
          <Container1 />
          <Action />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#110846] h-[470px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <Frame1 />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-end left-1/2 pt-[16px] px-[80px] top-0 w-[1440px]" data-name="Navigation">
        <Container />
        <Frame2 />
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122px] top-[80px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">NIPR</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame30 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Native integration with the National Insurance Producer Registry for real-time producer data, license verification, appointment processing and regulatory transactions.</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">LEARN MORE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link20() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame45 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link20 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame35 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo />
        <Frame21 />
        <Frame46 />
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.33px] top-[80px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Applied Epic</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame32 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Seamlessly connect sales and compliance functions within Applied's industry-leading agency management system.`}</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">LEARN MORE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link21() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame48 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link21 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame36 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo1 />
        <Frame23 />
        <Frame47 />
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.67px] top-[80px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Salesforce</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Embed compliance data directly into your CRM workflows for informed decision-making without switching systems.</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">LEARN MORE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link22() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame51 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link22 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame37 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo2 />
        <Frame24 />
        <Frame50 />
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex h-[488px] items-center relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122px] top-[80px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame39 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Agency Management System</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame40 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Connect with leading AMS platforms to synchronize producer data, compliance statuses and appointment records.</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">LEARN MORE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link23() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame53 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link23 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo3 />
        <Frame26 />
        <Frame52 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.33px] top-[80px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Carrier Systems</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame43 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">API connectivity for submitting contracting data, receiving appointment confirmations and maintaining synchronized records with carrier partners.</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[139.906px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">LEARN MORE</p>
      <div className="h-[8px] relative shrink-0 w-[10px]" data-name="Vector">
        <div className="absolute inset-[-9.38%_-7.5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5 9.5">
            <path d={svgPaths.pa712600} id="Vector" stroke="var(--stroke-0, #AF63FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Link24() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame55 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link24 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame44 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo4 />
        <Frame27 />
        <Frame54 />
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div className="size-full" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[488px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame19 />
      <Frame20 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame25 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[84px] items-start left-[80px] top-[211px] w-[1280px]">
      <Frame28 />
      <Frame38 />
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

function Link25() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[16px] h-[40px] items-center justify-center left-[calc(50%+0.5px)] pl-[25px] pr-[5px] py-px rounded-[8px] top-[1355px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] uppercase whitespace-nowrap">EXPLORE FULL INTEGRATIONS LIBRARY</p>
      <Icon1 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#110846] h-[1395px] relative shrink-0 w-full">
      <p className="absolute font-['Saans:Regular',sans-serif] leading-[1.2] left-[80px] not-italic text-[#f5f5f5] text-[36px] top-[84.48px] w-[412px]">Featured Integrations</p>
      <Frame49 />
      <Link25 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Ready to Work with Saratoga Compliance?</p>
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">{`Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga`}</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#8740ff] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon">
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

function Link26() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame10 />
      <Link26 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-[1408px]">
      <Frame9 />
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

function Customers() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[120px] px-[16px] relative shrink-0" data-name="Customers">
      <Frame8 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">Insurance Entity Management</p>
      <p className="relative shrink-0">{`Producer & License Management`}</p>
      <p className="relative shrink-0">{`Contracting & Appointment Management`}</p>
      <p className="relative shrink-0">Surplus Lines Management</p>
      <p className="relative shrink-0">{`E&O Coverage`}</p>
      <p className="relative shrink-0">Regulatory Helpdesk</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(33.33%+34px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Products</p>
      <List />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">{`Insurance Agencies & Brokers`}</p>
      <p className="relative shrink-0">{`MGAs & MGUs`}</p>
      <p className="relative shrink-0">{`Wholesale + E&S Brokers`}</p>
      <p className="relative shrink-0">{`Hybrid & Fronting Carriers`}</p>
      <p className="relative shrink-0">InsurTechs</p>
      <p className="relative shrink-0">Insurance Carriers</p>
      <p className="relative shrink-0">{`Adjusters & Claims Managers`}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(58.33%+67px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">BY BUSINESS TYPE</p>
      <List1 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">Launch an Agency</p>
      <p className="relative shrink-0">Mitigate Risk</p>
      <p className="relative shrink-0">Strealine Operations</p>
      <p className="relative shrink-0">Boost Profitability</p>
      <p className="relative shrink-0">Improve Distribution</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[84px] whitespace-nowrap" data-name="Container">
      <p className="capitalize font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px]">BY USE CASE</p>
      <List2 />
    </div>
  );
}

function Group1() {
  return (
    <div className="h-[60px] relative shrink-0 w-[225.518px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225.518 60">
        <g id="Group 15440">
          <path d={svgPaths.p3e219680} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.p55c9900} fill="var(--fill-0, #AF63FF)" id="Vector_2" />
          <path d={svgPaths.p2d2bf980} fill="var(--fill-0, #AF63FF)" id="Vector_3" />
          <path d={svgPaths.p32eb7880} fill="var(--fill-0, #AF63FF)" id="Vector_4" />
          <path d={svgPaths.p45d3700} fill="var(--fill-0, #AF63FF)" id="Vector_5" />
          <path d={svgPaths.pf7d2900} fill="var(--fill-0, #AF63FF)" id="Vector_6" />
          <path d={svgPaths.p1c0c5580} fill="var(--fill-0, #AF63FF)" id="Vector_7" />
          <path d={svgPaths.p3a6da400} fill="var(--fill-0, #F5F5F5)" id="Vector_8" />
          <path d={svgPaths.p342a1000} fill="var(--fill-0, #F5F5F5)" id="Vector_9" />
          <path d={svgPaths.p39ebd070} fill="var(--fill-0, #F5F5F5)" id="Vector_10" />
          <path d={svgPaths.p2cdd600} fill="var(--fill-0, #F5F5F5)" id="Vector_11" />
          <path d={svgPaths.pd199e00} fill="var(--fill-0, #F5F5F5)" id="Vector_12" />
          <path d={svgPaths.p3cf85f80} fill="var(--fill-0, #F5F5F5)" id="Vector_13" />
          <path d={svgPaths.pb15400} fill="var(--fill-0, #F5F5F5)" id="Vector_14" />
          <path d={svgPaths.p116ec100} fill="var(--fill-0, #F5F5F5)" id="Vector_15" />
          <path d={svgPaths.p1d9c0600} fill="var(--fill-0, #F5F5F5)" id="Vector_16" />
          <path d={svgPaths.p9809f00} fill="var(--fill-0, #F5F5F5)" id="Vector_17" />
          <path d={svgPaths.p3498d900} fill="var(--fill-0, #F5F5F5)" id="Vector_18" />
          <path d={svgPaths.p3d74900} fill="var(--fill-0, #AF63FF)" id="Vector_19" />
          <path d={svgPaths.p2cddf300} fill="var(--fill-0, #AF63FF)" id="Vector_20" />
          <path d={svgPaths.p170a2d00} fill="var(--fill-0, #AF63FF)" id="Vector_21" />
          <path d={svgPaths.p3c41e200} fill="var(--fill-0, #AF63FF)" id="Vector_22" />
          <path d={svgPaths.p1f98ad80} fill="var(--fill-0, #AF63FF)" id="Vector_23" />
          <path d={svgPaths.p1640070} fill="var(--fill-0, #AF63FF)" id="Vector_24" />
          <path d={svgPaths.p143b9500} fill="var(--fill-0, #F5F5F5)" id="Vector_25" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[84px] w-[305px]">
      <Group1 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[min-content] whitespace-pre-wrap">{`Saratoga Compliance Solutions is the leading provider of all-on-one compliance and license operations software and AI-enabled managed services for insurance companies in the U.S. and Canada.  `}</p>
    </div>
  );
}

function SocialMedia() {
  return (
    <div className="h-[24px] relative shrink-0 w-[152px]" data-name="Social Media">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 24">
        <g id="Social Media">
          <path d={svgPaths.p223b8700} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          <path d={svgPaths.p1ffe4480} fill="var(--fill-0, #F5F5F5)" id="Vector_2" />
          <path d={svgPaths.p2cc02a00} fill="var(--fill-0, #F5F5F5)" id="Vector_3" />
          <path d={svgPaths.p166dcf40} fill="var(--fill-0, #F5F5F5)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[538px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[min-content]">Follow us</p>
      <SocialMedia />
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Arrow--right">
        <div className="absolute inset-[18.75%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 12.5">
            <path d={svgPaths.p3be57f00} fill="var(--fill-0, #AF63FF)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[8px] shrink-0 w-[277px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[#9293ba] text-[16px] whitespace-nowrap">Enter your email</p>
      <div className="opacity-50"><Icon3 /></div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(33.33%+34px)] top-[538px]" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">Subscribe to our News and update</p>
      <List3 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">Case Studies</p>
      <p className="relative shrink-0">{`Blog & Insights`}</p>
      <p className="relative shrink-0">Regulatory Database</p>
      <p className="relative shrink-0">Events</p>
      <p className="relative shrink-0">Why Saratoga?</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(58.33%+67px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Resources</p>
      <List4 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">Integrations</p>
      <p className="relative shrink-0">Developer Portal</p>
      <p className="relative shrink-0">Alliances</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(33.33%+34px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Partners</p>
      <List5 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[8px] items-start relative shrink-0 text-[#f5f5f5] text-[16px] w-full" data-name="List">
      <p className="relative shrink-0">About Us</p>
      <p className="relative shrink-0">Careers</p>
      <p className="relative shrink-0">Leadership</p>
      <p className="relative shrink-0">{`Press & News`}</p>
      <p className="relative shrink-0">Contact Us</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start leading-[1.2] left-[calc(83.33%+15px)] not-italic top-[338px] whitespace-nowrap" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] relative shrink-0 text-[#af63ff] text-[14px] uppercase">Company</p>
      <List6 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Building">
        <div className="absolute inset-[6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 17.5">
            <g id="Vector">
              <path d={svgPaths.p377f4a80} fill="#AF63FF" />
              <path d="M11.25 3.75H10V5H11.25V3.75Z" fill="#AF63FF" />
              <path d="M15 3.75H13.75V5H15V3.75Z" fill="#AF63FF" />
              <path d={svgPaths.p3839e700} fill="#AF63FF" />
              <path d="M15 7.5H13.75V8.75H15V7.5Z" fill="#AF63FF" />
              <path d={svgPaths.p345af8b0} fill="#AF63FF" />
              <path d={svgPaths.p143f4940} fill="#AF63FF" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[272px] whitespace-pre-wrap">
        {`36 Long Alley `}
        <br aria-hidden="true" />
        Saratoga Springs, NY 12866
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Email">
        <div className="absolute inset-[18.75%_6.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 12.5">
            <path d={svgPaths.p2fbb7800} fill="var(--fill-0, #AF63FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[272px]">info@saratogacompliance.com</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Phone">
        <div className="absolute inset-[9.37%_9.37%_9.38%_9.35%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.256 16.25">
            <path d={svgPaths.p3d023580} fill="var(--fill-0, #AF63FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[272px]">+1 (518) 583-0639</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[338px] w-[304px]">
      <Frame4 />
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function TermsOfService() {
  return (
    <div className="content-stretch flex font-['Px_Grotesk:Regular',sans-serif] gap-[24px] items-center leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap" data-name="Terms of Service">
      <p className="relative shrink-0">Terms of Service</p>
      <p className="relative shrink-0">Privacy Policy</p>
      <p className="relative shrink-0">Data Security</p>
      <p className="relative shrink-0">Cookie Policy</p>
    </div>
  );
}

function Footnote() {
  return (
    <div className="absolute content-stretch flex items-start justify-between left-[79px] py-[16px] top-[651px] w-[1281px]" data-name="Footnote">
      <div aria-hidden="true" className="absolute border-[#af63ff] border-solid border-t inset-0 pointer-events-none" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase w-[672px] whitespace-pre-wrap">
        {`Copyright © 2026 Saratoga Compliance Solutions, LLC. `}
        <br aria-hidden="true" />
        {`All Rights Reserved. “Saratoga” and the stylized monogram are registered trademarks.  `}
      </p>
      <TermsOfService />
    </div>
  );
}

export default function Integrations() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="Integrations">
      <Header />
      <Frame18 />
      <Customers />
      <div className="bg-[#110846] h-[717px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <Container2 />
        <Container3 />
        <Container4 />
        <Frame12 />
        <Frame3 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Frame7 />
        <Footnote />
      </div>
    </div>
  );
}