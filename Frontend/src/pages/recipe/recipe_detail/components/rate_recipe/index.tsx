import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Modal } from "../../../../../components";
import { MouseEventHandler, useState } from "react";
import useHttp from "../../../../../hooks/useHttp";

const RateRecipe = ({ id }: { id: number }) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(-1);
  const { sendRequest: rateRecipe } = useHttp();
  const [disabled, setDisabled] = useState(true);

  const handleRateModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleRating = async (event: any) => {
    event.preventDefault();
    // if (disabled) return;
    console.log(rating);
    console.log(rating);
    const response = await rateRecipe({
      url: `/recipe/${id}/rating`,
      method: "POST",
      body: {
        rating,
      },
    });

    console.log(response);
  };
  return (
    <div className=" flex flex-col justify-center items-center mt-10 mb-10">
      <h1 className=" text-4xl font-bold text-gray-800 dark:text-gray-50 mb-5">
        Have you tried this recipe? Rate it!
      </h1>
      <div className=" flex justify-center items-center gap-2 text-4xl text-yellow-400 dark:text-yellow-300 mb-5">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarRegular} />
      </div>

      <div>
        <button
          className=" w-52 h-16 bg-primary-400 text-white font-bold rounded-lg shadow-md hover:bg-red-300 transition duration-300 ease-in-out text-xl"
          onClick={handleRateModal}
        >
          Rate Now
        </button>
      </div>
      {showModal && (
        <Modal open={showModal} onClose={handleRateModal}>
          <div
            className=" p-10 flex flex-col justify-center items-center gap-2
          "
          >
            <h1 className=" text-4xl font-bold text-gray-800 dark:text-gray-50 mb-10 text-center">
              Rate The Recipe!
            </h1>
            <div className=" flex justify-center items-center gap-2 text-5xl text-yellow-400 dark:text-yellow-300 mb-10">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  className="cursor-pointer"
                  onMouseEnter={() => {
                    setRating(i + 1);
                    setDisabled(false);
                  }}
                  onClick={() => setRating(i + 1)}
                >
                  <label htmlFor="">
                    {rating >= i + 1 ? (
                      <FontAwesomeIcon icon={faStar} />
                    ) : (
                      <FontAwesomeIcon icon={faStarRegular} />
                    )}
                  </label>
                  <input
                    value={i + 1}
                    className="invisible w-0 h-0"
                    name="radio"
                    type="radio"
                  />
                </span>
              ))}
            </div>
            <button
              className={` w-52 h-16 ${
                disabled ? "bg-gray-300" : "bg-primary-400 hover:bg-red-300"
              }
              } text-white font-bold rounded-lg shadow-md  transition duration-300 ease-in-out text-xl`}
              onClick={handleRating}
            >
              Submit
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RateRecipe;
