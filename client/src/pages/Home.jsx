// import { useLoaderData } from "react-router-dom";
// import Accordian from "../components/home/Accordian";
// import Banner from "../components/home/Banner";
// import Products from "../components/home/Products";
import { useEffect, useState } from "react";
import Hero from "../component/home/hero/Hero";
import Homes from "../component/home/mainContent/homes/Home";

const Home = () => {
  // const data = useLoaderData();
  // const [news, setnews] = useState([]);

  // useEffect(() => {
  //   const apiKey = "8f32b7d45db04cc2bab08310586753dd";

  //   fetch(`https://newsapi.org/v2/top-headlines?country=US&apikey=${apiKey}`)
  //     .then((res) => res.json())
  //     .then((data) => setnews(data));
  // }, []);

  // console.log(news);
  return (
    <div>
      <Hero />
      <Homes />
      {/* <Banner />
      <Products data={data} />
      <Accordian /> */}
    </div>
  );
};

export default Home;
