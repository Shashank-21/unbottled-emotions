import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FAQCard from "../components/FAQCard";
import TestimonialCard from "../components/TestimonialCard";

function FAQPage() {
  const faqs = useSelector((state) => state.faqs);
  const testimonials = useSelector((state) => state.testimonials);
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-100 flex flex-col justify-start items-center">
      <h3 className="text-2xl md:text-3xl text-stone-900 my-5 md:my-10 font-bold">
        Frequently Asked Questions
      </h3>
      {faqs.map((faq) => {
        return <FAQCard key={faq.id} faq={faq} />;
      })}
      <Button
        primary
        className="mb-10 md:text-2xl"
        onClick={() => {
          navigate("/contact");
        }}
      >
        Book a Call
      </Button>
      <section className="flex flex-col items-center justify-between bg-gradient-to-b from-zinc-200 to-stone-200 p-5 md:p-10">
        <h4 className="text-2xl md:text-4xl text-zinc-900 mt-5 mb-10 text-center font-bold">
          Testimonials
        </h4>
        <div className="flex flex-col items-center justify-between md:flex-row md:justify-around">
          {testimonials.map((testimonial) => {
            return (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default FAQPage;
