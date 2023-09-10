import { TextArea } from "../../../../../components";

interface DescriptionInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  ref?: React.RefObject<HTMLTextAreaElement>;
}

const Description: React.FC<DescriptionInterface> = (props) => {
  return (
    <div className="w-5/6">
      <TextArea
        className=""
        ref={props.ref}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Description;
