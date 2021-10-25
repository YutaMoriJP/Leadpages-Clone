import Head from "next/head";
import Header from "../components/Header/index";
import Feature from "../components/Feature";
import Spacer from "../components/Spacer";
import Stories from "../components/Stories";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Leadpages</title>
        <meta
          name="description"
          content="A powerful landing page builder that helps create high-converting landing pages and drive sales for businesses. Lead generation and opt-in tools integrated."
        />
      </Head>
      {/* Intro Header Section*/}
      <Header />
      <Spacer />
      {/* Describes Leadpages features*/}
      <Feature />
      <Spacer />
      {/* Customer success stories WIP */}
      <Stories />
      <Spacer />
    </>
  );
}
