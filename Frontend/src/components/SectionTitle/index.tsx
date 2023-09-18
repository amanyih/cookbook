interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return (
    <h1
      className=" 
  text-2xl font-semibold text-gray-800 dark:text-gray-50 mb-20 pl-10 border-l-4 border-gray-800 dark:border-gray-50 flex justify-between items-center w-full md:text-3xl py-2 px-4"
    >
      {title}
    </h1>
  );
};

export default SectionTitle;
