import style from "./style.module.scss";
import Image from "next/image";

type IconCardProps = { img: string; title: string; content: string };
const IconCard = ({ img, title, content }: IconCardProps) => (
  <article className={style.iconCard}>
    <Image src={img} width={50} height={50} />
    <h3 className={style.iconTitle}>{title}</h3>
    <p className={style.iconText}>{content} </p>
  </article>
);

const Feature = () => {
  return (
    <div className={style.featureContainer}>
      <div className={style.cardContainer}>
        <IconCard
          img="/online.webp"
          title="Get online"
          content="Showcase your business with DIY websites and landing pages engineered to entice your visitors to take action."
        />
        <IconCard
          img="/collect.webp"
          title="Collect quality leads"
          content="Showcase your business with DIY websites and landing pages engineered to entice your visitors to take action."
        />
        <IconCard
          img="/product.webp"
          title={`Sell products & services`}
          content="Grow your email subscriber list with opt-in offers, instant digital file delivery, and conversion-optimized content."
        />
        <IconCard
          img="/optimize.webp"
          title={`Optimize & grow`}
          content="Check up on your performance with real-time tracking and run unlimited split tests to maximize your results."
        />
      </div>
    </div>
  );
};

export default Feature;
