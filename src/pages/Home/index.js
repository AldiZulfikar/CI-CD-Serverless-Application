import React from "react";
import Hero from "../../components/Hero";
import Anggota from "../../components/Anggota";

const Home = () => {
  return (
    <div className="position-relative overflow-hidden">
      <Hero />
      <Anggota />
    </div>
  );
};

export default Home;
