import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

import ProfilePic from "../images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.jpg";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-gray-100 via-gray-50 to-gray-100">
      <section className="flex flex-col items-center justify-center bg-transparent shadow-inner">
        <img
          src={ProfilePic}
          alt="Subhangi More, Clinical Therapist"
          className="h-72 md:h-96 xl:h-[32rem] my-10"
        />
        <h3 className="text-4xl md:text-5xl text-zinc-900 my-5 text-center md:w-5/6">
          I'm listening to what your emotions are saying!
        </h3>
        <Button
          primary
          className="my-10 md:text-2xl"
          onClick={() => {
            navigate("/contact");
          }}
        >
          Book a Call
        </Button>
      </section>
      <section className="flex flex-col items-center justify-between bg-transparent p-5 md:p-10">
        <h3 className="text-2xl md:text-4xl text-zinc-900 mt-5 mb-10 text-center font-bold">
          Work with me
        </h3>
        <h4 className="text-xl md:text-2xl mt-5 font-bold mb-3 w-5/6 md:w-3/5 text-left">
          Know my therapeutic approach:
        </h4>
        <p className="md:text-xl w-5/6 md:w-3/5 text-justify">
          My go to approaches are Person centered therapy, Cognitive behavior
          therapy, Queer affirmative therapy and Systemic family therapy. I see
          clients from a feminist, trauma-informed and intersectional lens. The
          therapeutic approach is decided based on what the client needs and
          their presenting concerns.
        </p>
        <h4 className="text-xl md:text-2xl mt-5 font-bold mb-3 w-5/6 md:w-3/5 text-left">
          Where I Work:
        </h4>
        <p className="md:text-xl w-5/6 md:w-3/5 text-justify">
          I have a blended practice of offline and online. I work with clients
          online from all over the world through call and video mode. And
          offline in Dhanbad, Jharkhand.
        </p>
        <h4 className="text-xl md:text-2xl mt-5 font-bold mb-3 w-5/6 md:w-3/5 text-left">
          About Therapy
        </h4>
        <p className="md:text-xl w-5/6 md:w-3/5 text-justify">
          The sessions are for 60 minutes one to one format and 75 minutes for
          couples and families. The client decides the frequency and scheduling
          of all sessions based on time and availability. Therapy is a safe and
          non judgemental space- you can share as little to as much you’re
          comfortable. It’s a collaborative process which means we work together
          to understand your needs, goals and areas of work. The therapist
          believes the client knows the best about their life. We will be
          discussing the steps and process based on your goals.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
