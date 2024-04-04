import GetStartedCard from "../Components/getStartedCard";
import SignUp from "../../../public/signUP.png";
import config from "../../../public/config.png";
import kingdom from "../../../public/kingdom.png";
import playerReg from "../../../public/playerReg.png";
import request from "../../../public/Request.png";
import Step1 from "../../../public/Step1.png";
import Step2 from "../../../public/step2.png";
import Step3 from "../../../public/step3.png";
import Step4 from "../../../public/step4.png";
import Step5 from "../../../public/step5.png";
import { playfair } from "../ui/fonts";

export default function GetStarted() {
  const cardsData = [
    {
      mainImg: SignUp,
      title: "Sign Up",
      body: "Create an account to get started. Leaders can sign up for a subscription, granting them administrative access to their kingdom's title management dashboard.",
      stepImg: Step1,
      stepNumber: null,
    },
    {
      mainImg: config,
      title: "Configure Titles",
      body: "Easily customize each title's settings, including hold time and enabling/disabling options. Tailor the system to match the unique dynamics of your kingdom.",
      stepImg: Step2,
      stepNumber: null,
    },
    {
      mainImg: kingdom,
      title: "Share with Your Kingdom",
      body: "Once configured, share the unique subdomain of your kingdom's title management dashboard with your fellow players. They'll be able to request titles effortlessly.",
      stepImg: Step3,
      stepNumber: null,
    },
    {
      mainImg: playerReg,
      title: "Player Registration",
      body: "Players only need to register their city coordinates once. This information is securely stored for future use.",
      stepImg: Step4,
      stepNumber: null,
    },
    {
      mainImg: request,
      title: "Request Titles",
      body: "Players can use the intuitive user interface to request titles. The system will automatically queue and assign titles when available.",
      stepImg: Step5,
      stepNumber: null,
    },
  ];

  const cardsElements = cardsData.map((el, index) => {
    return (
      <GetStartedCard
        key={index}
        body={el.body}
        mainImg={el.mainImg}
        stepImg={el.stepImg}
        stepNumber={index + 1}
        title={el.title}
      />
    );
  });
  return (
    <div className="container mx-auto py-20 px-5">
      <h2 className={`${playfair.className} text-4xl font-bold mb-12`}>
        Simplified Steps to Get Started
      </h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-7">
        {cardsElements}
      </div>
    </div>
  );
}
