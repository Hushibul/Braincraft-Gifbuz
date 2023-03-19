import { Container } from "react-bootstrap";
import Hero from "../components/hero/Hero";

const CopyrightPolicy = () => {
  return (
    <Container>
      <Hero link="Copyright Policy" breadcrumb={true} />
      <div>
        <h2 className="title">Copyright Policy</h2>
        <p className="text">
          In compliance with the Digital Millennium Copyright Act, Gifbuz has
          established the following general policy on copyright violations: At
          the conclusion of this policy, you'll find a list with the address of
          the Designated Agent to Receive Notification of Claimed Infringement
          ("Designated Agent").
        </p>
      </div>
      <div>
        <h3 className="subtitle">Way of Reporting Copyright Violations:</h3>
        <p className="text">
          If you believe that material or content residing on or accessible
          through Company's websites or services infringes a copyright, please
          send a notice of copyright infringement containing the following
          information to the Designated Agent listed below:
        </p>
        <ol>
          <li className="text my-sm-2 my-md-3">
            A handwritten or electronic signature of a representative authorized
            to speak on behalf of the allegedly infringed copyright owner;
          </li>
          <li className="text my-sm-2 my-md-3">
            Detection of the allegedly infringing work or materials;
          </li>
          <li className="text my-sm-2 my-md-3">
            Identification of the allegedly illegal material, including
            information about its whereabouts and the copyright owner's request
            for its removal, with enough specificity to enable the company to
            locate and confirm its validity;
          </li>
          <li className="text my-sm-2 my-md-3">
            Contact details for the notifier, such as their address, phone
            number, and, if any, email address;
          </li>
          <li className="text my-sm-2 my-md-3">
            A statement that the material isn't authorized by the copyright
            owner, its agent, or the law, according to the notifier's good faith
            view;
          </li>
          <li className="text my-sm-2 my-md-3">
            An affirmation made under oath that the details given are true and
            that the party submitting the notification has the right to file the
            complaint on the owner's behalf.
          </li>
        </ol>
        <p className="text">
          If we receive a takedown request in accordance with the information
          above, we will remove the content mentioned in the request and, if we
          have the contact information for the user who uploaded the allegedly
          illegal content, try to reach them. Any such user will be given the
          chance to provide a "counter-notice" in the manner described below.If
          a particular user has frequently violated someone else's intellectual
          property rights, we will, as necessary, disable any accounts that
          person may have with us.
        </p>
      </div>
    </Container>
  );
};

export default CopyrightPolicy;
