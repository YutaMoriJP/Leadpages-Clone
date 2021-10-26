import React from "react";
import style from "./style.module.css";
import Button from "../Button";
import Content from "../Content";
import Title from "../Title";
import Wrapper from "../Wrapper";
import { AiFillPlayCircle } from "react-icons/ai";
import Image from "next/image";
import leftShape from "../../public/leftShape.svg";
import rightShape from "../../public/rightShape.svg";
import IconWrapper from "../IconWrapper/";

type HeaderProps = { children: React.ReactNode };

export const Header = ({ children }: HeaderProps): JSX.Element => {
  return <article className={style.header}>{children}</article>;
};
//introduction section in header UI
const HeaderIntro = (): JSX.Element => (
  <Header>
    <Wrapper>
      <Title>Turn Clicks into Customers</Title>
    </Wrapper>
    <Wrapper>
      <Content>
        Leadpages helps small businesses connect with an audience, collect
        leads, and close sales. Easily build websites, landing pages, pop-ups,
        alert bars, and beyond.
      </Content>
    </Wrapper>
    <Button>Start a Free Trial</Button>
  </Header>
);
//background images
const Shapes = () => (
  <>
    <div className={style.leftShape}>
      <Image
        src={leftShape}
        objectFit="fill"
        className={style.img}
        alt="shapes"
      />
    </div>
    <div className={style.rightShape}>
      <Image src={rightShape} className={style.img} objectFit="fill" />
    </div>
  </>
);
//auto play video in header UI
const HeaderVideo = () => (
  <div className={style.videoContainer}>
    <div className={style.videoTopBar}>
      <span className={style.videoTopBarDot} />
      <span className={style.videoTopBarDot} />
      <span className={style.videoTopBarDot} />
    </div>
    <video autoPlay loop className={style.video}>
      <source type="video/webm" src="/video.webm" />
      <source type="video/mp4" src="/video.mp4" />
    </video>
  </div>
);
//Wave illustration
const Wave = () => (
  <div className={style.center}>
    <div className={style.wave} />
  </div>
);
//promopts user to watch the full demo - opens Modal
const WatchDemo = () => (
  <div className={style.playContainer}>
    <IconWrapper EndIcon={<AiFillPlayCircle className={style.playIcon} />}>
      <a href="#" className={style.link}>
        Watch the Full Demo
      </a>
    </IconWrapper>
  </div>
);
//Demo section in header UI
const HeaderDemo = (): JSX.Element => (
  <Header>
    <div className={`${style.center} ${style.spaceAbove}`}>
      <Shapes />
      <HeaderVideo />
      <Wave />
      <WatchDemo />
    </div>
  </Header>
);
//composes header UI - HeaderIntro & HeaderDemo
export default function Headers(): JSX.Element {
  return (
    <>
      <HeaderIntro />
      <HeaderDemo />
    </>
  );
}
