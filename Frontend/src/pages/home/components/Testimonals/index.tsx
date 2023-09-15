import TestimonalCard from "./TestimonalCard";

const testimonials = [
  {
    name: "Gordon Ramsey",
    image:
      "https://columbiabusinessreport.com/core/files/scbiznews/uploads/images/Gordon%20Ramsayonline.jpg",
    rating: 4,
    description:
      "This Site is amazing, I love it so much, I use it everyday to cook my meals. I love the fact that I can search for recipes based on the ingredients I have in my fridge.",
  },
  {
    name: "Joe Bastianich",
    image:
      "https://dolcemag.com/wp-content/uploads/2013/03/Joseph-Bastianich.jpg",
    rating: 5,
    description:
      "I love this site, I use it everyday to cook my meals. I love the fact that I can search for recipes based on the ingredients I have in my fridge.",
  },
  {
    name: "Graham Elliot",
    image:
      "https://mycitylife.ca/wp-content/uploads/2017/06/chef-Graham-Elliot.jpg",
    rating: 5,
    description:
      "I love this site, I use it everyday to cook my meals. I love the fact that I can search for recipes based on the ingredients I have in my fridge.",
  },
  {
    name: "Christina Tosi",
    rating: 4,
    image:
      "https://image.resy.com/3/003/2/70709/0834a03aea62f6f0685599ced1e1500b05ac0dc8/jpg/640x360",
    description:
      "I love this site, I use it everyday to cook my meals. I love the fact that I can search for recipes based on the ingredients I have in my fridge.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-slate-100 py-10 px-5 -mx-9 dark:bg-slate-600 mb-20">
      <div className=" mb-20 flex flex-col justify-center items-center text-center gap-5">
        <h1 className=" text-xl font-bold text-primary-500 text-center mb-2">
          TESTIMONALS
        </h1>
        <h2 className=" text-3xl font-bold text-primary-400 text-center mb-5">
          What Judges of Master Chef Say
        </h2>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center mb-5 justify-items-center">
        {testimonials.map((testimonial) => (
          <TestimonalCard
            name={testimonial.name}
            image={testimonial.image}
            description={testimonial.description}
            rating={testimonial.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
