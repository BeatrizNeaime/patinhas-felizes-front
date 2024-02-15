import React from "react";
import {
  FormRow,
  StyledLabel,
  StyledLabelWrapper,
  StyledTextArea,
} from "./components/style";

const TextArea = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <FormRow>
      <StyledLabelWrapper>
        <StyledLabel>{label}</StyledLabel>
      </StyledLabelWrapper>
      <StyledTextArea {...props} ref={ref} cols={"10"} />
    </FormRow>
  );
});

export default TextArea;
