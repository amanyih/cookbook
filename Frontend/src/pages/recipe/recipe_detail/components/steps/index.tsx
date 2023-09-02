interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

const Steps: React.FC<StepsProps> = (props) => {
  return (
    <div className="mb-20 w-full">
      <h1 className="mb-5 text-3xl font-semibold ">Steps</h1>
      <ul>
        {props.steps.map((step, index) => (
          <li key={index} className="text-2xl mb-3">
            <div className="mb-2">
              <span className="mr-2">{index + 1}.</span>
              <span className="font-semibold">{step.title}</span>
            </div>
            <p className="text-xl">{step.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
