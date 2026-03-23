import svgPaths from "./svg-u57s1glrb0";
import { Link as RouterLink } from "react-router";
import { FooterLink } from "../app/components/FooterLink";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { NavLink } from "../app/components/NavLink";
import { IconButton } from "../app/components/IconButton";
import { ArrowIcon } from "../app/components/ArrowIcon";

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] w-[413px]">
      <p className="relative shrink-0 text-[40px] tracking-[-0.4px]">Integrations</p>
      <p className="relative shrink-0 text-[24px] tracking-[-0.24px] leading-[28px]">Powerful Integrations That Connect Saratoga to the Systems You Already Use</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-[635px]">
      <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-full">Saratoga is designed to fit seamlessly into your existing technology ecosystem. Our pre-built integrations and open API architecture ensure that compliance data flows where it needs to go – eliminating manual data entry, connecting disparate systems and keeping your entire organization aligned on one authoritative set of records.</p>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <SaratogaButton variant="primary" color="purple" showArrow>Request a Demo</SaratogaButton>
        <SaratogaButton variant="outline" color="purple" showArrow to="/company/why-saratoga">Why Saratoga</SaratogaButton>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bottom-[80px] content-stretch flex gap-[232px] items-start left-[85px] w-[1280px]">
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
    <div className="h-[40px] relative shrink-0" data-name="Link" onClick={() => window.dispatchEvent(new Event("open-search"))}>
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
    <RouterLink to="/" aria-label="Go to homepage" style={{ display: "block" }}>
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
    </RouterLink>
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
  return <NavLink variant="chevron">Products</NavLink>;
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
  return <NavLink>Why Saratoga?</NavLink>;
}

function Link11() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Solutions</p>
    </div>
  );
}

function Link10() {
  return <NavLink variant="chevron">Solutions</NavLink>;
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
  return <NavLink variant="chevron">Resources</NavLink>;
}

function Link15() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Partners</p>
    </div>
  );
}

function Link14() {
  return <NavLink variant="chevron">Partners</NavLink>;
}

function Link17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] uppercase whitespace-nowrap">Company</p>
    </div>
  );
}

function Link16() {
  return <NavLink variant="chevron">Company</NavLink>;
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
  return <SaratogaButton variant="ghost" color="white">Login</SaratogaButton>;
}

function Link19() {
  return <SaratogaButton variant="primary" color="lilac">Request a Demo</SaratogaButton>;
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
      {/* Background pattern removed */}
      <Frame1 />
      <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-end left-1/2 pt-[16px] px-[80px] top-0 w-[1440px]" data-name="Navigation">
        <Container />
        <Frame2 />
      </div>
    </div>
  );
}

// Integration logos
import docusignLogo from "../assets/integrations/docusign.svg";
// finraLogo: complex clip-path logo, needs manual SVG export from Figma
import salesforceLogo from "../assets/integrations/salesforce.svg";
import varicentLogo from "../assets/integrations/varicent.svg";
import verifiedfirstLogo from "../assets/integrations/verifiedfirst.svg";
import webceLogo from "../assets/integrations/webce.svg";

const integrations = [
  {
    name: "Accurate",
    description: "Accurate + AgentSync offers in-system background checks to keep your onboarding streamlined and efficient.",
    logo: null,
  },
  {
    name: "BIG",
    description: "BIG's background check solutions integrate with AgentSync's Manage product to give you greater visibility and control of your producer, broker, and adjuster management.",
    logo: null,
  },
  {
    name: "Docusign",
    description: "AgentSync customers benefit from the speed and efficiency of Docusign integration to send, track and sign agreements with the world's #1 electronic signature solution.",
    logo: docusignLogo,
  },
  {
    name: "FINRA",
    description: "AgentSync leverages FINRA's API Developer Center initiative to provide realtime visibility into the total compliance of variable lines brokers.",
    logo: null,
  },
  {
    name: "Guidewire",
    description: "PolicyCenter integration with AgentSync allows for real-time checking of producer compliance status as a policy moves through the lifecycle.",
    logo: null,
  },
  {
    name: "NIPR",
    description: "AgentSync leverages NIPR's data stream to deliver realtime, integrated, and automated compliance services to carriers, agencies, and MGAs/MGUs.",
    logo: null,
  },
  {
    name: "Salesforce",
    description: "AgentSync + Salesforce unlocks business data to give you a 360-degree view of your customer and distribution channel.",
    logo: salesforceLogo,
  },
  {
    name: "Varicent",
    description: "With Varicent and AgentSync, you can redefine producer management and team incentives.",
    logo: varicentLogo,
  },
  {
    name: "VerifiedFirst",
    description: "Verified First and AgentSync partner to provide a comprehensive automated background check and producer management process.",
    logo: verifiedfirstLogo,
  },
  {
    name: "WebCE",
    description: "WebCE's continuing education courses integrate with AgentSync's Manage product through the service, Learn, to give you visibility into the CE compliance status of your producers.",
    logo: webceLogo,
  },
];

function IntegrationCard({ name, description, logo }: { name: string; description: string; logo: string | null }) {
  return (
    <div className="flex-[1_0_0] min-w-0 relative">
      <div aria-hidden="true" className="absolute border-[#33317a] border-l border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start justify-between px-[40px] py-[24px] relative size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="bg-[#D8C1FE] h-[183px] relative rounded-[4px] shrink-0 w-full flex items-center justify-center" data-name="Logo">
            {logo ? (
              <img src={logo} alt={`${name} logo`} className="max-h-[60%] max-w-[70%] object-contain" />
            ) : (
              <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic text-[#33317a] text-[20px] tracking-[-0.2px]">Client Logo</p>
            )}
          </div>
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            <p className="font-['Saans:Medium',sans-serif] leading-[28px] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] tracking-[0.2px]">{name}</p>
            <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-full">{description}</p>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">LEARN MORE</p>
          <div className="shrink-0 size-[32px] flex items-center justify-center">
            <svg width="15" height="12.5" viewBox="0 0 15 12.5" fill="none">
              <path d="M8.75 0L7.85625 0.870625L12.5937 5.625H0V6.875H12.5937L7.85625 11.6081L8.75 12.5L15 6.25L8.75 0Z" fill="#AF63FF" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  const rows = [];
  for (let i = 0; i < integrations.length; i += 3) {
    rows.push(integrations.slice(i, i + 3));
  }

  return (
    <div className="bg-[#110846] relative shrink-0 w-full px-[80px] py-[84px]">
      <p className="font-['Saans:Regular',sans-serif] leading-[32px] not-italic text-[#f5f5f5] text-[28px] mb-[64px]">Featured Integrations</p>
      <div className="content-stretch flex flex-col gap-[84px] items-start w-full">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="content-stretch flex items-stretch relative shrink-0 w-full">
            {row.map((integration) => (
              <IntegrationCard key={integration.name} {...integration} />
            ))}
            {row.length < 3 && Array.from({ length: 3 - row.length }).map((_, i) => (
              <div key={`empty-${i}`} className="flex-[1_0_0] min-w-0" />
            ))}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[84px]">
        <div className="content-stretch flex gap-[16px] h-[40px] items-center justify-center pl-[25px] pr-[5px] py-px rounded-[8px] relative" data-name="Link">
          <div aria-hidden="true" className="absolute border border-[#af63ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
          <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#fafafa] text-[14px] uppercase whitespace-nowrap">EXPLORE FULL INTEGRATIONS LIBRARY</p>
          <IconButton size={32} variant="filled-lilac" />
        </div>
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

function Link25() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
}

function Frame9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame10 />
      <Link25 />
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
      <FooterLink to="/products/insurance-entity-management">Insurance Entity Management</FooterLink>
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
      <FooterLink to="/solutions/insurance-agencies-brokers">{`Insurance Agencies & Brokers`}</FooterLink>
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
      <RouterLink to="/" aria-label="Go to homepage" className="absolute block size-full">
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
      </RouterLink>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[84px] w-[305px]">
      <Group1 />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#f5f5f5] text-[16px] w-[min-content] whitespace-pre-wrap">{`Saratoga Compliance Solutions is the leading provider of all-in-one compliance and license operations software and AI-enabled compliance managed services for insurance companies in the U.S. and Canada.  `}</p>
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

function Icon2() {
  return (
    <ArrowIcon color="#9293BA" />
  );
}

function List3() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 w-[277px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[#9293ba] text-[16px] whitespace-nowrap">Enter your email</p>
      <div className="opacity-50"><Icon2 /></div>
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
      <FooterLink to="/resources/regulatory-database">Regulatory Database</FooterLink>
      <p className="relative shrink-0">Events</p>
      <FooterLink to="/company/why-saratoga">Why Saratoga?</FooterLink>
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
      <FooterLink to="/partners/integrations">Integrations</FooterLink>
      <FooterLink to="/partners/developer-portal">Developer Portal</FooterLink>
      <FooterLink to="/partners/ecosystem-partners">Ecosystem Partners</FooterLink>
      <p className="relative shrink-0">{`Legal & Regulatory Alliances`}</p>
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
      <FooterLink to="/company/about-us">About Us</FooterLink>
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