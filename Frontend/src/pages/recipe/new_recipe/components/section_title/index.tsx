interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <h2 className=" text-3xl font-bold bg-gray-200 dark:bg-slate-600  dark:bg p-4 mb-5">
      {title}
    </h2>
  );
};

export default SectionTitle;
