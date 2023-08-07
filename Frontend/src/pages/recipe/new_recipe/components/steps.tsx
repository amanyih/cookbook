import { useState } from "react";
import { VariableInputs } from "../../../../components";
const Steps = () => {
  const [steps, setSteps] = useState<string[]>([]);
  const [stepDescription, setStepDescription] = useState<string[]>([]);

  const handleChangeSteps = (value: string[]) => {
    setSteps(value);
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
      />
    </div>
  );
};

export default Steps;
