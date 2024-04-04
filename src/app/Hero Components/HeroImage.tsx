import Image from "next/image";
import MainImage from "../../../public/Rectangle 6.png";
import BenefitsBox from "./BenefitsBox";

export default function HeroImage() {
  return (
    <div>
      <Image alt="main-img" src={MainImage} />
      <div className="-translate-y-1/2 lg:translate-x-10 ">
        <BenefitsBox />
      </div>
    </div>
  );
}
