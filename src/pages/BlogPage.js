import { useSelector } from "react-redux";
import BlogDisplay from "../components/BlogDisplay";

function BlogPage({ blog }) {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div className=" bg-zinc-50 mx-auto">
      <section className="flex flex-col justify-around p-5 md:p-10 w-5/6 md:w-3/5 mx-auto">
        <h3 className="my-10 text-2xl md:text-3xl font-bold text-center">
          {blog.title}
        </h3>
        <p className="text-lg md:text-xl w-full text-justify">
          {blog.elaborate}
        </p>
      </section>
      <section className="flex flex-col items-center justify-around p-5 md:p-10">
        <h3 className="mt-10 text-xl md:text-2xl font-bold">Related:</h3>
        {blogs.map((blog) => {
          return <BlogDisplay blog={blog} key={blog.id} />;
        })}
      </section>
    </div>
  );
}

export default BlogPage;
