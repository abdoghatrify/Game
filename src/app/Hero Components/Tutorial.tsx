import Image from "next/image";
import TutorialImg from "../../../public/tutorial.png";
import Play from "../../../public/play.png";
import Button from "../Components/button";
import { jost, playfair } from "../ui/fonts";

export default function Tutorial() {
  return (
    <div
      className={`${jost.className} container mx-auto relative p-5 flex flex-col items-center`}
    >
      <h1 className={`${playfair.className} font-bold text-4xl`}>
        Explanation tutorial
      </h1>
      <p className="text-main-gray mt-2">
        Ger a glams about your bot and what does it do.
      </p>
      <div className="flex flex-col items-end mt-12">
        <Image alt="" src={TutorialImg} />
        <div className="bg-main-yellow flex flex-col p-5 gap-5 max-w-lg rounded-2xl md:-translate-y-1/2 -translate-y-1/3 lg:-translate-x-1/4 scale-75 lg:scale-100">
          <h1 className={`${playfair.className} font-bold text-2xl`}>
            Join Our Community Rise of Kingdoms Spartans
          </h1>
          <p>Don’t miss our on our amazing community </p>
          <div className="border-black border-2 border-solid w-fit rounded-2xl">
            <Button text={"Join Discord"} />
          </div>
        </div>
      </div>
    </div>
  );
}
