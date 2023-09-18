import { FormEvent, useState } from "react";
import {
  Button,
  Input,
  Modal,
  Rquired,
  SectionTitle as Title,
} from "../../../components";
import {
  ImagePicker,
  Steps,
  Description,
  Categories,
  Numbers,
  Ingredients,
  Tags,
  SectionTitle,
  Padding,
} from "./components";

import { CreateRecipeDto } from "../../../types";
import useHttp from "../../../hooks/useHttp";
import useInput from "../../../hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../../../store";
import {
  imageActions,
  createRecipeAction,
  uploadImageAction,
} from "../../../store/actions";

const NewRecipePage = () => {
  const {
    value: title,
    errorMessage,
    onChange: titleOnChange,
  } = useInput("", (value) => value !== "");
  const [description, setDescription] = useState<string>("");
  const [ingredients, setIngredients] = useState<string[]>([""]);
  const [diet, setDiet] = useState<string>("");
  const [dishtype, setDishType] = useState<string>("");
  const [origin, setOrigin] = useState<string>("");
  const [mealcourse, setMealType] = useState<string>("");
  const [cookingTime, setCookingTime] = useState<number>(0);
  const [serving, setServing] = useState<number>(0);
  const [tags, setTags] = useState<string[]>([]);
  const [steps, setSteps] = useState<string[]>([""]);
  const [stepDescription, setStepDescription] = useState<string[]>([""]);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { sendRequest: createRecipe } = useHttp();
  const { sendRequestWithFormData: uploadImage } = useHttp();
  const [showModal, setShowModal] = useState<boolean>(false);
  const [recipeUploaded, setRecipeUploaded] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const { loading: recipeLoading, error: recipeError } = useSelector(
    (state: StateInterface) => state.createRecipe
  );
  const { image, loading, error } = useSelector(
    (state: StateInterface) => state.image
  );

  const resetFileInput = () => {
    const fileInput: HTMLInputElement | null = document.getElementById(
      "recipeImage"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const dispatch = useDispatch();

  const imageChangeHandler = (event: any) => {
    resetFileInput();
    event.preventDefault();
    const inputElement = document.getElementById("recipeImage");
    inputElement!.click();
    inputElement!.addEventListener("change", async (e) => {
      const target = e.target as HTMLInputElement;
      const file: File = (target.files as FileList)[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    });
  };

  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();

    if (imageFile === null) {
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    dispatch(uploadImageAction(uploadImage, formData) as unknown as any);

    setShowModal(true);

    while (!image && loading && !error) {}

    if (error || !image) {
      setShowModal(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }

    const imageUrl = image;

    const step: { title: string; description: string }[] = [];
    for (let i = 0; i < steps.length; i++) {
      step.push({
        title: steps[i],
        description: stepDescription[i],
      });
    }
    const recipe: CreateRecipeDto = new CreateRecipeDto({
      title,
      description,
      ingredients,
      origin,
      diet,
      dishtype,
      mealcourse,
      cookingTime,
      serving,
      tags,
      steps: step,
      image: imageUrl ?? "",
      nutrition: {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        sugar: 0,
      },
    });

    dispatch(createRecipeAction(createRecipe, recipe) as unknown as any);

    while (recipeLoading && !recipeError) {}
    if (recipeError) {
      setShowModal(false);
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
      return;
    }
    resetFileInput();
    dispatch(imageActions.resetImage());
    window.location.href = `/recipe`;
    setRecipeUploaded(true);
    setTimeout(() => {
      setShowModal(false);
      setRecipeUploaded(false);
    }, 3000);
  };

  return (
    <div className=" flex flex-col w-full">
      <div className=" flex flex-col w-full mb-5  dark:text-gray-100">
        <Title title="Create Recipe" />
        <p className="text-gray-600 dark:text-gray-400">
          Fill in the details to create a new recipe
        </p>
        <p>
          <span className="text-red-500">*</span> indicates required fields
        </p>
      </div>
      <form action="" onSubmit={submitHandler}>
        <SectionTitle title="Image" />
        <Padding>
          <ImagePicker
            imageChangeHandler={imageChangeHandler}
            imagePreview={imagePreview}
          />
        </Padding>

        <SectionTitle title="Title" />
        <Padding>
          <Input
            value={title}
            onChange={titleOnChange}
            placeholder="Enter a title for your recipe"
            required={true}
            label="Title"
            outline={true}
            rounded={true}
            className="h-14"
          />
        </Padding>
        <SectionTitle title="Description" />
        <Padding>
          <Description
            value={description}
            onChange={(event: any) => setDescription(event.target.value)}
          />
        </Padding>

        <SectionTitle title="Ingredients" />
        <Padding>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Enter the ingredients for your recipe <Rquired />
          </p>
          <Ingredients
            ingredients={ingredients}
            setIngredients={setIngredients}
          />
          {errorMessage && (
            <p className="text-red-500 text-sm">{errorMessage}</p>
          )}
        </Padding>

        <SectionTitle title="Categories" />

        <Padding>
          <Categories
            diet={diet}
            dishType={dishtype}
            origin={origin}
            mealType={mealcourse}
            setDiet={setDiet}
            setDishType={setDishType}
            setMealType={setMealType}
            setOrigin={setOrigin}
          />
        </Padding>
        <SectionTitle title="Numbers" />
        <Padding>
          <Numbers
            cookingTime={cookingTime}
            serving={serving}
            setCookingTime={setCookingTime}
            setServing={setServing}
          />
        </Padding>

        <SectionTitle title="Tags" />
        <Padding>
          <Tags tags={tags} setTags={setTags} />
        </Padding>

        <SectionTitle title="Steps" />

        <Padding>
          <p className=" text-gray-600 dark:text-gray-400 text-sm mb-3">
            Enter the steps with description for your recipe <Rquired />
          </p>
          <Steps
            steps={steps}
            setSteps={setSteps}
            stepDescription={stepDescription}
            setStepDescription={setStepDescription}
          />
        </Padding>

        <Button
          className="w-full h-14 rounded-full text-2xl font-bold border-2 border-gray-300 dark:border-gray-600"
          type="submit"
          background="hover:bg-gray-100"
          textcolor="text-gray-800 dark:text-gray-100"
        >
          C R E A T E
        </Button>
      </form>
      {showModal && (
        <Modal open={showModal} onClose={() => {}}>
          <ModalContent recipeUploaded={recipeUploaded} showError={showError} />
        </Modal>
      )}
    </div>
  );
};

const ModalContent = ({
  recipeUploaded,
  showError,
}: {
  recipeUploaded: boolean;
  showError: boolean;
}) => {
  return (
    <div>
      {recipeUploaded && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Recipe Created
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your recipe has been created successfully
          </p>
        </div>
      )}
      {!recipeUploaded && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Creating Recipe
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Your recipe is being created
          </p>
          <div>
            <svg
              className="animate-spin h-10 w-10 mt-3 text-gray-600 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        </div>
      )}
      {showError && (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Error
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            There was an error creating your recipe
          </p>{" "}
        </div>
      )}
    </div>
  );
};

export default NewRecipePage;
