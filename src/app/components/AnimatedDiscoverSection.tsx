import { useState, useEffect, useRef, useLayoutEffect } from "react";
import svgPaths from "../../imports/svg-j42to2i5be";
import Group2099 from "../../imports/Group15483-165-460";
import Group2103 from "../../imports/Group15483-3-2103";
import Group2107 from "../../imports/Group15483-3-2107";
import Group2111 from "../../imports/Group15483-3-2111";
import LinkButton from "../../imports/Link-3-2137";
import { ExpandButton, ToggleExpandButton } from "./ExpandButton";

interface DiscoverStep {
  id: string;
  shortLabel: string;
  panelTitle: string;
  items: string[];
}

const STEPS: DiscoverStep[] = [
  {
    id: "01",
    shortLabel: "AI-Powered Compliance Services",
    panelTitle: "Integrated Compliance Software & AI-Enabled Managed Services Tailored To You",
    items: [
      "Powerful API Integrations Customizable To Your Workflows & Systems",
      "Robust Partner Ecosystem Designed to Deliver Maximal Value to Clients Like You",
      "Access to Dedicated License Operations Professionals Leveraging AI to Deliver For You",
      "Compliance Oversight Designed to Fit Your Business Model, Nationwide",
    ],
  },
  {
    id: "02",
    shortLabel: "Full E&O-to-NIPR Solutions",
    panelTitle: "End-To-End Solutions From E&O Coverage to NIPR Reporting",
    items: [
      "Your Entire Needs, Covered. E&O, Surplus Lines, Producer Management, Appointment Tracking, Entity Management – All From a Single Partner",
    ],
  },
  {
    id: "03",
    shortLabel: "Affordable, Scalable Pricing to Drive Savings",
    panelTitle: "Affordable, Scalable Pricing Setup Designed To Drive Financial Savings For You",
    items: [
      "Our Integrated Software & Compliance Managed Service Offering Is Designed To Deliver Meaningful Financial Savings Day 1",
    ],
  },
  {
    id: "04",
    shortLabel: "Safe, Secure & Trusted",
    panelTitle: "Safe, Secure & Trusted",
    items: [
      "Over 20 Years, We Have Developed Unparalleled Trust with Clients, Regulators & Counterparties. With Saratoga – You Are in Good Hands",
      "Our Platform is SOC 2 Certified, Managed with Strict Data Security Procedures and Designed to Handle Sensitive Information with Industry Leading Safeguards",
    ],
  },
];

// Each step has a fixed chip position — used when that step is NOT active
const FIXED_CHIP_POSITIONS: { left: number; top: number }[] = [
  { left: 487, top: 544 },  // Step 01 chip position when inactive
  { left: 642, top: 893 },  // Step 02 chip position when inactive
  { left: 229, top: 993 },  // Step 03 chip position when inactive
  { left: 341, top: 644 },  // Step 04 chip position when inactive
];

// CSS keyframe injected once for the timeline progress animation
const TIMELINE_STYLE = `
@keyframes discover-timeline {
  from { width: 0%; }
  to   { width: 100%; }
}
`;

export function AnimatedDiscoverSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadingSteps, setFadingSteps] = useState<number[]>([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fadeInTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<string>("auto");

  const goToStep = (nextStep: number, currentStep: number) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (fadeInTimerRef.current) clearTimeout(fadeInTimerRef.current);
    setIsVisible(false);
    setFadingSteps([currentStep, nextStep]);
    setActiveStep(nextStep);
    setIsCollapsed(false);
    setTimeout(() => {
      setIsVisible(true);
      fadeInTimerRef.current = setTimeout(() => setFadingSteps([]), 350);
    }, 350);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      goToStep((activeStep + 1) % STEPS.length, activeStep);
    }, 8000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeStep]);

  const step = STEPS[activeStep];
  const panelOpacity = isVisible ? 1 : 0;

  useLayoutEffect(() => {
    if (panelRef.current) {
      setPanelHeight(`${panelRef.current.scrollHeight}px`);
    }
  }, [activeStep]);

  // Chip opacity: active step → hidden; fading steps → animates; others → always 1
  const getChipOpacity = (stepIdx: number) => {
    if (stepIdx === activeStep) return 0;
    if (fadingSteps.includes(stepIdx)) return panelOpacity;
    return 1;
  };

  const getChipTransition = (stepIdx: number) => {
    if (fadingSteps.includes(stepIdx)) return "opacity 0.35s ease";
    return "none";
  };

  return (
    <div
      className="bg-[#110846] h-[1297px] overflow-clip relative shrink-0 w-[1440px]"
      data-name="Discover"
    >
      {/* Inject keyframe animation once */}
      <style>{TIMELINE_STYLE}</style>

      {/* Inner dark background container */}
      <div className="absolute h-[1297px] left-0 overflow-clip rounded-[4px] top-0 w-[1440px] bg-[#110846]">

        {/* Decorative background shapes */}
        {activeStep === 0 ? (
          <div className="absolute inset-0">
            <Group2099 />
          </div>
        ) : activeStep === 1 ? (
          <div className="absolute inset-0">
            <Group2103 />
          </div>
        ) : activeStep === 2 ? (
          <div className="absolute inset-0">
            <Group2107 />
          </div>
        ) : (
          <div className="absolute inset-0">
            <Group2111 />
          </div>
        )}

        {/* Horizontal dividing line — timeline progress */}
        <div className="-translate-x-1/2 absolute h-0 left-1/2 top-[333px] w-[1280px]">
          <div className="absolute inset-[0_0_-2px_0]">
            {/* Full-width grey base line */}
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 2">
              <line stroke="#33317A" x1="1280" y1="1" y2="1" />
            </svg>
            {/* Purple timeline bar — remounts on each step change via key, animates 0→100% in 4s */}
            <div
              key={activeStep}
              className="absolute top-0 left-0 h-[2px] bg-[#AF63FF]"
              style={{
                width: "0%",
                animation: "discover-timeline 8s linear forwards",
              }}
            />
          </div>
        </div>

        {/* Section title */}
        <p className="-translate-x-1/2 absolute font-['Saans:Regular',sans-serif] leading-[1.2] left-1/2 not-italic overflow-hidden text-[#f5f5f5] text-[36px] text-center text-ellipsis top-[120px] w-[786px]">
          {`Discover why leading insurance organizations choose Saratoga as their compliance & license operations partner of choice`}
        </p>

        {/* Animated info panel */}
        <div
          className="absolute bg-[#33317a] content-stretch flex items-start left-[973px] pb-[8px] px-[8px] rounded-[8px] top-[349px] w-[387px]"
        >
          <div ref={panelRef} className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch w-full">
            {/* Panel header: step badge + close icon + title */}
            <div className="relative shrink-0 w-full">
              <div className="flex flex-col justify-center size-full">
                <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative w-full">
                  <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                    <div className="bg-[#af63ff] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
                      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">
                        {step.id}
                      </p>
                    </div>
                    <ToggleExpandButton size={32} isExpanded={!isCollapsed} onClick={() => setIsCollapsed(prev => !prev)} />
                  </div>
                  <p className="font-['Saans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-[20px] w-full">
                    {step.panelTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Panel items list */}
            {!isCollapsed && (
            <div className="bg-[#110846] content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full">
              {step.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`content-stretch flex items-center relative shrink-0 w-full ${idx === 0 ? "pt-[24px]" : "pt-[24px]"} ${idx === step.items.length - 1 ? "pb-[24px]" : ""}`}
                >
                  {idx > 0 && (
                    <div
                      aria-hidden="true"
                      className="absolute border-[#33317a] border-solid border-t inset-0 pointer-events-none"
                    />
                  )}
                  <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
                    <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            )}
          </div>
        </div>

        {/* Why Saratoga? CTA button */}
        <div className="absolute left-[1180px] top-[1139px] w-fit cursor-pointer">
          <LinkButton />
        </div>
      </div>

      {/* Step indicator chips — fixed positions, only hidden when that step is active */}
      {STEPS.map((chipStep, stepIdx) => {
        const pos = FIXED_CHIP_POSITIONS[stepIdx];
        const isActive = stepIdx === activeStep;
        return (
          <div
            key={stepIdx}
            className="absolute bg-[#6a6b9e] content-stretch flex gap-[16px] items-center pl-[16px] pr-[4px] py-[4px] rounded-[8px] cursor-pointer"
            style={{
              left: `${pos.left}px`,
              top: `${pos.top}px`,
              opacity: getChipOpacity(stepIdx),
              pointerEvents: isActive ? "none" : "auto",
              transition: getChipTransition(stepIdx),
            }}
            onClick={() => goToStep(stepIdx, activeStep)}
          >
            <div className="content-stretch flex font-['Px_Grotesk:Regular',sans-serif] gap-[8px] items-center not-italic relative shrink-0 text-[#f5f5f5] text-[14px] whitespace-nowrap">
              <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] relative shrink-0 text-[14px] uppercase whitespace-nowrap">
                {chipStep.id}
              </p>
              <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] relative shrink-0 uppercase">{chipStep.shortLabel}</p>
            </div>
            <ExpandButton size={32} icon="add" />
          </div>
        );
      })}
    </div>
  );
}