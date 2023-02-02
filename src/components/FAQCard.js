import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

function FAQCard({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <div
      className="w-5/6 md:w-2/3 bg-zinc-300 rounded-lg shadow-xl text-lg md:text-xl p-8 mb-10 border border-zinc-300 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-row justify-between items-center font-bold">
        <p className="w-5/6 md:w-fit">{faq.question}</p>
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </div>
      {isOpen && <div className="mt-5">{faq.answer}</div>}
    </div>
  );
}

export default FAQCard;
