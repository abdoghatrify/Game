import logo from "../../../public/logo.png";
import Image from "next/image";
import { jost } from "../ui/fonts";

export default function Logo() {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Image alt="lgo" src={logo} width={60} height={60} className="" />
        <p className={`${jost.className} font-bold text-main-yellow`}>
          PROJECT SPARTA
        </p>
      </div>
    </div>
  );
}
