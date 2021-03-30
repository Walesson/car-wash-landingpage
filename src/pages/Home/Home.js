import React from "react";
import {
  Header,
  Home as Initial,
  Marketing,
  HowItWorks,
} from "../../components";

export const Home = () => {
  return (
    <div>
      <Header />
      <Initial />
      <Marketing />
      <HowItWorks />
    </div>
  );
};
