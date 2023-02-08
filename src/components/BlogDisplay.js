import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogDisplay({ blog }) {
  return (
    <motion.div className="w-5/6 md:w-3/5 mt-10 mx-auto p-5 text-zinc-900 bg-indigo-200 rounded-lg shadow-xl flex flex-col justify-around">
      <h4 className="text-xl md:text-2xl font-bold w-full text-left">
        {blog.title}
      </h4>
      <p className="md:text-lg text-justify">{blog.synopsis}</p>
      <Link
        to={`/blogs/${blog.title.toLowerCase().split(" ").join("-")}`}
        className="text-md w-full text-right cursor-pointer hover:scale-110 hover:font-bold-inline hover:text-indigo-800 hover:origin-right duration-500 "
      >
        Read More...
      </Link>
    </motion.div>
  );
}

export default BlogDisplay;
