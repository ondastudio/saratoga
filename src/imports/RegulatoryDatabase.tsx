import svgPaths from "./svg-8czbyhjgmo";
import { Link as RouterLink } from "react-router";
import { FooterLink } from "../app/components/FooterLink";
import { SaratogaButton } from "../app/components/SaratogaButton";
import PrimaryNavbar from "../app/components/PrimaryNavbar";
import { IconButton } from "../app/components/IconButton";
import { ArrowIcon } from "../app/components/ArrowIcon";
import { useState, useCallback, useRef } from "react";

const STATE_NAME_MAP: Record<string, string> = {
  "Vector": "Washington",
  "Vector_2": "Montana",
  "Vector_3": "Oregon",
  "Vector_4": "Idaho",
  "Vector_5": "Idaho",
  "Vector_6": "Idaho",
  "Vector_7": "Idaho",
  "Vector_8": "Idaho",
  "Vector_9": "Idaho",
  "Vector_10": "Idaho",
  "Vector_11": "Idaho",
  "Vector_12": "Idaho",
  "Vector_13": "Michigan",
  "Vector_14": "Michigan",
  "Vector_15": "Michigan",
  "Vector_16": "Michigan",
  "Vector_17": "Michigan",
  "Vector_18": "Michigan",
  "Vector_19": "Michigan",
  "Vector_20": "Michigan",
  "Vector_21": "Michigan",
  "Vector_22": "Wyoming",
  "Vector_23": "Nevada",
  "Vector_24": "California",
  "Vector_25": "Utah",
  "Vector_26": "Colorado",
  "Vector_27": "North Dakota",
  "Vector_28": "South Dakota",
  "Vector_29": "Nebraska",
  "Vector_30": "Nebraska",
  "Vector_31": "Minnesota",
  "Vector_32": "Minnesota",
  "Vector_33": "Iowa",
  "Vector_34": "Wisconsin",
  "Vector_35": "Illinois",
  "Vector_36": "Indiana",
  "Vector_37": "Ohio",
  "Vector_38": "Ohio",
  "Vector_39": "Ohio",
  "Vector_40": "Arizona",
  "Vector_41": "New Mexico",
  "Vector_42": "Kansas",
  "Vector_43": "Missouri",
  "Vector_44": "Kentucky",
  "Vector_45": "West Virginia",
  "Vector_46": "Virginia",
  "Vector_47": "Pennsylvania",
  "Vector_48": "New York",
  "Vector_49": "Vermont",
  "Vector_50": "New Hampshire",
  "Vector_51": "Maine",
  "Vector_52": "Massachusetts",
  "Vector_53": "Connecticut",
  "Vector_54": "Rhode Island",
  "Vector_55": "New Jersey",
  "Vector_56": "Delaware",
  "Vector_57": "Maryland",
  "Vector_58": "Oklahoma",
  "Vector_59": "Texas",
  "Vector_60": "Arkansas",
  "Vector_61": "Tennessee",
  "Vector_62": "North Carolina",
  "Vector_63": "South Carolina",
  "Vector_64": "Louisiana",
  "Vector_65": "Mississippi",
  "Vector_66": "Alabama",
  "Vector_67": "Georgia",
  "Vector_68": "Florida",
  "Vector_69": "Florida",
  "Vector_70": "Florida",
  "Vector_71": "Alaska",
  "Vector_72": "Alaska",
  "Vector_73": "Alaska",
  "Vector_74": "Alaska",
  "Vector_75": "Alaska",
  "Vector_76": "Alaska",
  "Vector_77": "Alaska",
  "Vector_78": "Alaska",
  "Vector_79": "Alaska",
  "Vector_80": "Alaska",
  "Vector_81": "Alaska",
  "Vector_82": "Alaska",
  "Vector_83": "Alaska",
  "Vector_84": "Alaska",
  "Vector_85": "Alaska",
  "Vector_86": "Alaska",
  "Vector_87": "Hawaii",
  "Vector_88": "Hawaii",
  "Vector_89": "Hawaii",
  "Vector_90": "Hawaii",
  "Vector_91": "Hawaii",
  "Vector_92": "Hawaii",
  "Vector_93": "Hawaii",
  "Vector_94": "Hawaii",
  "Vector_95": "Hawaii",
  "Vector_96": "Hawaii",
  "Vector_97": "Hawaii",
  "Vector_98": "Hawaii",
  "Vector_99": "Hawaii",
};

function HeroLeft() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.1] not-italic relative shrink-0 text-[#f5f5f5] w-[413px]">
      <p className="relative shrink-0 text-[40px] leading-[44px] w-full">Regulatory Database</p>
      <p className="relative shrink-0 text-[24px] leading-[28px] w-full">{`Live 50 State + All Territories Regulatory Intelligence at Your Fingertips`}</p>
    </div>
  );
}

function HeroRight() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px min-w-px relative">
      <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-full">Access our comprehensive, continuously updated database of state-by-state insurance regulatory requirements. Search by state, license type, line of authority or topic to find DOI contact information, licensing fees, filing deadlines, CE requirements, appointment rules and more. A must-have resource for compliance professionals operating across multiple jurisdictions.</p>
      <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
        <SaratogaButton variant="primary" color="purple" showArrow to="/request-demo">Request a Demo</SaratogaButton>
        <SaratogaButton variant="outline" color="white" showArrow to="/why-saratoga">Why Saratoga</SaratogaButton>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[232px] items-start left-[85px] top-[200px] w-[1280px]">
      <HeroLeft />
      <HeroRight />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-[#110846] h-[474px] overflow-clip relative shrink-0 w-[1440px]" data-name="Header">
      <Frame1 />
      <PrimaryNavbar />
    </div>
  );
}

function Group3({ onPathHover, onPathLeave, onPathClick, selectedVectorId }: { onPathHover?: (e: React.MouseEvent<SVGElement>) => void; onPathLeave?: () => void; onPathClick?: (e: React.MouseEvent<SVGElement>) => void; selectedVectorId?: string | null }) {
  const selectedCss = selectedVectorId
    ? (() => {
        const escaped = selectedVectorId.replace(/_/g, '\\_');
        return [
          `#Group\\ 59636 #${escaped} { fill: #C694FE !important; }`,
          `#Group\\ 59636 #${escaped} path { fill: #C694FE !important; }`,
        ].join('\n');
      })()
    : '';

  return (
    <div className="absolute inset-[0.09%_0.05%_0.08%_0.05%] [&_path]:transition-[fill] [&_path]:duration-300">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1050.44 673.092" onMouseMove={onPathHover} onMouseLeave={onPathLeave} onClick={onPathClick}>
        <style>{`#Group\\ 59636 path:hover { fill: #C694FE !important; }\n${selectedCss}`}</style>
        <g id="Group 59636">
          <path d={svgPaths.pca2f00} fill="var(--fill-0, #AF63FF)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p31ddfd00} fill="var(--fill-0, #AF63FF)" id="Vector_2" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p2427a400} fill="var(--fill-0, #AF63FF)" id="Vector_3" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Group">
            <path d={svgPaths.p22318e80} fill="var(--fill-0, #AF63FF)" id="Vector_4" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p2c8a5000} fill="var(--fill-0, #AF63FF)" id="Vector_5" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.pe6fca00} fill="var(--fill-0, #AF63FF)" id="Vector_6" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p2214a180} fill="var(--fill-0, #AF63FF)" id="Vector_7" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p2d966d80} fill="var(--fill-0, #AF63FF)" id="Vector_8" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p3edb5000} fill="var(--fill-0, #AF63FF)" id="Vector_9" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p166eb280} fill="var(--fill-0, #AF63FF)" id="Vector_10" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p23768080} fill="var(--fill-0, #AF63FF)" id="Vector_11" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p1bcd2680} fill="var(--fill-0, #AF63FF)" id="Vector_12" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <g id="Group_2">
            <path d={svgPaths.p1ae5ea00} fill="var(--fill-0, #AF63FF)" id="Vector_13" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p1fefef00} fill="var(--fill-0, #AF63FF)" id="Vector_14" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p65c5b00} fill="var(--fill-0, #AF63FF)" id="Vector_15" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p3dfeb8f0} fill="var(--fill-0, #AF63FF)" id="Vector_16" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p4f39a00} fill="var(--fill-0, #AF63FF)" id="Vector_17" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p97a8600} fill="var(--fill-0, #AF63FF)" id="Vector_18" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.pd3ff800} fill="var(--fill-0, #AF63FF)" id="Vector_19" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p4a76830} fill="var(--fill-0, #AF63FF)" id="Vector_20" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p9805000} fill="var(--fill-0, #AF63FF)" id="Vector_21" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p2e863600} fill="var(--fill-0, #AF63FF)" id="Vector_22" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p225f600} fill="var(--fill-0, #AF63FF)" id="Vector_23" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.pd283180} fill="var(--fill-0, #AF63FF)" id="Vector_24" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p94ab680} fill="var(--fill-0, #AF63FF)" id="Vector_25" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.pac44e00} fill="var(--fill-0, #AF63FF)" id="Vector_26" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_27">
            <path d={svgPaths.pffe2000} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p32529e80} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <g id="Vector_28">
            <path d={svgPaths.p8579b60} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p1a024100} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.pdf0be00} fill="var(--fill-0, #AF63FF)" id="Vector_29" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p30780540} id="Vector_30" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_31">
            <path d={svgPaths.p29690900} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p15feec00} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p29c9800} id="Vector_32" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3f83fa80} fill="var(--fill-0, #AF63FF)" id="Vector_33" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p15fbda70} fill="var(--fill-0, #AF63FF)" id="Vector_34" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p27fd1500} fill="var(--fill-0, #AF63FF)" id="Vector_35" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_36">
            <path d={svgPaths.p3d891a00} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p1bcf5380} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p6731680} fill="var(--fill-0, #AF63FF)" id="Vector_37" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p2b286e00} id="Vector_38" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3bf07200} id="Vector_39" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p2ed48400} fill="var(--fill-0, #AF63FF)" id="Vector_40" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p8d75a80} fill="var(--fill-0, #AF63FF)" id="Vector_41" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_42">
            <path d={svgPaths.p1dbf0680} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p2081fd00} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p26b9d100} fill="var(--fill-0, #AF63FF)" id="Vector_43" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p1da1a700} fill="var(--fill-0, #AF63FF)" id="Vector_44" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p2056480} fill="var(--fill-0, #AF63FF)" id="Vector_45" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p128ef40} fill="var(--fill-0, #AF63FF)" id="Vector_46" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p14309600} fill="var(--fill-0, #AF63FF)" id="Vector_47" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p1d6e8a80} fill="var(--fill-0, #AF63FF)" id="Vector_48" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p1aafe200} fill="var(--fill-0, #AF63FF)" id="Vector_49" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p174b2b00} fill="var(--fill-0, #AF63FF)" id="Vector_50" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_51">
            <path d={svgPaths.p257f4700} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.pdcb3500} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p39a1f900} fill="var(--fill-0, #AF63FF)" id="Vector_52" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p9674500} fill="var(--fill-0, #AF63FF)" id="Vector_53" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p2f57d0f0} fill="var(--fill-0, #AF63FF)" id="Vector_54" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p379def00} fill="var(--fill-0, #AF63FF)" id="Vector_55" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p1efb31c0} fill="var(--fill-0, #AF63FF)" id="Vector_56" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p20cd0400} fill="var(--fill-0, #AF63FF)" id="Vector_57" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3dcfce70} fill="var(--fill-0, #AF63FF)" id="Vector_58" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p607bff0} fill="var(--fill-0, #AF63FF)" id="Vector_59" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p229b7280} fill="var(--fill-0, #AF63FF)" id="Vector_60" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3856cc00} fill="var(--fill-0, #AF63FF)" id="Vector_61" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p200f7b00} fill="var(--fill-0, #AF63FF)" id="Vector_62" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3225a3f2} fill="var(--fill-0, #AF63FF)" id="Vector_63" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p1a04a100} fill="var(--fill-0, #AF63FF)" id="Vector_64" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p20341380} fill="var(--fill-0, #AF63FF)" id="Vector_65" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3452b200} fill="var(--fill-0, #AF63FF)" id="Vector_66" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p4771f00} fill="var(--fill-0, #AF63FF)" id="Vector_67" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p31d4900} fill="var(--fill-0, #AF63FF)" id="Vector_68" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p32a77300} fill="var(--fill-0, #AF63FF)" id="Vector_69" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p2fb7ec00} id="Vector_70" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.pe972700} fill="var(--fill-0, #AF63FF)" id="Vector_71" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p142ea300} fill="var(--fill-0, #AF63FF)" id="Vector_72" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_73">
            <path d={svgPaths.p8bff780} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p2d2f2c00} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.paa2ce00} fill="var(--fill-0, #AF63FF)" id="Vector_74" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_75">
            <path d={svgPaths.p13676080} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.p2e22eb80} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p252a1880} fill="var(--fill-0, #AF63FF)" id="Vector_76" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Vector_77">
            <path d={svgPaths.p3fa77f00} fill="var(--fill-0, #AF63FF)" />
            <path d={svgPaths.pc5b7800} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p1d120600} fill="var(--fill-0, #AF63FF)" id="Vector_78" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p32e29380} fill="var(--fill-0, #AF63FF)" id="Vector_79" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p11791500} fill="var(--fill-0, #AF63FF)" id="Vector_80" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p1d3cc280} fill="var(--fill-0, #AF63FF)" id="Vector_81" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3c4e6080} fill="var(--fill-0, #AF63FF)" id="Vector_82" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p9db5b00} fill="var(--fill-0, #AF63FF)" id="Vector_83" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p27e64e00} fill="var(--fill-0, #AF63FF)" id="Vector_84" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p3f53ac80} fill="var(--fill-0, #AF63FF)" id="Vector_85" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <path d={svgPaths.p8d42600} fill="var(--fill-0, #AF63FF)" id="Vector_86" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          <g id="Group_3">
            <path d={svgPaths.p31904800} fill="var(--fill-0, #AF63FF)" id="Vector_87" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p20bf8c00} fill="var(--fill-0, #AF63FF)" id="Vector_88" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p32534c00} fill="var(--fill-0, #AF63FF)" id="Vector_89" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p35d54400} fill="var(--fill-0, #AF63FF)" id="Vector_90" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p15445600} fill="var(--fill-0, #AF63FF)" id="Vector_91" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p19809480} fill="var(--fill-0, #AF63FF)" id="Vector_92" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p3e236b00} fill="var(--fill-0, #AF63FF)" id="Vector_93" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p3b40400} fill="var(--fill-0, #AF63FF)" id="Vector_94" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p9ca1c40} fill="var(--fill-0, #AF63FF)" id="Vector_95" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <g id="Vector_96">
              <path d={svgPaths.p340de380} fill="var(--fill-0, #AF63FF)" />
              <path d={svgPaths.p371f5800} stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            </g>
            <path d={svgPaths.p20918f00} fill="var(--fill-0, #AF63FF)" id="Vector_97" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
            <path d={svgPaths.p2f24f080} fill="var(--fill-0, #AF63FF)" id="Vector_98" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </g>
          <path d={svgPaths.p2c7bfbc0} fill="var(--fill-0, #AF63FF)" id="Vector_99" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return <div className="absolute h-[22px] left-[96px] top-[-3.62px] w-[19px]" />;
}

function Frame13({ stateName }: { stateName?: string }) {
  return (
    <div className="absolute bg-[#ddc0fe] content-stretch flex items-center justify-center left-0 px-[24px] py-[4px] rounded-[4px] top-[16px]">
      <div aria-hidden="true" className="absolute border border-[#110846] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.4] not-italic relative shrink-0 text-[#110846] text-[14px] tracking-[0.56px] uppercase whitespace-nowrap">{stateName || "state"}</p>
    </div>
  );
}

function Cursor() {
  return (
    <div className="relative size-[20px]" data-name="Cursor--2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Cursor--2">
          <path d={svgPaths.p2ec200} fill="var(--fill-0, #161616)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LocationLabel({ x, y, visible, stateName }: { x?: number; y?: number; visible?: boolean; stateName?: string }) {
  return (
    <div
      className="absolute h-[44px] pointer-events-none transition-opacity duration-300"
      data-name="Location Label"
      style={{
        left: x !== undefined ? `${x}px` : '658px',
        top: y !== undefined ? `${y}px` : '392px',
        opacity: visible ? 1 : 0,
        width: 'auto',
        minWidth: '131px',
      }}
    >
      <Frame14 />
      <Frame13 stateName={stateName} />
      <div className="absolute flex items-center justify-center left-[111px] size-[20px] top-[0.38px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <Cursor />
        </div>
      </div>
    </div>
  );
}

function Layer({ onStateClick, selectedVectorId }: { onStateClick?: (stateName: string, vectorId: string) => void; selectedVectorId?: string | null }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<{ x: number; y: number; visible: boolean; stateName: string }>({
    x: 0,
    y: 0,
    visible: false,
    stateName: '',
  });

  const getTargetInfo = useCallback((target: SVGElement): { stateName: string | null; vectorId: string | null } => {
    const id = target.id || (target.parentElement as SVGElement | null)?.id;
    return { stateName: id ? STATE_NAME_MAP[id] || null : null, vectorId: id || null };
  }, []);

  const handlePathHover = useCallback((e: React.MouseEvent<SVGElement>) => {
    const target = e.target as SVGElement;
    if (target.tagName === 'path' && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      // Scale label offset proportionally to state size (larger states = more distance)
      let offsetX = 130;
      let offsetY = 50;
      try {
        const bbox = (target as unknown as SVGGraphicsElement).getBBox();
        const sizeFactor = Math.max(0.4, Math.min(1.6, Math.sqrt((bbox.width * bbox.height) / (80 * 60))));
        offsetX = 90 + 50 * sizeFactor;
        offsetY = 30 + 25 * sizeFactor;
      } catch {
        // fallback to defaults
      }
      const x = e.clientX - rect.left - offsetX;
      const y = e.clientY - rect.top - offsetY;
      const { stateName } = getTargetInfo(target);
      setHoverState({ x, y, visible: true, stateName: stateName || '' });
    }
  }, [getTargetInfo]);

  const handlePathLeave = useCallback(() => {
    setHoverState(prev => ({ ...prev, visible: false }));
  }, []);

  const handlePathClick = useCallback((e: React.MouseEvent<SVGElement>) => {
    const target = e.target as SVGElement;
    if (target.tagName === 'path') {
      const { stateName, vectorId } = getTargetInfo(target);
      if (stateName && vectorId && onStateClick) {
        onStateClick(stateName, vectorId);
      }
    }
  }, [getTargetInfo, onStateClick]);

  return (
    <div ref={containerRef} className="absolute h-[673.171px] left-[195px] overflow-clip top-[179px] w-[1050.56px] cursor-pointer" data-name="Layer_1">
      <Group3 onPathHover={handlePathHover} onPathLeave={handlePathLeave} onPathClick={handlePathClick} selectedVectorId={selectedVectorId} />
      <LocationLabel x={hoverState.x} y={hoverState.y} visible={hoverState.visible} stateName={hoverState.stateName} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[74.94%_26.65%_13.55%_60.9%]" data-name="Group">
      <div className="absolute inset-[75.83%_38.66%_23.52%_60.9%]" data-name="Vector">
        <div className="absolute inset-[-7.86%_-7.98%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.26406 7.36103">
            <path d={svgPaths.p5c41f00} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[74.94%_36.87%_23.85%_62.05%]" data-name="Vector">
        <div className="absolute inset-[-4.19%_-3.23%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.4798 12.9267">
            <path d={svgPaths.p1166cb80} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[76.8%_33.22%_21.54%_65.46%]" data-name="Vector">
        <div className="absolute inset-[-3.08%_-2.64%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9268 17.2187">
            <path d={svgPaths.p1097ff80} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[78.68%_30.99%_20.73%_67.69%]" data-name="Vector">
        <div className="absolute inset-[-8.91%_-2.62%_-8.73%_-2.62%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0621 6.73858">
            <path d={svgPaths.p301f0700} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.51%_31.17%_19.64%_68.17%]" data-name="Vector">
        <div className="absolute inset-[-6.06%_-5.27%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.4825 9.24787">
            <path d={svgPaths.p27070300} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[79.14%_29.31%_19.22%_68.98%]" data-name="Vector">
        <div className="absolute inset-[-3.11%_-2.03%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.6427 17.0851">
            <path d={svgPaths.p233c1c00} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[81.8%_26.65%_13.55%_70.55%]" data-name="Vector">
        <div className="absolute inset-[-1.1%_-1.24%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41.2888 46.5683">
            <path d={svgPaths.p16cc0400} fill="var(--fill-0, #C694FE)" id="Vector" stroke="var(--stroke-0, #1E1C17)" strokeMiterlimit="10" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group5({ onStateClick, selectedVectorId }: { onStateClick?: (stateName: string, vectorId: string) => void; selectedVectorId?: string | null }) {
  return (
    <div className="absolute contents left-[195px] top-[179px]">
      <Layer onStateClick={onStateClick} selectedVectorId={selectedVectorId} />
      <Group />
    </div>
  );
}

function Group4({ onStateClick, selectedVectorId }: { onStateClick?: (stateName: string, vectorId: string) => void; selectedVectorId?: string | null }) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute contents left-[calc(50%+0.28px)] top-[calc(50%+25.59px)]">
      <Group5 onStateClick={onStateClick} selectedVectorId={selectedVectorId} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Search">
        <div className="absolute inset-[6.14%_9.37%_9.37%_6.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.8971 16.8971">
            <path d={svgPaths.p21a38480} fill="var(--fill-0, #6A6B9E)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pl-[32px] pr-[8px] py-[8px] relative w-full">
          <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#6a6b9e] text-[16px] whitespace-nowrap">Search by state</p>
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Point({ onClose }: { onClose?: () => void }) {
  return (
    <button onClick={onClose} className="bg-[#110846] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px] cursor-pointer border-none p-0 transition-opacity hover:opacity-70" data-name="Point">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Close">
        <div className="absolute inset-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
            <path d={svgPaths.p25fa3200} fill="var(--fill-0, #F5F5F5)" id="Vector" />
          </svg>
        </div>
      </div>
    </button>
  );
}

function Frame26({ onClose, stateName }: { onClose?: () => void; stateName?: string }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Saans:Medium',sans-serif] font-medium leading-[32px] not-italic relative text-[#f5f5f5] text-[28px]">{stateName || "Alabama"}</p>
      <Point onClose={onClose} />
    </div>
  );
}

function Frame20({ onClose, stateName }: { onClose?: () => void; stateName?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center p-[24px] relative shrink-0 w-full">
      <Frame26 onClose={onClose} stateName={stateName} />
      <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px]">
        Assessment Date
        <br aria-hidden="true" />
        Oct 1 (prior year)
      </p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.35] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Lorem ipsum dolor sit amet consectetur. Tellus nec nibh cras quisque scelerisque ultricies vitae faucibus id.</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center pt-[24px] relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Lorem ipsum dolor sit amet consectetur. Tellus nec nibh cras quisque scelerisque ultricies vitae faucibus id.</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[24px] relative w-full">
        <Frame4 />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#33317a] border-solid border-t inset-0 pointer-events-none" />
      <Frame22 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] relative w-full">
          <p className="flex-[1_0_0] font-['Saans:Regular',sans-serif] leading-[1.2] min-h-px min-w-px not-italic relative text-[#f5f5f5] text-[16px]">Lorem ipsum dolor sit amet consectetur. Tellus nec nibh cras quisque scelerisque ultricies vitae faucibus id.</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center py-[24px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#33317a] border-solid border-t inset-0 pointer-events-none" />
      <Frame23 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col gap-[24px] items-start relative rounded-[4px] shrink-0 w-full">
      <Frame3 />
      <Frame7 />
      <Frame5 />
    </div>
  );
}

function Frame24({ onClose, stateName }: { onClose?: () => void; stateName?: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative self-stretch">
      <Frame20 onClose={onClose} stateName={stateName} />
      <Frame6 />
    </div>
  );
}

function Frame25({ onClose, isCardVisible, stateName }: { onClose: () => void; isCardVisible: boolean; stateName?: string }) {
  return (
    <div
      className="bg-[#33317a] h-[476px] relative rounded-[8px] shrink-0 w-full"
      style={{
        opacity: isCardVisible ? 1 : 0,
        transform: isCardVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 300ms ease, transform 300ms ease",
        pointerEvents: isCardVisible ? "auto" : "none",
      }}
    >
      <div className="content-stretch flex items-start pb-[8px] px-[8px] relative size-full">
        <Frame24 onClose={onClose} stateName={stateName} />
      </div>
    </div>
  );
}

function Frame29({ isCardVisible, onClose, stateName }: { isCardVisible: boolean; onClose: () => void; stateName?: string }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[80px] top-[84px] w-[413px]">
      <List />
      <Frame25 onClose={onClose} isCardVisible={isCardVisible} stateName={stateName} />
    </div>
  );
}

function Frame28() {
  const [selectedStateName, setSelectedStateName] = useState<string | null>(null);
  const [selectedVectorId, setSelectedVectorId] = useState<string | null>(null);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleStateClick = useCallback((stateName: string, vectorId: string) => {
    setSelectedStateName(stateName);
    setSelectedVectorId(vectorId);
    setIsCardVisible(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsCardVisible(false);
    // Clear selected state after animation completes
    setTimeout(() => {
      setSelectedStateName(null);
      setSelectedVectorId(null);
    }, 300);
  }, []);

  return (
    <div className="bg-[#110846] h-[980px] relative shrink-0 w-full">
      <Group4 onStateClick={handleStateClick} selectedVectorId={selectedVectorId} />
      <Frame29 isCardVisible={isCardVisible} onClose={handleClose} stateName={selectedStateName || undefined} />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col font-['Saans:Regular',sans-serif] gap-[24px] items-start leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] text-center w-[451px]">
      <p className="relative shrink-0 text-[36px] w-[417px]">Ready to Work with Saratoga Compliance?</p>
      <p className="min-w-full relative shrink-0 text-[18px] w-[min-content]">{`Eliminate Compliance Infractions, Reduce Costs & Unleash Your Teams to Sell with Saratoga`}</p>
    </div>
  );
}

function Link20() {
  return <SaratogaButton variant="primary" color="white" showArrow>Contact us</SaratogaButton>;
}

function Frame16() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-center left-[calc(50%-0.5px)] top-1/2">
      <Frame17 />
      <Link20 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#8740ff] h-[484px] overflow-clip relative rounded-[4px] shrink-0 w-[1408px]">
      <Frame16 />
      <div className="absolute h-[484.515px] left-0 top-[-0.23px] w-[479px]" data-name="Vector">
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

function NewsCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="content-stretch flex gap-[24px] h-[420px] items-start relative shrink-0 w-[1089px]">
      <div className="bg-[#9293ba] h-full rounded-[4px] shrink-0 w-[500px]" />
      <div className="border-[#6a6b9e] border-l border-solid content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px pb-[24px] pl-[24px] pr-[40px] pt-[40px] relative">
        <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
          <p className="font-['Saans:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#f5f5f5] text-[24px] w-full">{title}</p>
          <p className="font-['Saans:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[18px] tracking-[0.18px] w-full">{description}</p>
        </div>
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">READ MORE</p>
          <div className="content-stretch flex items-center relative shrink-0 size-[32px]">
            <div className="content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[32px]">
              <svg className="shrink-0" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.75 10H16.25M16.25 10L10 3.75M16.25 10L10 16.25" stroke="#af63ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RegulatoryNewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  return (
    <div className="bg-[#300067] content-stretch flex flex-col gap-[40px] items-start px-[80px] py-[84px] relative shrink-0 w-full" data-name="Section">
      <p className="font-['Saans:Regular',sans-serif] leading-[32px] mb-[24px] not-italic relative shrink-0 text-[#f5f5f5] text-[28px] w-[360px]">{`Recent Regulatory News, Legislation & Updates`}</p>
      <div className="content-stretch flex flex-col items-start relative shrink-0">
        <div className="content-stretch flex gap-[40px] items-start overflow-hidden relative shrink-0 w-[1360px]">
          <div
            className="content-stretch flex gap-[40px] items-start transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * (1089 + 40)}px)` }}
          >
            <NewsCard
              title="Maryland passes new insurance producer law"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <NewsCard
              title="Maryland passes new insurance producer law"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <NewsCard
              title="Maryland passes new insurance producer law"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
          </div>
        </div>
      </div>
      <div className="content-stretch flex gap-[64px] items-center justify-center relative shrink-0 w-full">
        {/* Left arrow */}
        <button
          onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
          className={`content-stretch flex gap-[10px] items-center relative shrink-0 cursor-pointer bg-transparent border-0 p-0 ${activeSlide === 0 ? "opacity-50" : ""}`}
          disabled={activeSlide === 0}
        >
          <div className="border border-[#9293ba] border-solid content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M16.25 10H3.75M3.75 10L10 16.25M3.75 10L10 3.75" stroke="#9293ba" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
        {/* Dots */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[16px] cursor-pointer bg-transparent border-0 p-0 ${i === activeSlide ? "border border-[#af63ff] border-solid" : ""}`}
            >
              <div className={`shrink-0 size-[6px] ${i === activeSlide ? "bg-[#af63ff]" : "bg-[#f5f5f5]"}`} />
            </button>
          ))}
        </div>
        {/* Right arrow */}
        <button
          onClick={() => setActiveSlide(Math.min(totalSlides - 1, activeSlide + 1))}
          className={`content-stretch flex gap-[10px] items-center relative shrink-0 cursor-pointer bg-transparent border-0 p-0 ${activeSlide === totalSlides - 1 ? "opacity-50" : ""}`}
          disabled={activeSlide === totalSlides - 1}
        >
          <div className="border border-[#f5f5f5] border-solid content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[40px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3.75 10H16.25M16.25 10L10 3.75M16.25 10L10 16.25" stroke="#f5f5f5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

function Customers() {
  return (
    <div className="bg-[#110846] content-stretch flex flex-col items-start overflow-clip pb-[16px] pt-[120px] px-[16px] relative shrink-0" data-name="Customers">
      <Frame15 />
    </div>
  );
}

function List1() {
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
      <List1 />
    </div>
  );
}

function List2() {
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
      <List2 />
    </div>
  );
}

function List3() {
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
      <List3 />
    </div>
  );
}

function Group2() {
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

function Frame19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[84px] w-[305px]">
      <Group2 />
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

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[80px] top-[538px]">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] min-w-full not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase w-[min-content]">Follow us</p>
      <SocialMedia />
    </div>
  );
}

function Icon3() {
  return (
    <ArrowIcon color="#9293BA" />
  );
}

function List4() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[16px] pr-[8px] py-[8px] relative rounded-[4px] shrink-0 w-[277px]" data-name="List">
      <div aria-hidden="true" className="absolute border border-[#f5f5f5] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Saans:Regular',sans-serif] leading-[1.2] not-italic opacity-50 relative shrink-0 text-[#9293ba] text-[16px] whitespace-nowrap">Enter your email</p>
      <div className="opacity-50"><Icon3 /></div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(33.33%+34px)] top-[538px]" data-name="Container">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#af63ff] text-[14px] uppercase whitespace-nowrap">Subscribe to our News and update</p>
      <List4 />
    </div>
  );
}

function List5() {
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
      <List5 />
    </div>
  );
}

function List6() {
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
      <List6 />
    </div>
  );
}

function List7() {
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
      <List7 />
    </div>
  );
}

function Frame9() {
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

function Frame10() {
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

function Frame11() {
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

function Frame12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[80px] top-[338px] w-[304px]">
      <Frame9 />
      <Frame10 />
      <Frame11 />
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

export default function RegulatoryDatabase() {
  return (
    <div className="bg-[#ededed] content-stretch flex flex-col items-start relative size-full" data-name="Regulatory Database">
      <Header />
      <Frame28 />
      <RegulatoryNewsSection />
      <Customers />
      <div className="bg-[#110846] h-[717px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
        <Container2 />
        <Container3 />
        <Container4 />
        <Frame19 />
        <Frame8 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Container8 />
        <Frame12 />
        <Footnote />
      </div>
    </div>
  );
}