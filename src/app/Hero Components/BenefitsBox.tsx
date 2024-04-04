import BenefitItem from "../Components/benefit-item";
import Location from "../../../public/location.png";
import Dollar from "../../../public/coin-dollar.png";
import Home from "../../../public/home 04.png";

export default function BenefitsBox() {
  const benefitItems = [
    { title: "Incredible Support", imgSrc: Location },
    { title: "Constant Updates", imgSrc: Dollar },
    { title: "Run Unlimited Accounts", imgSrc: Home },
  ];

  const benefitElements = benefitItems.map((el, index) => {
    return <BenefitItem key={index} text={el.title} src={el.imgSrc} />;
  });
  return (
    <div className="flex md:gap-4 gap-2 justify-center items-center bg-main-yellow rounded-xl p-2 md:p-5 w-fit ">
      {benefitElements}
    </div>
  );
}
