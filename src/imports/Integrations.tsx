import svgPaths from "./svg-u57s1glrb0";
import gradientHorizontal from "../../assets/svg/Gradient_Horizontal.svg";
import { SaratogaButton } from "../app/components/SaratogaButton";
import { IconButton } from "../app/components/IconButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import Footer from "../app/components/Footer";
// Integration logos
import docusignLogo from "../assets/integrations/docusign.svg";
// finraLogo: complex clip-path logo, needs manual SVG export from Figma
import salesforceLogo from "../assets/integrations/salesforce.svg";
import varicentLogo from "../assets/integrations/varicent.svg";
import verifiedfirstLogo from "../assets/integrations/verifiedfirst.svg";
import webceLogo from "../assets/integrations/webce.svg";

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
      <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-full">Saratoga is designed to fit seamlessly into your existing technology ecosystem. Our pre-built integrations and open API architecture ensure that compliance data flows where it needs to go &#x2013; eliminating manual data entry, connecting disparate systems and keeping your entire organization aligned on one authoritative set of records.</p>
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


function Header() {
  return (
    <div className="bg-[#110846] h-[470px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <img src={gradientHorizontal} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <Frame1 />
      <PrimaryNavbar />
    </div>
  );
}

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
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">{"Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga"}</p>
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

export default function Integrations() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="Integrations">
      <Header />
      <Frame18 />
      <Customers />
      <Footer variant="dark" />
    </div>
  );
}
