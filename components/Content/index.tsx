import style from "./style.module.css";

type ContentProps = { children: string } & React.ComponentProps<"p">;

const Content = ({ children }: ContentProps) => (
  <p className={style.content}>{children}</p>
);

export default Content;
