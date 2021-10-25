import Button from "../Button";
import Content from "../Content";
import Header from "../Header";
import Title from "../Title";
import Wrapper from "../Wrapper";

const HeaderIntro = () => (
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

export default HeaderIntro;
