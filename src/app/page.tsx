import React from "react";
import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";

const Home = async () => {
  return (
    <div className="h-screen">
      <Header />
      <NewsContainer />
    </div>
  );
};

export default Home;
