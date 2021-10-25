import style from "./style.module.css";

type TitleProps = {
  children: string;
} & Omit<React.ComponentProps<"h1">, "children">;

const Title = ({ children }: TitleProps) => {
  return <h1 className={style.title}>{children}</h1>;
};

export const Title2 = ({ children }: TitleProps) => (
  <h2 className={style.title2}>{children}</h2>
);

export const Title3 = ({ children }: TitleProps) => (
  <h2 className={style.title3}>{children}</h2>
);

export default Title;
