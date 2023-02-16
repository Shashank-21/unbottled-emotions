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

function BlogAndEventPage() {
  const blogs = useSelector((state) => state.blogs);
  const { headingColor, textColor } = useSelector((state) => state.color);

  return (
    <motion.div
      variants={sectionVariants}
      className='flex flex-col bg-stone-50'
    >
      <h3
        className={`text-2xl md:text-3xl text-center ${headingColor} font-bold mt-10`}
      >
        Blogs and Events
      </h3>
      <section className='bg-transparent flex flex-col items-center justify-between pb-10 mt-10 w-5/6 md:w-3/5 mx-auto'>
        <h4
          className={`text-xl md:text-2xl font-bold mt-4 w-full text-left ${headingColor}`}
        >
          Events:
        </h4>
        <ul className={`md:text-xl list-disc list-inside ${textColor}`}>
          <li className='my-3'>
            The Psychology of touch- Podcast with Yours Mentally- 2021- Spotify
          </li>
          <li className='my-3'>
            Self Esteem and Acceptance at Dav School, Dhanbad- 2020- In person
          </li>
          <li className='my-3'>
            Career Counseling workshop for Class XII students via zoom
            application- 2020- Zoom
          </li>
          <li className='my-3'>
            Assertiveness and Interpersonal communication at Aparna Public
            School, Dhanbad- 2020- In person
          </li>
          <li className='my-3'>
            Self Acceptance for The Yellow Club- 2020 - Google Meet
          </li>
        </ul>
      </section>
      <section className='bg-transparent flex flex-col items-center justify-between pb-10 mt-10'>
        <h4
          className={`text-xl md:text-2xl font-bold mt-4 w-f5/6 md:w-3/5 ${headingColor} text-left`}
        >
          Blogs:
        </h4>
        {blogs.map((blog) => {
          return <BlogDisplay blog={blog} key={blog.id} />;
        })}
      </section>
    </motion.div>
  );
}

export default BlogAndEventPage;
