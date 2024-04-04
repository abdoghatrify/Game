import PricingCard from "../Components/PricingCard";
import { jost, playfair } from "../ui/fonts";

export default function PricingSection() {
  const pricing = [
    {
      duration: "One Month",
      price: 9.99,
      description:
        "Essential features to kickstart your journey. Ideal for newcomers looking to enhance their gameplay.",
      plan: "silver",
    },
    {
      duration: "Three Months",
      price: 19.99,
      description:
        "Expanded functionalities for intermediate players. Unlock more automation and optimization options for your kingdom.",
      plan: "gold",
    },
    {
      duration: "Six Months",
      price: 29.99,
      description:
        "Premium features for seasoned commanders. Access advanced strategies and maximize efficiency in every aspect of the game.",
      plan: "platinum",
    },
  ];

  const pricingElements = pricing.map((el, index) => {
    return (
      <PricingCard
        key={index}
        description={el.description}
        duration={el.duration}
        plan={el.plan}
        price={el.price}
      />
    );
  });

  return (
    <div className="container mx-auto py-12 px-2">
      <div>
        <h1 className={`${playfair.className} text-4xl font-bold`}>
          Packages Prices
        </h1>
        <p
          className={`${jost.className} text-main-gray mt-3 mb-12 w-full max-w-5xl`}
        >
          Choose the package that best suits your needs and elevate your Rise of
          Kingdoms gameplay to new heights. Our pricing plans are designed to
          offer flexibility and value, ensuring that every commander can access
          the features they desire.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-9">
        {pricingElements}
      </div>
    </div>
  );
}
