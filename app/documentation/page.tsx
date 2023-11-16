import React from "react";
import IntroHero from "./components/IntroHero";
import IntroSection from "./components/IntroSection";
import IntoLast from "./components/IntoLast";
import Steps from "./components/Steps";
import { IntroFeature } from "./components/IntroFeature";

const Page = () => {
  return (
    <div className="md:mt-20 md:px-24 border-l  ml-[250px]">
      <IntroHero />
      <IntroSection />
      <Steps />
      <IntroFeature />
      <IntoLast />
    </div>
  );
};

export default Page;
