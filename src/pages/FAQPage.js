import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FAQCard from "../components/FAQCard";
import TestimonialCard from "../components/TestimonialCard";
import { motion, LayoutGroup } from "framer-motion";
import FAQIllustration from "../images/FAQIllustration.png";
import TestimonialIllustration from "../images/TestimonialIllustration.jpeg";

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
      <motion.div
        variants={sectionVariants}
        className='flex flex-col md:flex-row items-center justify-start h-fit w-fit mb-5 md:mb-10'
      >
        <img src={FAQIllustration} alt='QnA' className='w-36 h-auto' />
        <h3
          className={`text-2xl md:text-[1.625rem] ${headingColor} font-bold mt-3 md:ml-2`}
        >
          Frequently Asked Questions
        </h3>
      </motion.div>

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
          <motion.div
            variants={sectionVariants}
            className='flex flex-row items-center justify-start h-fit w-fit mb-5 md:mb-10'
          >
            <img
              src={TestimonialIllustration}
              alt='quotation marks'
              className='w-12 md:w-16 h-auto rotate-180'
            />
            <motion.h4
              layout
              transition={{
                layout: { type: "spring", damping: 25, stiffness: 100 },
              }}
              className={`text-2xl md:text-3xl ${headingColor} text-center font-bold mx-3`}
            >
              Testimonials
            </motion.h4>
            <img
              src={TestimonialIllustration}
              alt='quotation marks'
              className='w-12 md:w-16 h-auto'
            />
          </motion.div>

          <motion.div
            layout
            transition={{
              layout: { type: "spring", damping: 25, stiffness: 100 },
            }}
            className='flex flex-col items-center justify-between md:flex-row md:justify-around md:flex-wrap'
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
