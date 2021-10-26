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
  <h3 className={style.title3}>{children}</h3>
);

export const Title4 = ({ children }: TitleProps) => (
  <h4 className={style.title4}>{children}</h4>
);

export default Title;
