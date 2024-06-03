/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./hero.css";
import Card from "./Card";
import { hero } from "../../../../../dummyData copy";

const Hero = () => {
  // eslint-disable-next-line no-unused-vars
  const [items, setIems] = useState(hero);

  return (
    <>
      <section className="hero">
        <div className="container">
          {items.map((item, index) => (
            <Card key={item?.id} item={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Hero;
