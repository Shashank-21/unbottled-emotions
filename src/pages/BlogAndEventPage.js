import { useSelector } from "react-redux";
import BlogDisplay from "../components/BlogDisplay";
import { motion } from "framer-motion";
import EventImage1 from "../images/EventImage1.jpg";
import EventImage2 from "../images/EventImage2.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

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
  const [visible, setVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchInstaPosts() {
      const instaPostsData = await axios.get(
        `https://graph.instagram.com/me/media?fields=id,media_type,media_url,username,timestamp&access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS}`
      );
      setPosts(instaPostsData.data.data);
    }

    fetchInstaPosts();
  }, []);
  console.log(posts);
  const blogs = useSelector((state) => state.blogs);
  const { headingColor, textColor } = useSelector((state) => state.color);

  return (
    <motion.div
      variants={sectionVariants}
      className='flex flex-col bg-stone-50'
    >
      <section className='bg-transparent flex flex-col items-start justify-between pb-10 w-5/6 md:w-3/5 mx-auto'>
        <h4
          className={`text-xl md:text-2xl font-bold my-4 w-full text-left ${headingColor}`}
        >
          Events:
        </h4>
        <ul className={`md:text-xl list-disc list-inside ${textColor} mb-5`}>
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
        <div className='flex flex-col md:flex-row w-full mt-5 justify-around items-center'>
          <img
            src={EventImage1}
            alt='Event 1'
            className='w-5/6 md:w-2/5 h-auto'
          />
          <img
            src={EventImage2}
            alt='Event 2'
            className='w-5/6 md:w-2/5 h-auto'
          />
        </div>
      </section>
      <section className='bg-transparent flex flex-col items-center justify-between pb-10 md:mt-10'>
        <h4
          className={`text-xl md:text-2xl font-bold w-5/6 md:w-3/5 ${headingColor} text-left`}
        >
          Blogs:
        </h4>
        {blogs.map((blog) => {
          return <BlogDisplay blog={blog} key={blog.id} />;
        })}
      </section>
      <section className='my-5 flex flex-col items-center'>
        <h4
          className={`text-xl md:text-3xl font-bold w-5/6 md:w-2/3 ${headingColor} text-center my-5`}
        >
          Unbottled Emotions on Instagram
        </h4>
        <div className='p-5 grid grid-cols-3 gap-3 w-full md:w-2/3'>
          {posts
            .filter((post) => post.media_type === "IMAGE")
            .map((post, index) => (
              <img
                src={post.media_url}
                alt={post.timestamp}
                key={post.id}
                className={`w-96 h-96 md:w-[28rem] md:h-[28rem] object-cover col-span-3 md:col-span-1 ${
                  index > 5 ? (visible ? "" : "hidden") : ""
                }`}
              />
            ))}
        </div>
        <p
          className='w-full text-center text-xl cursor-pointer'
          onClick={() => {
            setVisible((v) => {
              return !v;
            });
          }}
        >
          {visible ? "See Less" : "See More"}
        </p>
      </section>
    </motion.div>
  );
}

export default BlogAndEventPage;
