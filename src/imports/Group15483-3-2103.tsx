import imgCenter from "../assets/e8e50cb5da31c0610ffa7012f25368a24452d253.svg";
import imgVector1 from "../assets/bcd43a115372927635f200140a49c2179f5fe9fc.png";
import imgVector2 from "../assets/86527243a5a9d3a900a8c2ad8d3f148dedef5f67.png";
import imgVector3 from "../assets/e5f768fda673b41eb53d4b7bb66af25a5e294214.png";
import imgVector4 from "../assets/c7e4794a9443cb092794625d6388ed3e71fd0b85.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[60.89%_48.41%_35.46%_48.33%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" src={imgCenter} />
      </div>
      <div className="absolute inset-[40.26%_54%_35.92%_24.79%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.853" src={imgVector1} width="305.339" />
      </div>
      <div className="absolute inset-[34.31%_30.15%_41.88%_48.65%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.853" src={imgVector2} width="305.352" />
      </div>
      <div className="absolute inset-[61.1%_24.85%_15.09%_53.95%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.866" src={imgVector3} width="305.352" />
      </div>
      <div className="absolute inset-[67.05%_48.7%_9.13%_30.09%]" data-name="Vector">
        <img alt="" className="absolute block max-w-none size-full" height="308.866" src={imgVector4} width="305.339" />
      </div>
    </div>
  );
}
