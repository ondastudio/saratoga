import gradientHorizontal from "../../assets/svg/Gradient_Horizontal.svg";
import { SaratogaButton } from "../app/components/SaratogaButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import Footer from "../app/components/Footer";
import CustomersCTA from "./Customers";

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <div className="bg-[#110846] h-[470px] overflow-clip relative shrink-0 w-full" data-name="Header">
      <img src={gradientHorizontal} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
      <PrimaryNavbar />
      <div className="absolute left-[85px] top-[200px] flex gap-[232px] items-start w-[1280px]">
        {/* Left: title + subtitle */}
        <div className="flex flex-col gap-[24px] items-start shrink-0 w-[413px]">
          <p className="font-['Saans:Regular',sans-serif] text-[40px] leading-[44px] text-[#f5f5f5]">
            Legal &amp; Regulatory Alliances
          </p>
          <p className="font-['Saans:Regular',sans-serif] text-[24px] leading-[28px] text-[#f5f5f5]">
            Partnerships with the leading law firms serving the insurance distribution sector.
          </p>
        </div>
        {/* Right: body + CTAs */}
        <div className="flex flex-col gap-[40px] items-start flex-1">
          <p className="font-['Saans:Regular',sans-serif] text-[18px] leading-[24px] tracking-[0.18px] text-[#f5f5f5]">
            Our client onboarding tool allows us to quickly "pick up" where your transactional advisors stop. Post-M&amp;A or post-formation, we can take over your compliance and license operations needs with a painless hand-off.{" "}
            Our platform is also designed to generate incident files that can be easily and securely shared with our growing network of law firm and regulatory alliance partners, should a legally sensitive matter emerge.
          </p>
          <div className="flex gap-[8px] items-center">
            <SaratogaButton variant="primary" color="purple" showArrow>Request a Demo</SaratogaButton>
            <SaratogaButton variant="outline" color="purple" showArrow to="/company/why-saratoga">Why Saratoga</SaratogaButton>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Partner Cards ────────────────────────────────────────────────────────────

type PartnerCardProps = {
  name: string;
  description: string;
};

function PartnerCard({ name, description }: PartnerCardProps) {
  return (
    <div className="border-[#33317a] border-l border-solid flex-[1_0_0] flex flex-col h-[520px] items-start justify-between px-[40px] py-[24px]">
      {/* Top: logo + text */}
      <div className="flex flex-col gap-[24px] items-start w-full">
        <div className="bg-[#6a6b9e] h-[183px] rounded-[4px] w-full flex items-center justify-center shrink-0">
          <p className="font-['Saans:Medium',sans-serif] text-[20px] tracking-[-0.2px] text-[#33317a]">Client Logo</p>
        </div>
        <div className="flex flex-col gap-[16px] items-start w-full">
          <p className="font-['Saans:Medium',sans-serif] text-[20px] leading-[28px] tracking-[0.2px] text-[#f5f5f5]">{name}</p>
          <p className="font-['Saans:Regular',sans-serif] text-[18px] leading-[24px] tracking-[0.18px] text-[#f5f5f5]">{description}</p>
        </div>
      </div>
      {/* Bottom: Learn More */}
      <div className="flex gap-[8px] items-center">
        <p className="font-['Px_Grotesk:Regular',sans-serif] text-[14px] leading-[16px] text-[#af63ff] uppercase whitespace-nowrap">
          LEARN MORE
        </p>
        <div className="flex items-center justify-center shrink-0 size-[32px]">
          <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
            <path d="M14 6.5L8.5 1M14 6.5L8.5 12M14 6.5H1" stroke="#AF63FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

const partners = [
  {
    name: "AMS360",
    description: "Ascend's integration with AMS360 allows agents to sync customer data across platforms to easily get a comprehensive view of a client's policy information and payment status.",
  },
  {
    name: "Agency Collective",
    description: "Ascend is the preferred payments & financing platform for the Agency Collective and its 700+ independent agencies.",
  },
  {
    name: "Agency Revolution",
    description: "Agency Revolution helps agents attract clients, build relationships, and grow revenue with automated insurance marketing.",
  },
  {
    name: "A'IX",
    description: "Apeironix, crafted by Triforta Insurance Partners, is the cutting-edge policy lifecycle management platform tailored for agencies, advisors, and MGUs. It revolutionizes agency operations by streamlining front, middle, and back offices.",
  },
  {
    name: "Benefit Point",
    description: "BenefitPoint is a management system built to address a benefits agency's complex and specific needs. This purpose-built design approach ensures that users can access the tools and features that impact their daily operations.",
  },
  {
    name: "Benelinx",
    description: "Benelinx provides benefits brokers with an integrated approach to agency management, automating day-to-day operations, sales & renewals, and client service within a secure, cloud-based platform.",
  },
];

function PartnerGrid() {
  const row1 = partners.slice(0, 3);
  const row2 = partners.slice(3, 6);

  return (
    <div className="bg-[#110846] flex flex-col items-start px-[80px] py-[84px] shrink-0 w-full">
      <div className="flex flex-col gap-[84px] items-start w-[1280px]">
        {/* Section heading */}
        <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[40px] text-[#f5f5f5] w-[432px]">
          Law Firm &amp; Regulatory Advisor Network
        </p>
        {/* Cards */}
        <div className="flex flex-col gap-[84px] items-start w-full">
          <div className="flex items-stretch w-full">
            {row1.map((p) => <PartnerCard key={p.name} {...p} />)}
          </div>
          <div className="flex items-stretch w-full">
            {row2.map((p) => <PartnerCard key={p.name} {...p} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LegalRegulatoryAlliances() {
  return (
    <div className="bg-[#110846] flex flex-col items-start relative size-full" data-name="Legal_RegulatoryAlliances">
      <Header />
      <PartnerGrid />
      <CustomersCTA />
      <Footer variant="dark" />
    </div>
  );
}
