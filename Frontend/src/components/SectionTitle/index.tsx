interface Props {
  title: string;
}

const SectionTitle: React.FC<Props> = ({ title }) => {
  return <h1 className=" text-4xl mb-10">{title}</h1>;
};

export default SectionTitle;
