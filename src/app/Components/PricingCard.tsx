import clsx from "clsx";
import { jost, playfair } from "../ui/fonts";
import Link from "next/link";

interface PricingCardComponentPops {
  duration: string;
  price: number;
  description: string;
  plan: string;
}

export default function PricingCard({
  duration,
  price,
  description,
  plan,
}: PricingCardComponentPops) {
  return (
    <div
      className={clsx(
        `${jost.className}  border-4 bg-gradient-to-b from-white to-gradient-yellow w-full max-w-xs flex flex-col items-center px-3 pt-8 rounded-lg  `,
        {
          "border-main-red": plan === "silver",
          "border-main-blue": plan === "gold",
          "border-main-orange": plan === "platinum",
        }
      )}
    >
      <h2
        className={clsx(`${playfair.className} text-2xl font-bold`, {
          "text-main-red": plan === "silver",
          "text-main-blue": plan === "gold",
          "text-main-orange": plan === "platinum",
        })}
      >
        {duration}
      </h2>
      <h1 className={`${playfair.className} text-5xl font-bold mt-8 mb-32`}>
        $ {price}
      </h1>
      <p>{description}</p>
      <Link href={""}
        className={clsx(`text-base font-bold mt-12 mb-24`, {
          "text-main-red": plan === "silver",
          "text-main-blue": plan === "gold",
          "text-main-orange": plan === "platinum",
        })}
      >
        Add To Cart
      </Link>
    </div>
  );
}
