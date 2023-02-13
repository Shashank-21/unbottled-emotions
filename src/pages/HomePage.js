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
          className="flex flex-col items-center justify-center bg-transparent"
        >
          <div className="flex flex-col md:flex-row md:justify-around items-center md:w-4/5">
            <img
              src={ProfilePic}
              alt="Subhangi More, Clinical Therapist"
              className="h-72 my-10 md:w-1/4 md:h-auto"
            />
            <div className="md:w-3/4 p-5 md:ml-5">
              <h3 className="text-3xl md:text-4xl text-zinc-600 my-5 text-center home-and-header md:leading-normal">
                "When we talk about our feelings, they become less overwhelming,
                less upsetting & less scary"
              </h3>
              <h4 className="text-2xl md:text-3xl text-zinc-600 mb-5 text-center text-right home-and-header">
                - Fred Rogers
              </h4>
            </div>
          </div>
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
          <h4 className="text-2xl md:text-3xl my-5 font-bold w-5/6 md:w-3/5 text-left text-zinc-700 font-bold">
            Know my therapeutic approach
          </h4>
          <p className="text-lg md:text-2xl w-5/6 md:w-3/5 text-left md:text-justify text-zinc-600 mb-3">
            My go to approaches are Person centered therapy, Cognitive behavior
            therapy, Queer affirmative therapy and Systemic family therapy. I
            see clients from a feminist, trauma-informed and intersectional
            lens. The therapeutic approach is decided based on what the client
            needs and their presenting concerns.
          </p>
          <h4 className="text-2xl md:text-3xl my-5 font-bold w-5/6 md:w-3/5 text-left font-bold text-zinc-700">
            Where I Work
          </h4>
          <p className="text-lg md:text-2xl w-5/6 md:w-3/5 text-left md:text-justify text-zinc-600 mb-3">
            I have a blended practice of offline and online. I work with clients
            online from all over the world through call and video mode. And
            offline in Dhanbad, Jharkhand.
          </p>
          <h4 className="text-2xl md:text-3xl my-5 font-bold w-5/6 md:w-3/5 text-left font-bold text-zinc-700">
            About Therapy
          </h4>
          <p className="text-lg md:text-2xl w-5/6 md:w-3/5 text-left md:text-justify text-zinc-600 mb-3">
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
