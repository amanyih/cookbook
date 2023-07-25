const Hero = () => {
  return (
    <div className="w-full flex bg-tertiary-400 rounded-md h-96 overflow-hidden mb-8">
      <div className="w-1/2">
        <img
          src="https://therecipecritic.com/wp-content/uploads/2022/07/oreocheesecake-2-1.jpg"
          className="w-full h-full object-cover "
          alt=""
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center">
        <p className="text-gray-500">85% Would make this again!</p>
        <h1 className="text-4xl font-bold">Oreo Cheesecake</h1>
        <p className="">
          Look No further for a creamy and ultra smooth cheescake recipe!.
        </p>
      </div>
    </div>
  );
};

export default Hero;
