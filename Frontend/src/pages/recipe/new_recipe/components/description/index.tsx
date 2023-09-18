import { TextArea } from "../../../../../components";

interface DescriptionInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement> | undefined) => void;
  ref?: React.RefObject<HTMLTextAreaElement>;
}

const Description: React.FC<DescriptionInterface> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col w-full dark:bg-gray dark:text-gray-100">
      <TextArea
        value={value}
        onChange={onChange}
        label="Description"
        placeholder="Enter a description for your recipe"
        required={true}
        className="w-full"
        rounded={true}
        outline={true}
      />
    </div>
  );
};

export default Description;
