import { useSelector } from "react-redux";
import BlogDisplay from "../components/BlogDisplay";
import { motion } from "framer-motion";

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

function BlogPage({ blog }) {
  const blogs = useSelector((state) => state.blogs);
  const { headingColor, textColor } = useSelector((state) => state.color);

  return (
    <motion.div variants={sectionVariants} className=' bg-stone-50 mx-auto'>
      <section className='flex flex-col justify-around p-5 md:p-10 w-5/6 md:w-4/5 mx-auto'>
        <h3
          className={`my-10 text-2xl md:text-3xl font-bold text-center ${headingColor}`}
        >
          {blog.title}
        </h3>
        <p
          className={`text-lg md:text-2xl w-full text-justify leading-relaxed md:leading-relaxed ${textColor}`}
        >
          {blog.elaborate}
        </p>
      </section>
      <section className='flex flex-col items-center justify-around p-5 md:p-10'>
        <h3 className={`mt-10 text-xl md:text-2xl font-bold ${headingColor}`}>
          Related:
        </h3>
        {blogs.map((blog) => {
          return <BlogDisplay blog={blog} key={blog.id} />;
        })}
      </section>
    </motion.div>
  );
}

export default BlogPage;
