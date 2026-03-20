import svgPaths from "./svg-v9pihvml91";
import imgVector from "../assets/202bd74443a026bae9f69ff14b087ee9c7166084.png";
import imgVector1 from "../assets/74fa47c6a732bca25eeeddab2212c2d1558704a1.png";
import imgVector2 from "../assets/c327d8406187baa97cfcdcd964c7b647cca45dba.png";
import imgVector3 from "../assets/5b7ee08eb14c2ab7994beb2d305024b166c40147.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[46.99%_46.79%_46.54%_46.74%]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.0901 36.5054">
          <path d={svgPaths.p8e2da80} fill="var(--fill-0, #8740FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[10.53%_57.9%_47.37%_0]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="237.574" src={imgVector} width="234.871" />
      </div>
      <div className="absolute inset-[0_10.53%_57.9%_47.37%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="237.574" src={imgVector1} width="234.881" />
      </div>
      <div className="absolute inset-[47.37%_0_10.53%_57.89%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="237.584" src={imgVector2} width="234.881" />
      </div>
      <div className="absolute inset-[57.89%_47.37%_0_10.53%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="237.584" src={imgVector3} width="234.871" />
      </div>
    </div>
  );
}