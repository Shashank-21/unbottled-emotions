import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import BlogAndEventPage from "./pages/BlogAndEventPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import HomePage from "./pages/HomePage";
import NavigationPage from "./pages/NavigationPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import {
  captureFAQs,
  captureRequests,
  captureServices,
  captureTestimonials,
  useFetchFAQsQuery,
  useFetchRequestsQuery,
  useFetchServicesQuery,
  useFetchTestimonialsQuery,
} from "./store";

function App() {
  const blogs = useSelector((state) => state.blogs);

  const dispatch = useDispatch();
  const { data: faqs } = useFetchFAQsQuery();
  const { data: services } = useFetchServicesQuery();
  const { data: testimonials } = useFetchTestimonialsQuery();
  const { data: requests } = useFetchRequestsQuery();

  useEffect(() => {
    dispatch(captureServices(services));
    dispatch(captureTestimonials(testimonials));
    dispatch(captureFAQs(faqs));
    dispatch(captureRequests(requests));
  }, [dispatch, services, testimonials, faqs, requests]);

  const routeFromElements = createRoutesFromElements(
    <Route path='/' element={<NavigationPage />}>
      <Route index element={<HomePage />} />
      <Route path='about' element={<AboutPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='blogs'>
        <Route index element={<BlogAndEventPage />} />
        {blogs.map((blog) => {
          return (
            <Route
              key={blog.id}
              path={blog.title.toLowerCase().split(" ").join("-")}
              element={<BlogPage blog={blog} />}
            />
          );
        })}
      </Route>
      <Route path='faqs' element={<FAQPage />} />
      <Route path='privacy-policy' element={<PrivacyPolicyPage />} />
      <Route path='admin' element={<AdminPage />} />
    </Route>
  );

  const router = createBrowserRouter(routeFromElements);

  return <RouterProvider router={router} />;
}

export default App;
