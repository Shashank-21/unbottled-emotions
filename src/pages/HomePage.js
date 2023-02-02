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
        <h4 className="text-2xl md:text-4xl text-zinc-900 mt-5 mb-10 text-center font-bold">
          Why Therapy?
        </h4>
        <p className="text-xl md:text-2xl w-5/6 md:w-2/3 text-justify">
          <span className="italic">
            "I can talk to my friend. I have a supportive family. Why do I need
            therapy?"{" "}
          </span>
          <br />
          <br />
          This question is very common, which makes it all the more important to
          understand why therapy exists. <br /> <br />
          When there's a wound, it needs the right treatment. Unlike physical
          wounds, we have no idea of how emotional wounds need to be addressed.
          We're told that what we feel doesn't matter, which doesn't give us the
          safe space to express ourselves. Or our feelings are echoed to the
          point that it seems much bigger than what it actually is. Both are
          harmful. Yet, this is what ends up happening!
          <br /> <br />
          This is why we need therapy! By consulting a trained professional, we
          are guaranteed a safe and non-judgemental space to express ourselves.
          Once a therapist understands the specific challenge, they usually dig
          deep to find the root cause, and help us with strategies and tools to
          help overcome the challenge. A therapist is also trained to diagnose
          and address anxiety, depression, trauma, and any other form of mental
          illness which is seen as a taboo in the common household.
          <br /> <br />I invite you to learn more about therapy and its
          benefits, and make an informed decision!
        </p>
        <Button
          secondary
          className="mt-10 md:text-2xl"
          onClick={() => {
            navigate("/faqs");
          }}
        >
          FAQs
        </Button>
      </section>
    </div>
  );
}

export default HomePage;
