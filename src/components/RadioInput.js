import { useSelector } from "react-redux";

function RadioInput({
  question,
  onInputChange,
  className,
  onCustomOptionChange,
  entryError,
}) {
  const { stem, options, selectedOption, customOption } = question;
  const appliedClass = className;

  const { formBgColor, headingColor, textColor } = useSelector(
    (state) => state.color
  );

  return (
    <div
      className={`flex flex-col justify-around items-start rounded-lg p-5 ${appliedClass} ${formBgColor}`}
    >
      <p
        className={`text-xl md:text-2xl mb-5 w-full ${headingColor} text-left font-bold-inline`}
      >
        {question.stem}
      </p>
      {options.map((option, index) => {
        return (
          <div
            className='flex flex-row flex-wrap justify-start items-center my-2'
            key={index}
          >
            <input
              type='radio'
              id={option}
              name={stem}
              value={option}
              onChange={onInputChange}
              checked={selectedOption === option}
              className='w-6 h-6 cursor-pointer'
            />
            <label className={`text-xl ml-2 ${textColor}`}>{option}</label>
            {question.isOtherSelected && option === "Other" && (
              <input
                type='text'
                value={customOption ? customOption : ""}
                onChange={onCustomOptionChange}
                className='ml-4 w-full md:w-96 h-10 md:h-12 border border-zinc-600 px-3 rounded-lg text-xl'
              />
            )}
          </div>
        );
      })}
      {entryError && question.selectedOption === "" && (
        <p className='text-md md:text-lg text-red-600'>
          Please select one option
        </p>
      )}
    </div>
  );
}

export default RadioInput;
