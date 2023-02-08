import { AnimatePresence, motion } from "framer-motion";
import { createRef } from "react";
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
      name: "Blogs and Events",
      path: "/blogs",
      nodeRef: createRef(),
      renderLink: true,
    },
    {
      name: "FAQs",
      path: "/faqs",
      nodeRef: createRef(),
      renderLink: true,
    },
  ];
  return (
    <main>
      <NavigataionBar routes={routes} />
      <MobileNavigataionBar routes={routes} />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentLocation.pathname}
          variants={mainContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {currentOutlet}
        </motion.div>
      </AnimatePresence>
      {currentLocation.pathname !== "/" && <Footer routes={routes} />}
    </main>
  );
}

export default NavigationPage;
