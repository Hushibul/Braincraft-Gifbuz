import { Container, Row, Col } from "react-bootstrap";

import Classes from "./CreateGifUpload.module.scss";

import groupOne from "../../assets/images/groupOne.png";
import groupTwo from "../../assets/images/groupTwo.png";
import groupThree from "../../assets/images/groupThree.png";
import groupFour from "../../assets/images/groupFour.png";
import groupFive from "../../assets/images/groupFive.png";

const CreateGifGroup = () => {
  return (
    <Container fluid className={Classes.createGifUpload}>
      <Row>
        <Col lg={5} className={`${Classes.left} text-center text-md-start`}>
          <h2 className="createGif__title">Create your own Gif</h2>
          <p className="createGif__paragraph my-4 mx-auto mx-md-0">
            Creating GIFs is fun and easy! Edit the GIFs and MP4s that you
            upload to Tenor by trimming, cropping, and adding custom captions to
            your content
          </p>

          <button className="createGif__btn d-block mx-auto mx-md-0">
            Create your Gif
          </button>
        </Col>
        <Col lg={6} className={`${Classes.right} mt-5`}>
          <div className={Classes.imageGroup}>
            <img className={Classes.imageGroup__one} src={groupOne} alt="" />
            <img className={Classes.imageGroup__two} src={groupTwo} alt="" />
            <img
              className={Classes.imageGroup__three}
              src={groupThree}
              alt=""
            />
            <img className={Classes.imageGroup__four} src={groupFour} alt="" />
            <img className={Classes.imageGroup__five} src={groupFive} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateGifGroup;
