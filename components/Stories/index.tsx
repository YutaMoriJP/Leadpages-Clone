import React from "react";
import { Header } from "../Header";
import { Title2, Title3 } from "../Title";
import Content from "../Content";
import Wrapper from "../Wrapper";
import Image from "next/image";
import customerImage from "../../public/story.webp";
import style from "./style.module.scss";
import { RiArrowRightSLine } from "react-icons/ri";
import IconWrapper from "../IconWrapper";
import { useRouter } from "next/router";

const HeaderSection = () => (
  <Header>
    <Wrapper>
      <Title2>Under construction</Title2>
      <Title2>Be inspired by someone like you</Title2>
    </Wrapper>
    <Wrapper>
      <Content>
        Join more than 40,000 small businesses who trust us with their dreams.
      </Content>
    </Wrapper>
  </Header>
);

const StoryImage = () => (
  <div className={style.imageContainer}>
    <Image width={700} height={500} src={customerImage} />
  </div>
);

const StoryCard = () => {
  const { push } = useRouter();
  return (
    <div className={style.storyCard}>
      <Wrapper>
        <p>{`EXECUTIVE COACH & CONSULTANT`}</p>
      </Wrapper>
      <Wrapper>
        <Title3>
          Kailei uses Leadpages to book her clients and sell her consulting
          services.
        </Title3>
      </Wrapper>
      <Wrapper>
        <IconWrapper
          EndIcon={<RiArrowRightSLine className={style.color} />}
          onClick={() => push("/customers/kailei")}
        >
          <a className={`${style.color} ${style.linkColor}`}>Read her story </a>
        </IconWrapper>
      </Wrapper>
    </div>
  );
};

const CustomerStory = () => {
  return (
    <div className={style.storyContainer}>
      <StoryImage />
      <StoryCard />
    </div>
  );
};

const Stories = () => {
  return (
    <div>
      <HeaderSection />
      <CustomerStory />
    </div>
  );
};

export default Stories;
