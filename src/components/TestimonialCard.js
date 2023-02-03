function TestimonialCard({ testimonial }) {
  return (
    <div className="mb-10 bg-gradient-to-b from-teal-800 via-teal-700 to-teal-800 rounded-lg w-full md:w-2/5 p-5 md:p-10 mx-5 shadow-xl text-white ">
      <p className="text-sm md:text-xl mb-5 italic text-left md:text-justify">
        "{testimonial.testimonial}"
      </p>
      <div className="flex flex-row items-end justify-start">
        <h5 className="text-lg md:text-xl font-bold mr-1 md:mr-2">
          {testimonial.name}
        </h5>
        <p className="text-lg md:text-xl">({testimonial.age})</p>
      </div>
      <p className="text-sm md:text-lg">Place: {testimonial.place}</p>
    </div>
  );
}

export default TestimonialCard;
