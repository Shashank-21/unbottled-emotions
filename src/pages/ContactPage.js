import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckboxInput from "../components/CheckboxInput";
import RadioInput from "../components/RadioInput";
import { useUpdateRequestsMutation } from "../store";

function ContactPage() {
  const [addRequest] = useUpdateRequestsMutation();
  const requests = useSelector((state) => state.requests);

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
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value !== "" ? parseInt(event.target.value) : 0);
  };

  const handleBeenToTherapyChange = (event) => {
    setBeenToTherapy({
      ...beenToTherapy,
      selectedOption: event.target.value,
    });
  };
  const handlePronounsChange = (event) => {
    setPronouns({
      ...pronouns,
      selectedOption: event.target.value,
      isOtherSelected: event.target.value === "Other",
    });
  };
  const handleConcernsChange = (event) => {
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
    setSubmitted(true);

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
      concerns: concerns.selectedOptions,
    };
    if (concerns.customOption) {
      requestData.concerns.push(concerns.customOption);
    }

    addRequest({ title: "requests", data: [...requests, requestData] });

    setTimeout(() => {
      window.location.replace("https://unbottlingemotions.setmore.com/");
    }, 2000);
  };

  return (
    <div className="flex flex-col bg-gray-50">
      <h3 className="text-3xl md:text-4xl text-center font-bold mt-10">
        Contact Me
      </h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-around w-5/6 md:w-2/3 my-10 mx-auto p-5 md:p-10 bg-gradient-to-b from-stone-200 to-neutral-200 rounded-lg shadow-xl"
      >
        <div className="w-5/6 flex flex-row justify-center items-center mx-auto my-3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className="h-10 md:h-12 border border-zinc-900 rounded-lg px-5 text-xl md:text-2xl w-11/12"
          />
        </div>
        <div className="w-5/6 flex flex-row justify-center items-center mx-auto my-3">
          <input
            type="number"
            placeholder="Age"
            value={age ? age : ""}
            onChange={handleAgeChange}
            className="w-2/5 md:w-1/3 h-10 md:h-12 border border-zinc-900 rounded-lg px-5 text-xl md:text-2xl"
          />
        </div>

        <RadioInput
          question={pronouns}
          onInputChange={handlePronounsChange}
          onCustomOptionChange={handleCustomPronounChange}
          className="w-full md:w-3/5"
        />
        <RadioInput
          question={beenToTherapy}
          onInputChange={handleBeenToTherapyChange}
          className="w-full md:w-3/5"
        />
        <RadioInput
          question={profession}
          onInputChange={handleProfessionChange}
          className="w-full md:w-3/5"
        />
        <CheckboxInput
          question={concerns}
          onInputChange={handleConcernsChange}
          onCustomOptionChange={handleCustomConcernChange}
          className="w-full md:w-3/5"
        />
        <Button primary className="mt-5 text-lg">
          Submit
        </Button>
        {submitted && (
          <p className="text-lg text-emerald-900">
            Thank you! I'll be in touch soon!
          </p>
        )}
      </form>
    </div>
  );
}

export default ContactPage;
