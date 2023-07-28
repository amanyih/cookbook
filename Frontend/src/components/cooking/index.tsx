import cooking from "../../assets/svg/barbecue.svg";

const Cooking = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={cooking} alt="Cooking" className="w-96" />
      <h1 className="text-3xl "> We are Cooking This page </h1>
    </div>
  );
};

export default Cooking;
