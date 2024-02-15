import React from "react";
import {
  StyledCheckbox,
  StyledLabel,
} from "./components/style";
import { Row } from "../../styles/sharedStyles";

const Checkbox = React.forwardRef(({ label, ...props }, ref) => {
  return (
    <Row width={"auto"} gap={"5px"}>
      <StyledCheckbox {...props} ref={ref} type="checkbox" />
      <StyledLabel>{label}</StyledLabel>
    </Row>
  );
});

export default Checkbox;
