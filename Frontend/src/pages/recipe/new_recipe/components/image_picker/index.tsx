import { ChangeEvent, useState } from "react";
import constants from "../../../../../constants";

const ImagePicker = ({
  imagePreview,
  imageChangeHandler,
}: {
  imagePreview: string | null;
  imageChangeHandler: (event: any) => void;
}) => {
  return (
    <div className=" ">
      <input
        type="file"
        className="hidden w-0 h-0"
        id="recipeImage"
        onChange={imageChangeHandler}
      />

      <img
        src={imagePreview ?? constants.imagePlaceholder}
        alt=""
        className="w-64 h-64  object-cover mb-5 hover:opacity-80 cursor-pointer transition duration-300 ease-in-out"
        onClick={imageChangeHandler}
      />

      <p className="text-gray-600  dark:text-gray-400  text-sm  mb-3">
        Click on the image to change it!
      </p>
    </div>
  );
};

export default ImagePicker;
