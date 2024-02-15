import styled from "styled-components";
import { colors } from "../../../styles/constants";

const AuthOverlay = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 100;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AuthContainer = styled(AuthOverlay)`
  background-color: rgba(236, 227, 206, 0.5);
`
const AuthCard = styled.div`
  background-color: white;
  width: 500px;
  border-radius: 10px;
  -webkit-box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.47);
  box-shadow: 2px 4px 10px 1px rgba(201, 201, 201, 0.47);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const AuthTitle = styled.h1`
font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  margin: 0;
  padding: 0;
  color: ${colors.primary};
  text-align: center;
`

export {
  AuthOverlay,
  AuthCard,
  AuthTitle,
  AuthContainer
}