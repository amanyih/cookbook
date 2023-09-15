// import { Link } from "react-router-dom";

interface item {
  name: string;
  link: string;
  id?: string;
}

interface Props {
  title: string;
  list: item[];
}

const FooterList: React.FC<Props> = (props) => {
  return (
    <div>
      <h1 className="font-bold mb-1">{props.title}</h1>
      <ul className="text-gray-600 dark:text-whiteish ">
        {props.list.map((item) => (
          <li className="hover:text-primary-400" onClick={(event) => {}}>
            <a href={item.link}> {item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
