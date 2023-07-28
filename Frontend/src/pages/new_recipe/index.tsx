import { Cooking } from "../../components";

const NewRecipePage = () => {
  return (
    <div className=" flex flex-col justify-between items-center">
      <h1 className=" text-5xl text-primary-400 mb-20">New Profile </h1>
      <Cooking />
    </div>
  );
};

export default NewRecipePage;
