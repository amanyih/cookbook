interface PaddingProps {
  children: React.ReactNode;
}

const Padding: React.FC<PaddingProps> = ({ children }) => {
  return (
    <span className=" flex flex-col w-full h-full px-5 py-3 mb-10 dark:text-gray-100">
      {children}
    </span>
  );
};

export default Padding;
