interface TextAreaProps {
  className?: string;
  name?: string;
  id?: string;
  label?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  ref?: React.RefObject<HTMLTextAreaElement>;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  return (
    <div className="w-full">
      <label
        htmlFor="description"
        className="block text-2xl font-medium text-gray-700"
      >
        Description
      </label>
      <div className="mt-1">
        <textarea
          id="description"
          name="description"
          ref={props.ref}
          maxLength={1000}
          cols={30}
          rows={20}
          wrap="hard"
          value={props.value}
          onChange={props.onChange}
          className={`block p-2.5 w-full text-2xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  resize-none ${props.className}`}
          placeholder="
                   Describe your recipe here 
                
                    "
        />
      </div>
    </div>
  );
};

export default TextArea;
