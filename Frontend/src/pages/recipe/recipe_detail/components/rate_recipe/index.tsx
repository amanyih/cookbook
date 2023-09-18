import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Button, Modal, SectionTitle } from "../../../../../components";
import { useState } from "react";
import useHttp from "../../../../../hooks/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../../../store";
import { rateRecipe as rateRecipeAction } from "../../../../../store/actions";
import { AnyAction } from "redux";

const RateRecipe = () => {
  const { recipe } = useSelector((state: StateInterface) => state.recipeDetail);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(-1);
  const { sendRequest: rateRecipe } = useHttp();
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleRateModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleRating = async (event: any) => {
    event.preventDefault();

    dispatch(
      rateRecipeAction(rateRecipe, {
        recipeId: recipe?.id!,
        rating,
      }) as unknown as AnyAction
    );
    setShowModal(false);

    const response = await rateRecipe({
      url: `/recipe/${recipe?.id}/rating`,
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
          <div className=" p-10 flex flex-col justify-center items-center gap-2">
            <SectionTitle title="Rate The Recipe!" />
            <div className=" flex justify-center items-center gap-2 text-5xl text-yellow-400 dark:text-yellow-300 mb-10">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
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
            <Button
              className="w-52 h-16 font-bold text-xl"
              onClick={(event) => {
                handleRating(event);
              }}
            >
              Submit
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default RateRecipe;
