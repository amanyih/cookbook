import { useState, Fragment } from "react";
import Input from "../input";
import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faRemove } from "@fortawesome/free-solid-svg-icons";
import TextArea from "../textarea";

interface VariableInputsProps {
  title: string;
  placeholder: string;
  value: string[];
  secondaryValue?: string[];
  secondaryPlaceholder?: string;
  secondaryType?: string;
  onChange: (value: string[]) => void;
  onSecondaryChange?: (value: string[]) => void;
}

const VariableInputs: React.FC<VariableInputsProps> = (props) => {
  const [amountOfInputs, setAmountOfInputs] = useState<number>(1);
  const inputValues = props.value;

  return (
    <div>
      {Array.from(Array(amountOfInputs).keys()).map((index) => (
        <span className="flex flex-col w-full mb-10  dark:text-gray-100">
          <div>
            <div className="flex items-center justify-between w-full mb-3">
              <Input
                value={props.value[index]}
                placeholder={`${props.title} ${index + 1}`}
                rounded={true}
                outline={true}
                required={true}
                onChange={(event) => {
                  const newInputValues = [...inputValues];
                  newInputValues[index] = event!.target.value;

                  props.onChange(newInputValues);
                }}
              />
              {amountOfInputs > 1 && (
                <button
                  type="button"
                  className=" flex items-center justify-center w-14 h-14 px-5 py-3 mb-3 border-2 border-gray-300 rounded-full dark:border-gray-600 focus:outline-none focus:border-primary-400  dark:text-gray-100 ml-3
                "
                  onClick={() => {
                    const newInputValues = [...inputValues];
                    newInputValues.splice(index, 1);
                    props.onChange(newInputValues);
                    setAmountOfInputs(amountOfInputs - 1);
                  }}
                >
                  <FontAwesomeIcon icon={faRemove} className="text-red-500" />
                </button>
              )}
            </div>

            {props.secondaryValue && (
              <TextArea
                required={true}
                className=""
                value={props.secondaryValue[index]}
                outline={true}
                rounded={true}
                onChange={(value) => {
                  const newSecondaryValues = [...props.secondaryValue!];
                  newSecondaryValues[index] = value!.target.value;
                  props.onSecondaryChange!(newSecondaryValues);
                }}
                placeholder={props.secondaryPlaceholder}
              />
            )}
          </div>
        </span>
      ))}
      <button
        type="button"
        onClick={() => {
          setAmountOfInputs(amountOfInputs + 1);
          const newInputValues = [...inputValues];
          newInputValues.push("");
          props.onChange(newInputValues);
        }}
        className="flex items-center justify-center w-full h-12 px-5 py-3 mb-3 border-2 border-gray-300 rounded-lg dark:border-gray-400 focus:outline-none focus:border-primary-400  dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-300 ease-in-out
        "
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
      </button>
    </div>
  );
};

export default VariableInputs;
