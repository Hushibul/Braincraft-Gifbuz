import { Container } from "react-bootstrap";
import BreadCrumb from "../components/breadcrumbs/BreadCrumb";

import AboutUs from "../components/about-us/AboutUs";
import Counter from "../components/counter/Counter";
import Team from "../components/team/Team";
import Products from "../components/products/Products";

const About = () => {
  return (
    <Container>
      <BreadCrumb />
      <AboutUs />

      <Counter />

      <Team />
      <Products />
    </Container>
  );
};

export default About;
