interface HorizontalScrollInterface {
  children: React.ReactNode;
}

const HorizontalScroll: React.FC<HorizontalScrollInterface> = ({
  children,
}) => {
  return (
    <div className=" grid grid-flow-col auto-cols-max gap-10 overflow-x-auto scrollbar-hide pb-10 snap snap-mandatory snap-center bg-scroll mb-20">
      {children}
    </div>
  );
};

export default HorizontalScroll;
