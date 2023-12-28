import styled, { keyframes } from "styled-components";
import { colors } from "../../../styles/constants";

const loadingAnimation = keyframes`
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
`;

const LoadingContainer = styled.div`
  animation: ${loadingAnimation} 1500ms infinite;
  transform: rotate(45deg);
  color: ${colors.beige};
  display: flex;
  flex-direction: column;
`;

export {  LoadingContainer };
