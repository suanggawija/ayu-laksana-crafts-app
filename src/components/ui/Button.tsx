import Link from "next/link";

interface ButtonProps {
  href?: string;
  title: React.ReactNode;
  type?: string;
  onClick?: any;
  className?: string;
}

export const ButtonPrimary: React.FC<ButtonProps> = (props) => {
  return (
    <Link
      type={props.type}
      onClick={props.onClick}
      className={`${
        props.className || "py-2 px-4 "
      } bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition ease-in duration-200`.trim()}
      href={props.href || ""}
    >
      {props.title}
    </Link>
  );
};

export const ButtonDanger: React.FC<ButtonProps> = (props) => {
  return (
    <Link
      href={props.href || ""}
      type={props.type}
      onClick={props.onClick}
      className={`${
        props.className || "py-2 px-4 "
      } bg-red-500 hover:bg-red-600 text-white rounded-lg transition ease-in duration-200`.trim()}
    >
      {props.title}
    </Link>
  );
};

export const ButtonWarning: React.FC<ButtonProps> = (props) => {
  return (
    <Link
      href={props.href || ""}
      type={props.type}
      onClick={props.onClick}
      className={`${
        props.className || "py-2 px-4 "
      } bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition ease-in duration-200`.trim()}
    >
      {props.title}
    </Link>
  );
};
