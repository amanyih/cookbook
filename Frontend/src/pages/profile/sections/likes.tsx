import { Grid, RecipeCard } from "../../../components";

const LikesSection = () => {
  return (
    <div className="profile__section">
      <Grid
        items={[<RecipeCard />, <RecipeCard />, <RecipeCard />, <RecipeCard />]}
      ></Grid>
    </div>
  );
};

export default LikesSection;
