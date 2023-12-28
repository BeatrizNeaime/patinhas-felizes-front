import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Column, Divider, Overlay } from "../../styles/sharedStyles";
import { ModalCard, ModalClose, ModalSubtitle, ModalTitle } from "./components/style";
import { icons } from "../../styles/icons";

const Modal = ({ title, subtitle, children, setOpen, open, width }) => {
  return (
    <Overlay
      style={{ display: open ? "flex" : "none" }}
    >
      <ModalCard width={width} >
        <ModalClose onClick={() => setOpen(false)}>
          <FontAwesomeIcon icon={icons.close}/>
        </ModalClose>
        <Column
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-start",
            gap: 0,
          }}
        >
          <ModalTitle>{title}</ModalTitle>
          <ModalSubtitle>{subtitle}</ModalSubtitle>
          <Divider />
        </Column>
        {children}
      </ModalCard>
    </Overlay>
  );
};

export default Modal;
