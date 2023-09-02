import temp from "../../../../assets/svg/barbecue.svg";
const Hero = () => {
  return (
    <div className="w-full flex bg-secondary-100 dark:bg-slate-500 rounded-md h-96 overflow-hidden mb-20 ">
      <div className="w-1/2">
        <img src={temp} className="w-full h-full object-cover " alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="text-gray-500 dark:text-gray-50">
          85% Would make this again!
        </p>
        <h1 className="text-6xl font-bold">Oreo Cheesecake</h1>
        <p className="text-xl">
          Look No further for a creamy and ultra smooth cheescake recipe!.
        </p>
      </div>
    </div>
  );
};

export default Hero;
