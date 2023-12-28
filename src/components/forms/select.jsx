import React from "react";
import {
  FormRow,
  StyledLabel,
  StyledLabelWrapper,
  StyledSelect
} from "./components/style";

const Select = React.forwardRef(({ label, errname, options, error, ...props }, ref) => {
  return (
    <FormRow>
      <StyledLabelWrapper>
        <StyledLabel>{label}</StyledLabel>
      </StyledLabelWrapper>
      <StyledSelect {...props} ref={ref}>
        {options.map((option) => (
          <option value={option.value} key={option.value} >{option.label}</option>
        ))}
      </StyledSelect>
    
    </FormRow>
  );
});

export default Select;
