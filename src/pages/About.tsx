import { Container } from "react-bootstrap";

import AboutUs from "../components/about-us/AboutUs";
import Counter from "../components/counter/Counter";
import Team from "../components/team/Team";
import Products from "../components/products/Products";
import Hero from "../components/hero/Hero";

const About = () => {
  return (
    <Container>
      <Hero link="About Us" breadcrumb={true} />
      <AboutUs />

      <Counter />

      <Team />
      <Products />
    </Container>
  );
};

export default About;
