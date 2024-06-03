import React, { useEffect, useState } from "react";
import Discover from "../../discover/Discover";
import Side from "../../sideContent/side/Side";
import Life from "../life/Life";
import Music from "../musics/Music";
import Popular from "../popular/Popular";
import Ppost from "../Ppost/Ppost";
import "./style.css";

const Homes = () => {
  const [topNews, setTopNews] = useState([]);

  useEffect(() => {
    const apiKey = "8f32b7d45db04cc2bab08310586753dd";

    fetch(`https://newsapi.org/v2/top-headlines?country=US&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setTopNews(data))
      .catch((error) => console.error("Error fetching top headlines:", error));
  }, []);

  const randomArticles = topNews?.articles;

  const removeDuplicates = () => {
    if (!randomArticles) return [];
    return randomArticles.filter((article) => article?.source.id !== null);
  };

  const filteredArticles = removeDuplicates();
  console.log(filteredArticles);
  return (
    <>
      <main>
        <div className="container">
          <section className="mainContent">
            <Popular popular={filteredArticles} />
            <Ppost />
            <Life />
            <Music />
          </section>
          <section className="sideContent">
            <Side />
          </section>
        </div>
      </main>
    </>
  );
};

export default Homes;
