import styled from "styled-components";
import { colors } from "../../../styles/constants";

const ModalCard = styled.div`
  width: ${(props) => (props.width ? props.width : "50vw")};
  height: ${(props) => (props.height ? props.height : "auto")};
  background-color: white;
  border-radius: 1.5rem;
  padding: 20px;
  box-sizing: border-box;
  z-index: 99999999999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

const ModalTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: ${colors.green};
  text-align: left;
`;

const ModalSubtitle = styled(ModalTitle)`
  font-size: 14px;
  color: #aaaaaa;
  font-weight: 500;
  text-align: left;
  font-family: "Roboto", sans-serif;
`;

const ModalClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`;

export { ModalCard, ModalTitle, ModalSubtitle, ModalClose };
