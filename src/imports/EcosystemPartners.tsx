import svgPaths from "./svg-54wqpt5hwn";
import { SaratogaButton } from "../app/components/SaratogaButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import Footer from "../app/components/Footer";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] h-[140px] items-start leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] w-[650px]">
      <p className="relative shrink-0 text-[40px] tracking-[-0.4px]">Ecosystem Partners</p>
      <p className="relative shrink-0 text-[24px] tracking-[-0.24px] w-[440px]">Strategic Partnerships That Deliver Greater Value to Our Clients</p>
    </div>
  );
}

function Link() {
  return <SaratogaButton variant="primary" color="white" showArrow>Request a Demo</SaratogaButton>;
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-[635px]">Saratoga partners with leading technology providers, insurance associations and service providers to deliver integrated solutions that go beyond compliance. Our alliance ecosystem is designed to ensure that our clients have access to best-in-class capabilities across the full spectrum of insurance operations.</p>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <SaratogaButton variant="primary" color="purple" showArrow>Request a Demo</SaratogaButton>
        <SaratogaButton variant="outline" color="purple" showArrow to="/company/why-saratoga">Why Saratoga</SaratogaButton>
      </div>
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

function Header() {
  return (
    <div className="bg-[#110846] h-[470px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <Frame1 />
      <PrimaryNavbar />
    </div>
  );
}

function FilterTag({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button className={`content-stretch flex h-[32px] items-center justify-center px-[24px] py-[8px] relative rounded-[4px] shrink-0 cursor-pointer transition-colors duration-200 ${active ? "bg-[#af63ff]" : "border border-[#af63ff] border-solid hover:bg-[#af63ff] hover:border-transparent"}`} data-name="Tag">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">{label}</p>
    </button>
  );
}

function Filters() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Filters">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-full">FILTERS</p>
      <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0 w-full border-b border-[#af63ff] border-solid">
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Filters">
          <FilterTag label="All PARTNERS" active />
          <FilterTag label="SOLUTION PROVIDERS" />
          <FilterTag label="PAS" />
          <FilterTag label="INSURTECH" />
          <FilterTag label="NETWORK/ASSOCIATION" />
          <FilterTag label="AMS" />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0">
      <p className="font-['Saans:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#f5f5f5] text-[28px]">Technology, Affiliate &amp; Solution Provider</p>
      <Filters />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame33 />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">AMS360</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Ascend's integration with AMS360 allows agents to sync customer data across platforms to easily get a comprehensive view of a client’s policy information and payment status.`}</p>
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

function Link20() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame53 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link20 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame39 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo />
        <Frame24 />
        <Frame54 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.33px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo1() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame35 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Agency Collective</p>
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame36 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Ascend is the the preferred payments & financing platform for the Agency Collective and its 700+ independent agencies.`}</p>
    </div>
  );
}

function Frame58() {
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
      <Frame58 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link21 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame41 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo1 />
        <Frame26 />
        <Frame57 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.67px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo2() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame37 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Agency Revolution</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame38 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Agency Revolution helps agents attract clients, build relationships, and grow revenue with automated insurance marketing.</p>
    </div>
  );
}

function Frame60() {
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
      <Frame60 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link22 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame42 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo2 />
        <Frame27 />
        <Frame59 />
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex h-[488px] items-center relative shrink-0 w-full">
      <Frame14 />
      <Frame16 />
      <Frame19 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo3() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame44 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">A’IX</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame45 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">Apeironix, crafted by Triforta Insurance Partners, is the cutting-edge policy lifecycle management platform tailored for agencies, advisors, and MGUs. It revolutionizes agency operations by streamlining front, middle, and back offices.</p>
    </div>
  );
}

function Frame62() {
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
      <Frame62 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Link23 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame46 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo3 />
        <Frame29 />
        <Frame61 />
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.33px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo4() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame47 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Benefit Poiny</p>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame48 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">BenefitPoint is a management system built to address a benefits agency’s complex and specific needs. This purpose-built design approach ensures that users can access the tools and features that impact their daily operations.</p>
    </div>
  );
}

function Frame64() {
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
      <Frame64 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link24 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo4 />
        <Frame30 />
        <Frame63 />
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[122.67px] top-[79.52px]">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#33317a] text-[20px] tracking-[-0.2px] whitespace-nowrap">Client Logo</p>
    </div>
  );
}

function Logo5() {
  return (
    <div className="bg-[#6a6b9e] h-[183px] relative rounded-[4px] shrink-0 w-full" data-name="Logo">
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[-0.2px] whitespace-nowrap">Benelinx</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame52 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.3] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[-0.18px] w-[min-content]">{`Benelinx provides benefits brokers with an integrated approach to agency management, automating day-to-day operations, sales & renewals, and client service within a secure, cloud-based platform.`}</p>
    </div>
  );
}

function Frame68() {
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

function Link25() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0" data-name="Link">
      <Frame68 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <Link25 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame67 />
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame66 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between px-[40px] py-[24px] relative size-full">
        <Logo5 />
        <Frame31 />
        <Frame65 />
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex h-[488px] items-center relative shrink-0 w-full">
      <Frame15 />
      <Frame20 />
      <Frame21 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[80px] items-start relative shrink-0 w-full">
      <Frame25 />
      <Frame28 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[84px] items-start w-full">
      <Frame56 />
      <Frame32 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="bg-[#110846] relative shrink-0 w-full px-[80px] py-[84px]">
      <Frame55 />
      <div className="flex justify-center mt-[84px]">
        <SaratogaButton variant="outline" color="purple" showArrow>Become a Saratoga Alliance Partner</SaratogaButton>
      </div>
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

export default function EcosystemPartners() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="Ecosystem Partners">
      <Header />
      <Frame18 />
      <Customers />
      <Footer variant="dark" />
    </div>
  );
}