import Button from "../Components/button";
import { jost, playfair } from "../ui/fonts";

export default function MainTitleSection() {
  return (
    <div className="flex justify-center lg:justify-between items-center container mx-auto flex-wrap gap-10 ">
      <h1
        className={`${playfair.className} font-bold md:text-6xl text-3xl max-w-md px-5  `}
      >
        The Best Rise of Kingdoms Bot
      </h1>

      <div className="flex flex-col gap-7 max-w-xs">
        <p className={`${jost.className} md:text-xl text-sm`}>
          How much is your time worth? Rise of Kingdoms requires a lot of time
          to progress and requires some repetitive tasks. You’re probably
          looking for a way to save some time, and our RoK Bot is the solution.
        </p>
        <Button text={"Get Started"} />
      </div>
    </div>  
  );
}
