import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckboxInput from "../components/CheckboxInput";
import RadioInput from "../components/RadioInput";
import { useUpdateRequestsMutation } from "../store";

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

function ContactPage() {
  const [addRequest] = useUpdateRequestsMutation();
  const requests = useSelector((state) => state.requests);
  const [entryError, setEntryError] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [beenToTherapy, setBeenToTherapy] = useState({
    stem: "Have you ever been to Therapy before?",
    options: ["Yes", "No"],
    selectedOption: "",
  });
  const [pronouns, setPronouns] = useState({
    stem: "Pronouns",
    options: ["She/him/his", "He/him/his", "They/them/theirs", "Other"],
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
      !name ||
      !age ||
      !pronouns.selectedOption ||
      !concerns.selectedOptions.length ||
      !beenToTherapy.selectedOption ||
      !profession.selectedOption
    ) {
      setEntryError(true);
      return;
    }
    const requestData = {
      id: nanoid(),
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

    setSubmitted(true);

    addRequest({ title: "requests", data: [...requests, requestData] });

    setTimeout(() => {
      window.location.replace("https://unbottlingemotions.setmore.com/");
    }, 2000);
  };

  return (
    <motion.div
      variants={sectionVariants}
      className="flex flex-col bg-stone-50"
    >
      <h3 className="text-3xl md:text-4xl text-center font-bold mt-10">
        Get in Touch
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-around w-11/12 md:w-2/3 my-10 mx-auto p-5 md:p-10 bg-indigo-200 border-4 border-indigo-200 rounded-lg shadow-2xl"
      >
        <div className="w-5/6 flex flex-col justify-center items-center mx-auto my-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className={`h-10 md:h-12 border-2 ${
              entryError && name === "" ? "border-red-600" : "border-zinc-900"
            } rounded-lg px-5 text-xl md:text-2xl w-11/12`}
          />
          {entryError && name === "" && (
            <p className="text-md md:text-lg text-red-600">
              Name cannot be blank
            </p>
          )}
        </div>
        <div className="w-5/6 flex flex-col justify-center items-center mx-auto my-3">
          <input
            type="number"
            placeholder="Age"
            value={age ? age : ""}
            onChange={handleAgeChange}
            className={`h-10 md:h-12 border-2 ${
              entryError && age === 0 ? "border-red-600" : "border-zinc-900"
            } rounded-lg px-5 text-xl md:text-2xl w-11/12`}
          />
          {entryError && name === "" && (
            <p className="text-md md:text-lg text-red-600">Enter a valid age</p>
          )}
        </div>

        <RadioInput
          question={pronouns}
          onInputChange={handlePronounsChange}
          onCustomOptionChange={handleCustomPronounChange}
          className="w-full md:w-3/5"
          entryError={entryError}
        />
        <RadioInput
          question={beenToTherapy}
          onInputChange={handleBeenToTherapyChange}
          className="w-full md:w-3/5"
          entryError={entryError}
        />
        <RadioInput
          question={profession}
          onInputChange={handleProfessionChange}
          className="w-full md:w-3/5"
          entryError={entryError}
        />
        <CheckboxInput
          question={concerns}
          onInputChange={handleConcernsChange}
          onCustomOptionChange={handleCustomConcernChange}
          className="w-full md:w-3/5"
          entryError={entryError}
        />
        <Button secondary className="mt-10 text-lg md:text-xl">
          Submit
        </Button>
        {submitted && !entryError && (
          <p className="text-lg md:text-xl mt-5 text-emerald-900">
            Thank you! I'll be in touch soon!
          </p>
        )}
      </form>
    </motion.div>
  );
}

export default ContactPage;
