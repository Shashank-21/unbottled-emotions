import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function TestimonialCard({ testimonial }) {
  const { cardBgColor } = useSelector((state) => state.color);
  return (
    <motion.div
      layout
      transition={{ layout: { type: "spring", damping: 25, stiffness: 100 } }}
      className={`mb-10 ${cardBgColor} rounded-lg w-full md:w-2/5 p-5 md:p-10 mx-5 shadow-xl text-zinc-600`}
    >
      <p className="text-md md:text-2xl mb-5 text-left md:text-justify">
        "{testimonial.testimonial}"
      </p>
      <div className="flex flex-row items-end justify-start">
        <h5 className="text-lg md:text-xl font-bold-inline mr-1 md:mr-2 text-zinc-700">
          {testimonial.name}
        </h5>
        <p className="text-lg md:text-xl">({testimonial.age})</p>
      </div>
      <p className="text-sm md:text-lg">Place: {testimonial.place}</p>
    </motion.div>
  );
}

export default TestimonialCard;
