import { SectionTitle, Accordion } from "../../../../components";

const questionandanswers = [
  {
    question: "What is Cookbook?",
    answer:
      "Cookbook is a platform for recipe enthusiasts to discover, share, and savor culinary delights. Explore interactive videos, connect with fellow foodies, and elevate your cooking skills to new heights.",
  },
  {
    question: "How do I create an account?",
    answer:
      "To create an account, click on the “Sign Up” button in the top right corner of the page. You can also sign up using Google account.",
  },
  {
    question: "How do I sign in?",
    answer:
      "To sign in, click on the “Sign In” button in the top right corner of the page. You can also sign in using Google account.",
  },
  {
    question: "How do I create a recipe?",
    answer:
      "To create a recipe, click on the “Create Recipe” button in the top left corner of the recipe page. ",
  },
  {
    question: "Do I need to create an account to create a recipe?",
    answer: "Yes, you need to create an account to create a recipe.",
  },
];

const FAQs = () => {
  return (
    <div className="w-full mb-10">
      <SectionTitle title="FAQs" />
      <div>
        {questionandanswers.map((item) => {
          return <Accordion title={item.question} description={item.answer} />;
        })}
      </div>
    </div>
  );
};

export default FAQs;
