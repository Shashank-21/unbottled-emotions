import { AnimatePresence, motion } from "framer-motion";
import { createRef } from "react";
import { useSelector } from "react-redux";
import { useLocation, useOutlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileNavigataionBar from "../components/MobileNavigation";
import NavigataionBar from "../components/NavigationBar";

const mainContentVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "10vw",
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

function NavigationPage() {
  const currentOutlet = useOutlet();
  const currentLocation = useLocation();
  const { textColor } = useSelector((state) => state.color);
  const routes = [
    { name: "Home", path: "/", nodeRef: createRef(), renderLink: true },
    { name: "About", path: "/about", nodeRef: createRef(), renderLink: true },
    {
      name: "Contact",
      path: "/contact",
      nodeRef: createRef(),
      renderLink: true,
    },
    {
      name: "Blogs & Events",
      path: "/blogs",
      nodeRef: createRef(),
      renderLink: true,
    },
    {
      name: "Testimonials & FAQs",
      path: "/faqs",
      nodeRef: createRef(),
      renderLink: true,
    },
  ];
  return (
    <main>
      <NavigataionBar routes={routes} />
      <MobileNavigataionBar routes={routes} />
      {currentLocation.pathname !== "/admin" && (
        <div
          className={`w-full text-center text-xl md:text-2xl font-bold-inline ${textColor} brand my-5 px-5`}
        >
          Shubhangi More, Mental Health Therapist
        </div>
      )}
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentLocation.pathname}
          variants={mainContentVariants}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {currentOutlet}
        </motion.div>
      </AnimatePresence>
      <Footer routes={routes} />
    </main>
  );
}

export default NavigationPage;
