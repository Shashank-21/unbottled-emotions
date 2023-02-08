import { motion } from "framer-motion";

function TestimonialCard({ testimonial }) {
  return (
    <motion.div
      layout
      transition={{ layout: { type: "spring", damping: 25, stiffness: 100 } }}
      className="mb-10 bg-indigo-200 rounded-lg w-full md:w-2/5 p-5 md:p-10 mx-5 shadow-xl text-black "
    >
      <p className="text-md md:text-xl mb-5 text-left md:text-justify">
        "{testimonial.testimonial}"
      </p>
      <div className="flex flex-row items-end justify-start">
        <h5 className="text-lg md:text-xl font-bold-inline mr-1 md:mr-2">
          {testimonial.name}
        </h5>
        <p className="text-lg md:text-xl">({testimonial.age})</p>
      </div>
      <p className="text-sm md:text-lg">Place: {testimonial.place}</p>
    </motion.div>
  );
}

export default TestimonialCard;
