import { VariableInputs } from "../../../../../components";
import SectionTitle from "../section_title";
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
      <VariableInputs
        secondaryValue={stepDescription}
        title="Step"
        placeholder="Eg: Chicken"
        value={steps}
        onChange={handleChangeSteps}
        onSecondaryChange={handleChangeStepDescription}
        secondaryPlaceholder="Enter Step Description"
      />
    </div>
  );
};

export default Steps;
