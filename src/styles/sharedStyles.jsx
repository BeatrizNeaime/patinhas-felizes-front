import styled from "styled-components";
import { colors } from "./constants";

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw !important;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: calc(100vw - 240px);
  padding: 40px;
  box-sizing: border-box;
  min-height: 100vh;
  transition: all 0.5s ease;
  overflow-x: hidden;

  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => (props.width ? props.width : "100%")};
  gap: ${(props) => (props.gap ? props.gap : "1rem")};
`;

const Column = styled(Row)`
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => (props.width ? props.width : "100%")};
  flex-direction: column;
  gap: 1rem;
`;

const PageTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  padding: 0;
  color: ${colors.primary};
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 99999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;



const PageHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
  padding: 0;
  color: #aaaaaa;
  text-align: center;
`;

const Divider = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aaaaaa;
  margin: 15px 0px;
`;

const ButtonSmall = styled.button`
  background-color: ${(props) => (props.color ? props.color : colors.primary)};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  display: flex;
  flex-direction: row;
  gap: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.green};
  }
`;

export {
  Page,
  Content,
  Row,
  PageTitle,
  Column,
  Overlay,
  PageHeader,
  Subtitle,
  Divider,
  ButtonSmall,
  Form
};
