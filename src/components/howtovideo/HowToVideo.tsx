import { Container } from "react-bootstrap";
import SelectLogo from "../../assets/images/select.png";
import CreateLogo from "../../assets/images/CreateTwo.png";
import ShareLogo from "../../assets/images/Share.png";

import Classes from "./HowToVideo.module.scss";

const groups = [
  {
    id: 1,
    image: SelectLogo,
    heading: "Select",
    paragraph:
      "Choose a JPG image from your photo library that is less than 2GB in size.",
  },
  {
    id: 2,
    image: CreateLogo,
    heading: "Create",
    paragraph:
      "Choose a JPG image from your photo library that is less than 2GB in size.",
  },
  {
    id: 3,
    image: ShareLogo,
    heading: "Share",
    paragraph:
      "Choose a JPG image from your photo library that is less than 2GB in size.",
  },
];

const HowToVideo = () => {
  return (
    <Container className={`${Classes.howTo} mt-5`}>
      <div className={Classes.howTo__heading}>
        <h2 className="createGif__title text-center">
          How to Create gif form video
        </h2>
        <p className="createGif__paragraph text-center">
          Converting your image to use as part of a bigger project? Unleash your
          creativity with the photo editing capabilities and design tools from
          Adobe Express. Add icons, typography, animation, and GIFs. Enhance
          your image with filters and specific editing .
        </p>
      </div>
      <div className="row">
        {groups.map((items) => (
          <div
            className="col-6 col-md-4 d-flex flex-column align-items-center justify-content-center"
            key={items.id}
          >
            <img className="img-fluid" src={items.image} alt={items.heading} />
            <h3 className="createGif__subtitle">{items.heading}</h3>
            <p className="createGif__paragraph text-center">
              {items.paragraph}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HowToVideo;
