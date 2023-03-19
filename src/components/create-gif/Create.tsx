import { Col, Container, Row } from "react-bootstrap";
import Classes from "./Create.module.scss";

import CreateLogo from "../../assets/images/createLogo.svg";
import DownArrow from "../../assets/images/downArrow.svg";

const Create = () => {
  const scrollDown = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.body.offsetHeight,
    });
  };

  return (
    <Container className={Classes.create}>
      <Row>
        <Col sm={6} className="d-flex flex-column align-items-center">
          <label
            htmlFor="fileInput"
            className={`${Classes.create__label} text-center`}
          >
            <img className="my-2" src={CreateLogo} alt="" />
            <h3 className="createGif__subtitle">Click to Create</h3>
            <p>or drag & drop a file here</p>
            <input type="file" id="fileInput" accept=".mp4, .mov, .gif" />
          </label>
          <div className={Classes.create__share}>
            <h3 className="createGif__subtitle">Share Any URL</h3>
            <span>We support media URLs from GIFBUZ and many others!</span>
            <p className={`${Classes.borderImage} createGif__paragraph mt-3`}>
              Past An Image Or Video URL
            </p>
          </div>
        </Col>
        <Col
          className={`${Classes.create__text} text-center text-md-start`}
          sm={6}
        >
          <h2 className="createGif__title">Create Gif</h2>
          <p className="createGif__paragraph pe-5">
            Select video/ Gif to edit Maximum 10 min video & less than 100MB are
            allowed.JPG, PNG, PSD, AI and SVG images up to 40 MB withat least
            3000 pixels along one side.
          </p>
        </Col>
      </Row>

      <Row>
        <img
          onClick={scrollDown}
          className={Classes.create__scrollDown}
          src={DownArrow}
          alt="DownArrow"
          style={{ height: "100px", cursor: "pointer" }}
        />
      </Row>
    </Container>
  );
};

export default Create;
