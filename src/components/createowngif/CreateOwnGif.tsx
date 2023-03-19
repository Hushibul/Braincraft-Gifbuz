import { Container, Row, Col } from "react-bootstrap";
import Panda from "../../assets/images/panda.png";
import ownGifBg from "../../assets/images/ownGifBg.png";
import CreateThree from "../../assets/images/CreateThree.svg";

import Classes from "./CreateOwnGif.module.scss";

const CreateOwnGif = () => {
  return (
    <Container className={Classes.createOwnGif}>
      <Row>
        <Col md={6}>
          <div className={Classes.createOwnGif__imageGroup}>
            <img className={`${Classes.main}`} src={Panda} alt="Panda" />
            <img className={Classes.sub} src={ownGifBg} alt="bg" />
            <img
              className={Classes.createButton}
              src={CreateThree}
              alt="Create Three"
            />
          </div>
        </Col>
        <Col className="mt-5 text-center text-md-start" md={6}>
          <h2 className="createGif__title">Create your own Gif</h2>
          <p className="createGif__paragraph my-4">
            Creating GIFs is fun and easy! Edit the GIFs and MP4s that you
            upload to Tenor by trimming, cropping, and adding custom captions to
            your content
          </p>

          <button className="createGif__btn">Create your Gif</button>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateOwnGif;
