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
  const [inputValues, setInputValues] = useState<string[]>([""]);

  return (
    <div>
      {Array.from(Array(amountOfInputs).keys()).map((index) => (
        <span>
          <div>
            <Input
              type="text"
              placeholder={`Eg. ${props.title} ${index + 1}`}
              value={`${inputValues[index]}`}
              label={`${props.title} ${index + 1}`}
              className="min-w-64 text-2xl"
              onChange={(value) => {
                const newInputValues = [...inputValues];
                newInputValues[index] = value.target.value;
                setInputValues(newInputValues);
              }}
            />
            {props.secondaryValue && (
              <TextArea value="" className="w-1/2" onChange={(value) => {}} />
            )}
          </div>
          <Button
            isOutlined={true}
            isRounded={true}
            className={`px-3 py-2 text-xl m-2 ${index === 0 ? "hidden" : ""} }`}
            onClick={() => {
              if (index === 0) return;
              const newInputValues = [...inputValues];
              newInputValues.splice(index, 1);
              setInputValues(newInputValues);
              setAmountOfInputs(amountOfInputs - 1);
            }}
          >
            <FontAwesomeIcon icon={faRemove} className="mr-2" />
            Remove
          </Button>
        </span>
      ))}
      <Button
        className="m-2 px-3 py-2 text-xl"
        isRounded={true}
        isOutlined={true}
        onClick={() => {
          setInputValues([...inputValues, ""]);
          setAmountOfInputs(amountOfInputs + 1);
        }}
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add
      </Button>
    </div>
  );
};

export default VariableInputs;
