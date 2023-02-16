import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import RequestCard from "../components/RequestCard";
import { verifyUser } from "../store";
import { LayoutGroup, motion } from "framer-motion";
import { signInWithGooglePopup } from "../utils/firebase-utils";

function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [requestType, setRequestType] = useState("");
  const requests = useSelector((state) => state.requests);
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();

  const {
    optionBgColor,
    optionBgColorSelected,
    borderColor,
    headingColor,
    textColor,
  } = useSelector((state) => state.color);

  const dispatch = useDispatch();

  useEffect(() => {
    if (admin.redirect) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    return () => {
      clearTimeout(() => {
        navigate("/");
      }, 2000);
    };
  }, [admin, navigate]);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
  };

  const adminContent = (
    <motion.div
      layout
      transition={{
        layout: { duration: 1, type: "spring" },
      }}
      className='min-h-screen bg-stone-50 flex flex-col'
    >
      <h3
        className={`text-2xl md:text-3xl my-5 text-center font-bold ${headingColor}`}
      >
        Requests
      </h3>
      <div className='py-5 w-full md:w-1/4 rounded-lg mx-auto flex flex-col items-center justify-around'>
        <p className={`my-3 text-md md:text-lg ${textColor}`}>
          Filter Requests by:
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center my-3 w-full'>
          <span
            className={`p-3 ${
              requestType === "Therapy"
                ? `${optionBgColorSelected} border-2 ${borderColor}`
                : optionBgColor
            } text-md md:text-lg cursor-pointer rounded-lg w-3/5 text-center md:w-fit md:mr-3 ${textColor}`}
            onClick={() => {
              setRequestType((value) => {
                if (value !== "Therapy") return "Therapy";
                else return "";
              });
            }}
          >
            Therapy
          </span>
          <span
            className={`p-3 ${
              requestType === "Collaboration"
                ? `${optionBgColorSelected} border-2 ${borderColor}`
                : optionBgColor
            } text-md md:text-lg cursor-pointer rounded-lg w-3/5 text-center mt-3 md:mt-0 md:w-fit ${textColor}`}
            onClick={() => {
              setRequestType((value) => {
                if (value !== "Collaboration") return "Collaboration";
                else return "";
              });
            }}
          >
            Collaboration
          </span>
        </div>
      </div>
      <LayoutGroup>
        {requests
          .filter((request) => request.type.includes(requestType))
          .map((request) => {
            return <RequestCard request={request} key={request.id} />;
          })}
      </LayoutGroup>
    </motion.div>
  );

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(verifyUser({ username, password }));
  };

  const signInForm = (
    <div className='min-h-screen flex flex-col bg-stone-50'>
      <p className='text-center mt-64'>You need to sign in to get access</p>
      <form
        className='flex flex-col items-center justify-center'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='Username'
          value={username}
          onChange={handleUsernameChange}
          className='h-10 md:h-12 border border-zinc-900 rounded-lg px-5 text-xl md:text-2xl w-5/6 mt-5 md:w-1/6'
        />
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={handlePasswordChange}
          className='h-10 md:h-12 border border-zinc-900 rounded-lg px-5 text-xl md:text-2xl w-5/6 mt-5 mb-5 md:w-1/6'
        />
        <Button primary>Submit</Button>

        {admin.redirect && (
          <p className='mt-5 text-lg text-red-700'>
            Sorry! You're not authorised to view this!
          </p>
        )}
      </form>
      <Button secondary onClick={logGoogleUser} className='mt-5 w-fit mx-auto'>
        Sign in with Google
      </Button>
    </div>
  );

  if (!admin.signedIn) {
    return signInForm;
  } else {
    return adminContent;
  }
}

export default AdminPage;
