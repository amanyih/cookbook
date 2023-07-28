interface ImageProps {
  src: string;
  alt?: string;
  customClass?: string;
}
const Image: React.FC<ImageProps> = (props) => {
  return (
    <img
      className={`object-cover w-full ${props.customClass}`}
      src={props.src}
      alt={props.alt}
    />
  );
};

export default Image;
