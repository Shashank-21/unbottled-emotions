import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { motion, MotionConfig } from "framer-motion";

import ProfilePic from "../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";

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

  return (
    <MotionConfig transition={{ delay: 0.5 }}>
      <motion.div className="bg-stone-50">
        <motion.section
          variants={sectionVariants}
          className="flex flex-col items-center justify-center bg-transparent shadow-inner"
        >
          <img
            src={ProfilePic}
            alt="Subhangi More, Clinical Therapist"
            className="h-72 md:h-96 xl:h-[32rem] my-10"
          />
          <h3 className="text-4xl md:text-5xl text-zinc-600 my-5 text-center md:w-5/6 home-and-header md:leading-normal">
            "When we talk about our feelings, they become less overwhelming,
            less upsetting & less scary"
          </h3>
          <h4 className="text-2xl md:text-3xl text-zinc-600 mb-5 text-center w-5/6 md:w-3/5 text-right home-and-header">
            - Fred Rogers
          </h4>
          <Button
            primary
            className="my-5 md:text-2xl"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Work with me
          </Button>
        </motion.section>
        <motion.section
          variants={sectionVariants}
          className="flex flex-col items-center justify-between bg-transparent p-5 md:p-10"
        >
          <h4 className="text-2xl md:text-3xl mt-5 font-bold mb-3 w-5/6 md:w-3/5 text-left font-bold">
            Know my therapeutic approach
          </h4>
          <p className="text-lg md:text-2xl w-5/6 md:w-3/5 text-left md:text-justify text-zinc-600">
            My go to approaches are Person centered therapy, Cognitive behavior
            therapy, Queer affirmative therapy and Systemic family therapy. I
            see clients from a feminist, trauma-informed and intersectional
            lens. The therapeutic approach is decided based on what the client
            needs and their presenting concerns.
          </p>
          <h4 className="text-2xl md:text-3xl mt-5 font-bold mb-3 w-5/6 md:w-3/5 text-left font-bold">
            Where I Work
          </h4>
          <p className="text-lg md:text-2xl w-5/6 md:w-3/5 text-left md:text-justify text-zinc-600">
            I have a blended practice of offline and online. I work with clients
            online from all over the world through call and video mode. And
            offline in Dhanbad, Jharkhand.
          </p>
          <h4 className="text-2xl md:text-3xl mt-5 font-bold mb-3 w-5/6 md:w-3/5 text-left font-bold">
            About Therapy
          </h4>
          <p className="text-lg md:text-2xl w-5/6 md:w-3/5 text-left md:text-justify text-zinc-600">
            Therapy is a safe and non judgemental space- you can share as little
            to as much you’re comfortable. The sessions are for 60 minutes one
            to one format and 75 minutes for couples and families. The client
            decides the frequency and scheduling of all sessions based on time
            and availability. It’s a collaborative process which means we work
            together to understand your needs, goals and areas of work. The
            therapist believes the client knows the best about their life. We
            will be discussing the steps and process based on your goals.
          </p>
        </motion.section>
      </motion.div>
    </MotionConfig>
  );
}

export default HomePage;
