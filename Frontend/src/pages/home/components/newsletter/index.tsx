const NewsLetter = () => {
  return (
    <div className=" bg-tertiary-100 -mx-10  py-20  flex flex-col justify-center items-center mb-10">
      <h1 className=" text-7xl mb-5">
        Delicioussness <br />
        to your inbox
      </h1>
      <p>Enjoy weekly hand picked recipes!</p>
      <p className="mb-5">
        by joining our news letter you agree to our news letter
      </p>
      <div className="relative">
        <input
          type="text"
          className="text-md px-3 py-2 w-96 focus:border-none"
        />
        <button className="absolute top-0 right-0 px-3 py-2 bg-primary-400">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
