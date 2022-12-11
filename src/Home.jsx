import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";

const Home = () => {
  // const data = {
  //   name: "TECH FOUNDER",
  //   image: "./public/hero.svg",
  //   para: "Welcome user, Our's team welcome you in our socity, here you can gain all valueable knowledge about programming and help to achieve your goal in progrmming, I hope you may like our services",
  // };

  // used to add the reduce hook
  const { updateHomePage } = useGlobalContext();

  // call add the reduce hook
  useEffect(() => updateHomePage(), []);

  // return <HeroSection {...data} />;
  return <HeroSection />;
};

export default Home;
