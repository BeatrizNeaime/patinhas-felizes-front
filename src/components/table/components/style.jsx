import styled from "styled-components";
import { colors } from "../../../styles/constants";

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lightGreen};
  color: white;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
`;

export { StyledPagination };
