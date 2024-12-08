import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsLetterBox from "../components/NewsLetterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div className="px-2 md:px-10">
      <Hero />
      <LatestCollection />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
