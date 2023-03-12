import { Row } from "react-bootstrap";

import { TeamMembers } from "../../assets/constants/data";

const Team = () => {
  return (
    <Row>
      <div className="col-lg-6 col-md-12 text-center text-md-start">
        <h5 className="text-light fw-bold">Team Members</h5>
        <h2 className="text-light fw-bold aboutUs__title py-2">
          Meet our Expert team Members
        </h2>
        <p className="text-light aboutUs__text mb-lg-0">
          The first version of the app contained an “outfit tool” (or so we
          thought) that allowed people to choose a few photos, remove.
        </p>
      </div>

      {TeamMembers.map((member, index) => (
        <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-6 mt-2 px-1">
          <img className="img-fluid" src={member} alt="member" />
        </div>
      ))}
    </Row>
  );
};

export default Team;
