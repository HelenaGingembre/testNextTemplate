import { NextPage } from "next";

import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Contacts from "./contacts/pages";
import Clients from "@/pages/Clients";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Contacts />
    </>
  );
};

export default Home;
