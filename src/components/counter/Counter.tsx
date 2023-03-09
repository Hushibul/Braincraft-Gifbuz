import { Row, Col } from "react-bootstrap";
import Classes from "./Counter.module.scss";

const Counter = () => {
  return (
    <div className={Classes.counterWrap}>
      <Row className="align-items-end h-100">
        <Col lg={{ span: 10, offset: 1 }}>
          <Row className="align-items-end h-100 justify-content-center text-light">
            <Col sm={6} md={4}>
              <div className={Classes.couterItem}>
                <h3>1 Million+</h3>
                <p>Monthly active users</p>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className={Classes.couterItem}>
                <h3>150,000+</h3>
                <p>Projects Every day</p>
              </div>
            </Col>
            <Col sm={6} md={4}>
              <div className={Classes.couterItem}>
                <h3>120+</h3>
                <p>Countries using over</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Counter;
