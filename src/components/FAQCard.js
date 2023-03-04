import { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function FAQCard({ faq, index }) {
  const { cardBgColor, headingColor, textColor } = useSelector(
    (state) => state.color
  );
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen((v) => !v);
  };

  return (
    <motion.div
      layout
      transition={{
        layout: { type: "spring", damping: 25, stiffness: 100 },
      }}
      inital='hidden'
      animate='visible'
      className={`w-5/6 md:w-3/5 ${cardBgColor} rounded-xl shadow-xl text-lg md:text-xl p-8 mb-10 ${headingColor} cursor-pointer`}
      onClick={handleClick}
    >
      <motion.div
        layout='position'
        className='flex flex-row justify-between items-center font-bold'
      >
        <p className='w-5/6 md:w-fit'>{faq.question}</p>
        {isOpen ? <GoChevronUp /> : <GoChevronDown />}
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={`mt-5 ${textColor}`}
        >
          {faq.answer}
        </motion.div>
      )}
    </motion.div>
  );
}

export default FAQCard;
