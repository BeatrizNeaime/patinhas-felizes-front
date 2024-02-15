import React from "react";
import {
  FormRow,
  StyledInput,
  StyledLabel,
  StyledLabelWrapper
} from "./components/style";

const Input = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <FormRow>
      <StyledLabelWrapper>
        <StyledLabel>{label}</StyledLabel>
      </StyledLabelWrapper>
      <StyledInput {...props} ref={ref} />
    </FormRow>
  );
});

export default Input;
