import { useSelector } from "react-redux";
import BlogDisplay from "../components/BlogDisplay";

function BlogAndEventPage() {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="flex flex-col bg-gradient-to-br from-pink-100 via-fuchsia-100 to-rose-100">
      <h3 className="text-3xl md:text-4xl text-center font-bold mt-10">
        Blogs and Events
      </h3>
      <section className="bg-transparent text-zinc-900 flex flex-col items-center justify-between pb-10 mt-10 w-5/6 md:w-3/5 mx-auto">
        <h4 className="text-xl md:text-2xl font-bold mt-4 w-full text-left">
          Events:
        </h4>
        <ul className="md:text-xl list-disc list-inside">
          <li className="my-3">
            The Psychology of touch- Podcast with Yours Mentally- 2021- Spotify
          </li>
          <li className="my-3">
            Self Esteem and Acceptance at Dav School, Dhanbad- 2020- In person
          </li>
          <li className="my-3">
            Career Counseling workshop for Class XII students via zoom
            application- 2020- Zoom
          </li>
          <li className="my-3">
            Assertiveness and Interpersonal communication at Aparna Public
            School, Dhanbad- 2020- In person
          </li>
          <li className="my-3">
            Self Acceptance for The Yellow Club- 2020 - Google Meet
          </li>
        </ul>
      </section>
      <section className="bg-transparent text-zinc-900 flex flex-col items-center justify-between pb-10 mt-10">
        <h4 className="text-xl md:text-2xl font-bold mt-4 w-f5/6 md:w-3/5 text-left">
          Blogs:
        </h4>
        {blogs.map((blog) => {
          return <BlogDisplay blog={blog} key={blog.id} />;
        })}
      </section>
    </div>
  );
}

export default BlogAndEventPage;
