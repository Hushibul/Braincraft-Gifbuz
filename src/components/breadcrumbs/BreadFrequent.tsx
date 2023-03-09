import Classes from "./BreadCrumb.module.scss";
import Question from "../../assets/images/question.png";

const BreadFrequent = () => {
  return (
    <div
      className={`${Classes.breadfrequent} d-flex justify-content-center align-items-center`}
    >
      <h2 className={`${Classes.breadfrequent__heading}`}>
        Frequently Asked Question
      </h2>
      <img src={Question} alt="Question" />
    </div>
  );
};

export default BreadFrequent;
