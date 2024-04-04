import QandA from "../Components/QandA";
import { jost, playfair } from "../ui/fonts";

const questions = [
  {
    question: "What is an example of a FAQ question? ",
    answer:
      "A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps.",
  },
  { question: "How Are you ?", answer: "Fine Thank You" },
  { question: "How Are you ?", answer: "Fine Thank You" },
  {
    question: "What is an example of a FAQ question? ",
    answer:
      "A frequently asked questions list is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps.",
  },
];

const FaqElements = questions.map((el, index) => {
  return <QandA key={index} question={el.question} answer={el.answer} />;
});

export default function FAQ() {
  return (
    <>
      <div>
        <div className="w-full bg-main-black-bg text-white py-10 px-5 text-center mb-16">
          <h1 className={`${playfair.className} font-bold text-6xl`}>
            Frequently Asked Questions
          </h1>
          <p className={`${jost.className} text-sm mt-5`}>Home &gt; FAQ</p>
        </div>

        <div>{FaqElements}</div>
      </div>
    </>
  );
}
