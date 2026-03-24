import { Link } from "react-router";
import { ArrowBadge } from "../app/components/ArrowIcon";

export default function LinkButton() {
  return (
    <Link to="/company/why-saratoga" className="no-underline">
      <div className="group bg-[#af63ff] hover:bg-[#f5f5f5] content-stretch flex gap-[16px] items-center relative rounded-[4px] size-full pl-[24px] pr-[4px] py-[4px] transition-colors duration-200 cursor-pointer" data-name="Link">
        <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f5f5f5] group-hover:text-[#110846] text-[14px] uppercase whitespace-nowrap transition-colors duration-200">Why saratoga?</p>
        <ArrowBadge
          size={32}
          variant="white"
          arrowColor="#110846"
          hoverArrowColor="#F5F5F5"
          className="group-hover:bg-[#af63ff] transition-colors duration-200"
        />
      </div>
    </Link>
  );
}
