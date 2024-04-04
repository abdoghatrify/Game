import Image from "next/image";
import { jost } from "../ui/fonts";

export default function BenefitItem({ text, src }: { text: string; src: any }) {
  return (
    <div className="flex justify-center items-center max-w-sm">
      <div className="flex justify-center items-center bg-icon-background bg-opacity-10 rounded-full lg:w-14 w-7 lg:h-14 h-7 lg:m-4 m-1 lg:p-4 p-2">
        <Image alt="" src={src} width={20} height={20} />
      </div>
      <p className={`${jost.className} font-bold text-sm lg:text-xl`}>{text}</p>
    </div>
  );
}
