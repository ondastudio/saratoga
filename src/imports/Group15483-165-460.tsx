import imgCenter from "../assets/e8e50cb5da31c0610ffa7012f25368a24452d253.svg";
import imgVector1 from "../assets/bcd43a115372927635f200140a49c2179f5fe9fc.png";
import imgVector2 from "../assets/06508fbc1f0134c5f83f63224c0e021d1ae99db8.png";
import imgVector3 from "../assets/24eb6449af6fe310cc2966d0dcd7d620edeec620.png";
import imgVector4 from "../assets/c7e4794a9443cb092794625d6388ed3e71fd0b85.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[60.91%_48.41%_35.43%_48.33%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" src={imgCenter} />
      </div>
      <div className="absolute inset-[40.29%_54%_35.9%_24.79%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.853" src={imgVector1} width="305.339" />
      </div>
      <div className="absolute inset-[34.34%_30.15%_41.85%_48.65%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.853" src={imgVector2} width="305.352" />
      </div>
      <div className="absolute inset-[61.13%_24.85%_15.06%_53.95%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.866" src={imgVector3} width="305.352" />
      </div>
      <div className="absolute inset-[67.08%_48.7%_9.11%_30.09%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.866" src={imgVector4} width="305.339" />
      </div>
    </div>
  );
}
