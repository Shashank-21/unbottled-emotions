import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import ProfilePic from "../images/sofia-mQtcrK22CN8-unsplash.jpg";

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

const repeatSectionVariants = {
  hidden: {
    y: "-10vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

function AboutPage() {
  const services = useSelector((state) => state.services);
  const navigate = useNavigate();
  const { headingColor, textColor } = useSelector((state) => state.color);

  return (
    <motion.div className='bg-stone-50'>
      <motion.section
        variants={sectionVariants}
        className='bg-transparent flex flex-col items-center justify-between pb-10'
      >
        <div className='flex flex-col md:flex-row-reverse w-5/6'>
          <img
            src={ProfilePic}
            alt='Shubhangi More, Therapist'
            className='md:basis-1/3 w-full md:w-[28rem] xl:w-[32rem] md:my-10 h-fit'
          />
          <div className='md:basis-2/3 md:mx-10 flex flex-col justify-start items-start md:px-10 my-5'>
            <p
              className={`text-lg md:text-2xl text-left md:text-justif ${textColor}`}
            >
              <span className='font-bold-inline'>
                Hi, I’m Shubhangi More (she/her), a Mental health therapist.
              </span>{" "}
              I have a Master’s of Science degree in Counseling Psychology. I’m
              also trained to work with couples, family and LGBTQ clientele. The
              ability to hold space for someone is what excites and scares me at
              the same time. <br /> <br />A professor once told me,
              <span className='text-lg md:text-2xl font-bold-inline'>
                “You might be the first person in your client's life who is
                hearing their side of the story.”
              </span>{" "}
              This has completely changed the way I look at therapy. My core
              values are love, justice, compassion and feminism. <br />
              <br />
            </p>
            <h4
              className={`text-xl md:text-2xl font-bold mt-5 md:mt-16 ${headingColor} mx-auto`}
            >
              My qualifications
            </h4>
            <ul
              className={`text-lg md:text-2xl list-disc list-inside ${textColor}`}
            >
              <li className='my-3'>
                MSc Counseling Psychology (Honours) from Montfort College,
                Bengaluru.
              </li>
              <li className='my-3'>
                Trained in Couple & Family Therapy from TISS, Mumbai
              </li>
              <li className='my-3'>
                Trained in Queer Affirmative Counseling practice QACP from
                Mariwala Health initiative, Mumbai
              </li>
              <li className='my-3'>
                Trained in Brainspotting Phase 1 from Mariya Javed Payne
              </li>
              <li className='my-3'>
                Training in Trauma-informed care from TISS, Mumbai
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col w-5/6 md:w-auto mb-5 md:mx-48'>
          <h4 className={`text-xl md:text-2xl font-bold mb-2 ${headingColor}`}>
            What I would like you to know
          </h4>
          <p className='text-lg md:text-2xl text-left md:text-justify mb-5 text-zinc-600'>
            I’m trauma-informed and multi-cultural sensitive. I believe in an
            intersectional approach and how context and power plays a huge role
            in mental health. Personal is political. I also wish to build a
            collaborative relationship with all my clientele. I ensure there is
            no hierarchy or a position of authority. Clients know better about
            their lives and it’s a privilege to learn about their inner worlds.
          </p>
          <h4 className={`text-xl md:text-2xl font-bold mb-2 ${headingColor}`}>
            My work
          </h4>
          <p
            className={`text-lg md:text-2xl text-left md:text-justify mb-5 ${textColor}`}
          >
            I’m based out of Dhanbad, Jharkhand, where I’m also working towards
            de-stigmatizing mental health in the rural population. In the past,
            I have worked with helplines, rehab centers and various non-profit
            organizations before I moved into private practice.{" "}
          </p>
          <h4 className={`text-xl md:text-2xl font-bold mb-2 ${headingColor}`}>
            Outside work
          </h4>
          <p
            className={`text-lg md:text-2xl text-left md:text-justify mb-5 ${textColor}`}
          >
            Outside of work, you will find me around water, art, cycling and
            netflix.
          </p>
          <h4 className={`text-xl md:text-2xl font-bold mb-2 ${headingColor}`}>
            About Unbottled Emotions
          </h4>
          <p
            className={`text-lg md:text-2xl text-left md:text-justify mb-5 ${textColor}`}
          >
            I started out in the beginning of the pandemic in 2020. Unbottled
            emotions, an online mental health platform to eradicate stigma
            around mental health and to bridge the gap between our services and
            the community. As the name suggests, I talk about normalizing all
            emotions, creating a safe space and to build a community for all.
            Come, join me on this journey to make our space inclusive and
            accepting for one and all.
          </p>
        </div>
      </motion.section>
      <motion.section
        variants={repeatSectionVariants}
        className='bg-transparent flex flex-col items-center justify-between pt-5 md:mx-24'
      >
        <h3
          className={`text-2xl md:text-3xl my-5 md:my-10 font-bold ${headingColor}`}
        >
          Services
        </h3>
        <div className='flex flex-col items-center justify-between xl:flex-row md:justify-around w-full'>
          {services.map((service) => {
            return <ServiceCard service={service} key={service.id} />;
          })}
        </div>
        <Button
          primary
          className='my-10 md:text-2xl'
          onClick={() => {
            navigate("/contact");
          }}
        >
          Work with me
        </Button>
      </motion.section>
    </motion.div>
  );
}

export default AboutPage;
