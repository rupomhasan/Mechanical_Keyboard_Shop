import Container from "../../components/common/Container";
import Brand from "../../components/home/brand/Brand";
import ChooseUs from "../../components/home/choseUs/ChooseUs";
import Features from "../../components/home/featureProducts/Features";

import Hero from "../../components/home/hero/Hero";
import Service from "../../components/home/service/Service";
import Testimonial from "../../components/home/testimonial/Testimonial";

const Home = () => {
  return (
    <Container>
      <div className="space-y-28">
        <div>
          <Hero />
          <Service />
        </div>
        <Features />
        <ChooseUs />
        <Testimonial />
        <Brand />
      </div>
    </Container>
  );
};

export default Home;
