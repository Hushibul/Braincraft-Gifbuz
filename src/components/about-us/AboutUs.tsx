import { Row, Col } from "react-bootstrap";

//== Import Styles
import Classes from "./AboutUs.module.scss";

//== Import Images
import Girl from "../../assets/images/girl.png";
import Bean from "../../assets/images/bean.png";
import Dotted from "../../assets/images/dotted.png";
import NetBg from "../../assets/images/netBg.png";

const AboutUs = () => {
  return (
    <div className={Classes.aboutInfoWrap}>
      <Row>
        <Col md={6} className={"pe-md-4 pe-lg-5"}>
          <div className={`d-flex ${Classes.thumbsWrap} position-relative`}>
            <div className={Classes.lThumb}>
              <img src={Girl} alt="lThumb" className="img-fluid" />
            </div>
            <div className={Classes.rThumb}>
              <img src={Dotted} alt="rThumbMini" />
              <img src={Bean} alt="rThumb" className="img-fluid" />
            </div>
            <div className={`${Classes.bgThumb} position-absolute`}>
              <img src={NetBg} alt="Net Bg" className="img-fluid" />
            </div>
          </div>
        </Col>
        <Col md={6} className={"mt-3 mt-md-0"}>
          <div className={Classes.aboutTextWrap}>
            <h6 className="aboutUs__subtitle">About Us</h6>
            <h2 className="aboutUs__title">We inspire people to create</h2>
            <p className="aboutUs__text mb-4">
              The first version of the app contained an “outfit tool” (or so we
              thought) that allowed people to choose a few photos, remove.
            </p>
            <p className="aboutUs__text">
              The first version of the app contained an “outfit tool” (or so we
              thought) that allowed people to choose a few photos, remove.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;
