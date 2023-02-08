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

  return (
    <motion.div className="bg-stone-50">
      <motion.section
        variants={sectionVariants}
        className="bg-transparent text-zinc-900 flex flex-col items-center justify-between pb-10 shadow-inner"
      >
        <h3 className="text-3xl md:text-4xl text-stone-900 my-5 md:my-10 font-bold">
          About me
        </h3>
        <div className="flex flex-col md:flex-row w-5/6">
          <img
            src={ProfilePic}
            alt="Shubhangi More, Therapist"
            className="md:basis-1/4 w-[28rem] mb-10 h-fit"
          />
          <div className="md:basis-3/4 md:ml-10 flex flex-col justify-start items-start">
            <p className="text-lg md:text-2xl text-left md:text-justify">
              Hi! I’m Shubhangi More (she/her), a Mental health therapist. I
              have a Master’s of Science degree in Counseling Psychology. I’m
              also trained to work with couples, family and LGBTQ clientele. The
              ability to hold space for someone is what excites and scares me at
              the same time. <br /> <br />A professor once told me,
              <span className="text-lg md:text-2xl font-bold-inline">
                “You might be the first person in your client's life who is
                hearing their side of the story.”
              </span>{" "}
              This has completely changed the way I look at therapy. My core
              values are love, justice, compassion and feminism. <br />
              <br />
            </p>
            <h4 className="text-xl md:text-3xl font-bold mt-4">
              My Qualifications:
            </h4>
            <ul className="text-lg md:text-2xl list-disc list-inside">
              <li className="my-3">
                MSc Counseling Psychology (Honours) from Montfort College,
                Bengaluru.
              </li>
              <li className="my-3">
                Training in Couple and Family Therapy from TISS, Mumbai
              </li>
              <li className="my-3">
                Trained in Queer Affirmative Counseling practice QACP from
                Mariwala Health initiative, Mumbai
              </li>
              <li className="my-3">
                Trained in Brainspotting Phase 1 from Mariya Javed Payne
              </li>
            </ul>
            <h4 className="text-xl md:text-3xl font-bold my-5">
              What I would like you to know:
            </h4>
            <p className="text-lg md:text-2xl text-left md:text-justify">
              I’m Trauma informed and multi cultural sensitive. I believe in an
              intersectional approach and how context and power plays a huge
              role in mental health. Personal is political. I also wish to build
              a collaborative relationship with all my clientele. I ensure there
              is no hierarchy or a position of authority. Clients know better
              about their lives and it’s a privilege to learn about their inner
              worlds.
            </p>
            <h4 className="text-xl md:text-3xl mt-5 font-bold mb-5">
              My Work:
            </h4>
            <p className="text-lg md:text-2xl text-left md:text-justify">
              I’m based out of Dhanbad, Jharkhand, where I’m also working
              towards de-stigmatizing mental health in the rural population. In
              the past, I have worked with helplines, rehab centers and various
              non-profit organizations before I moved into private practice.{" "}
            </p>
            <h4 className="text-xl md:text-3xl mt-5 font-bold mb-2">
              Outside Work:
            </h4>
            <p className="text-lg md:text-2xl text-left md:text-justify">
              Outside of work, you will find me around water, art, cycling and
              netflix.
            </p>
            <h4 className="text-xl md:text-3xl mt-5 font-bold mb-2">
              About Unbottled Emotions:
            </h4>
            <p className="text-lg md:text-2xl text-left md:text-justify">
              I started out in the beginning of the pandemic in 2020. Unbottled
              emotions, an online mental health platform to eradicate stigma
              around mental health and to bridge the gap between our services
              and the community. As the name suggests, I talk about normalizing
              all emotions, creating a safe space and to build a community for
              all. Come, join me on this journey to make our space inclusive and
              accepting for one and all.
            </p>
          </div>
        </div>
      </motion.section>
      <motion.section
        variants={repeatSectionVariants}
        className="bg-transparent text-zinc-900 flex flex-col items-center justify-between"
      >
        <h3 className="text-3xl md:text-4xl text-zinc-900 my-5 md:my-10 font-bold">
          Services
        </h3>
        <div className="flex flex-col items-center justify-between md:flex-row md:justify-around w-full">
          {services.map((service) => {
            return <ServiceCard service={service} key={service.id} />;
          })}
        </div>
        <Button
          primary
          className="mb-10 md:text-2xl"
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
