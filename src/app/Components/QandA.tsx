"use client";

import { useState } from "react";
import { jost } from "../ui/fonts";

interface FAQComponentProps {
  question: string;
  answer: string;
}

const arrowUp = (
  <svg
    width="24"
    height="15"
    viewBox="0 0 24 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0003 0.954501C12.2668 0.954501 12.5223 1.06129 12.7108 1.2506L23.7055 12.3191C24.0982 12.7143 24.0982 13.3546 23.7055 13.749C23.3129 14.1442 22.6772 14.1442 22.285 13.749L12.0003 3.39529L1.71486 13.7482C1.32225 14.1434 0.686518 14.1434 0.294308 13.7482C-0.0979023 13.353 -0.0983028 12.7131 0.294308 12.3183L11.2898 1.25101C11.4783 1.06129 11.7339 0.954501 12.0003 0.954501Z"
      fill="black"
    />
  </svg>
);

const arrowDown = (
  <svg
    width="24"
    height="15"
    viewBox="0 0 24 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.9997 14.0455C11.7332 14.0455 11.4777 13.9387 11.2892 13.7494L0.294459 2.68092C-0.0981529 2.28572 -0.0981529 1.64538 0.294459 1.25099C0.68707 0.855789 1.3228 0.855789 1.71501 1.25099L11.9997 11.6047L22.2851 1.2518C22.6777 0.8566 23.3135 0.8566 23.7057 1.2518C24.0979 1.647 24.0983 2.28693 23.7057 2.68173L12.7102 13.749C12.5217 13.9387 12.2661 14.0455 11.9997 14.0455Z"
      fill="black"
    />
  </svg>
);

export default function QandA({ question, answer }: FAQComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleArrow = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`${jost.className} container mx-auto p-5 border-b-2 border-gray-400 border-opacity-20 mt-4`}
      >
        <button
          onClick={toggleArrow}
          className="flex justify-between w-full mb-8 text-2xl"
        >
          <h1>{question}</h1>
          {isOpen ? arrowUp : arrowDown}
        </button>

        {isOpen && <p>{answer}</p>}
      </div>
    </>
  );
}
