import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FAQCard from "../components/FAQCard";
import TestimonialCard from "../components/TestimonialCard";
import { motion, LayoutGroup } from "framer-motion";

const sectionVariants = {
  hidden: {
    x: "-10vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

function FAQPage() {
  const faqs = useSelector((state) => state.faqs);
  const testimonials = useSelector((state) => state.testimonials);
  const { headingColor } = useSelector((state) => state.color);
  const navigate = useNavigate();

  return (
    <motion.div
      variants={sectionVariants}
      className='bg-stone-50 flex flex-col justify-start items-center'
    >
      <h3
        className={`text-2xl md:text-[1.625rem] ${headingColor} my-5 md:my-10 font-bold`}
      >
        Frequently Asked Questions
      </h3>
      <LayoutGroup>
        {faqs.map((faq, index) => {
          return <FAQCard key={faq.id} faq={faq} index={index} />;
        })}

        <Button
          primary
          className='mb-10 md:text-2xl'
          onClick={() => {
            navigate("/contact");
          }}
        >
          Work with me
        </Button>

        <section className='flex flex-col items-center justify-between p-5 md:p-10'>
          <motion.h4
            layout
            transition={{
              layout: { type: "spring", damping: 25, stiffness: 100 },
            }}
            className={`text-2xl md:text-3xl ${headingColor} my-10 text-center font-bold`}
          >
            Testimonials
          </motion.h4>
          <motion.div
            layout
            transition={{
              layout: { type: "spring", damping: 25, stiffness: 100 },
            }}
            className='flex flex-col items-center justify-between md:flex-row md:justify-around'
          >
            {testimonials.map((testimonial) => {
              return (
                <TestimonialCard
                  testimonial={testimonial}
                  key={testimonial.id}
                />
              );
            })}
          </motion.div>
        </section>
      </LayoutGroup>
    </motion.div>
  );
}

export default FAQPage;
