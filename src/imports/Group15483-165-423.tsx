import svgPaths from "./svg-w4tx4ki739";
import imgVector from "../assets/0327289282155737380f1ac96ff53c9b8761dd72.png";
import imgVector1 from "../assets/2c11bde56cf4c8c3b42250877c5d47c0246af446.png";
import imgVector2 from "../assets/c476fea3063f2461c80bf7ea9d9df4b773aa1d8b.png";
import imgVector3 from "../assets/d464cfdddb042e1b35405457d918e48e1a4e80bd.png";

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
        <div
          className="absolute size-full"
          style={{
            WebkitMaskImage: `url(${imgVector1})`,
            maskImage: `url(${imgVector1})`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            backgroundColor: "#AF63FF",
          }}
        />
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