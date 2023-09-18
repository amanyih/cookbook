import { Button } from "../../../../components";
const NewsLetter = () => {
  return (
    <div className="bg-gray-100 dark:bg-slate-500 py-20 px-10 rounded-md mb-20  justify-center items-center gap-5 flex flex-col-reverse md:flex-row">
      <div className=" flex flex-col justify-center items-center gap-5 w-full  md:w-1/2">
        <h1 className=" text-5xl font-bold text-primary-400 mb-5 text-center px-10">
          Deliciousness Delivered to your inbox every week !
        </h1>
        <h2 className=" text-xl text-gray-500 dark:text-gray-50 text-center px-10">
          Subscribe to our newsletter and get new recipes every week. Don't miss
          out on the latest food trends! We promise not to spam you. You can
          unsubscribe at any time.
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row mt-10">
          <div className="flex flex-col items-center w-full sm:flex-row mt-4">
            <input
              type="text"
              placeholder="Search for recipes"
              className=" w-full  md:w-96 h-12 rounded-l-lg px-4 border border-gray-300 outline-none focus:border-primary-400"
            />
            <Button
              className=" bg-primary-400 mt-5 sm:mt-0 font-bold w-32 h-12 sm:rounded-l-none"
              onClick={() => {}}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <img
        className="w-96 h-96 object-cover "
        src="https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg
      "
      />
    </div>
  );
};

export default NewsLetter;
