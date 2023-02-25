import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { motion } from "framer-motion";

import ProfilePic from "../images/HomePageImage.jpg";
import { useSelector } from "react-redux";

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

function HomePage() {
  const navigate = useNavigate();
  const { headingColor, textColor } = useSelector((state) => state.color);

  return (
    <motion.div className='bg-stone-50'>
      <motion.section
        variants={sectionVariants}
        className='flex flex-col items-center justify-center bg-transparent '
      >
        <div className='flex flex-col md:flex-row md:justify-around items-center md:w-4/5 md:h-auto'>
          <img
            src={ProfilePic}
            alt='Subhangi More, Clinical Therapist'
            className='w-5/6 h-auto md:w-96 md:h-auto'
          />
          <div className='md:w-2/3 px-5 md:ml-5 md:h-[36rem] flex flex-col justify-end items-center'>
            <h3
              className={`text-2xl md:text-3xl ${headingColor} mt-10 text-center home-and-header md:leading-normal`}
            >
              "When we talk about our feelings, they become less overwhelming,
              less upsetting & less scary"
            </h3>
            <h4
              className={`text-xl md:text-2xl ${textColor} mt-4 text-center home-and-header`}
            >
              - Fred Rogers
            </h4>
            <Button
              primary
              className='mx-auto md:text-2xl mt-5 md:mt-24'
              onClick={() => {
                navigate("/contact");
              }}
            >
              Work with me
            </Button>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={sectionVariants}
        className='flex flex-col items-center justify-between bg-transparent p-5 md:px-0 md:py-20'
      >
        <h4
          className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
        >
          Know my therapeutic approach
        </h4>
        <p
          className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
        >
          My go to approaches are Person centered therapy, Cognitive behavior
          therapy, Queer affirmative therapy and Systemic family therapy. I see
          clients from a feminist, trauma-informed and intersectional lens. The
          therapeutic approach is decided based on what the client needs and
          their presenting concerns.
        </p>
        <h4
          className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
        >
          Where I work
        </h4>
        <p
          className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
        >
          I have a blended practice of offline and online. I work with clients
          online from all over the world through call and video mode. And
          offline in Dhanbad, Jharkhand.
        </p>
        <h4
          className={`text-xl md:text-2xl mt-5 mb-3 font-bold w-5/6 md:w-3/5 text-left ${headingColor}`}
        >
          About therapy
        </h4>
        <p
          className={`text-lg md:text-[21px] w-5/6 md:w-3/5 text-left md:text-justify ${textColor} mb-3`}
        >
          Therapy is a safe and non judgemental space- you can share as little
          to as much you’re comfortable. The sessions are for 60 minutes one to
          one format and 75 minutes for couples and families. The client decides
          the frequency and scheduling of all sessions based on time and
          availability. It’s a collaborative process which means we work
          together to understand your needs, goals and areas of work. The
          therapist believes the client knows the best about their life. We will
          be discussing the steps and process based on your goals.
        </p>
      </motion.section>
    </motion.div>
  );
}

export default HomePage;
