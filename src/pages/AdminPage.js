import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import RequestCard from "../components/RequestCard";
import { verifyUser } from "../store";
import { motion } from "framer-motion";

function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const requests = useSelector((state) => state.requests);
  const admin = useSelector((state) => state.admin);
  const navigate = useNavigate();

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

  const adminContent = (
    <motion.div
      layout
      transition={{
        layout: { duration: 1, type: "spring" },
      }}
      className="min-h-screen bg-stone-50 flex flex-col"
    >
      <h3 className="text-2xl md:text-3xl my-5 text-center font-bold">
        Requests
      </h3>
      {requests.map((request) => {
        return <RequestCard request={request} key={request.id} />;
      })}
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
    <div className="min-h-screen flex flex-col bg-stone-50">
      <p className="text-center mt-64">You need to sign in to get access</p>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
          className="h-10 md:h-12 border border-zinc-900 rounded-lg px-5 text-xl md:text-2xl w-5/6 mt-5 md:w-1/6"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="h-10 md:h-12 border border-zinc-900 rounded-lg px-5 text-xl md:text-2xl w-5/6 mt-5 mb-5 md:w-1/6"
        />
        <Button primary>Submit</Button>
        {admin.redirect && (
          <p className="mt-5 text-lg text-red-700">
            Sorry! You're not authorised to view this!
          </p>
        )}
      </form>
    </div>
  );

  if (!admin.signedIn) {
    return signInForm;
  } else {
    return adminContent;
  }
}

export default AdminPage;
