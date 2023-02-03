function RadioInput({
  question,
  onInputChange,
  className,
  onCustomOptionChange,
}) {
  const { stem, options, selectedOption, customOption } = question;
  const appliedClass = className;

  return (
    <div
      className={
        "flex flex-col justify-around items-start mt-10 bg-gradient-to-b from-zinc-50 to-stone-50 rounded-lg p-5 md:p-10" +
        " " +
        appliedClass
      }
    >
      <p className="text-xl md:text-2xl mb-5 w-full text-left font-bold">
        {question.stem}
      </p>
      {options.map((option, index) => {
        return (
          <div
            className="flex flex-row flex-wrap justify-start items-center my-2"
            key={index}
          >
            <input
              type="radio"
              id={option}
              name={stem}
              value={option}
              onChange={onInputChange}
              checked={selectedOption === option}
              className="w-6 h-6 cursor-pointer"
            />
            <label className="text-xl ml-2">{option}</label>
            {question.isOtherSelected && option === "Other" && (
              <input
                type="text"
                value={customOption ? customOption : ""}
                onChange={onCustomOptionChange}
                className="ml-4 w-full md:w-96 h-10 md:h-12 border border-zinc-900 px-3 rounded-lg text-xl"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RadioInput;
