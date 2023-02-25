import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

function BlogDisplay({ blog }) {
  const { cardBgColor, headingColor, textColor } = useSelector(
    (state) => state.color
  );
  return (
    <motion.div
      className={`w-5/6 md:w-3/5 mt-5 md:mt-10 mx-auto p-5 text-zinc-900 ${cardBgColor} rounded-lg shadow-xl flex flex-col justify-around`}
    >
      <h4
        className={`text-xl md:text-2xl font-bold w-full text-left ${headingColor}`}
      >
        {blog.title}
      </h4>
      <p className={`md:text-lg text-justify ${textColor}`}>{blog.synopsis}</p>
      <Link
        to={`/blogs/${blog.title.toLowerCase().split(" ").join("-")}`}
        className='text-md w-full text-right cursor-pointer hover:scale-125 hover:font-bold-inline hover:text-violet-800 hover:origin-right duration-500'
      >
        Read More...
      </Link>
    </motion.div>
  );
}

export default BlogDisplay;
