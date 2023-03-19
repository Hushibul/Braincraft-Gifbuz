import { Container } from "react-bootstrap";
import Create from "../components/create-gif/Create";
import CreateGifGroup from "../components/creategifgroup/CreateGifUpload";
import CreateOwnGif from "../components/createowngif/CreateOwnGif";
import Gallaxy from "../components/gallaxy/Gallaxy";
import HowToVideo from "../components/howtovideo/HowToVideo";

const CreateGif = () => {
  return (
    <Container className="createGif" fluid>
      <Create />
      <HowToVideo />
      <CreateOwnGif />
      <CreateGifGroup />
      <Gallaxy />
    </Container>
  );
};

export default CreateGif;
