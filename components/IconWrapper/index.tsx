import style from "./style.module.scss";

type Props = {
  children: React.ReactNode;
  EndIcon: React.ReactNode;
} & React.ComponentProps<"span">;

const IconWrapper = ({ children, EndIcon, ...rest }: Props) => {
  return (
    <span className={style.container} {...rest}>
      {children}
      {EndIcon}
    </span>
  );
};

export default IconWrapper;
