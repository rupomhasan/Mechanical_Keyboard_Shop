import Container from "../../components/common/Container";
import ChooseUs from "../../components/home/choseUs/ChooseUs";
import Features from "../../components/home/featureProducts/Features";
import Hero from "../../components/home/hero/Hero";
import Service from "../../components/home/service/Service";

const Home = () => {
  return (
    <Container>
      <Hero />
      <Service />
      <Features />
      <ChooseUs />
    </Container>
  );
};

export default Home;
