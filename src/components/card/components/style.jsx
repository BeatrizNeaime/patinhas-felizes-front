import styled from "styled-components";
import { colors } from "../../../styles/constants";

const CardContainer = styled.div`
  background-color: ${(p) => p.color || "white"};
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  padding: 10px;
  border-radius: 5px;
  flex: 1;
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  &:hover {
    background-color: ${colors.beige};
  }

`;

export { CardContainer };
