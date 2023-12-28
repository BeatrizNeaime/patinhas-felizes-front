import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Overlay } from "../../styles/sharedStyles";
import { icons } from "../../styles/icons";
import { LoadingContainer } from "./components/style";

const Loading = () => {
  return (
    <Overlay>
      <LoadingContainer>
        <FontAwesomeIcon
          icon={icons.paw}
          size="4x"
        />
      </LoadingContainer>
    </Overlay>
  );
};

export default Loading;
