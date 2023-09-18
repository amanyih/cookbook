const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={` fixed  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex duration-1000 w-20 h-20 justify-center items-center p-2  rounded-full shadow-sm ${
        className ? className : ""
      }`}
    >
      <div
        className={` border-l-4 border-primary-400 rounded-full animate-spin 
        w-full h-full`}
      ></div>
    </div>
  );
};

export default LoadingSpinner;
