import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import RequestCard from "../components/RequestCard";
import { verifyUser } from "../store";
import { LayoutGroup, motion } from "framer-motion";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase-utils";
import { FaGoogle } from "react-icons/fa";

function AdminPage() {
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

  console.log(admin);

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
    const userDetails = await createUserDocumentFromAuth(user, {
      role: "admin",
    });
    console.log(userDetails.data().role, user);
    dispatch(verifyUser(userDetails.data().role));
  };

  const adminContent = (
    <motion.div
      layout
      transition={{
        layout: { duration: 1, type: "spring" },
      }}
      className='min-h-screen bg-stone-50 flex flex-col pt-5 pb-16'
    >
      <h3
        className={`text-2xl md:text-3xl my-5 text-center font-bold ${headingColor}`}
      >
        Requests
      </h3>
      <div className='w-full md:w-1/4 rounded-lg mx-auto flex flex-col items-center justify-around'>
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

  const signInPage = (
    <div className='min-h-screen flex flex-col bg-stone-50'>
      <p className='text-center mt-64'>You need to sign in to get access</p>
      <Button
        secondary
        onClick={logGoogleUser}
        className='mt-5 w-fit mx-auto text-xl md:text-2xl flex flex-row justify-start'
      >
        <FaGoogle className='mr-3' />
        Sign in
      </Button>
      {admin.redirect && (
        <p className='text-red-700 text-xl mx-auto'>
          You're not authorised to view this page!
        </p>
      )}
    </div>
  );

  if (!admin.signedIn) {
    return signInPage;
  } else {
    return adminContent;
  }
}

export default AdminPage;
