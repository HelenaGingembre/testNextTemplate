import { NextPage } from "next";
import Header from "@/components/layout/Header";
import Hero from "@/pages/Hero";
import About from "@/pages/About";
import Portfolio from "@/pages/Portfolio";
import Contacts from "./contacts/pages";
import Clients from "@/pages/Clients";
import Footer from "@/components/layout/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Clients />
      <Contacts />
      <Footer />
    </>
  );
};

export default Home;
