import svgPaths from "./svg-dvoyderaui";
import imgVector from "../assets/ef5572c015c73d71d9a598d94ebd28c5a06adf97.png";
import imgVector1 from "../assets/1c2a7b782923b4a797dda50a3a1e6fb0170649e1.png";
import imgVector2 from "../assets/bbdd942b9d2a3b2723a6afbdc06ece526b00d413.png";
import imgVector3 from "../assets/a3c57464946e920728513cb8363c64d414926fea.png";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
      <div className="col-1 h-[12.745px] ml-[91.04px] mt-[92.57px] relative row-1 w-[12.6px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.6003 12.7454">
          <path d={svgPaths.p3883fc30} fill="var(--fill-0, #8740FF)" id="Vector" />
        </svg>
      </div>
      <div className="col-1 h-[82.946px] ml-0 mt-[20.74px] relative row-1 w-[82.002px]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.946" src={imgVector} width="82.002" />
      </div>
      <div className="col-1 h-[82.946px] ml-[92.25px] mt-0 relative row-1 w-[82.005px]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.946" src={imgVector1} width="82.005" />
      </div>
      <div className="col-1 h-[82.949px] ml-[112.76px] mt-[93.31px] relative row-1 w-[82.005px]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.949" src={imgVector2} width="82.005" />
      </div>
      <div className="col-1 h-[82.95px] ml-[20.5px] mt-[114.05px] relative row-1 w-[82.002px]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="82.95" src={imgVector3} width="82.002" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <div className="font-['Saans:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#af63ff] text-[0px] text-[20px] w-[522px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[1.2] text-[#f5f5f5]">Saratoga Compliance Solutions was founded on a simple premise: insurance compliance is too important to get wrong, and too complex to manage with spreadsheets and manual processes. For over two decades,</span>
          <span className="leading-[1.2]">{` we've partnered with insurance organizations of every size – from newly formed MGAs to some of the largest agencies and brokerages in the country – to deliver the software, managed services and regulatory expertise they need to stay compliant, reduce costs and grow their businesses.`}</span>
        </p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2] mb-0">We are a dedicated group of insurance regulatory experts, software engineers, license operations executives and product managers building solutions to make your life easier. Our team combines deep industry knowledge with modern technology to deliver a compliance experience that is actually enjoyable to work with.</p>
        <p className="leading-[1.2] mb-0">&nbsp;</p>
        <p className="leading-[1.2]">With Headquarters in Saratoga Springs, NY – we serve clients across the U.S. and Canada.</p>
      </div>
    </div>
  );
}

export default function SecondHero() {
  return (
    <div className="bg-[#300067] content-stretch flex gap-[453px] items-start pb-[64px] px-[80px] relative size-full" data-name="Second-hero">
      <div className="flex h-[194.763px] items-center justify-center leading-[0] relative shrink-0 w-[197px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "365" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <Group />
        </div>
      </div>
      <Frame />
    </div>
  );
}