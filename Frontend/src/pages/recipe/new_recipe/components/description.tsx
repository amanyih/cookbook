import { TextArea } from "../../../../components";

const Description = () => {
  return (
    <div className="w-5/6">
      <TextArea
        className=""
        onChange={(value) => {
          console.log(value);
        }}
      />
    </div>
  );
};

export default Description;
