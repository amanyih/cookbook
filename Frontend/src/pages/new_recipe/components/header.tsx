const NewRecipeHeader = () => {
  return (
    <div className="mb-10">
      <h1 className="text-4xl w-full">New Recipe</h1>

      <img
        src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="w-full h-96 object-cover mb-5"
        alt=""
      />

      <p className="text-2xl">Fill in the form below to create a new recipe</p>
    </div>
  );
};

export default NewRecipeHeader;
