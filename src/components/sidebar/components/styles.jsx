import styled from "styled-components";
import { colors } from "../../../styles/constants";

const SidebarWrapper = styled.div`
  height: 100vh;
  width: 240px;
  background-color: ${colors.beige};
`;

const SidebarLinkContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? colors.lightGreen : "none")};
  color: ${(props) => (props.active ? "white" : "black")};

  &:hover {
    background-color: ${colors.lightGreen};
    color: white;
  }
`;

const SidebarLink = styled.p`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  padding: 0;
  color: ${colors.primary};
  margin-left: 10px;
  margin-right: 10px;
  color: ${(props) => (props.active ? "white" : "black")};

  &:hover {
    color: white;
  }
`;

export { SidebarWrapper, SidebarLinkContainer, SidebarLink };
