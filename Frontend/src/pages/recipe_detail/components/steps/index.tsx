interface Step {
  title: string;
  description: string;
}

interface StepsProps {
  steps: Step[];
}

const Steps: React.FC<StepsProps> = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Steps</h1>
      <ul>
        {props.steps.map((step, index) => (
          <li key={index}>
            <span className="mr-2">{index + 1}.</span>
            <span className="font-semibold">{step.title}</span>
            <p>{step.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Steps;
