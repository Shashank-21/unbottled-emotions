import { Link } from "react-router-dom";

function BlogDisplay({ blog }) {
  return (
    <div className="w-5/6 md:w-3/5 mt-10 mx-auto p-5 text-zinc-900 bg-gradient-to-b from-zinc-200 to-stone-200 rounded-lg shadow-xl flex flex-col justify-around">
      <h4 className="text-xl md:text-2xl font-bold w-full text-left">
        {blog.title}
      </h4>
      <p className="md:text-lg text-justify">{blog.synopsis}</p>
      <Link
        to={`/blogs/${blog.title.toLowerCase().split(" ").join("-")}`}
        className="text-md w-full text-right cursor-pointer"
      >
        Read More...
      </Link>
    </div>
  );
}

export default BlogDisplay;
