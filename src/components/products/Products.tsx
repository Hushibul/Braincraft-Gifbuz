import Classes from "./Product.module.scss";

import { ProductApps } from "../../assets/constants/data";
import { Col, Row } from "react-bootstrap";

const Products = () => {
  return (
    <div className={`${Classes.products} mt-5`}>
      <div className={`${Classes.products__description} text-center`}>
        <h2 className="aboutUs__title text-light py-md-5 py-3">
          Some of Our Products
        </h2>
        <p className="text-light aboutUs__text">
          The first version of the app contained an “outfit tool” (or so we
          thought) that allowed people to choose a few photos, remove.
        </p>
      </div>
      <Row>
        {ProductApps.map((product, index) => (
          <Col
            key={index}
            lg={6}
            className="d-flex gap-2 gap-md-4 mt-1 mt-lg-3 align-items-center justify-content-sm-center"
          >
            <div>
              <img
                className={Classes.products__apps}
                src={product}
                alt="Product Apps"
              />
            </div>
            <div className="pt-md-3 text-light">
              <h4 className={Classes.products__bold}>
                GIF Maker - Make Video to GIFs 17+
              </h4>
              <h5 className={Classes.products__regular}>
                Gif Creator & Live Gif Editor
              </h5>
              <p className={Classes.products__regular}>Brain Craft Ltd</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
