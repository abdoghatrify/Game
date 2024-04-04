import icon1 from "../../../public/icons/Vector.png";
import icon2 from "../../../public/icons/Vector2.png";
import icon3 from "../../../public/icons/Star 6.png";
import Man from "../../../public/Man.png";
import Image from "next/image";
import { jost, playfair } from "../ui/fonts";

export default function SectionTwo() {
  const advatage = [
    {
      title: "Efficiency",
      body: "Save time and effort by automating the title assignment process. No more manual requests or confusion in the game chat.",
      iconSrc: icon1,
    },
    {
      title: "Fair Distribution",
      body: "Ensure a fair and organized distribution of titles. The automated queue system prevents conflicts and promotes a harmonious gaming environment",
      iconSrc: icon2,
    },
    {
      title: "Customization",
      body: "Tailor the title settings to your kingdom's specific needs. Adjust hold times and enable or disable titles as your strategy evolves",
      iconSrc: icon3,
    },
  ];

  const advantageElements = advatage.map((el, index) => {
    return (
      <div key={index} className={`${jost.className} flex flex-col gap-4 mt-8`}>
        <Image alt="" src={el.iconSrc} />
        <p className="font-bold text-xl ">{el.title}</p>
        <p className="text-base text-main-gray">{el.body}</p>
      </div>
    );
  });

  return (
    <div className="flex  justify-center lg:justify-between items-center container mx-auto my-10 gap-10 flex-wrap ">
      <div className="max-w-2xl flex flex-col p-5">
        <h1 className={`${playfair.className} text-4xl font-bold mb-3`}>
          Why you should use our service
        </h1>
        <p className="text-main-gray">
          Welcome to Spartans, your all-in-one solution for streamlined title
          management in Rise of Kingdoms! Our service is designed to simplify
          the process of assigning titles within your kingdom, providing a
          hassle-free experience for both leaders and players.
        </p>
        <div>{advantageElements}</div>
      </div>
      <Image alt="" src={Man} />
    </div>
  );
}
