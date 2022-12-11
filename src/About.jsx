import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  // const data = {
  //   name: "Rishabh Chowkikar",
  //   image: "./IMG-20210411-WA0003.jpg",
  //   para: "Hello, I'm Rishabh and 20 year old. I'm a student of Central University of Harayana and reputed member of OFFFICAL BYTECODE LEARNERS and a good programmer. Student of B.TECH. C.S.E. II year",
  // };

  // add  the reducer hook
  const { updateAboutPage } = useGlobalContext();

  // call the reducer hook
  useEffect(() => updateAboutPage(), []);

  // return <HeroSection {...data} />;
  return <HeroSection />;
};

export default About;
