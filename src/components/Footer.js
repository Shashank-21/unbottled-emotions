import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlineCopyrightCircle,
} from "react-icons/ai";
import { useSelector } from "react-redux";

function Footer({ routes }) {
  const { footerBgColor, textColor } = useSelector((state) => state.color);
  const socialMediaHandles = [
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/unbottled.emotions/",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/shubhangi.more.3367",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/shubhangi-more-she-her-b82302ab/",
    },
  ];
  return (
    <footer
      className={`flex flex-col items-center justify-between ${footerBgColor} ${textColor} pb-5 shadow-inner home-and-header`}
    >
      <div className='md:h-full flex flex-col md:flex-row items-center md:items-start justify-between md:justify-around w-full'>
        <div className='md:h-full md:w-1/4 mx-10 flex flex-col justify-around items-center my-5'>
          <div className='w-full'>
            <h5
              className={`font-bold ${textColor} my-1 text-center text-lg md:text-xl`}
            >
              Quick Links
            </h5>
          </div>
          <div className='w-full h-full flex flex-col md:flex-wrap justify-around text-md items-center'>
            {routes.map((route, index) => {
              return (
                <Link to={route.path} key={index} className='my-1'>
                  {route.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='md:w-1/4 flex flex-col justify-around mx-10 my-5 md:my-1'>
          <h5
            className={`font-bold ${textColor} my-3 text-center text-lg md:text-xl`}
          >
            Follow me on Social Media:
          </h5>
          <div className='flex flex-row justify-around items-center'>
            {socialMediaHandles.map((handle, i) => {
              return (
                <a
                  className='mx-3 p-3 cursor-pointer text-3xl'
                  href={handle.link}
                  key={i}
                >
                  {handle.icon}
                </a>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col items-center justify-around mx-10 md:w-1/4 my-3 md:my-1 '>
          <h5
            className={`font-bold ${textColor} my-3 text-center text-lg md:text-xl`}
          >
            Contact Me:
          </h5>
          <div className='flex flex-row justify-start text-md md:text-lg items-center my-1'>
            <AiFillPhone className=' mr-3' />
            +91-7992286410
          </div>
          <div className='flex flex-row justify-start text-md md:text-lg items-center my-1'>
            <AiOutlineMail className=' mr-3' />
            shubhangi.therapist@pm.me
          </div>
        </div>
      </div>
      <div className='w-fit flex flex-row items-center mt-10 mb-5 md:my-0'>
        <AiOutlineCopyrightCircle className='text-sm md:text-md' />
        <p className='ml-3 text-sm md:text-md'>Unbottled Emotions, 2023</p>
      </div>
    </footer>
  );
}
export default Footer;
