import { useState } from "react";
import { VariableInputs } from "../../../../../components";
const Steps = ({
  steps,
  setSteps,
  stepDescription,
  setStepDescription,
}: {
  steps: string[];
  stepDescription: string[];
  setStepDescription: (value: string[]) => void;
  setSteps: (value: string[]) => void;
}) => {
  // const [stepDescription, setStepDescription] = useState<string[]>([]);

  const handleChangeSteps = (value: string[]) => {
    setSteps(value);
  };
  const handleChangeStepDescription = (value: string[]) => {
    setStepDescription(value);
  };
  return (
    <div className="w-full">
      <h1 className=" text-3xl font-bold bg-gray-200 p-4">Steps</h1>
      <VariableInputs
        secondaryValue={stepDescription}
        title="Step"
        placeholder="Eg: Chicken"
        value={steps}
        onChange={handleChangeSteps}
        onSecondaryChange={handleChangeStepDescription}
      />
    </div>
  );
};

export default Steps;
