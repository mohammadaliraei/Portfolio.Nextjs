import { NextPage } from "next";
import Navbar from "./components/home.page/Navbar";
import About from "./components/home.page/About";
import Skills from "./components/home.page/Skills";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  return (
    <main>
      <Navbar />
      <About />
      <Skills />
    </main>
  );
};

export default Page;
