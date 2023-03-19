import { Container } from "react-bootstrap";
import CreateGifGroup from "../components/creategifgroup/CreateGifUpload";
import CreateOwnGif from "../components/createowngif/CreateOwnGif";
import Gallaxy from "../components/gallaxy/Gallaxy";
import HowToVideo from "../components/howtovideo/HowToVideo";
import Upload from "../components/upload-gif/Upload";

const UploadGif = () => {
  return (
    <Container className="createGif" fluid>
      <Upload />
      <HowToVideo />
      <CreateOwnGif />
      <CreateGifGroup />
      <Gallaxy />
    </Container>
  );
};

export default UploadGif;
