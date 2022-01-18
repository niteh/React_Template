import React from "react"
import CarouselContent   from "./CarouselContent";
import SampleContent from "./SampleContent";
import webFirst from "../src/images/map-viwer5.png";
import Heading from "./Heading";
import Events from "./Events";
import News from "./News";
import AboutVideo from "./AboutVideo";
import FeatureService from "./FeatureService"
import BannerCarousel from "./BannerCarousel";
import LoginModal from "./components/LoginModal";



const Home = () => {
  return (
    <>



<BannerCarousel />
<FeatureService />
<AboutVideo />
<News />
<LoginModal />
<Events />


   
    </>
  );
}

export default Home;