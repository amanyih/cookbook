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
        <span className="mb-3">
          <div>
            <div className="flex items-center">
              <Input
                type="text"
                placeholder={`Eg. ${props.title} ${index + 1}`}
                value={`${inputValues[index]}`}
                label={`${props.title} ${index + 1}`}
                className="min-w-64 text-2xl"
                onChange={(event) => {
                  const newInputValues = [...inputValues];
                  newInputValues[index] = event.target.value;

                  props.onChange(newInputValues);
                }}
              />
              <Button
                isOutlined={true}
                isRounded={true}
                className={`px-1 py-1 text-sm m-2 ${
                  amountOfInputs === 1 ? "hidden" : ""
                } }`}
                onClick={() => {
                  if (index === 1) return;
                  const newInputValues = [...inputValues];
                  newInputValues.splice(index, 1);
                  props.onChange(newInputValues);
                  setAmountOfInputs(amountOfInputs - 1);
                }}
              >
                <FontAwesomeIcon icon={faRemove} className="mx-2" />
              </Button>
            </div>

            {props.secondaryValue && (
              <TextArea
                value={props.secondaryValue[index]}
                className="w-1/2"
                onChange={(value) => {
                  const newSecondaryValues = [...props.secondaryValue!];
                  newSecondaryValues[index] = value.target.value;
                  props.onSecondaryChange!(newSecondaryValues);
                }}
              />
            )}
          </div>
        </span>
      ))}
      <Button
        className="m-2 px-3 py-2 text-xl"
        isRounded={true}
        isOutlined={true}
        onClick={() => {
          props.onChange([...inputValues, ""]);
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
