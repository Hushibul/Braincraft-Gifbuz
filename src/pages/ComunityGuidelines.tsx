import { Container } from "react-bootstrap";
import Hero from "../components/hero/Hero";

const ComunityGuidelines = () => {
  return (
    <Container>
      <Hero link="Community Guidelines" breadcrumb={true} />
      <div>
        <h2 className="title">GIFBUZ Community Guidelines</h2>
        <p className="text ms-1">
          The mission of GIFBUZ is to offer a fun and secure platform for
          SEARCH, CREATE,UPLOAD, and SHARE the best GIFs on the internet. We've
          established some rules that you must abide by. We appreciate your
          assistance in making GIFBUZ enjoyable for everyone.
        </p>
      </div>
      <div>
        <h3 className="subtitle">GIFBUZ RULE:</h3>
        <ul className="privacy-policy">
          <li className="text heading">
            Keep GIFS Friendly: <br />
            <p className="text me-auto">
              GIFS are meant to bring a little humor into our online lives, so
              keep them that way. Don’t Create or Upload any gif to harm or
              insult other.
            </p>
          </li>

          <li className="text heading">
            Respect Privacy: <br />
            <p className="text">
              Respect Privacy: It's necessary to respect and uphold the consent
              and privacy of the people you represent in your GIFS. Before using
              any video or photos to create a GIF, make sure you have the proper
              permission from the owners.
            </p>
          </li>

          <li className="text heading">
            Credit the Community: <br />
            <p className="text">
              People put a lot of effort into creating their GIFs, and we want
              to make sure they are compensated fairly. Use Gifbuz's share
              features to ensure that the original creator is given credit for
              their work to help us sustain the community.
            </p>
          </li>

          <li className="text heading">
            Sharing <br />
            <p className="text">
              Sharing is wonderful. For proper sharing on your blog or social
              network accounts, please utilize Gifbuz's embed options, which are
              available on each GIF's individual page. You should ensure that
              your usage of GIFs that you see on Gifbuz or anywhere else on the
              internet conforms with any local laws before using them.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="subtitle">
          GIFS that are prohibited on Gifbuz include:
        </h3>
        <ol className="privacy-policy">
          <li className="text heading">
            Pornography and Explicit Nudity: <br />
            <p className="text">
              You are not allowed to post any content that features sex acts or
              other explicit sexual content. To be clear, your GIFs cannot
              contain any explicit nudity.
            </p>
          </li>

          <li className="text heading">
            Violence: <br />
            <p className="text">
              You are not allowed to post any content that features sex acts or
              other explicit sexual content. To be clear, your GIFs cannot
              contain any explicit nudity.
            </p>
          </li>

          <li className="text heading">
            Self-Harm: <br />
            <p className="text">
              Anything that encourages or promotes self-harm,suicide is
              prohibited from create, upload, or sharing.
            </p>
          </li>

          <li className="text heading">
            Animal Cruelty: <br />
            <p className="text">
              No GIFS of animals being abused or hurt are allowed.
            </p>
          </li>

          <li className="text heading">
            Bullying, Stalking, Harassment, or Threats: <br />
            <p className="text">
              You are not permitted to make, publish, or share GIFS with the
              intention of bullying, stalking, harassing, or threatening another
              person.
            </p>
          </li>

          <li className="text heading">
            Hate Speech: <br />
            <p className="text">
              Since GIFs are intended to be shared by all people, we don't allow
              those that criticize, vilify, or defame any other group or
              individual on the basis of their race, religion, gender, or sexual
              orientation.
            </p>
          </li>

          <li className="text heading">
            Unlawful Conduct: <br />
            <p className="text">
              On Gifbuz, refrain from making, sharing, or uploading GIFs
              depicting illegal activity. Gifbuz cannot be used for criminal
              conduct or to encourage it.
            </p>
          </li>

          <li className="text heading">
            DMCA: <br />{" "}
            <p className="text">
              {" "}
              Please abide by the DMCA rules if your copyrighted content was
              unlawfully utilized to make a GIF on Gifbuz.
            </p>
          </li>
        </ol>
      </div>
      <div>
        <p className="text">
          If you break any of these guidelines, your material may be deleted,
          your account may be suspended, or you may lose access to Gifbuz
          altogether. Please abide by these guidelines and aid us in maintaining
          Gifbuz as a wonderful space for our entire community because we don't
          like doing that.
        </p>
      </div>
    </Container>
  );
};

export default ComunityGuidelines;
