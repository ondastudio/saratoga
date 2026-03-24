import PrimaryNavbar from "../app/components/PrimaryNavbar";
import Footer from "../app/components/Footer";
import { SaratogaButton } from "../app/components/SaratogaButton";

// ─── Figma assets ─────────────────────────────────────────────────────────────

const imgGroup59647 = "https://www.figma.com/api/mcp/asset/898a5185-1ef1-46d2-8104-d332c4a2fd75";
const imgGroup59650 = "https://www.figma.com/api/mcp/asset/5ce5989a-7289-4e95-8444-3a6d22ea8530";
const imgGroup59649 = "https://www.figma.com/api/mcp/asset/761e3379-ba1f-43bf-9c63-7a6448c55ff3";
const imgGroup59648 = "https://www.figma.com/api/mcp/asset/6ad1385a-91cd-4d54-b492-1f6feaa2a15e";
const imgTeamPhoto = "https://www.figma.com/api/mcp/asset/85c1c59f-7d1a-4c16-85fc-989aa11565fb";
const imgGlobalPartner2 = "https://www.figma.com/api/mcp/asset/0bb35020-53e5-49a1-90a3-64e453f64383";
const imgGrowthMindset1 = "https://www.figma.com/api/mcp/asset/a220023d-0998-4c12-ac25-ad0c191048e0";
const imgMedal031 = "https://www.figma.com/api/mcp/asset/ad217aaa-ff26-4b60-ada4-685befd41f13";
const imgGlobalCurrency021 = "https://www.figma.com/api/mcp/asset/04cf3169-6ee5-41e8-87ed-816c79ff9f7e";
const imgVector13 = "https://www.figma.com/api/mcp/asset/ed8e2a15-d36b-4c15-b83a-c87f8570adb1";
const imgVector14 = "https://www.figma.com/api/mcp/asset/eafaf0fa-875e-4222-8985-3bd0ec18dfd5";

const expertPhotos = [
  "https://www.figma.com/api/mcp/asset/324d188e-62de-4832-8c5c-eaefeb73bd04",
  "https://www.figma.com/api/mcp/asset/2ff246ad-d216-413e-a381-9bfcfe1d78d8",
  "https://www.figma.com/api/mcp/asset/a6b50c3f-d7fa-4e68-b4e8-aca521bbe099",
  "https://www.figma.com/api/mcp/asset/63d97734-6a8f-445e-a56a-76f221bf8013",
  "https://www.figma.com/api/mcp/asset/4d97cfc6-c466-4446-968f-6a4878fefb04",
  "https://www.figma.com/api/mcp/asset/0b945bdd-1091-4ec3-93ab-080c5586d282",
  "https://www.figma.com/api/mcp/asset/6a73b6d7-095a-4553-bb89-dc5c6ca39f40",
  "https://www.figma.com/api/mcp/asset/99391c59-5a9c-4ca6-a945-36d5a370f8b4",
  "https://www.figma.com/api/mcp/asset/471e034a-5cd8-4e81-8d96-fcf1aaa94da2",
  "https://www.figma.com/api/mcp/asset/d50d9a7e-58f8-425b-879e-055438d76713",
  "https://www.figma.com/api/mcp/asset/fdde1ee3-9578-478d-a8b9-1a05d136c275",
];

const lifePhotos = [
  "https://www.figma.com/api/mcp/asset/0b5b373f-4d4c-45d3-85c7-11703b2b06fc",
  "https://www.figma.com/api/mcp/asset/8b63c7d9-630a-4083-8997-8fbb40e93241",
  "https://www.figma.com/api/mcp/asset/1fcae173-fa6a-45c5-aa55-f208df9a8ee1",
  "https://www.figma.com/api/mcp/asset/2f2309a4-7f19-4292-8700-1f68234d20f0",
  "https://www.figma.com/api/mcp/asset/b7d3cd55-3dfa-4f2c-b630-ce6a724e999c",
  "https://www.figma.com/api/mcp/asset/874cc200-eb73-4d73-8ed7-4b09dd4c0c88",
  "https://www.figma.com/api/mcp/asset/c0ef7473-62be-4f59-a9ab-56c4979e00f4",
  "https://www.figma.com/api/mcp/asset/b5e12b2b-90ef-4983-bf63-4c7bc5dad287",
  "https://www.figma.com/api/mcp/asset/57de07d3-5e19-4cb7-bb8d-c6c4c9b91236",
];

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <div className="bg-[#110846] h-[900px] overflow-clip relative shrink-0 w-full">
      {/* Geometric decoration shapes */}
      <div className="absolute bg-[#110846] h-[662px] left-0 overflow-clip top-0 w-full">
        <div className="absolute inset-[59.53%_39.49%_18.89%_50.69%]">
          <img alt="" className="absolute block max-w-none size-full" src={imgGroup59647} />
        </div>
        <div className="absolute flex inset-[59.65%_28.14%_19.01%_61.93%] items-center justify-center">
          <div className="-rotate-90 flex-none h-[142.91px] w-[141.286px] relative">
            <img alt="" className="absolute block max-w-none size-full" src={imgGroup59650} />
          </div>
        </div>
        <div className="absolute flex inset-[59.65%_16.79%_19.01%_73.28%] items-center justify-center">
          <div className="flex-none h-[142.91px] rotate-90 w-[141.286px] relative">
            <img alt="" className="absolute block max-w-none size-full" src={imgGroup59649} />
          </div>
        </div>
        <div className="absolute flex inset-[59.53%_5.56%_18.89%_84.63%] items-center justify-center">
          <div className="flex-none h-[142.91px] rotate-180 w-[141.286px] relative">
            <img alt="" className="absolute block max-w-none size-full" src={imgGroup59648} />
          </div>
        </div>
      </div>
      <PrimaryNavbar />
      {/* Curved content panel */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#300067] flex flex-col items-start px-[80px] py-[80px] rounded-tl-[48px] rounded-tr-[48px] w-full">
        <div className="flex gap-[358px] items-start w-[1280px]">
          <div className="shrink-0 w-[292px]">
            <p className="font-['Saans:Regular',sans-serif] text-[40px] leading-[44px] text-[#f5f5f5]">
              Careers
            </p>
          </div>
          <div className="flex flex-col gap-[40px] items-start shrink-0 w-[555px]">
            <p className="font-['Saans:Regular',sans-serif] text-[24px] leading-[28px] text-[#f5f5f5]">
              Join the Team That's Modernizing
              <br />
              Insurance Compliance
            </p>
            <SaratogaButton variant="primary" color="white" showArrow>
              Join us
            </SaratogaButton>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Opening Text ─────────────────────────────────────────────────────────────

function OpeningText() {
  return (
    <div className="bg-[#300067] flex pb-[120px] px-[80px] shrink-0 w-full">
      <div className="ml-auto shrink-0 w-[630px]">
        <p className="font-['Saans:Regular',sans-serif] text-[20px] leading-[28px] tracking-[0.2px] text-[#f5f5f5]">
          Saratoga is growing, and we're looking for talented professionals who are passionate about
          building great software, delivering exceptional client service and solving complex problems
          in a highly regulated industry. Whether you're a software engineer, compliance specialist,
          client success manager or operations professional, we'd love to hear from you.
        </p>
      </div>
    </div>
  );
}

// ─── Team Photo ───────────────────────────────────────────────────────────────

function TeamPhoto() {
  return (
    <div className="h-[900px] relative shrink-0 w-full overflow-hidden">
      <img
        alt="Saratoga team"
        className="absolute inset-0 w-full h-full object-cover"
        src={imgTeamPhoto}
      />
    </div>
  );
}

// ─── Why Work At Saratoga ─────────────────────────────────────────────────────

type BenefitCard = {
  bg: string;
  icon: string;
  title: string;
  description: string;
  textColor: string;
};

const benefitCards: BenefitCard[] = [
  {
    bg: "#110846",
    icon: imgGlobalPartner2,
    title: "Mission-Driven Work",
    description:
      "You're not just writing code or managing accounts. You're helping insurance professionals protect their businesses and serve their communities.",
    textColor: "#f5f5f5",
  },
  {
    bg: "#8740ff",
    icon: imgGrowthMindset1,
    title: "Growth Trajectory",
    description:
      "We're in a high-growth phase with significant investment behind us. Join now and grow with the company.",
    textColor: "#f5f5f5",
  },
  {
    bg: "#af63ff",
    icon: imgMedal031,
    title: "Expert Team",
    description:
      "Work alongside some of the most experienced insurance compliance professionals in the industry.",
    textColor: "#f5f5f5",
  },
  {
    bg: "#bcbcbc",
    icon: imgGlobalCurrency021,
    title: "Competitive Compensation",
    description:
      "Competitive salary, benefits, equity participation and professional development opportunities.",
    textColor: "#110846",
  },
];

function WhyWorkAtSaratoga() {
  const row1 = benefitCards.slice(0, 2);
  const row2 = benefitCards.slice(2, 4);

  return (
    <div className="bg-[#300067] flex flex-col gap-[120px] items-start pb-[84px] pt-[120px] px-[80px] shrink-0 w-full">
      <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[40px] text-[#f5f5f5] w-[510px]">
        Why Work At Saratoga
      </p>
      <div className="flex flex-col gap-[4px] items-start w-[1280px]">
        {[row1, row2].map((row, ri) => (
          <div key={ri} className="flex gap-[4px] items-stretch w-full">
            {row.map((card) => (
                <div
                  key={card.title}
                  className="flex-[1_0_0] flex flex-col h-[400px] items-start justify-between p-[40px] rounded-[8px]"
                  style={{ backgroundColor: card.bg }}
                >
                  {/* Icon */}
                  <img alt="" className="size-[76px] object-contain" src={card.icon} />
                  {/* Content */}
                  <div className="flex flex-col gap-[24px] items-start w-full">
                    <p
                      className="font-['Saans:Medium',sans-serif] text-[24px] leading-[28px]"
                      style={{ color: card.textColor }}
                    >
                      {card.title}
                    </p>
                    <p
                      className="font-['Saans:Regular',sans-serif] text-[18px] leading-[24px] tracking-[0.18px]"
                      style={{ color: card.textColor }}
                    >
                      {card.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Experts Carousel ─────────────────────────────────────────────────────────

const expertsMarqueeStyles = `
@keyframes experts-marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
}
`;

function ExpertPhoto({ src }: { src: string }) {
  return (
    <div className="bg-[#110846] flex items-start p-[8px] rounded-[8px] shrink-0 size-[130px] mx-[8px]">
      <div className="flex-1 h-[114px] mix-blend-luminosity relative rounded-[8px] overflow-hidden">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-[8px]"
          src={src}
        />
      </div>
    </div>
  );
}

function ExpertsCarousel() {
  return (
    <div className="bg-[#110846] flex flex-col gap-[64px] items-center py-[120px] shrink-0 w-full overflow-hidden">
      <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[40px] text-[#f5f5f5] text-center">
        Our Team Of Insurance
        <br />
        Compliance Experts
      </p>
      <div className="w-full overflow-hidden">
        <div
          className="flex items-center w-max"
          style={{ animation: "experts-marquee 20s linear infinite" }}
        >
          {/* Duplicate for seamless loop */}
          {[...expertPhotos, ...expertPhotos].map((src, i) => (
            <ExpertPhoto key={i} src={src} />
          ))}
        </div>
      </div>
      <style>{expertsMarqueeStyles}</style>
    </div>
  );
}

// ─── Life At Saratoga ─────────────────────────────────────────────────────────

function LifeAtSaratoga() {
  const rows = [lifePhotos.slice(0, 3), lifePhotos.slice(3, 6), lifePhotos.slice(6, 9)];

  return (
    <div className="bg-[#300067] flex flex-col gap-[84px] items-start pb-[84px] pt-[120px] px-[80px] shrink-0 w-full">
      <div className="flex items-start justify-between w-[1280px]">
        <p className="font-['Saans:Regular',sans-serif] text-[40px] leading-[44px] text-[#f5f5f5] whitespace-nowrap">
          Life at Saratoga
        </p>
        <div className="shrink-0 w-[630px]">
          <p className="font-['Saans:Regular',sans-serif] text-[24px] leading-[28px] text-[#f5f5f5]">
            Our hybrid, agile, and diverse team collaborates across regions and functions to advance
            our purpose — making it easier to sell insurance in a compliant manner.
          </p>
        </div>
      </div>
      {/* 3×3 photo grid */}
      <div className="flex flex-col gap-[10px] items-start w-[1280px]">
        {rows.map((row, ri) => (
          <div key={ri} className="flex gap-[10px] items-center w-full">
            {row.map((src, ci) => (
              <div key={ci} className="flex-1 h-[336px] relative rounded-[4px] overflow-hidden">
                <img
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-[4px]"
                  src={src}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Careers CTA ──────────────────────────────────────────────────────────────

function CareersCTA() {
  return (
    <div className="bg-[#300067] flex flex-col items-start overflow-clip pb-[16px] pt-[120px] px-[16px] shrink-0 w-full">
      <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-full">
        {/* Decorative left shape */}
        <img
          alt=""
          className="absolute left-0 top-0 h-full max-w-none pointer-events-none"
          src={imgVector13}
        />
        {/* Decorative right shape */}
        <div className="absolute right-0 top-0 h-full w-[475px] flex items-center justify-center">
          <img alt="" className="rotate-180 max-w-none pointer-events-none" src={imgVector14} />
        </div>
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col gap-[40px] items-center justify-center">
          <div className="flex flex-col gap-[24px] items-center w-[451px]">
            <p className="font-['Saans:Regular',sans-serif] text-[36px] leading-[40px] text-[#f5f5f5] text-center">
              Join Saratoga.
              <br />
              Build Something
              <br />
              Special With Us
            </p>
            <p className="font-['Saans:Regular',sans-serif] text-[18px] leading-[24px] tracking-[0.18px] text-[#f5f5f5] text-center">
              Our team is growing. Are you talented, passionate, detail-oriented and looking to join
              a high growth organization? Connect with us today.
            </p>
          </div>
          <SaratogaButton variant="primary" color="white" showArrow>
            View open roles
          </SaratogaButton>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Careers() {
  return (
    <div className="bg-[#300067] flex flex-col items-start relative size-full" data-name="Careers">
      <Header />
      <OpeningText />
      <TeamPhoto />
      <WhyWorkAtSaratoga />
      <ExpertsCarousel />
      <LifeAtSaratoga />
      <CareersCTA />
      <Footer variant="dark" />
    </div>
  );
}
