import gradientVertical from "../../assets/svg/Gradient_Vertical.svg";
import { SaratogaButton } from "../app/components/SaratogaButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import Footer from "../app/components/Footer";
import HomepageLogoMarquee from "./SecondHero-102-383";
import CustomersCTA from "./Customers";

// Figma assets
const imgCaseStudyPhoto = "https://www.figma.com/api/mcp/asset/e61c48b8-050c-46b0-a336-f5ec51e5c79a";
const imgDocumentTasksIcon = "https://www.figma.com/api/mcp/asset/669b7d32-a172-4209-80a9-cbd2bb50c288";

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <div className="bg-[#110846] h-[645px] overflow-clip relative shrink-0 w-full" data-name="Header">
      <img src={gradientVertical} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none rotate-180" />
      <PrimaryNavbar />
      <div className="absolute bottom-[84px] left-0 right-0 flex flex-col items-center gap-[40px] px-[80px]">
        <div className="flex flex-col gap-[24px] items-center w-full max-w-[1280px]">
          <p className="font-['Saans:Regular',sans-serif] text-[48px] leading-[1.1] tracking-[-0.48px] text-[#f5f5f5] text-center">
            Launch an Agency
          </p>
          <p className="font-['Saans:Regular',sans-serif] text-[24px] leading-[1.2] tracking-[-0.24px] text-[#f5f5f5] text-center">
            Everything You Need to Start an Insurance Agency –{" "}
            <br />
            From Entity Formation to First Policy
          </p>
        </div>
        <div className="flex gap-[8px] items-center">
          <SaratogaButton variant="primary" color="purple" showArrow>Request a Demo</SaratogaButton>
          <SaratogaButton variant="outline" color="purple" showArrow to="/company/why-saratoga">Why Saratoga</SaratogaButton>
        </div>
      </div>
    </div>
  );
}

// ─── Opening Text ─────────────────────────────────────────────────────────────

function OpeningText() {
  return (
    <div className="bg-[#300067] flex flex-col items-start pb-[120px] pt-[84px] px-[80px] shrink-0 w-full">
      <div className="flex items-start justify-between w-[1280px]">
        <div className="flex flex-col items-start shrink-0 w-[488px]">
          <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[1.15] text-[#f5f5f5]">
            Placeholder Text
          </p>
        </div>
        <div className="flex flex-col items-start justify-center shrink-0 w-[630px]">
          <p className="font-['Saans:Regular',sans-serif] text-[20px] leading-[1.2] text-[#f5f5f5]">
            Launching an insurance agency involves navigating a maze of state registrations, license applications, compliance requirements and operational setup. Saratoga provides a turnkey launch package that handles entity formation, Secretary of State registrations, resident and non-resident license applications, E&O coverage procurement and compliance infrastructure setup. We've helped dozens of agencies go from idea to operational in weeks, not months.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Case Study Banner ────────────────────────────────────────────────────────

function StatCard() {
  return (
    <div className="bg-[#af63ff] flex flex-col h-[141px] items-start justify-between p-[24px] rounded-[4px] shrink-0 w-full">
      <div className="flex gap-[8px] items-center w-full">
        <img src={imgDocumentTasksIcon} alt="" className="shrink-0 size-[20px] object-contain" />
        <p className="font-['Px_Grotesk:Regular',sans-serif] text-[14px] leading-[16px] text-[#110846] uppercase flex-1">
          state insurance licenses managed
        </p>
      </div>
      <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[40px] text-[#f5f5f5]">
        1,000<span className="text-[23px]">+</span>
      </p>
    </div>
  );
}

function CaseStudyBanner() {
  return (
    <div className="bg-[#110846] flex flex-col items-end px-[80px] py-[84px] shrink-0 w-full">
      <div className="flex flex-col gap-[40px] items-end w-full">
        <div className="flex gap-[129px] items-stretch w-full">
          {/* Left: Text + stat */}
          <div className="flex flex-col gap-[40px] items-start shrink-0 w-[522px]">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#af63ff] shrink-0 size-[8px]" />
              <p className="font-['Px_Grotesk:Regular',sans-serif] text-[14px] leading-[16px] text-[#f5f5f5] uppercase">
                CASE STUDY
              </p>
            </div>
            <div className="flex flex-col gap-[40px] items-start w-full">
              <p className="font-['Saans:Medium',sans-serif] text-[28px] leading-[32px] text-[#f5f5f5]">
                NavSav Insurance
              </p>
              <div className="border-[#4e4d8c] border-l border-solid pl-[24px] w-full">
                <div className="font-['Saans:Regular',sans-serif] text-[20px] leading-[28px] tracking-[0.2px] text-[#f5f5f5]">
                  <p className="mb-[20px]">
                    "Saratoga didn't just help us stay compliant — they helped us scale confidently. Everytime we closed an acquisition, they were already at the table. That kind of partnership is irreplaceable."
                  </p>
                  <p className="text-[#af63ff]">— NavSav Insurance Leadership</p>
                </div>
              </div>
            </div>
            <StatCard />
          </div>
          {/* Right: Photo */}
          <div className="flex-1 min-h-[400px] rounded-[4px] relative overflow-hidden">
            <img
              src={imgCaseStudyPhoto}
              alt="NavSav Insurance case study"
              className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
            />
          </div>
        </div>
        <SaratogaButton variant="primary" color="white" showArrow>Read Full Case Study</SaratogaButton>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionsLaunchAnAgency() {
  return (
    <div className="bg-[#300067] flex flex-col items-start relative size-full" data-name="Solutions_LaunchAnAgency">
      <Header />
      <div className="w-full [&>div]:bg-[#110846]">
        <HomepageLogoMarquee />
      </div>
      <OpeningText />
      <CaseStudyBanner />
      <CustomersCTA />
      <Footer variant="dark" />
    </div>
  );
}
