import { Col, Container, Row } from "react-bootstrap";
import Classes from "./Upload.module.scss";

import UploadLogo from "../../assets/images/UploadTwo.svg";
import StickerLogo from "../../assets/images/sticker.svg";
import DownArrow from "../../assets/images/downArrow.svg";

const Upload = () => {
  const scrollDown = () => {
    window.scrollTo({
      behavior: "smooth",
      left: 0,
      top: document.body.offsetHeight,
    });
  };

  return (
    <Container className={Classes.upload}>
      <Row>
        <Col md={6} className="d-flex flex-column align-items-center">
          <label
            htmlFor="fileInput"
            className={`${Classes.upload__label} text-center`}
          >
            <img className="my-2" src={UploadLogo} alt="Upload Logo" />
            <h3 className="createGif__subtitle">Click to Upload Gif</h3>
            <p>or drag & drop a file here</p>
            <input type="file" id="fileInput" accept=".mp4, .mov, .gif" />
          </label>
          <label
            htmlFor="fileInput"
            className={`${Classes.upload__label} text-center mt-3`}
          >
            <img className="my-2" src={StickerLogo} alt="Sticker Logo" />
            <h3 className="createGif__subtitle">Click to Upload Sticker</h3>
            <p>or drag & drop a file here</p>
            <input type="file" id="fileInput" accept=".mp4, .mov, .gif" />
          </label>
        </Col>
        <Col
          className={`${Classes.upload__text} text-center text-md-start mt-5 mt-md-0`}
          md={6}
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
          className={`${Classes.upload__scrollDown} mt-5 me-5`}
          src={DownArrow}
          alt="DownArrow"
        />
      </Row>
    </Container>
  );
};

export default Upload;
