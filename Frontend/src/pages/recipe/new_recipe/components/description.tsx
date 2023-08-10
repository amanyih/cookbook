import { TextArea } from "../../../../components";

interface DescriptionInterface {
  value: string;
  onChange: () => void;
}

const Description: React.FC<DescriptionInterface> = (props) => {
  return (
    <div className="w-5/6">
      <TextArea className="" value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default Description;
