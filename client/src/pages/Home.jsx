// import { useLoaderData } from "react-router-dom";
// import Accordian from "../components/home/Accordian";
// import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import { useEffect, useState } from "react";
import Hero from "../component/home/hero/Hero";
import Homes from "../component/home/mainContent/homes/Home";
import Discover from "../component/home/discover/Discover";

const HomePage = () => {
  // const data = useLoaderData();
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
  // console.log(filteredArticles);

  return (
    <div>
      <Hero />
      <Homes data={filteredArticles} />
      <Discover />
      {/* <Banner />
      <Products data={data} />
      <Accordian /> */}
    </div>
  );
};

export default HomePage;
