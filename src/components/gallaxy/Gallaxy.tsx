import { Container } from "react-bootstrap";
import Classes from "./Gallaxy.module.scss";

import Facebook from "../../assets/images/Facebook.svg";
import Instagram from "../../assets/images/Instagram.svg";
import Telegram from "../../assets/images/Telegram.svg";
import Messanger from "../../assets/images/Messengar.svg";
import Twitter from "../../assets/images/Twitter.svg";

import CrossOne from "../../assets/images/cross1.svg";
import CrossTwo from "../../assets/images/cross2.svg";
import Circle from "../../assets/images/circle-mini.svg";
import Polygon from "../../assets/images/polygon.svg";

const Gallaxy = () => {
  return (
    <Container className={`${Classes.gallaxy} my-5 py-5`}>
      <div className={Classes.gallaxy__heading}>
        <h2 className="createGif__title text-center">Share Anywhere Gifs</h2>
        <p className="createGif__paragraph text-center">
          Converting your image to use as part of a bigger project? Unleash your
          creativity with the photo editing capabilities and design tools from
          Adobe Express. Add icons, typography, animation, and GIFs. Enhance
          your image with filters and specific editing adjustments. Then, resize
          your image to share across any digital or printed platform.
        </p>
      </div>
      <div className={Classes.gallaxy__socials}>
        <div className={Classes.innerWrap}>
          <div className={Classes.iconNames}>
            <p className="createGif__paragraph">Facebook</p>
            <p className="createGif__paragraph">Messanger</p>
            <p className="createGif__paragraph">Telegram</p>
            <p className="createGif__paragraph">Instagram</p>
            <p className="createGif__paragraph">Twitter</p>
          </div>
          <div className={Classes.stars}>
            <img src={Circle} alt="Circle" />
            <img src={Polygon} alt="Polygon" />
            <img src={CrossOne} alt="Cross One" />
            <img src={CrossTwo} alt="Cross Two" />
            <img src={Circle} alt="Circle" />
            <img src={Polygon} alt="Polygon" />
          </div>
          <div className={Classes.border} />
          <div className={Classes.bgRadiousCircle} />
          <div className={Classes.icons}>
            <img src={Facebook} alt="Facebook" />
            <img src={Messanger} alt="Messagner" />
            <img src={Instagram} alt="Instagram" />
            <img src={Telegram} alt="Telegram" />
            <img src={Twitter} alt="Twitter" />
          </div>
        </div>
        <div className={Classes.mobileThumb}>
          <img
            src={require("../../assets/images/mobileThumb.png")}
            alt="Mobile Layout"
            className="img-fluid"
          />
        </div>
      </div>
    </Container>
  );
};

export default Gallaxy;
