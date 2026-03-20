import { IconButton } from "../app/components/IconButton";

function Icon() {
  return (
    <IconButton size={32} variant="filled-white" />
  );
}

export default function Link() {
  return (
    <div className="bg-[#c694fe] content-stretch flex gap-[16px] items-center relative rounded-[8px] size-full pl-[24px] pr-[4px] py-[4px]" data-name="Link">
      <p className="font-['Px_Grotesk:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#110846] text-[14px] uppercase whitespace-nowrap">Why saratoga?</p>
      <Icon />
    </div>
  );
}
