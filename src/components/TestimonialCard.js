function TestimonialCard({ testimonial }) {
  return (
    <div className="my-10 bg-gradient-to-b from-teal-800 via-teal-700 to-teal-800 rounded-lg w-4/5 md:w-2/5 p-10 mx-5 shadow-xl text-white ">
      <p className="md:text-xl mb-5 italic text-justify">
        "{testimonial.testimonial}"
      </p>
      <div className="flex flex-row items-end justify-start">
        <h5 className="text-xl md:text-2xl font-bold mr-2 md:mr-3">
          {testimonial.name},
        </h5>
        <p className="md:text-xl">{testimonial.age} years old</p>
      </div>
      <p className="md:text-xl">Place: {testimonial.place}</p>
    </div>
  );
}

export default TestimonialCard;
