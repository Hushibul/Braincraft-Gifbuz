import BreadCrumb from "../breadcrumbs/BreadCrumb";
import Classes from "./Hero.module.scss";
import Question from "../../assets/images/question.png";

const Hero = ({ link, breadcrumb = false }: any) => {
  return (
    <div className={`${Classes.hero} mt-2 mt-lg-3`}>
      <h1
        className={
          breadcrumb
            ? `${Classes.hero__heading} text-center pt-2 pt-lg-3`
            : `${Classes.hero__heading} text-center pt-2 pt-lg-3 fw-light`
        }
      >
        {link}
      </h1>

      {breadcrumb ? <BreadCrumb /> : <img src={Question} alt="Question" />}
    </div>
  );
};

export default Hero;
