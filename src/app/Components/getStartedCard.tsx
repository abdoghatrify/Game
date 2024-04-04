import Image from "next/image";
import { jost, playfair } from "../ui/fonts";

interface GetStartedCardProps {
  mainImg: any;
  title: string;
  body: string;
  stepImg: any;
  stepNumber: number;
}

export default function GetStartedCard({
  mainImg,
  title,
  body,
  stepImg,
  stepNumber,
}: GetStartedCardProps) {
  return (
    <div
      className={`${jost.className} flex flex-col px-4 py-5 bg-white rounded-3xl shadow-xl justify-between`}
    >
      <Image alt="" src={mainImg} className="mx-auto" />
      <p className={`${playfair.className} text-2xl font-bold my-5`}>{title}</p>
      <p className="text-main-gray">{body}</p>
      <div className="flex gap-5 items-center border-t-2 border-gray-400 border-opacity-20 pt-4 mt-7">
        <Image alt="" src={stepImg} />
        <p>Step {stepNumber}</p>
      </div>
    </div>
  );
}
