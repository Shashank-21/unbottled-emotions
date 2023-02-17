import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckboxInput from "../components/CheckboxInput";
import RadioInput from "../components/RadioInput";
import { useUpdateRequestsMutation } from "../store";
import { useNavigate } from "react-router-dom";

const sectionVariants = {
  hidden: {
    y: "-1vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

const formVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

function ContactPage() {
  const {
    optionBgColor,
    optionBgColorSelected,
    borderColor,
    formBgColor,
    headingColor,
    textColor,
  } = useSelector((state) => state.color);

  const navigate = useNavigate();
  const regExpEmail = /.+@.+\..+/;
  const regExpPhone = /(\+[0-9]{1,3}-)?\(?[0-9]{3}\)?-?[0-9]{3}-?[0-9]{4}/;
  const regExpReason = /[a-zA-z]+ ?.*/;
  const [requestType, setRequestType] = useState("Therapy");
  const [addRequest] = useUpdateRequestsMutation();
  const requests = useSelector((state) => state.requests);
  const [entryError, setEntryError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [age, setAge] = useState(0);
  const [beenToTherapy, setBeenToTherapy] = useState({
    stem: "Have you ever been to therapy before?",
    options: ["Yes", "No"],
    selectedOption: "",
  });
  const [pronouns, setPronouns] = useState({
    stem: "Pronouns",
    options: ["She/him/hers", "He/him/his", "They/them/theirs", "Other"],
    selectedOption: "",
    isOtherSelected: false,
  });
  const [concerns, setConcerns] = useState({
    stem: "Areas of concern (Please note these are including and not limited)",
    options: [
      "Personal growth",
      "Relationships",
      "Work Life",
      "Grief work",
      "Clinical Concerns",
      "Other",
    ],
    selectedOptions: [],
    isOtherSelected: false,
  });
  const [profession, setProfession] = useState({
    stem: "Profession",
    options: ["Employee", "Student", "Both"],
    selectedOption: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    if (name !== "")
      setEntryError((value) => (value === true ? !value : value));
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    if (email !== "")
      setEntryError((value) => (value === true ? !value : value));
    setEmail(event.target.value);
  };
  const handlePhoneChange = (event) => {
    if (phone !== "")
      setEntryError((value) => (value === true ? !value : value));
    setPhone(event.target.value);
  };
  const handleReasonChange = (event) => {
    if (reason !== "")
      setEntryError((value) => (value === true ? !value : value));
    setReason(event.target.value);
  };

  const handleAgeChange = (event) => {
    if (age !== 0) setEntryError((value) => (value === true ? !value : value));
    setAge(event.target.value !== "" ? parseInt(event.target.value) : 0);
  };

  const handleBeenToTherapyChange = (event) => {
    if (beenToTherapy.selectedOption !== "")
      setEntryError((value) => (value === true ? !value : value));
    setBeenToTherapy({
      ...beenToTherapy,
      selectedOption: event.target.value,
    });
  };
  const handlePronounsChange = (event) => {
    if (pronouns.selectedOption !== "")
      setEntryError((value) => (value === true ? !value : value));
    setPronouns({
      ...pronouns,
      selectedOption: event.target.value,
      isOtherSelected: event.target.value === "Other",
    });
  };
  const handleConcernsChange = (event) => {
    if (concerns.selectedOptions.length !== 0)
      setEntryError((value) => (value === true ? !value : value));
    if (!concerns.selectedOptions.includes(event.target.value)) {
      setConcerns({
        ...concerns,
        selectedOptions: [...concerns.selectedOptions, event.target.value],
      });
    } else {
      setConcerns({
        ...concerns,
        selectedOptions: concerns.selectedOptions.filter(
          (option) => option !== event.target.value
        ),
      });
    }
    setConcerns((value) => {
      return {
        ...value,
        isOtherSelected: value.selectedOptions.includes("Other"),
      };
    });
  };
  const handleProfessionChange = (event) => {
    if (profession.selectedOption !== "")
      setEntryError((value) => (value === true ? !value : value));
    setProfession({
      ...profession,
      selectedOption: event.target.value,
    });
  };

  const handleCustomPronounChange = (event) => {
    setPronouns({
      ...pronouns,
      customOption: event.target.value,
    });
  };
  const handleCustomConcernChange = (event) => {
    setConcerns({
      ...concerns,
      customOption: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      requestType === "Therapy" &&
      (!name ||
        !age ||
        !pronouns.selectedOption ||
        !concerns.selectedOptions.length ||
        !beenToTherapy.selectedOption ||
        !profession.selectedOption)
    ) {
      setEntryError(true);
      return;
    } else if (
      requestType === "Collaboration" &&
      (!name ||
        !email.match(regExpEmail) ||
        !phone.match(regExpPhone) ||
        !reason.match(regExpReason))
    ) {
      setEntryError(true);
      return;
    }
    let requestData;
    if (requestType === "Therapy") {
      requestData = {
        id: nanoid(),
        type: requestType,
        name,
        age,
        beenToTherapy: beenToTherapy.selectedOption,
        profession: profession.selectedOption,
        pronouns: {
          selectedOption: pronouns.selectedOption,
          customOption: pronouns.customOption ? pronouns.customOption : null,
        },
        concerns: concerns.selectedOptions.filter((option) => {
          return option !== "Other";
        }),
      };
      if (concerns.customOption) {
        requestData.concerns.push(concerns.customOption);
      }
    } else if (requestType === "Collaboration") {
      requestData = {
        id: nanoid(),
        type: requestType,
        name,
        email,
        phone,
        reason,
      };
    }

    setSubmitted(true);

    addRequest({ title: "requests", data: [...requests, requestData] });

    setTimeout(() => {
      if (requestType === "Therapy")
        window.location.replace("https://unbottlingemotions.setmore.com/");
      else navigate("/");
    }, 2000);
  };
  const therapyForm = (
    <motion.form
      key={`${requestType}-form`}
      variants={formVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      onSubmit={handleSubmit}
      className={`flex flex-col items-center justify-around w-11/12 md:w-2/3 my-10 mx-auto p-5 md:p-10 ${formBgColor} rounded-lg shadow-2xl`}
    >
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && name === "" ? "border-red-600" : "border-zinc-400"
          } rounded-lg px-5 text-xl md:text-2xl w-full`}
        />
        {entryError && name === "" && (
          <p className='text-md md:text-lg text-red-600'>
            Name cannot be blank
          </p>
        )}
      </div>
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <input
          type='number'
          placeholder='Age'
          value={age ? age : ""}
          onChange={handleAgeChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && age === 0 ? "border-red-600" : "border-zinc-400"
          } rounded-lg px-5 text-xl md:text-2xl w-full`}
        />
        {entryError && name === "" && (
          <p className='text-md md:text-lg text-red-600'>Enter a valid age</p>
        )}
      </div>
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <input
          type='text'
          placeholder='Phone Number'
          value={phone}
          onChange={handlePhoneChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && !phone.match(regExpPhone)
              ? "border-red-600"
              : "border-zinc-400"
          } rounded-lg px-5 text-xl md:text-2xl w-full`}
        />
        {entryError && !phone.match(regExpPhone) && (
          <p className='text-md md:text-lg text-red-600'>
            Valid Phone Number Formats:
            <br />
            XXXXXXXXXX
            <br />
            [+Country Code]-XXXXXXXXXX
            <br />
            [+Country Code]-XXX-XXX-XXXX
            <br />
            [+Country Code]-(XXX)-XXX-XXXX
          </p>
        )}
      </div>
      <RadioInput
        question={pronouns}
        onInputChange={handlePronounsChange}
        onCustomOptionChange={handleCustomPronounChange}
        className='w-full md:w-3/5'
        entryError={entryError}
      />
      <RadioInput
        question={beenToTherapy}
        onInputChange={handleBeenToTherapyChange}
        className='w-full md:w-3/5'
        entryError={entryError}
      />
      <RadioInput
        question={profession}
        onInputChange={handleProfessionChange}
        className='w-full md:w-3/5'
        entryError={entryError}
      />
      <CheckboxInput
        question={concerns}
        onInputChange={handleConcernsChange}
        onCustomOptionChange={handleCustomConcernChange}
        className='w-full md:w-3/5'
        entryError={entryError}
      />
      <Button primary className='mt-10 text-lg md:text-xl'>
        Submit
      </Button>
      {submitted && !entryError && (
        <p className='text-xl md:text-2xl mt-5 text-emerald-900'>
          Thank you! I'll be in touch soon!
        </p>
      )}
    </motion.form>
  );

  const collaborationForm = (
    <motion.form
      key={`${requestType}-form`}
      variants={formVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      onSubmit={handleSubmit}
      className={`flex flex-col items-center justify-around w-11/12 md:w-2/3 my-10 mx-auto p-5 md:p-10 ${formBgColor} rounded-lg shadow-2xl`}
    >
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && name === "" ? "border-red-600" : "border-zinc-400"
          } rounded-lg px-5 text-xl md:text-2xl w-full`}
        />
        {entryError && name === "" && (
          <p className='text-md md:text-lg text-red-600'>
            Name cannot be blank
          </p>
        )}
      </div>
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && !email.match(regExpEmail)
              ? "border-red-600"
              : "border-zinc-400"
          } rounded-lg px-5 text-xl md:text-2xl w-full`}
        />
        {entryError && !email.match(regExpEmail) && (
          <p className='text-md md:text-lg text-red-600'>Enter a valid Email</p>
        )}
      </div>
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <input
          type='text'
          placeholder='Phone Number'
          value={phone}
          onChange={handlePhoneChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && !phone.match(regExpPhone)
              ? "border-red-600"
              : "border-zinc-400"
          } rounded-lg px-5 text-xl md:text-2xl w-full`}
        />
        {entryError && !phone.match(regExpPhone) && (
          <p className='text-md md:text-lg text-red-600'>
            Valid Phone Number Formats:
            <br />
            XXXXXXXXXX
            <br />
            [+Country Code]-XXXXXXXXXX
            <br />
            [+Country Code]-XXX-XXX-XXXX
            <br />
            [+Country Code]-(XXX)-XXX-XXXX
          </p>
        )}
      </div>
      <div className='w-full md:w-5/6 flex flex-col justify-center items-center mx-auto my-3'>
        <textarea
          placeholder='Reason for getting in touch'
          value={reason}
          onChange={handleReasonChange}
          className={`h-10 md:h-12 border-2 ${
            entryError && !reason.match(regExpReason)
              ? "border-red-600"
              : "border-zinc-400"
          } rounded-lg p-5 text-xl md:text-2xl w-full h-96 md:h-64 `}
        />
        {entryError && !reason.match(regExpReason) && (
          <p className='text-md md:text-lg text-red-600'>
            Enter at least one word
          </p>
        )}
      </div>

      <Button primary className='mt-10 text-lg md:text-xl'>
        Submit
      </Button>
      {submitted && !entryError && (
        <p className='text-lg md:text-xl mt-5 text-emerald-900'>
          Thank you! I'll be in touch soon!
        </p>
      )}
    </motion.form>
  );

  const therapyHeader = (
    <motion.h3
      key={`${requestType}-header`}
      variants={formVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`text-xl md:text-3xl text-center ${headingColor} font-bold mt-10`}
    >
      Begin your therapeutic journey
    </motion.h3>
  );
  const collaborationHeader = (
    <motion.h3
      key={`${requestType}-header`}
      variants={formVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className={`text-xl md:text-3xl text-center ${headingColor} font-bold mt-10`}
    >
      Let's make a difference together
    </motion.h3>
  );

  return (
    <motion.div
      variants={sectionVariants}
      className='flex flex-col bg-stone-50'
    >
      <div className='py-5 w-full md:w-1/4 rounded-lg mx-auto mt-5 flex flex-col items-center justify-around'>
        <p className={`my-3 text-xl md:text-2xl ${textColor}`}>
          What do you want to get in touch for?
        </p>
        <div className='flex flex-col md:flex-row items-center justify-center my-3 w-full'>
          <span
            className={`p-3 ${
              requestType === "Therapy"
                ? `${optionBgColorSelected} border-2 ${borderColor}`
                : optionBgColor
            } text-xl md:text-2xl cursor-pointer rounded-lg w-3/5 text-center md:w-fit md:mr-3 ${textColor}`}
            onClick={() => {
              setRequestType("Therapy");
            }}
          >
            Therapy
          </span>
          <span
            className={`p-3 ${
              requestType === "Collaboration"
                ? `${optionBgColorSelected} border-2 ${borderColor}`
                : optionBgColor
            } text-xl md:text-2xl cursor-pointer rounded-lg w-3/5 text-center mt-3 md:mt-0 md:w-fit ${textColor}`}
            onClick={() => {
              setRequestType("Collaboration");
            }}
          >
            Collaboration
          </span>
        </div>
      </div>
      <AnimatePresence mode='wait'>
        {requestType === "Therapy" ? therapyHeader : collaborationHeader}
        {requestType === "Therapy" ? therapyForm : collaborationForm}
      </AnimatePresence>
    </motion.div>
  );
}

export default ContactPage;
