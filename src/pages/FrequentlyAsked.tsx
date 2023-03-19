import { Container, Accordion } from "react-bootstrap";
import Hero from "../components/hero/Hero";
import { Accordions } from "../assets/constants/data";

const FrequentlyAsked = () => {
  return (
    <Container className="faq">
      <Hero link="Frequently Asked Question" />
      <Accordion className="mx-md-5 my-3" defaultActiveKey="1">
        {Accordions.map((items) => (
          <Accordion.Item
            key={items.id}
            className="mt-3"
            eventKey={items.id.toString()}
          >
            <Accordion.Header className="text-light">
              {items.header}
            </Accordion.Header>
            <Accordion.Body className="text-light mb-1">
              <span>{items?.messageOne}</span>
              <ul>
                {" "}
                {items.items.map((item, index) => (
                  <li key={index} className="mt-md-2 mt-sm-1">
                    {item}
                  </li>
                ))}
              </ul>
              <span>{items?.messageTwo}</span>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
};

export default FrequentlyAsked;
