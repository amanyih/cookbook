interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className=" text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 bg-gray-100 dark:bg-gray-800 px-5 py-2">
      {title}
    </h2>
  );
};

export default SectionTitle;
