import { TextArea } from "../../../../../components";

interface DescriptionInterface {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  ref?: React.RefObject<HTMLTextAreaElement>;
}

const Description: React.FC<DescriptionInterface> = (props) => {
  return (
    <div className="flex flex-col w-full dark:bg-gray dark:text-gray-100">
      <textarea
        required
        className=" w-full h-48 px-5 py-3 mb-3 border-2 border-gray-300 rounded-lg dark:border-gray-600 focus:outline-none focus:border-primary-400 dark:bg-gray-900 dark:text-gray-100 resize-none"
        value={props.value}
        onChange={props.onChange}
        placeholder="Enter a description for your recipe"
        name=""
        id=""
        cols={30}
        rows={10}
      />
    </div>
  );
};

export default Description;
