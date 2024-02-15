import styled from "styled-components";
import { colors } from "../../../styles/constants";

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.5s ease;
  position: relative;
  outline: none;

  &:focus {
    border: 1px solid ${colors.green};
    outline: ${colors.lightGreen} auto 5px;
  }

  &:disabled{
    cursor: not-allowed;
  }

`;

const StyledLabelWrapper = styled.div`
  position: relative;
  background-color: white;
  width: auto;
  height: 16px;
  z-index: 999;
  margin-left: 1rem;
  transform: translateY(8px);
  padding: 0 2px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.primary};
  display: block;
  text-align: left;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 40px;
  padding: 0 8px;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  box-sizing: border-box;
  transition: all 0.5s ease;
  position: relative;

  &:focus {
    border: 1px solid ${colors.green};
  }
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid ${colors.primary};
  border-radius: 4px;
`;

const StyledCheckbox = styled.input`
  appearance: none;

  border-radius: 3px;
  border: 1px solid ${colors.primary};
  height: 14px;
  width: 14px;

  &:hover{
    cursor: pointer;
    border-color: ${colors.green};
  }

  &::before{
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background-color: ${colors.primary};
    transition: all 100ms ease;
    transform: scale(0);
  }

  &:checked::before{
    transform: scale(1);
  }

`

export {
  StyledInput,
  StyledLabel,
  FormRow,
  StyledLabelWrapper,
  StyledSelect,
  StyledTextArea,
  StyledCheckbox,
};
