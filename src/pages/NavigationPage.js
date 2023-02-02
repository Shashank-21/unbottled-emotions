import { createRef } from "react";
import { useLocation, useOutlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileNavigataionBar from "../components/MobileNavigation";
import NavigataionBar from "../components/NavigationBar";

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
      <div>{currentOutlet}</div>
      {currentLocation.pathname !== "/" && <Footer routes={routes} />}
    </main>
  );
}

export default NavigationPage;
