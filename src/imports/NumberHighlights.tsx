import svgPaths from "./svg-209biujt5s";
import { NumberHighlights as NumberHighlightsComponent } from "../app/components/NumberHighlights";

function UserIcon({ fill }: { fill: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="User--filled">
      <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
          <g id="Vector">
            <path d={svgPaths.p15c76300} fill={fill} />
            <path d={svgPaths.pa517000} fill={fill} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function DocumentIcon({ fill }: { fill: string }) {
  return (
    <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Document">
      <div className="absolute inset-[6.25%_18.75%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 17.5">
          <g id="Vector">
            <path d={svgPaths.p2f81c380} fill={fill} />
            <path d="M10 12.5H2.5V13.75H10V12.5Z" fill={fill} />
            <path d="M10 8.75H2.5V10H10V8.75Z" fill={fill} />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function NumberHighlights() {
  return (
    <NumberHighlightsComponent
      title="Placeholder text"
      bgColor="#300067"
      paddingTop={84}
      paddingBottom={120}
      gap={40}
      cards={[
        {
          icon: <UserIcon fill="#AF63FF" />,
          label: "Placeholder",
          value: "000+",
          bgColor: "#110846",
          labelColor: "#f5f5f5",
          valueColor: "#f5f5f5",
        },
        {
          icon: <DocumentIcon fill="#F5F5F5" />,
          label: "Placeholder",
          value: "00K+",
          bgColor: "#8740ff",
          labelColor: "#110846",
          valueColor: "#f5f5f5",
        },
        {
          icon: <UserIcon fill="#F5F5F5" />,
          label: "Placeholder",
          value: "$00B+",
          bgColor: "#af63ff",
          labelColor: "#110846",
          valueColor: "#f5f5f5",
        },
        {
          icon: <UserIcon fill="#AF63FF" />,
          label: "Placeholder",
          value: "0M+",
          bgColor: "#bcbcbc",
          labelColor: "#110846",
          valueColor: "#110846",
        },
      ]}
    />
  );
}
